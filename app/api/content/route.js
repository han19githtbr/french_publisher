import { NextResponse } from "next/server";
import { getContentByType, CATEGORIES } from "../../../data/content";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") || "all";
  const q = (searchParams.get("q") || "").toLowerCase().trim();

  let items = getContentByType(type);
  if (q) {
    items = items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        (i.caption && i.caption.toLowerCase().includes(q))
    );
  }

  return NextResponse.json({ items, categories: CATEGORIES });
}
