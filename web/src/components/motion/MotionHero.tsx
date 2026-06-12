"use client";

import Link from "next/link";
import { C, Kicker, mono } from "@/lib/bench-ui";
import { MotionHeroSection } from "./MotionHeroSection";

export function MotionHero() {
  return (
    <MotionHeroSection>
      <Kicker surface="ink">keep moving</Kicker>
      <h1
        className="max-w-[14ch] font-medium"
        style={{
          fontSize: "clamp(2.75rem,6.5vw,6rem)",
          lineHeight: 0.98,
          letterSpacing: "-0.02em",
        }}
      >
        the team behind your growth.
      </h1>
      <p style={{ color: C.inkBody }} className="mt-7 max-w-[55ch] text-lg leading-relaxed">
        launches are exciting. momentum is hard. motion gives you ongoing senior brand, creative and
        strategic support, month after month, without hiring an internal team or re-briefing a new
        supplier every quarter.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-6">
        <Link
          href="/contact"
          className="rounded-full px-7 py-3.5 text-[14px] font-medium transition-transform hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none"
          style={{ background: C.orange, color: C.ink }}
        >
          let&apos;s talk
        </Link>
        <a
          href="#included"
          style={{ ...mono, color: C.inkBody }}
          className="text-[13px] underline-offset-4 hover:underline"
        >
          what&apos;s included →
        </a>
      </div>
    </MotionHeroSection>
  );
}
