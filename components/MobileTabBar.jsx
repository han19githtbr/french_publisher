"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Library, Wand2, GalleryHorizontalEnd } from "lucide-react";

const LINKS = [
  { href: "/", label: "Accueil", icon: LayoutGrid },
  { href: "/bibliotheque", label: "Bibliothèque", icon: Library },
  { href: "/generateur", label: "Générer", icon: Wand2 },
  { href: "/feed", label: "Feed", icon: GalleryHorizontalEnd },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-encre-800/95 backdrop-blur border-t border-encre-700 grid grid-cols-4">
      {LINKS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium ${
              active ? "text-moutarde" : "text-encre-200"
            }`}
          >
            <Icon size={19} strokeWidth={2} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
