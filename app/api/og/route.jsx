import { ImageResponse } from "@vercel/og";
import { CATEGORIES } from "../../../data/content";

export const runtime = "edge";

const SIZES = {
  "instagram-feed": { width: 1080, height: 1080 },
  "instagram-story": { width: 1080, height: 1920 },
  "facebook-feed": { width: 1200, height: 1200 },
};

function truncate(str, n) {
  if (!str) return "";
  return str.length > n ? str.slice(0, n - 1).trimEnd() + "…" : str;
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") || "anecdote";
  const platform = searchParams.get("platform") || "instagram-feed";
  const title = searchParams.get("title") || "Manuel Complet de Français";
  const caption = searchParams.get("caption") || "";
  const pt_caption = searchParams.get("pt_caption") || "";
  const chapitre = searchParams.get("chapitre") || "";

  const cat = CATEGORIES[type] || CATEGORIES.anecdote;
  const { width, height } = SIZES[platform] || SIZES["instagram-feed"];
  const isStory = platform === "instagram-story";

  const accent = cat.color;
  const titleSize = isStory ? 76 : width < 1150 ? 64 : 58;
  const captionSize = isStory ? 40 : 34;
  const ptCaptionSize = isStory ? 34 : 28;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#12192E",
          padding: isStory ? "96px 80px" : "72px 76px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        {cat.bgImage && (
          <img
            src={cat.bgImage}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.25,
            }}
          />
        )}

        {/* Gradient Overlay for Readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(to bottom, rgba(18,25,46,0.3) 0%, rgba(18,25,46,0.9) 100%)",
          }}
        />

        {/* decorative corner arc */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: `2px solid ${accent}99`,
            display: "flex",
          }}
        />

        {/* top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: 999,
              backgroundColor: `${accent}E6`,
              color: "#FFF",
              fontSize: 28,
              letterSpacing: 0.5,
              fontWeight: 600,
            }}
          >
            {cat.short}
          </div>
          <div style={{ display: "flex", color: "#E4E7EF", fontSize: 26, fontWeight: 500 }}>
            {chapitre ? `Chap. ${chapitre}` : ""}
          </div>
        </div>

        {/* main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28, position: "relative", zIndex: 10, marginTop: "auto", marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              color: "#FFF",
              fontSize: titleSize,
              lineHeight: 1.12,
              fontWeight: 800,
              maxWidth: "100%",
              textShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", width: 84, height: 6, backgroundColor: accent, borderRadius: 4 }} />
          
          <div
            style={{
              display: "flex",
              color: "#F4F5F8",
              fontSize: captionSize,
              lineHeight: 1.42,
              fontWeight: 500,
              maxWidth: isStory ? "94%" : "90%",
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            {truncate(caption, isStory ? 220 : 160)}
          </div>

          {/* Portuguese Translation */}
          {pt_caption && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 16,
                padding: "24px 32px",
                backgroundColor: "rgba(255,255,255,0.08)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ display: "flex", color: accent, fontSize: 22, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>
                🇧🇷 Português
              </div>
              <div
                style={{
                  display: "flex",
                  color: "#D7DCEC",
                  fontSize: ptCaptionSize,
                  lineHeight: 1.4,
                  fontStyle: "italic",
                }}
              >
                {truncate(pt_caption, isStory ? 200 : 150)}
              </div>
            </div>
          )}
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#B9C1D6",
            fontSize: 24,
            fontWeight: 500,
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img 
              src={new URL('/logo.png', req.url).toString()} 
              style={{ width: 80, height: 80, objectFit: "contain", borderRadius: 8 }} 
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", color: accent, fontWeight: 700 }}>
            {/* Instagram Icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 10 }}>
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            @frances_com_tres_nativos
          </div>
        </div>
      </div>
    ),
    { width, height }
  );
}
