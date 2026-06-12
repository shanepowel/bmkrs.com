"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { C, mono } from "@/lib/bench-ui";
import { fadeUp, stagger } from "./animations";
import { MotionHeroSection } from "./MotionHeroSection";

export function MotionHero() {
  return (
    <MotionConfig reducedMotion="user">
      <MotionHeroSection>
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
            style={{ ...mono, color: C.orange, letterSpacing: "0.08em" }}
            className="mb-5 text-[13px]"
          >
            keep moving
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="display max-w-[14ch] font-medium"
            style={{
              fontSize: "clamp(2.75rem,6.5vw,6rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
            }}
          >
            the team behind your growth.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            style={{ color: C.inkBody }}
            className="mt-7 max-w-[55ch] text-lg leading-relaxed"
          >
            launches are exciting. momentum is hard. motion gives you ongoing senior brand,
            creative and strategic support, month after month, without hiring an internal team
            or re-briefing a new supplier every quarter.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-6">
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
          </motion.div>
        </motion.div>
      </MotionHeroSection>
    </MotionConfig>
  );
}
