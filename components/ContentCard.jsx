"use client";

import Link from "next/link";
import CategoryIcon from "./CategoryIcon";

export default function ContentCard({ item, cat }) {
  // Try to use pt_caption, if not fallback to detail, etc.
  const ptText = item.pt_caption || item.pt_detail || "";

  return (
    <div className="group relative rounded-xl2 bg-white border border-encre-100 p-6 flex flex-col gap-4 hover:shadow-carte hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Decorative top gradient reflecting category color */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-60"
        style={{ backgroundColor: cat.color }}
      />
      
      <div className="flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border"
          style={{ backgroundColor: `${cat.color}08`, color: cat.color, borderColor: `${cat.color}20` }}
        >
          <CategoryIcon name={cat.icon} size={12} />
          {cat.short}
        </span>
        {item.region && (
          <span className="text-[10px] uppercase tracking-widest text-encre-300 font-bold">{item.region}</span>
        )}
      </div>

      <div>
        <h3 className="font-display text-xl leading-tight text-encre-900 mb-2">{item.title}</h3>
        
        {/* French Text */}
        <p className="text-[14px] text-encre-500 leading-relaxed line-clamp-3">
          {item.caption || item.detail}
        </p>

        {/* Portuguese Text */}
        {ptText && (
          <div className="mt-3 pt-3 border-t border-dashed border-encre-100">
            <div className="flex items-center gap-1.5 mb-1 text-[10px] uppercase tracking-widest font-bold text-encre-300">
              <span>🇧🇷 Português</span>
            </div>
            <p className="text-[13.5px] text-encre-400 font-medium italic leading-relaxed line-clamp-2">
              {ptText}
            </p>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 flex flex-col gap-3">
        <div className="flex items-center text-encre-300 text-[11px] font-medium">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          @frances_com_tres_nativos
        </div>
        <Link
          href={`/generateur?id=${encodeURIComponent(item.id)}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-encre-50 hover:bg-encre-100 text-encre-800 text-sm font-semibold py-2.5 transition-colors"
        >
          Créer un post
        </Link>
      </div>
    </div>
  );
}
