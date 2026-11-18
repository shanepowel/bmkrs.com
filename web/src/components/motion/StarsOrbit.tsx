"use client";

import { motion, useReducedMotion } from "framer-motion";

const mono = { fontFamily: "var(--font-mono, ui-monospace, monospace)" } as const;

export const STARS_ORBIT_DISCIPLINES =
  "product · ai · governance · releases · evaluation · handover · shipping · amplify";

const ORBIT = STARS_ORBIT_DISCIPLINES;

export function StarsOrbit() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[28rem]" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full border border-[color:var(--bmkrs-rule-ink)]" />
      <div className="absolute inset-[24%] rounded-full border border-[color:var(--bmkrs-rule-ink)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="max-w-[10ch] text-center text-[clamp(1.4rem,3vw,2rem)] font-medium leading-tight tracking-[-0.02em]">
          the product, kept shipping
        </p>
      </div>
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 48, ease: "linear", repeat: Infinity }}
      >
        <p
          className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-[0.65rem] uppercase tracking-[0.14em] text-[color:var(--bmkrs-meta)]"
          style={mono}
        >
          {ORBIT}
        </p>
      </motion.div>
    </div>
  );
}
