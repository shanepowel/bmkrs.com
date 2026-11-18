"use client";

import { motion, useReducedMotion } from "framer-motion";

const ORBITS = [
  { inset: "26%", duration: 14, reverse: false, size: 8, color: "var(--bmkrs-orange)" },
  { inset: "15%", duration: 26, reverse: true, size: 5, color: "var(--bmkrs-paper)" },
  { inset: "3%", duration: 44, reverse: false, size: 6, color: "var(--bmkrs-orange)" },
] as const;

export const STARS_ORBIT_DISCIPLINES = "strategy · design · technology · product · growth";

export function StarsOrbit() {
  const reduce = useReducedMotion();

  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[30rem]" role="img" aria-label="motion. the work, kept moving.">
      <div className="absolute inset-[26%] rounded-full border border-white/20" />
      <div className="absolute inset-[15%] rounded-full border border-white/15" />
      <div className="absolute inset-[3%] rounded-full border border-white/10" />

      {ORBITS.map((orbit) => (
        <motion.div
          key={orbit.inset}
          className="absolute rounded-full"
          style={{ inset: orbit.inset }}
          animate={reduce ? undefined : { rotate: orbit.reverse ? -360 : 360 }}
          transition={reduce ? undefined : { duration: orbit.duration, ease: "linear", repeat: Infinity }}
          aria-hidden="true"
        >
          <span
            className="absolute left-1/2 top-0 block -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: orbit.size,
              height: orbit.size,
              backgroundColor: orbit.color,
              boxShadow: orbit.color === "var(--bmkrs-orange)" ? "0 0 12px rgba(255,77,0,.65)" : undefined,
            }}
          />
        </motion.div>
      ))}

      <span className="absolute left-[10%] top-[29%] font-mono text-[0.62rem] uppercase tracking-[0.13em] text-[color:var(--bmkrs-meta)]">strategy</span>
      <span className="absolute right-[3%] top-[45%] font-mono text-[0.62rem] uppercase tracking-[0.13em] text-[color:var(--bmkrs-meta)]">design</span>
      <span className="absolute bottom-[23%] left-[30%] font-mono text-[0.62rem] uppercase tracking-[0.13em] text-[color:var(--bmkrs-meta)]">technology</span>
      <span className="absolute left-[3%] top-[54%] font-mono text-[0.62rem] uppercase tracking-[0.13em] text-[color:var(--bmkrs-meta)]">momentum</span>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="display text-[clamp(2.25rem,5vw,3.65rem)] font-medium leading-none tracking-[-0.04em] text-[color:var(--bmkrs-paper)]">
          motion<span className="text-[color:var(--bmkrs-orange)]">.</span>
        </p>
        <p className="mt-3 font-mono text-[0.68rem] text-[color:var(--bmkrs-meta)]">
          the work, kept moving
        </p>
      </div>
    </figure>
  );
}
