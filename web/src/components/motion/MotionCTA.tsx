"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function MotionCTA() {
  return (
    <section className="section-pad bg-white pb-16 pt-8" data-surface="paper">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="wrap overflow-hidden rounded-[2rem] bg-[var(--bmkrs-ink)] px-6 py-20 text-center text-[var(--bmkrs-off-white)] sm:px-12 lg:py-28"
        data-surface="ink"
      >
        <h2 className="display mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          your launch was the beginning.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--surface-body)]">
          keep moving with a team that understands your brand and helps drive it forward every month.
        </p>
        <div className="hero-cta mt-10">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[var(--ink)] transition hover:bg-white/90"
          >
            let&apos;s talk
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
