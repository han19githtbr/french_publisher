import { NextResponse } from "next/server";
import { listPosts, createPost } from "../../../lib/posts";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const platform = searchParams.get("platform");
    const type = searchParams.get("type");
    const posts = await listPosts({ platform, type });
    return NextResponse.json({ posts });
  } catch (err) {
    return NextResponse.json(
      { error: "Impossible de charger les posts. Vérifiez la connexion MongoDB Atlas (MONGODB_URI)." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.title || !body.caption || !body.platform || !body.contentType) {
      return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
    }
    const post = await createPost(body);
    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Impossible d'enregistrer le post. Vérifiez la connexion MongoDB Atlas (MONGODB_URI)." },
      { status: 500 }
    );
  }
}
