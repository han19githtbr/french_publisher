// Peuple la collection "posts" avec quelques exemples, pour démarrer avec un feed non vide.
// Usage : MONGODB_URI="..." npm run seed
import { MongoClient } from "mongodb";
import { ANECDOTES, EXPRESSIONS, CATEGORIES } from "../data/content.js";
import { buildHashtags } from "../lib/hashtags.js";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "francais_social";

if (!uri) {
  console.error("MONGODB_URI manquant. Ajoute-le dans .env.local ou passe-le en variable d'environnement.");
  process.exit(1);
}

function ogUrlFor(item, platform) {
  const cat = CATEGORIES[item.type];
  const params = new URLSearchParams({
    type: item.type,
    platform,
    title: item.title,
    caption: item.caption,
    chapitre: cat.chapitre,
  });
  return `/api/og?${params.toString()}`; // relative — le front-end préfixera avec l'origine
}

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  const col = client.db(dbName).collection("posts");

  const sample = [
    ...ANECDOTES.slice(0, 3).map((i) => ({ item: i, platform: "instagram-feed" })),
    ...ANECDOTES.slice(3, 5).map((i) => ({ item: i, platform: "instagram-story" })),
    ...EXPRESSIONS.slice(0, 3).map((i) => ({ item: i, platform: "facebook-feed" })),
  ];

  const docs = sample.map(({ item, platform }) => ({
    contentId: item.id,
    contentType: item.type,
    title: item.title,
    caption: `${item.caption}${item.example ? `\n\n« ${item.example} »` : ""}`,
    hashtags: buildHashtags(item),
    platform,
    imageUrl: ogUrlFor(item, platform),
    status: "published",
    likes: Math.floor(Math.random() * 180) + 12,
    comments: Math.floor(Math.random() * 24) + 1,
    createdAt: new Date(),
  }));

  await col.insertMany(docs);
  console.log(`${docs.length} posts de démonstration insérés.`);
  await client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
