"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

const INK = "#181613";
const PAPER = "#F1EFE8";
const BODY = "#D3D1C7";
const FAINT = "#B4B2A9";
const RULE = "rgba(241,239,232,0.16)";
const ORANGE = "#FF4D00";
const mono = { fontFamily: "var(--font-mono, ui-monospace, monospace)" } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const ORBIT: { label: string; extra?: boolean }[] = [
  { label: "strategy" },
  { label: "content" },
  { label: "campaigns" },
  { label: "websites", extra: true },
  { label: "creative" },
  { label: "messaging", extra: true },
  { label: "growth" },
];

function OrbitVisual() {
  return (
    <div className="orbit-wrap relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{ inset: "9%", border: `1px solid ${RULE}` }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 62, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{ inset: "22%", border: "1px solid rgba(241,239,232,0.08)" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 w-[44%] min-w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-xl p-4 text-center sm:p-5"
        style={{ background: "#221F1B", border: `1px solid ${RULE}` }}
      >
        <p className="text-sm font-medium" style={{ color: PAPER }}>
          motion
          <span
            className="ml-[1px] inline-block h-[0.13em] w-[0.13em] rounded-full align-baseline"
            style={{ background: ORANGE }}
          />
        </p>
        <p style={{ ...mono, color: FAINT }} className="mt-1.5 text-[11px] leading-relaxed">
          the brand, kept moving
        </p>
      </motion.div>
      {ORBIT.map((item, index) => {
        const angle = (index / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
        const r = 42;
        const left = 50 + Math.cos(angle) * r;
        const top = 50 + Math.sin(angle) * r;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [1, 1.04, 1] }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.07 },
              scale: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-3.5 py-1.5 ${item.extra ? "orbit-extra" : ""}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              ...mono,
              fontSize: 12,
              color: BODY,
              background: "#221F1B",
              border: `1px solid ${RULE}`,
            }}
          >
            {item.label}
          </motion.div>
        );
      })}
      <style>{`
        @media (max-width: 767px) {
          .orbit-wrap { max-width: 320px; }
          .orbit-wrap .orbit-extra { display: none; }
        }
      `}</style>
    </div>
  );
}

export function MotionHero() {
  return (
    <MotionConfig reducedMotion="user">
      <section style={{ background: INK, color: PAPER }}>
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 pb-16 pt-16 md:px-10 lg:grid-cols-[1fr_0.85fr] lg:pb-20 lg:pt-20">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              style={{ ...mono, color: ORANGE, letterSpacing: "0.08em" }}
              className="mb-5 text-[13px]"
            >
              keep moving
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="display max-w-[14ch] font-medium"
              style={{
                fontSize: "clamp(2.75rem,6.5vw,6rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
              }}
            >
              the team behind your growth.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{ color: BODY }}
              className="mt-7 max-w-[55ch] text-lg leading-relaxed"
            >
              launches are exciting. momentum is hard. motion gives you ongoing senior brand,
              creative and strategic support, month after month, without hiring an internal team
              or re-briefing a new supplier every quarter.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="rounded-full px-7 py-3.5 text-[14px] font-medium transition-transform hover:scale-[1.03] active:scale-[0.98] motion-reduce:transform-none"
                style={{ background: ORANGE, color: INK }}
              >
                let&apos;s talk
              </Link>
              <a
                href="#included"
                style={{ ...mono, color: BODY }}
                className="text-[13px] underline-offset-4 hover:underline"
              >
                what&apos;s included →
              </a>
            </motion.div>
          </motion.div>
          <OrbitVisual />
        </div>
      </section>
    </MotionConfig>
  );
}
