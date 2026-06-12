"use client";

import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { checklist } from "./constants";
import { SectionIntro } from "./SectionIntro";

export function MotionSolution() {
  return (
    <section id="included" className="section-pad bg-white" data-surface="paper">
      <div className="wrap grid gap-16 lg:grid-cols-[0.95fr_1fr] lg:items-center">
        <SectionIntro
          title="motion keeps everything moving."
          body="rather than hiring multiple specialists or managing several partners, motion gives you one strategic partner embedded in your business."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {checklist.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg)] p-4 shadow-sm"
            >
              <BadgeCheck className="h-5 w-5 shrink-0 text-[var(--ink)]" />
              <span className="text-sm font-semibold">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
