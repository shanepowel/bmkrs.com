import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  MOTION_AB_COOKIE,
  isMotionAbVariant,
  parseMotionAbOverride,
  randomMotionAbVariant,
} from "@/lib/motion-ab";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/motion") {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const override = parseMotionAbOverride(request.nextUrl.searchParams.get("motion"));
  const existing = request.cookies.get(MOTION_AB_COOKIE)?.value;

  const variant = override ?? (isMotionAbVariant(existing) ? existing : randomMotionAbVariant());

  if (override || !isMotionAbVariant(existing)) {
    response.cookies.set(MOTION_AB_COOKIE, variant, {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
    });
  }

  response.headers.set("x-motion-ab", variant);
  return response;
}

export const config = {
  matcher: "/motion",
};
