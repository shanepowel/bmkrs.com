"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SNAP_EASE = [0.85, 0, 0.15, 1] as const;

export type SnapLineProps = {
  tick?: string;
  trigger: "load" | "inView";
  delay?: number;
  className?: string;
  thick?: boolean;
};

export function SnapLine({ tick, trigger, delay = 0, className, thick = false }: SnapLineProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(trigger === "load" && reduceMotion);

  useEffect(() => {
    if (reduceMotion || trigger !== "load") return;
    const timer = window.setTimeout(() => setActive(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay, reduceMotion, trigger]);

  useEffect(() => {
    if (reduceMotion || trigger !== "inView") return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion, trigger]);

  const drawn = reduceMotion || active;

  return (
    <div
      ref={ref}
      className={clsx("relative w-full overflow-visible", thick ? "h-[3px]" : "h-px", className)}
      style={{ background: thick ? "transparent" : "var(--bmkrs-rule-ink)" }}
      aria-hidden={tick ? true : undefined}
    >
      <motion.span
        className="absolute inset-0 origin-left bg-bmkrs-orange"
        style={{
          boxShadow:
            "0 0 12px var(--bmkrs-orange-glow), 0 0 2px var(--bmkrs-orange)",
        }}
        initial={{ scaleX: drawn ? 1 : 0 }}
        animate={{ scaleX: drawn ? 1 : 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.9, ease: SNAP_EASE, delay: delay / 1000 }
        }
      />
      {tick ? (
        <motion.span
          className="absolute right-0 -top-[1.5em] font-mono text-[0.62rem] tracking-[0.1em] text-bmkrs-orange"
          initial={{ opacity: reduceMotion ? 0.85 : 0 }}
          animate={{ opacity: drawn ? 0.85 : 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.4, delay: 0.8 + delay / 1000 }
          }
          aria-hidden
        >
          {tick}
        </motion.span>
      ) : null}
    </div>
  );
}
