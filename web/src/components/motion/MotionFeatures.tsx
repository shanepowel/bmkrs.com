"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { motionOutcomes } from "./constants";
import { SectionIntro } from "./SectionIntro";

export function MotionFeatures() {
  return (
    <section className="section-pad bg-white" data-surface="paper">
      <div className="wrap">
        <SectionIntro title="what changes when motion is working." center />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2"
        >
          {motionOutcomes.map((outcome) => (
            <motion.div
              key={outcome.title}
              variants={fadeUp}
              className="pt-5"
              style={{ borderTop: "1px solid rgba(24,22,19,0.15)" }}
            >
              <h3 className="mb-2 text-xl font-medium">{outcome.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{outcome.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
