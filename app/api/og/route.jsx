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
  const chapitre = searchParams.get("chapitre") || "";

  const cat = CATEGORIES[type] || CATEGORIES.anecdote;
  const { width, height } = SIZES[platform] || SIZES["instagram-feed"];
  const isStory = platform === "instagram-story";

  const accent = cat.color;
  const titleSize = isStory ? 76 : width < 1150 ? 64 : 58;
  const captionSize = isStory ? 40 : 34;

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
          backgroundImage:
            `radial-gradient(circle at 85% 8%, ${accent}55 0%, rgba(18,25,46,0) 42%), radial-gradient(circle at 6% 96%, ${accent}33 0%, rgba(18,25,46,0) 45%)`,
          padding: isStory ? "96px 80px" : "72px 76px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* decorative corner arc */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: `2px solid ${accent}66`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -140,
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: `2px solid ${accent}44`,
            display: "flex",
          }}
        />

        {/* top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: 999,
              backgroundColor: `${accent}2A`,
              border: `1.5px solid ${accent}`,
              color: "#F6F1E7",
              fontSize: 28,
              letterSpacing: 0.5,
            }}
          >
            {cat.short}
          </div>
          <div style={{ display: "flex", color: "#8E9BBC", fontSize: 26 }}>
            {chapitre ? `Chap. ${chapitre}` : ""}
          </div>
        </div>

        {/* main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              color: "#F6F1E7",
              fontSize: titleSize,
              lineHeight: 1.12,
              fontWeight: 700,
              maxWidth: "100%",
            }}
          >
            {truncate(title, isStory ? 92 : 78)}
          </div>
          <div style={{ display: "flex", width: 84, height: 6, backgroundColor: accent, borderRadius: 4 }} />
          <div
            style={{
              display: "flex",
              color: "#D7DCEC",
              fontSize: captionSize,
              lineHeight: 1.42,
              maxWidth: isStory ? "94%" : "88%",
            }}
          >
            {truncate(caption, isStory ? 260 : 190)}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#8E9BBC",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex" }}>Manuel Complet de Français</div>
          <div style={{ display: "flex", color: accent }}>@francais.social</div>
        </div>
      </div>
    ),
    { width, height }
  );
}
