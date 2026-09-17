"use client";

import Link from "next/link";
import CategoryIcon from "./CategoryIcon";

export default function ContentCard({ item, cat }) {
  return (
    <div className="rounded-xl2 bg-white border border-encre-100 p-5 flex flex-col gap-3 hover:shadow-carte transition-shadow">
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${cat.color}1A`, color: cat.color }}
        >
          <CategoryIcon name={cat.icon} size={12} />
          {cat.short}
        </span>
        {item.region && (
          <span className="text-[11px] text-encre-400 font-medium">{item.region}</span>
        )}
      </div>

      <h3 className="font-display text-lg leading-snug text-encre-900">{item.title}</h3>
      <p className="text-[13.5px] text-encre-400 leading-relaxed line-clamp-3">{item.caption}</p>

      <div className="mt-auto pt-2">
        <Link
          href={`/generateur?id=${encodeURIComponent(item.id)}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-encre-800 text-parchemin text-sm font-semibold py-2.5 hover:bg-encre-700 transition-colors"
        >
          Créer un post
        </Link>
      </div>
    </div>
  );
}
