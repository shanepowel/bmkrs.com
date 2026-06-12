"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { MotionOrbitVisual } from "./MotionOrbitVisual";

export function MotionHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--bg)]">
      <motion.div
        aria-hidden
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#fbf9f5,#f5f0e8,#fff4eb,#fbf9f5)] bg-[length:280%_280%]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 36, -18, 0], y: [0, -26, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[12%] -z-10 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -28, 18, 0], y: [0, 32, -16, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[8%] left-[12%] -z-10 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-3xl"
      />
      <div className="wrap grid min-h-screen w-full items-center gap-14 py-28 lg:grid-cols-[1fr_0.88fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p variants={fadeUp} className="eyebrow mb-5">
            keep moving
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="display max-w-4xl text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
          >
            the team behind your growth.
          </motion.h1>
          <motion.p variants={fadeUp} className="lead mt-7 max-w-2xl text-xl leading-8">
            motion gives you ongoing access to senior brand, creative and strategic support without
            hiring an internal team.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 max-w-xl space-y-3 text-base leading-7 text-muted">
            <p>launches are exciting.</p>
            <p>momentum is difficult.</p>
            <p>
              motion exists for businesses that need consistent execution, sharper creative and
              strategic support month after month.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-cta mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary inline-flex h-12 items-center rounded-full px-6">
              book discovery call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="#included"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-6 text-sm font-semibold backdrop-blur transition hover:border-[var(--ink)]/25 hover:bg-white"
            >
              view what&apos;s included
            </a>
          </motion.div>
        </motion.div>
        <MotionOrbitVisual />
      </div>
    </section>
  );
}
