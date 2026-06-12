"use client";

import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./animations";
import { flowItems } from "./constants";

export function MotionFlowDiagram() {
  return (
    <section
      className="section-pad overflow-hidden bg-[var(--surface-bg)] text-[var(--surface-text)]"
      data-surface="ink"
    >
      <div className="wrap">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="display max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl"
        >
          consistency compounds.
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 flex min-w-max items-center gap-4 overflow-x-auto pb-4"
        >
          {flowItems.map((item, index) => (
            <div key={item} className="flex items-center gap-4">
              <motion.div
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-7 py-5 text-lg font-semibold backdrop-blur"
              >
                {item}
              </motion.div>
              {index < flowItems.length - 1 ? (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.25 }}
                  className="text-[var(--surface-muted)]"
                >
                  <MoveRight className="h-6 w-6" />
                </motion.div>
              ) : null}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
