"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { orbitCards } from "./constants";

export function MotionOrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full border border-[var(--line)]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 62, repeat: Infinity, ease: "linear" }}
        className="absolute inset-24 rounded-full border border-[var(--line)]"
      />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(251,249,245,0.95),rgba(251,249,245,0.22)_45%,transparent_68%)]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/70 bg-white/80 p-5 text-center shadow-2xl shadow-[var(--ink)]/10 backdrop-blur-xl"
      >
        <Sparkles className="mx-auto mb-3 h-5 w-5 text-[var(--ink)]" />
        <p className="text-sm font-semibold text-[var(--ink)]">bmkrs motion</p>
        <p className="mt-2 text-xs leading-5 text-muted">
          embedded brand capability for consistent progress.
        </p>
      </motion.div>
      {orbitCards.map((item, index) => {
        const angle = (index / orbitCards.length) * Math.PI * 2;
        const radius = 196;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [x, x + Math.cos(angle + 1.4) * 12, x],
              y: [y, y + Math.sin(angle + 1.4) * 12, y],
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.07 },
              scale: { duration: 0.5, delay: index * 0.07 },
              x: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute left-1/2 top-1/2 rounded-xl border border-white/70 bg-white/85 px-4 py-3 text-sm font-medium text-[var(--ink)] shadow-xl shadow-[var(--ink)]/10 backdrop-blur-xl"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              translate: "-50% -50%",
            }}
          >
            {item}
          </motion.div>
        );
      })}
    </div>
  );
}
