import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "francais_social";

if (!uri) {
  // We don't throw at import time so the app can still render pages that
  // don't need the database (and so `next build` doesn't fail without env vars).
  console.warn(
    "[mongodb] MONGODB_URI n'est pas défini. Ajoutez-le dans .env.local pour activer la persistance."
  );
}

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Reuse the connection across hot-reloads in dev.
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri || "mongodb://localhost:27017");
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri || "mongodb://localhost:27017");
  clientPromise = client.connect();
}

export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}

export async function getCollection(name) {
  const db = await getDb();
  return db.collection(name);
}
