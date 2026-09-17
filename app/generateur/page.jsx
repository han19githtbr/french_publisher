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
  const [ptCaption, setPtCaption] = useState("");
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
    setCaption(`${found.caption || found.detail}${found.example ? `\n\n« ${found.example} »` : ""}`);
    
    // Set Portuguese text if available
    const ptText = found.pt_caption || found.pt_detail;
    setPtCaption(ptText ? `${ptText}` : "");
    
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
      caption: caption.split("\n")[0] || item.caption || item.detail,
      pt_caption: ptCaption,
      chapitre: cat?.chapitre || "",
    });
  }, [item, platform, caption, ptCaption, cat]);

  async function publish() {
    if (!item) return;
    setSaving(true);
    setError("");
    try {
      const imageUrl = `/api/og?${ogParams.toString()}`;
      
      // Build final post text (French + Portuguese + Hashtags)
      let postBodyText = caption;
      if (ptCaption) postBodyText += `\n\n🇧🇷 ${ptCaption}`;
      
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: item.id,
          contentType: item.type,
          title: item.title,
          caption: postBodyText,
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
        Choisissez un contenu du manuel, ajustez la légende (Français et Portugais), et publiez-le dans le feed.
      </p>

      <div className="grid lg:grid-cols-[320px,1fr,340px] gap-6 mt-7 items-start">
        <ContentPicker onSelect={applyItem} />

        {!item ? (
          <div className="rounded-xl2 border-2 border-dashed border-encre-100 py-24 flex flex-col items-center justify-center text-encre-300">
            <ImageIcon size={28} />
            <p className="mt-3 text-sm">Sélectionnez un contenu à gauche pour commencer.</p>
          </div>
        ) : (
          <div className="rounded-xl2 bg-white border border-encre-100 p-5 sm:p-6 shadow-sm">
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
                className="ml-auto text-encre-300 hover:text-encre-600 transition-colors"
                aria-label="Changer de contenu"
              >
                <X size={16} />
              </button>
            </div>

            <h2 className="font-display text-2xl mb-4 text-encre-900">{item.title}</h2>

            <label className="text-[11px] font-bold text-encre-400 uppercase tracking-widest">
              Plateforme
            </label>
            <div className="flex flex-wrap gap-2 mt-2 mb-6">
              {PLATFORMS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setPlatform(p.key)}
                  className={`inline-flex items-center gap-1.5 text-[13px] font-medium px-4 py-2.5 rounded-xl border transition-all ${
                    platform === p.key
                      ? "bg-encre-800 border-encre-800 text-parchemin shadow-md"
                      : "bg-white border-encre-100 text-encre-500 hover:bg-encre-50"
                  }`}
                >
                  <p.icon size={16} />
                  {p.label}
                </button>
              ))}
            </div>

            <label className="text-[11px] font-bold text-encre-400 uppercase tracking-widest flex items-center justify-between">
              <span>Légende (Français)</span>
              <span className="text-encre-300 font-medium normal-case">Texte principal</span>
            </label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={4}
              className="w-full mt-2 mb-5 rounded-xl border border-encre-100 p-3.5 text-[14px] leading-relaxed outline-none focus:border-moutarde focus:ring-4 focus:ring-moutarde/10 transition-all bg-encre-50/30"
            />

            <label className="text-[11px] font-bold text-encre-400 uppercase tracking-widest flex items-center justify-between">
              <span>Légende (Português) 🇧🇷</span>
              <span className="text-encre-300 font-medium normal-case">Traduction</span>
            </label>
            <textarea
              value={ptCaption}
              onChange={(e) => setPtCaption(e.target.value)}
              rows={3}
              className="w-full mt-2 rounded-xl border border-encre-100 p-3.5 text-[14px] leading-relaxed outline-none focus:border-bordeaux focus:ring-4 focus:ring-bordeaux/10 transition-all bg-encre-50/30"
              placeholder="Ajoutez une traduction en portugais..."
            />

            <label className="text-[11px] font-bold text-encre-400 uppercase tracking-widest mt-6 block">
              Hashtags
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {hashtags.map((h) => (
                <span key={h} className="text-[12.5px] font-medium text-bordeaux bg-bordeaux/10 px-2.5 py-1 rounded-md">
                  {h}
                </span>
              ))}
            </div>

            <button
              onClick={publish}
              disabled={saving}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-moutarde text-encre-900 font-bold text-sm py-3.5 rounded-xl hover:bg-moutarde-light hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:hover:translate-y-0 disabled:shadow-none"
            >
              {saving ? <Loader2 size={18} className="animate-spin" /> : saved ? <Check size={18} /> : null}
              {saved ? "Publié dans le feed" : saving ? "Publication en cours..." : "Publier le post"}
            </button>
            
            {saved && (
              <button
                onClick={() => router.push("/feed")}
                className="mt-3 w-full text-sm font-semibold text-bordeaux hover:text-bordeaux-dark hover:underline transition-colors text-center"
              >
                Voir dans le feed communautaire →
              </button>
            )}
            
            {error && <p className="mt-4 text-sm text-center text-bordeaux bg-bordeaux/10 p-3 rounded-lg">{error}</p>}
          </div>
        )}

        {/* Live preview */}
        <div className="lg:sticky lg:top-8">
          <div className="flex items-center gap-2 justify-center mb-3">
            <div className="h-px bg-encre-100 flex-1" />
            <div className="text-[10px] font-bold uppercase tracking-widest text-encre-400">
              Aperçu en direct
            </div>
            <div className="h-px bg-encre-100 flex-1" />
          </div>
          
          {item && ogParams ? (
            <div
              className={`mx-auto rounded-2xl overflow-hidden border border-encre-100 shadow-carte bg-white ${
                PLATFORMS.find((p) => p.key === platform).maxW
              } transition-all duration-300`}
            >
              <div className="p-2 border-b border-encre-50 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-encre-100 flex items-center justify-center text-[10px]">🇫🇷</div>
                <div className="text-[11px] font-bold">francais.social</div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={ogParams.toString()}
                src={`/api/og?${ogParams.toString()}`}
                alt="Aperçu du post"
                className={`w-full object-cover ${PLATFORMS.find((p) => p.key === platform).ratio}`}
              />
            </div>
          ) : (
            <div className="mx-auto max-w-[320px] aspect-square rounded-2xl bg-encre-50 border border-dashed border-encre-200 flex items-center justify-center">
              <span className="text-encre-300 text-sm">Aucun aperçu</span>
            </div>
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
