"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionIntro } from "./SectionIntro";

export function MotionPricing() {
  return (
    <section id="motion-plan" className="section-pad bg-white" data-surface="paper">
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">
        <SectionIntro
          title="built around your stage of growth."
          body="every engagement is tailored. some businesses need strategic guidance. others need creative production and campaign execution. motion flexes around the priorities that matter most."
        />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="lg:justify-self-end"
        >
          <Link href="/contact" className="btn-primary inline-flex h-12 items-center rounded-full px-6">
            let&apos;s build your motion plan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
