"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";
import ContentCard from "../../components/ContentCard";
import { CATEGORIES } from "../../data/content";

function LibraryInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialType = searchParams.get("type") || "all";

  const [type, setType] = useState(initialType);
  const [q, setQ] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({ type });
    if (q) params.set("q", q);
    fetch(`/api/content?${params.toString()}`)
      .then((r) => r.json())
      .then((data) => setItems(data.items || []))
      .finally(() => setLoading(false));
  }, [type, q]);

  const tabs = useMemo(
    () => [{ key: "all", label: "Tout", color: "#12192E" }, ...Object.entries(CATEGORIES).map(([key, c]) => ({ key, label: c.short, color: c.color }))],
    []
  );

  function selectTab(key) {
    setType(key);
    const params = new URLSearchParams(window.location.search);
    if (key === "all") params.delete("type");
    else params.set("type", key);
    router.replace(`/bibliotheque?${params.toString()}`);
  }

  return (
    <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl">Bibliothèque du manuel</h1>
          <p className="text-encre-400 text-sm mt-1">
            {items.length} contenu{items.length > 1 ? "s" : ""} prêt{items.length > 1 ? "s" : ""} à devenir un post.
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-encre-300" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un mot, une règle..."
            className="w-full rounded-xl border border-encre-100 bg-white pl-9 pr-3 py-2.5 text-sm outline-none focus:border-moutarde focus:ring-2 focus:ring-moutarde/20"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {tabs.map((t) => {
          const active = type === t.key;
          return (
            <button
              key={t.key}
              onClick={() => selectTab(t.key)}
              className="text-[13px] font-semibold px-3.5 py-2 rounded-full border transition-colors"
              style={
                active
                  ? { backgroundColor: t.color, borderColor: t.color, color: "#F6F1E7" }
                  : { borderColor: "#E4E7EF", color: "#334066" }
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-44 rounded-xl2 bg-encre-100/60 animate-pulse" />
          ))}
        {!loading && items.length === 0 && (
          <div className="col-span-full text-center py-16 text-encre-400">
            Aucun contenu ne correspond à cette recherche.
          </div>
        )}
        {!loading &&
          items.map((item) => (
            <ContentCard key={item.id} item={item} cat={CATEGORIES[item.type]} />
          ))}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  return (
    <Suspense fallback={null}>
      <LibraryInner />
    </Suspense>
  );
}
