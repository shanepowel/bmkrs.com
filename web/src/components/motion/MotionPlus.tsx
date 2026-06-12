"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AppLink } from "@/components/bmkrs/AppLink";
import type { MotionContent } from "@/lib/types";

export function MotionPlus({
  motionPlus,
  networkJoin,
}: {
  motionPlus: MotionContent["motionPlus"];
  networkJoin: string;
}) {
  return (
    <section className="section-pad bg-[var(--ink)] text-white" data-surface="ink">
      <div className="wrap">
        <p className="eyebrow text-white/60">{motionPlus.eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {motionPlus.statement}
        </h2>
        <div className="mt-8 max-w-[65ch] space-y-5 text-lg leading-relaxed text-white/75">
          {motionPlus.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="hero-cta mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/network" className="btn-primary inline-flex items-center">
            explore the network
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <AppLink href={networkJoin}>join as a specialist</AppLink>
        </motion.div>
        {motionPlus.poweredBy ? (
          <p className="mono mt-6 text-meta text-white/55">{motionPlus.poweredBy}</p>
        ) : null}
      </div>
    </section>
  );
}
