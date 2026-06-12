"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import { steps } from "./constants";
import { SectionIntro } from "./SectionIntro";

export function HowItWorks() {
  return (
    <section className="section-pad bg-white" data-surface="paper">
      <div className="wrap">
        <SectionIntro title="how it works." center />
        <div className="relative mt-16 grid gap-5 md:grid-cols-3">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-[16.5%] right-[16.5%] top-8 hidden h-px origin-left bg-[var(--line)] md:block"
          />
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg)] p-7 shadow-sm"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--ink)] text-sm font-semibold text-white">
                {step.number}
              </div>
              <h3 className="display text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 leading-7 text-muted">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
