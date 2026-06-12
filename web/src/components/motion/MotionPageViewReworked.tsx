"use client";

import { motion, MotionConfig } from "framer-motion";
import { C, Kicker, mono, PrimaryButton } from "@/lib/bench-ui";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const ORBIT = ["strategy", "content", "campaigns", "websites", "creative", "messaging", "growth"];

export function MotionOrbitVisualReworked() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 rounded-full"
        style={{ border: `1px solid ${C.inkRule}` }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 62, repeat: Infinity, ease: "linear" }}
        className="absolute inset-24 rounded-full"
        style={{ border: "1px solid rgba(241,239,232,0.08)" }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 rounded-xl p-5 text-center"
        style={{ background: "#221F1B", border: `1px solid ${C.inkRule}` }}
      >
        <p className="text-sm font-medium" style={{ color: C.inkText }}>
          motion
          <span
            className="ml-[1px] inline-block h-[0.13em] w-[0.13em] rounded-full align-baseline"
            style={{ background: C.orange }}
          />
        </p>
        <p style={{ ...mono, color: C.inkFaint }} className="mt-2 text-[11px] leading-relaxed">
          the brand, kept moving
        </p>
      </motion.div>
      {ORBIT.map((item, index) => {
        const angle = (index / ORBIT.length) * Math.PI * 2;
        const r = 180;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [x, x + Math.cos(angle + 1.4) * 10, x],
              y: [y, y + Math.sin(angle + 1.4) * 10, y],
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.07 },
              scale: { duration: 0.5, delay: index * 0.07 },
              x: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute left-1/2 top-1/2 rounded-full px-4 py-2"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              translate: "-50% -50%",
              ...mono,
              fontSize: 12,
              color: C.inkBody,
              background: "#221F1B",
              border: `1px solid ${C.inkRule}`,
            }}
          >
            {item}
          </motion.div>
        );
      })}
    </div>
  );
}

const SYMPTOMS = [
  {
    t: "everything waits for you.",
    b: "the founder is the bottleneck: every asset, every decision, every brief queues behind your tuesday.",
  },
  {
    t: "five suppliers, no rhythm.",
    b: "creative, content and delivery pulling in different directions, and you in the middle translating.",
  },
  {
    t: "launch, then drift.",
    b: "the brand was great on day one and has not moved since. marketing happens in bursts: sprint, silence, panic.",
  },
];

const INCLUDED = [
  "monthly plan with one primary objective",
  "creative production",
  "campaign delivery",
  "website updates + optimisation",
  "content programme",
  "brand governance",
  "launch support",
  "the monthly report, with numbers",
];

const MONTH = [
  {
    n: "01",
    t: "week one: we plan.",
    b: "what the brand needs this month, decided together, written down. not a backlog. a bet.",
  },
  {
    n: "02",
    t: "weeks two + three: we make.",
    b: "shipped as it is finished, not hoarded for a reveal.",
  },
  {
    n: "03",
    t: "week four: we report.",
    b: "what shipped, what moved, what we would do differently. a document you can forward to your board without editing.",
  },
];

const TIERS = [
  {
    name: "motion one",
    price: "from £1,500/month",
    b: "the brand kept alive: monthly plan, production, site updates, governance, priority line.",
  },
  {
    name: "motion two",
    price: "from £3,000/month",
    b: "the brand kept growing: everything in one, plus campaigns, the content programme, and the quarterly review with numbers.",
  },
  {
    name: "motion partner",
    price: "custom",
    b: "embedded strategic and creative partner, for businesses where brand is a growth lever, not a maintenance task.",
  },
];

