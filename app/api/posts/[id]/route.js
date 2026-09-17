import { NextResponse } from "next/server";
import { deletePost, toggleLike } from "../../../../lib/posts";

export async function DELETE(_req, { params }) {
  try {
    await deletePost(params.id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Suppression impossible." }, { status: 500 });
  }
}

export async function PATCH(_req, { params }) {
  try {
    const post = await toggleLike(params.id);
    return NextResponse.json({ post });
  } catch (err) {
    return NextResponse.json({ error: "Mise à jour impossible." }, { status: 500 });
  }
}
