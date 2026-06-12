"use client";

import { LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { painPoints } from "./constants";
import { SectionIntro } from "./SectionIntro";

export function PainPoints() {
  return (
    <section className="section-pad bg-[var(--bg)]" data-surface="paper">
      <div className="wrap">
        <SectionIntro title="growth creates complexity." />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-[var(--radius)] border border-[var(--line)] bg-white p-7 shadow-sm"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg)] shadow-sm">
                <LineChart className="h-5 w-5 text-[var(--ink)]" />
              </div>
              <h3 className="display text-xl font-bold tracking-tight">{point.title}</h3>
              <p className="mt-3 leading-7 text-muted">{point.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