export function MotionPageViewReworked() {
  return (
    <MotionConfig reducedMotion="user">
      <section style={{ background: C.ink, color: C.inkText }}>
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_0.85fr]">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <Kicker surface="ink">keep moving</Kicker>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-[12ch] font-medium"
              style={{
                fontSize: "clamp(2.75rem,6.5vw,6rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.02em",
              }}
            >
              always in motion.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              style={{ color: C.inkBody }}
              className="mt-7 max-w-[55ch] text-lg leading-relaxed"
            >
              launches are exciting. momentum is hard. motion is the team that keeps your brand
              moving month after month: senior strategy, creative and delivery, without hiring an
              internal team or re-briefing a new supplier every quarter.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-6">
              <PrimaryButton href="#tiers">see the tiers + prices</PrimaryButton>
              <a
                href="#month"
                style={{ ...mono, color: C.inkBody }}
                className="text-[13px] underline-offset-4 hover:underline"
              >
                what a month looks like →
              </a>
            </motion.div>
          </motion.div>
          <MotionOrbitVisualReworked />
        </div>
      </section>

      <section style={{ background: C.paper, color: C.paperText }}>
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
          <Kicker>you might need this if</Kicker>
          <h2
            className="font-medium"
            style={{
              fontSize: "clamp(1.9rem,3.5vw,3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            growth creates complexity. complexity eats momentum.
          </h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3"
          >
            {SYMPTOMS.map((s) => (
              <motion.div
                key={s.t}
                variants={fadeUp}
                className="pt-5"
                style={{ borderTop: "1px solid rgba(24,22,19,0.15)" }}
              >
                <h3 className="mb-2 text-xl font-medium">{s.t}</h3>
                <p style={{ color: C.paperBody }} className="text-[15px] leading-relaxed">
                  {s.b}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        style={{
          background: C.paper,
          color: C.paperText,
          borderTop: "1px solid rgba(24,22,19,0.15)",
        }}
      >
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <Kicker>what&apos;s included</Kicker>
            <h2
              className="font-medium"
              style={{
                fontSize: "clamp(1.9rem,3.5vw,3rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              one partner. everything moving.
            </h2>
            <p style={{ color: C.paperBody }} className="mt-5 max-w-[50ch] text-[15px] leading-relaxed">
              instead of managing several suppliers, you get one embedded team with one plan and one
              report. the mix flexes month to month; the rhythm never does.
            </p>
          </div>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-x-8 sm:grid-cols-2"
          >
            {INCLUDED.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-baseline gap-2.5 py-3"
                style={{ borderTop: "1px solid rgba(24,22,19,0.15)" }}
              >
                <span
                  aria-hidden
                  className="inline-block h-[7px] w-[7px] shrink-0 rounded-full"
                  style={{ background: C.orange }}
                />
                <span className="text-[14px]">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section style={{ background: C.orange, color: "#181613" }} className="overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-medium"
            style={{
              fontSize: "clamp(2.25rem,5vw,4.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            consistency compounds.
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3"
          >
            {["brand", "content", "campaigns", "customers", "growth"].map((item, i, arr) => (
              <motion.span key={item} variants={fadeUp} className="flex items-center gap-4">
                <span style={{ ...mono }} className="rounded-full border px-5 py-2.5 text-[14px]">
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span aria-hidden className="text-xl">
                    →
                  </span>
                )}
              </motion.span>
            ))}
          </motion.div>
          <p
            style={{ ...mono, color: "#4A1B0C" }}
            className="mt-10 max-w-[60ch] text-[13px] leading-relaxed"
          >
            every month the brand stays in motion, the next month costs less: recognition builds,
            content reuses, audiences warm. stop-start resets the meter. that is the entire
            economics of motion.
          </p>
        </div>
      </section>

      <section id="month" style={{ background: C.paper, color: C.paperText }}>
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
          <Kicker>what it actually looks like</Kicker>
          <h2
            className="font-medium"
            style={{
              fontSize: "clamp(1.9rem,3.5vw,3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            a month in motion.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
            {MONTH.map((s) => (
              <motion.div
                key={s.n}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="pt-5"
                style={{ borderTop: "1px solid rgba(24,22,19,0.15)" }}
              >
                <p style={{ ...mono, color: C.orange }} className="mb-2 text-[12px]">
                  {s.n}
                </p>
                <h3 className="mb-2 text-lg font-medium">{s.t}</h3>
                <p style={{ color: C.paperBody }} className="text-[14px] leading-relaxed">
                  {s.b}
                </p>
              </motion.div>
            ))}
          </div>
          <p style={{ color: C.paperBody }} className="mt-10 max-w-[60ch] text-[15px] leading-relaxed">
            then we plan again. that is the whole rhythm: no retainer mystery, no activity theatre.
            a team in motion and a paper trail that proves it.
          </p>
        </div>
      </section>

      <section id="tiers" style={{ background: C.ink, color: C.inkText }}>
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
          <Kicker surface="ink">tiers</Kicker>
          <h2
            className="font-medium"
            style={{
              fontSize: "clamp(1.9rem,3.5vw,3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            three speeds. prices on the page, like grown-ups.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
            {TIERS.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="pt-5"
                style={{ borderTop: `1px solid ${C.inkRule}` }}
              >
                <h3 className="text-xl font-medium">{t.name}</h3>
                <p style={{ ...mono, color: C.orange }} className="mt-1.5 text-[13px]">
                  {t.price}
                </p>
                <p style={{ color: C.inkBody }} className="mt-3 text-[14px] leading-relaxed">
                  {t.b}
                </p>
              </motion.div>
            ))}
          </div>
          <p style={{ ...mono, color: C.inkFaint }} className="mt-10 text-[12px]">
            30 days notice either way, no lock-in. you stay because it works.
          </p>
        </div>
      </section>

      <section
        style={{ background: C.ink, borderTop: `1px solid ${C.inkRule}`, color: C.inkText }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
          <h2
            className="max-w-[16ch] font-medium"
            style={{
              fontSize: "clamp(1.9rem,3.5vw,3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            your launch was the beginning.
          </h2>
          <p style={{ color: C.inkBody }} className="mt-5 max-w-[55ch] text-[15px] leading-relaxed">
            tell us where the momentum keeps leaking, and we will tell you which tier fixes it, or
            that you do not need motion yet. both answers are free.
          </p>
          <div className="mt-8">
            <PrimaryButton href="/contact">start a project</PrimaryButton>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
