import { NextResponse } from "next/server";
import { getStats } from "../../../lib/posts";

export async function GET() {
  try {
    const stats = await getStats();
    return NextResponse.json({ stats });
  } catch (err) {
    return NextResponse.json({ stats: { total: 0, byPlatform: [], byType: [] } });
  }
}
