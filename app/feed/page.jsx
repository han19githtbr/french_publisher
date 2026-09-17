"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, MessageCircle, Trash2, Instagram, Facebook, Send, X } from "lucide-react";
import { CATEGORIES } from "../../data/content";

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "à l'instant";
  if (mins < 60) return `${mins} min`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} h`;
  return `${Math.floor(hrs / 24)} j`;
}

export default function FeedPage() {
  const [view, setView] = useState("instagram");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data.posts || []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleLike(id) {
    const res = await fetch(`/api/posts/${id}`, { method: "PATCH" });
    const data = await res.json();
    if (data.post) {
      setPosts((prev) => prev.map((p) => (p.id === id ? data.post : p)));
      if (active?.id === id) setActive(data.post);
    }
  }

  async function handleDelete(id) {
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.id !== id));
    if (active?.id === id) setActive(null);
  }

  const stories = posts.filter((p) => p.platform === "instagram-story");
  const igFeed = posts.filter((p) => p.platform === "instagram-feed");
  const fbFeed = posts.filter((p) => p.platform === "facebook-feed" || p.platform === "instagram-feed");

  return (
    <div className="px-5 sm:px-8 lg:px-12 py-8 sm:py-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl">Feed & Stories</h1>
          <p className="text-encre-400 text-sm mt-1">Vos posts publiés, persistés dans MongoDB Atlas.</p>
        </div>
        <div className="flex rounded-xl border border-encre-100 p-1 bg-white">
          <ViewToggle active={view === "instagram"} onClick={() => setView("instagram")} icon={Instagram} label="Instagram" />
          <ViewToggle active={view === "facebook"} onClick={() => setView("facebook")} icon={Facebook} label="Facebook" />
        </div>
      </div>

      {!loading && posts.length === 0 && (
        <div className="mt-10 rounded-xl2 border-2 border-dashed border-encre-100 py-20 flex flex-col items-center text-center text-encre-400">
          <p className="text-sm">Aucun post pour l'instant.</p>
          <Link href="/generateur" className="mt-3 text-sm font-semibold text-bordeaux hover:underline">
            Créer votre premier post →
          </Link>
        </div>
      )}

      {view === "instagram" ? (
        <>
          {stories.length > 0 && (
            <div className="flex gap-4 overflow-x-auto mt-7 pb-2">
              {stories.map((s) => (
                <button key={s.id} onClick={() => setActive(s)} className="flex flex-col items-center gap-1.5 shrink-0">
                  <span
                    className="w-16 h-16 rounded-full p-[3px]"
                    style={{ background: `linear-gradient(135deg, ${CATEGORIES[s.contentType]?.color || "#E3A23C"}, #E3A23C)` }}
                  >
                    <span className="block w-full h-full rounded-full overflow-hidden border-2 border-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover" />
                    </span>
                  </span>
                  <span className="text-[11px] text-encre-500 max-w-[64px] truncate">{s.title}</span>
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-6">
            {igFeed.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p)}
                className="group relative aspect-square overflow-hidden rounded-md sm:rounded-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-encre-900/0 group-hover:bg-encre-900/40 transition-colors flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <span className="flex items-center gap-1 text-white text-sm font-semibold">
                    <Heart size={16} fill="white" /> {p.likes}
                  </span>
                  <span className="flex items-center gap-1 text-white text-sm font-semibold">
                    <MessageCircle size={16} fill="white" /> {p.comments}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-5 mt-7">
          {fbFeed.map((p) => {
            const cat = CATEGORIES[p.contentType];
            return (
              <article key={p.id} className="rounded-xl2 bg-white border border-encre-100 overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: cat?.color || "#334066" }}
                  >
                    FR
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-semibold text-encre-900">Manuel Complet de Français</div>
                    <div className="text-[11.5px] text-encre-400">{timeAgo(p.createdAt)} · {cat?.label}</div>
                  </div>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="ml-auto text-encre-300 hover:text-bordeaux"
                    aria-label="Supprimer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="px-4 pb-3 text-[13.5px] text-encre-700 whitespace-pre-line">{p.caption}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.imageUrl} alt={p.title} className="w-full object-cover" />
                <div className="flex items-center justify-between px-4 py-1.5 text-[12px] text-encre-400 border-b border-encre-50">
                  <span>{p.likes} mentions J'aime</span>
                  <span>{p.comments} commentaires</span>
                </div>
                <div className="flex items-center px-2 py-1">
                  <FbAction icon={Heart} label="J'aime" onClick={() => handleLike(p.id)} />
                  <FbAction icon={MessageCircle} label="Commenter" />
                  <FbAction icon={Send} label="Partager" />
                </div>
              </article>
            );
          })}
        </div>
      )}

      {active && (
        <div
          className="fixed inset-0 z-50 bg-encre-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-encre-50">
              <span className="text-sm font-semibold">{active.title}</span>
              <button onClick={() => setActive(null)} className="text-encre-300 hover:text-encre-700">
                <X size={18} />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={active.imageUrl} alt={active.title} className="w-full object-cover" />
            <div className="p-4">
              <p className="text-[13.5px] text-encre-700 whitespace-pre-line">{active.caption}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {(active.hashtags || []).map((h) => (
                  <span key={h} className="text-[12px] text-bordeaux bg-bordeaux/10 px-2 py-1 rounded-md">
                    {h}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4">
                <button onClick={() => handleLike(active.id)} className="flex items-center gap-1.5 text-sm font-medium text-encre-600">
                  <Heart size={16} /> {active.likes}
                </button>
                <button onClick={() => handleDelete(active.id)} className="flex items-center gap-1.5 text-sm font-medium text-bordeaux ml-auto">
                  <Trash2 size={16} /> Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ViewToggle({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 text-[13px] font-semibold px-3.5 py-2 rounded-lg ${
        active ? "bg-encre-800 text-parchemin" : "text-encre-500"
      }`}
    >
      <Icon size={14} /> {label}
    </button>
  );
}

function FbAction({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 inline-flex items-center justify-center gap-1.5 text-[13px] font-medium text-encre-500 py-2 rounded-lg hover:bg-parchemin"
    >
      <Icon size={15} /> {label}
    </button>
  );
}
