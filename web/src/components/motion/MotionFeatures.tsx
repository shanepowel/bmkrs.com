"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { features } from "./constants";
import { SectionIntro } from "./SectionIntro";

export function MotionFeatures() {
  return (
    <section className="section-pad bg-[var(--bg)]" data-surface="paper">
      <div className="wrap">
        <SectionIntro title="what motion unlocks." center />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group rounded-[var(--radius)] border border-[var(--line)] bg-white p-7 shadow-sm transition hover:border-[var(--ink)]/20 hover:shadow-xl hover:shadow-[var(--ink)]/5"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ink)] text-white transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="display text-xl font-bold tracking-tight">{feature.title}</h3>
                <p className="mt-3 leading-7 text-muted">{feature.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
