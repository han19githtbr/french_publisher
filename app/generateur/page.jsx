"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Instagram, Facebook, Image as ImageIcon, Check, Loader2, X } from "lucide-react";
import ContentPicker from "../../components/ContentPicker";
import CategoryIcon from "../../components/CategoryIcon";
import { CATEGORIES } from "../../data/content";
import { buildHashtags } from "../../lib/hashtags";

const PLATFORMS = [
  { key: "instagram-feed", label: "Instagram · Feed", icon: Instagram, ratio: "aspect-square", maxW: "max-w-[320px]" },
  { key: "instagram-story", label: "Instagram · Story", icon: Instagram, ratio: "aspect-[9/16]", maxW: "max-w-[220px]" },
  { key: "facebook-feed", label: "Facebook · Feed", icon: Facebook, ratio: "aspect-square", maxW: "max-w-[320px]" },
];

function GeneratorInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [item, setItem] = useState(null);
  const [platform, setPlatform] = useState("instagram-feed");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) return;
    fetch(`/api/content?type=all`)
      .then((r) => r.json())
      .then((data) => {
        const found = (data.items || []).find((i) => i.id === id);
        if (found) applyItem(found);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  function applyItem(found) {
    setItem(found);
    setCaption(`${found.caption}${found.example ? `\n\n« ${found.example} »` : ""}`);
    setHashtags(buildHashtags(found));
    setSaved(false);
  }

  const cat = item ? CATEGORIES[item.type] : null;

  const ogParams = useMemo(() => {
    if (!item) return null;
    return new URLSearchParams({
      type: item.type,
      platform,
      title: item.title,
      caption: caption.split("\n")[0] || item.caption,
      chapitre: cat?.chapitre || "",
    });
  }, [item, platform, caption, cat]);

  async function publish() {
    if (!item) return;
    setSaving(true);
    setError("");
    try {
      const imageUrl = `/api/og?${ogParams.toString()}`;
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: item.id,
          contentType: item.type,
          title: item.title,
          caption,
          hashtags,
          platform,
          imageUrl,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur inconnue");
      }
      setSaved(true);
    } catch (e) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10 max-w-6xl mx-auto">
      <h1 className="font-display text-2xl sm:text-3xl">Générateur de post</h1>
      <p className="text-encre-400 text-sm mt-1">
        Choisissez un contenu du manuel, ajustez la légende, et publiez-le dans le feed.
      </p>

      <div className="grid lg:grid-cols-[320px,1fr,340px] gap-6 mt-7 items-start">
        <ContentPicker onSelect={applyItem} />

        {!item ? (
          <div className="rounded-xl2 border-2 border-dashed border-encre-100 py-24 flex flex-col items-center justify-center text-encre-300">
            <ImageIcon size={28} />
            <p className="mt-3 text-sm">Sélectionnez un contenu à gauche pour commencer.</p>
          </div>
        ) : (
          <div className="rounded-xl2 bg-white border border-encre-100 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
                style={{ backgroundColor: `${cat.color}1A`, color: cat.color }}
              >
                <CategoryIcon name={cat.icon} size={12} />
                {cat.label}
              </span>
              <button
                onClick={() => setItem(null)}
                className="ml-auto text-encre-300 hover:text-encre-600"
                aria-label="Changer de contenu"
              >
                <X size={16} />
              </button>
            </div>

            <h2 className="font-display text-xl mb-4">{item.title}</h2>

            <label className="text-[12px] font-semibold text-encre-400 uppercase tracking-wide">
              Plateforme
            </label>
            <div className="flex flex-wrap gap-2 mt-2 mb-5">
              {PLATFORMS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setPlatform(p.key)}
                  className={`inline-flex items-center gap-1.5 text-[13px] font-medium px-3 py-2 rounded-lg border ${
                    platform === p.key
                      ? "bg-encre-800 border-encre-800 text-parchemin"
                      : "border-encre-100 text-encre-500"
                  }`}
                >
                  <p.icon size={14} />
                  {p.label}
                </button>
              ))}
            </div>

            <label className="text-[12px] font-semibold text-encre-400 uppercase tracking-wide">
              Légende
            </label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={6}
              className="w-full mt-2 rounded-lg border border-encre-100 p-3 text-[13.5px] leading-relaxed outline-none focus:border-moutarde focus:ring-2 focus:ring-moutarde/20"
            />

            <label className="text-[12px] font-semibold text-encre-400 uppercase tracking-wide mt-4 block">
              Hashtags
            </label>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {hashtags.map((h) => (
                <span key={h} className="text-[12px] text-bordeaux bg-bordeaux/10 px-2 py-1 rounded-md">
                  {h}
                </span>
              ))}
            </div>

            <button
              onClick={publish}
              disabled={saving}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-moutarde text-encre-900 font-semibold text-sm py-3 rounded-xl hover:bg-moutarde-light transition-colors disabled:opacity-60"
            >
              {saving ? <Loader2 size={16} className="animate-spin" /> : saved ? <Check size={16} /> : null}
              {saved ? "Publié dans le feed" : saving ? "Publication..." : "Publier le post"}
            </button>
            {saved && (
              <button
                onClick={() => router.push("/feed")}
                className="mt-2 w-full text-sm font-medium text-bordeaux hover:underline"
              >
                Voir dans le feed →
              </button>
            )}
            {error && <p className="mt-2 text-sm text-bordeaux">{error}</p>}
          </div>
        )}

        {/* Live preview */}
        <div className="lg:sticky lg:top-8">
          <div className="text-[11px] uppercase tracking-wide text-encre-400 mb-2 text-center">
            Aperçu en direct
          </div>
          {item && ogParams ? (
            <div
              className={`mx-auto rounded-2xl overflow-hidden border-4 border-encre-800 shadow-carte ${
                PLATFORMS.find((p) => p.key === platform).maxW
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={ogParams.toString()}
                src={`/api/og?${ogParams.toString()}`}
                alt="Aperçu du post"
                className={`w-full object-cover ${PLATFORMS.find((p) => p.key === platform).ratio}`}
              />
            </div>
          ) : (
            <div className="mx-auto max-w-[320px] aspect-square rounded-2xl bg-encre-100/60" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function GeneratorPage() {
  return (
    <Suspense fallback={null}>
      <GeneratorInner />
    </Suspense>
  );
}
