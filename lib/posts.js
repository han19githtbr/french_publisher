import { ObjectId } from "mongodb";
import { getCollection } from "./mongodb";

const COLLECTION = "posts";

export async function listPosts({ platform, type } = {}) {
  const col = await getCollection(COLLECTION);
  const query = {};
  if (platform && platform !== "all") query.platform = platform;
  if (type && type !== "all") query.contentType = type;
  const docs = await col.find(query).sort({ createdAt: -1 }).limit(200).toArray();
  return docs.map(serialize);
}

export async function createPost(data) {
  const col = await getCollection(COLLECTION);
  const doc = {
    contentId: data.contentId,
    contentType: data.contentType,
    title: data.title,
    caption: data.caption,
    hashtags: data.hashtags || [],
    platform: data.platform,
    imageUrl: data.imageUrl,
    status: data.status || "published",
    likes: Math.floor(Math.random() * 180) + 12,
    comments: Math.floor(Math.random() * 24) + 1,
    createdAt: new Date(),
  };
  const res = await col.insertOne(doc);
  return serialize({ _id: res.insertedId, ...doc });
}

export async function deletePost(id) {
  const col = await getCollection(COLLECTION);
  await col.deleteOne({ _id: new ObjectId(id) });
}

export async function toggleLike(id) {
  const col = await getCollection(COLLECTION);
  const doc = await col.findOne({ _id: new ObjectId(id) });
  if (!doc) return null;
  const likes = (doc.likes || 0) + 1;
  await col.updateOne({ _id: new ObjectId(id) }, { $set: { likes } });
  return serialize({ ...doc, likes });
}

export async function getStats() {
  const col = await getCollection(COLLECTION);
  const total = await col.countDocuments();
  const byPlatform = await col
    .aggregate([{ $group: { _id: "$platform", count: { $sum: 1 } } }])
    .toArray();
  const byType = await col
    .aggregate([{ $group: { _id: "$contentType", count: { $sum: 1 } } }])
    .toArray();
  return { total, byPlatform, byType };
}

function serialize(doc) {
  return {
    id: doc._id.toString(),
    contentId: doc.contentId,
    contentType: doc.contentType,
    title: doc.title,
    caption: doc.caption,
    hashtags: doc.hashtags || [],
    platform: doc.platform,
    imageUrl: doc.imageUrl,
    status: doc.status,
    likes: doc.likes,
    comments: doc.comments,
    createdAt: doc.createdAt instanceof Date ? doc.createdAt.toISOString() : doc.createdAt,
  };
}
