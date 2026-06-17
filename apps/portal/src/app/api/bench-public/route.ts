import { NextResponse } from "next/server";
import { getBenchPublicSlice } from "@/lib/bench-data";

const marketingOrigin = process.env.NEXT_PUBLIC_MARKETING_URL ?? "https://www.bmkrs.com";

export async function GET() {
  const data = getBenchPublicSlice();
  return NextResponse.json(data, {
    headers: {
      "Access-Control-Allow-Origin": marketingOrigin,
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": marketingOrigin,
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}
