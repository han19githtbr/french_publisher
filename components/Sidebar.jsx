"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Library, Wand2, GalleryHorizontalEnd, BookOpen } from "lucide-react";

const LINKS = [
  { href: "/", label: "Tableau de bord", icon: LayoutGrid },
  { href: "/bibliotheque", label: "Bibliothèque", icon: Library },
  { href: "/generateur", label: "Générateur de post", icon: Wand2 },
  { href: "/feed", label: "Feed & Stories", icon: GalleryHorizontalEnd },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-72 shrink-0 flex-col bg-encre-800 text-parchemin border-r border-encre-700">
      <div className="px-7 pt-9 pb-6">
        <div className="flex items-center gap-2 text-moutarde">
          <BookOpen size={22} strokeWidth={2.2} />
          <span className="text-xs tracking-wide uppercase font-semibold">Manuel augmenté</span>
        </div>
        <h1 className="mt-3 font-display text-2xl leading-tight text-parchemin">
          Français,
          <br />
          <em className="not-italic text-moutarde">à publier.</em>
        </h1>
        <p className="mt-3 text-sm text-encre-200 leading-relaxed">
          Chaque règle, piège et anecdote du manuel devient une image prête pour
          Instagram ou Facebook.
        </p>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {LINKS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-moutarde/15 text-moutarde"
                  : "text-encre-200 hover:bg-encre-700 hover:text-parchemin"
              }`}
            >
              <Icon size={18} strokeWidth={2} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 pb-8 pt-4 text-[11px] text-encre-300 leading-relaxed border-t border-encre-700/70 mt-4">
        Basé sur le <em>Manuel Complet de Français</em> — édition augmentée 2026.
        <br />
        Contenu persistant via MongoDB Atlas.
      </div>
    </aside>
  );
}
