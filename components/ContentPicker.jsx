"use client";

import { useEffect, useState } from "react";
import { Search, Shuffle } from "lucide-react";
import { CATEGORIES } from "../data/content";
import CategoryIcon from "./CategoryIcon";

export default function ContentPicker({ onSelect }) {
  const [q, setQ] = useState("");
  const [type, setType] = useState("all");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams({ type });
    if (q) params.set("q", q);
    fetch(`/api/content?${params.toString()}`)
      .then((r) => r.json())
      .then((data) => setItems((data.items || []).slice(0, 24)));
  }, [q, type]);

  function surprise() {
    const params = new URLSearchParams({ type });
    fetch(`/api/content?${params.toString()}`)
      .then((r) => r.json())
      .then((data) => {
        const list = data.items || [];
        if (list.length) onSelect(list[Math.floor(Math.random() * list.length)]);
      });
  }

  return (
    <div className="rounded-xl2 bg-white border border-encre-100 p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-encre-300" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Chercher..."
            className="w-full rounded-lg border border-encre-100 pl-8 pr-3 py-2 text-sm outline-none focus:border-moutarde focus:ring-2 focus:ring-moutarde/20"
          />
        </div>
        <button
          onClick={surprise}
          title="Contenu aléatoire"
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-encre-800 text-parchemin hover:bg-encre-700"
        >
          <Shuffle size={14} /> Surprends-moi
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {[{ key: "all", label: "Tout" }, ...Object.entries(CATEGORIES).map(([k, c]) => ({ key: k, label: c.short }))].map(
          (t) => (
            <button
              key={t.key}
              onClick={() => setType(t.key)}
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                type === t.key
                  ? "bg-encre-800 border-encre-800 text-parchemin"
                  : "border-encre-100 text-encre-400"
              }`}
            >
              {t.label}
            </button>
          )
        )}
      </div>

      <div className="max-h-[420px] overflow-y-auto space-y-1.5 pr-1">
        {items.map((item) => {
          const cat = CATEGORIES[item.type];
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className="w-full text-left flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-parchemin transition-colors"
            >
              <div
                className="w-7 h-7 mt-0.5 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${cat.color}1A`, color: cat.color }}
              >
                <CategoryIcon name={cat.icon} size={13} />
              </div>
              <div className="min-w-0">
                <div className="text-[13.5px] font-semibold text-encre-900 truncate">{item.title}</div>
                <div className="text-[12px] text-encre-400 line-clamp-2">{item.caption}</div>
              </div>
            </button>
          );
        })}
        {items.length === 0 && (
          <div className="text-center text-encre-300 text-sm py-8">Aucun résultat.</div>
        )}
      </div>
    </div>
  );
}
