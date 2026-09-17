import Link from "next/link";
import { ArrowRight, Flame, ImageIcon, Layers } from "lucide-react";
import { ANECDOTES, CATEGORIES, getAllContent } from "../data/content";
import { getStats } from "../lib/posts";
import CategoryIcon, { iconFor } from "../components/CategoryIcon";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const all = getAllContent();
  const stats = await getStats().catch(() => ({ total: 0, byPlatform: [], byType: [] }));

  const dayIndex = new Date().getDate() % ANECDOTES.length;
  const featured = ANECDOTES[dayIndex];
  const featuredCat = CATEGORIES[featured.type];

  const ogParams = new URLSearchParams({
    type: featured.type,
    platform: "instagram-feed",
    title: featured.title,
    caption: featured.caption,
    chapitre: featuredCat.chapitre,
  });

  const counts = Object.keys(CATEGORIES).reduce((acc, key) => {
    acc[key] = all.filter((i) => i.type === key).length;
    return acc;
  }, {});

  return (
    <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-xl2 bg-encre-800 text-parchemin px-6 sm:px-10 py-9 sm:py-12 shadow-carte">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-moutarde/30"
          aria-hidden
        />
        <div
          className="absolute -bottom-16 -left-10 w-52 h-52 rounded-full border border-bordeaux-light/30"
          aria-hidden
        />
        <div className="relative grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-moutarde bg-moutarde/10 border border-moutarde/40 rounded-full px-3 py-1.5">
              <Flame size={13} /> Contenu bonus, chapitre 19
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.7rem] leading-[1.08] mt-5">
              Le manuel de français devient un{" "}
              <span className="text-moutarde">studio de contenu</span> pour vos réseaux.
            </h1>
            <p className="mt-4 text-encre-200 text-[15px] sm:text-base leading-relaxed max-w-xl">
              Anecdotes étymologiques, expressions francophones, faux amis, homophones,
              records insolites : chaque page du manuel se transforme en une image
              soignée, prête pour le feed ou la story — légendée automatiquement,
              enregistrée dans MongoDB Atlas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/generateur"
                className="inline-flex items-center gap-2 bg-moutarde text-encre-900 font-semibold text-sm px-5 py-3 rounded-xl hover:bg-moutarde-light transition-colors"
              >
                Créer un post <ArrowRight size={16} />
              </Link>
              <Link
                href="/bibliotheque"
                className="inline-flex items-center gap-2 border border-encre-500 text-parchemin font-semibold text-sm px-5 py-3 rounded-xl hover:bg-encre-700 transition-colors"
              >
                Parcourir la bibliothèque
              </Link>
            </div>
          </div>

          {/* live preview of today's post, generated on the fly */}
          <div className="justify-self-center w-full max-w-[300px]">
            <div className="text-[11px] uppercase tracking-wide text-encre-300 mb-2 text-center">
              Anecdote du jour — aperçu Instagram
            </div>
            <div className="rounded-2xl overflow-hidden border-4 border-encre-700 shadow-carte rotate-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/api/og?${ogParams.toString()}`}
                alt={`Post généré : ${featured.title}`}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
        <StatCard
          icon={Layers}
          label="Contenus du manuel"
          value={all.length}
          sub="prêts à publier"
        />
        <StatCard
          icon={ImageIcon}
          label="Posts créés"
          value={stats.total}
          sub="sauvegardés sur Atlas"
        />
        <StatCard
          icon={iconFor(CATEGORIES.anecdote.icon)}
          label="Anecdotes"
          value={counts.anecdote}
          sub="étymologies, chap. 19.1"
        />
        <StatCard
          icon={iconFor(CATEGORIES.expression.icon)}
          label="Expressions"
          value={counts.expression}
          sub="France & francophonie"
        />
      </section>

      {/* Categories grid */}
      <section className="mt-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="font-display text-xl sm:text-2xl">Explorer par thème</h2>
          <Link href="/bibliotheque" className="text-sm font-medium text-bordeaux hover:underline">
            Tout voir
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <Link
              key={key}
              href={`/bibliotheque?type=${key}`}
              className="group rounded-xl2 bg-white border border-encre-100 p-5 flex items-start gap-4 hover:shadow-carte hover:-translate-y-0.5 transition-all"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${cat.color}1A`, color: cat.color }}
              >
                <CategoryIcon name={cat.icon} size={20} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-[15px] text-encre-900">{cat.label}</div>
                <div className="text-[13px] text-encre-400 mt-0.5">
                  {counts[key]} éléments · chap. {cat.chapitre}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-10 mb-6 rounded-xl2 bg-white border border-encre-100 p-6 sm:p-8">
        <h2 className="font-display text-xl sm:text-2xl mb-5">Comment ça marche</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <Step
            n="1"
            title="Choisissez un contenu"
            text="Piochez une anecdote, une expression ou un piège grammatical dans la bibliothèque."
          />
          <Step
            n="2"
            title="Générez le visuel"
            text="Une image de post ou de story est composée automatiquement, avec la définition en légende."
          />
          <Step
            n="3"
            title="Publiez dans le feed"
            text="Le post est enregistré dans MongoDB Atlas et apparaît dans votre feed Instagram / Facebook simulé."
          />
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="rounded-xl2 bg-white border border-encre-100 p-4 sm:p-5">
      <div className="flex items-center gap-2 text-encre-400">
        <Icon size={16} />
        <span className="text-[12px] font-medium uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-2 font-display text-2xl sm:text-3xl text-encre-900">{value}</div>
      <div className="text-[12px] text-encre-400">{sub}</div>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-encre-800 text-parchemin flex items-center justify-center text-sm font-semibold shrink-0">
        {n}
      </div>
      <div>
        <div className="font-semibold text-[15px]">{title}</div>
        <p className="text-[13.5px] text-encre-400 mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
