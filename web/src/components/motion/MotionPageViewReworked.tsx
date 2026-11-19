"use client";

import { motion, MotionConfig } from "framer-motion";
import {
  Body,
  Button,
  Close,
  GhostButton,
  H1,
  H2,
  Kicker,
  OrangeButton,
  RuledCell,
  RuledGrid,
  StatusDot,
  StepLine,
  Surface,
  TierCard,
  TierGrid,
} from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";
import { fadeUp, stagger } from "./animations";
import { StarsOrbit } from "./StarsOrbit";

const SYMPTOMS = [
  {
    t: "the product launched. improvement stalled.",
    b: "every change means re-briefing someone from scratch, so the backlog grows and production goes quiet.",
  },
  {
    t: "ai work happens in bursts.",
    b: "a pilot, then silence, then panic. nobody owns evaluation, change control or the next release.",
  },
  {
    t: "five suppliers, no rhythm.",
    b: "product, data, change and delivery pull in different directions, and you sit in the middle translating.",
  },
];

const INCLUDED = [
  "monthly plan with one primary objective",
  "product iteration and releases",
  "ai system upkeep and evaluation",
  "operating-model support",
  "priority incident and change line",
  "governance that stays current",
  "handover docs kept alive",
  "the monthly report, with numbers",
];

const MONTH = [
  {
    n: "01",
    t: "week one: we plan.",
    b: "what the product and ai estate needs this month, decided together, written down. not a backlog. a bet.",
  },
  {
    n: "02",
    t: "weeks two + three: we build.",
    b: "product changes, model work, integrations, whatever the plan called for, shipped as it is finished.",
  },
  {
    n: "03",
    t: "week four: we report.",
    b: "what shipped, what moved, what we would do differently. a document you can forward without editing.",
  },
];

const TIERS = [
  {
    name: "motion",
    price: "from £4,500/month",
    b: "steady shipping for products that cannot go quiet: releases, ai upkeep, operating-model support, monthly readout.",
  },
  {
    name: "motion plus",
    price: "from £6,500/month",
    b: "everything in motion, plus deeper discovery, growth loops and an extended specialist bench on demand.",
    featured: true,
  },
  {
    name: "motion embedded",
    price: "from £9,000/month",
    b: "a named senior product and ai team plugged into yours, with the wider bmkrs network behind them.",
  },
];

export function MotionPageViewReworked() {
  return (
    <MotionConfig reducedMotion="user">
      <Surface theme="ink">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <Kicker>keep shipping</Kicker>
            <H1 className="mt-4 max-w-[12ch]">always in motion.</H1>
            <Body lead className="mt-7">
              launches are exciting. staying in production is hard. motion is the team that keeps your
              product and ai estate moving month after month: senior delivery, without hiring an
              internal team or re-briefing a new supplier every quarter.
            </Body>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <OrangeButton href="#tiers">see the tiers + prices</OrangeButton>
              <GhostButton href="#month">what a month looks like →</GhostButton>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[28rem] lg:mx-0">
            <StarsOrbit />
          </div>
        </div>
      </Surface>

      <Surface theme="paper">
        <Kicker>you might need this if</Kicker>
        <H2 className="mt-3 max-w-[18ch]">shipping creates complexity. complexity eats momentum.</H2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10"
        >
          <RuledGrid>
            {SYMPTOMS.map((item) => (
              <motion.div key={item.t} variants={fadeUp}>
                <RuledCell title={item.t} body={item.b} />
              </motion.div>
            ))}
          </RuledGrid>
        </motion.div>
      </Surface>

      <Surface theme="ink">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <Kicker>what&apos;s included</Kicker>
            <H2 className="mt-3">one partner. everything moving.</H2>
            <Body className="mt-5">
              instead of managing several suppliers, you get one embedded team with one plan and one
              report. the mix flexes month to month; the rhythm never does.
            </Body>
          </div>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-x-8 sm:grid-cols-2"
          >
            {INCLUDED.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 py-3">
                <StatusDot />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Surface>

      <Surface theme="paper" id="month">
        <Kicker theme="paper">what it actually looks like</Kicker>
        <H2 theme="paper" className="mt-3">
          a month in motion.
        </H2>
        <div className="mt-10">
          <RuledGrid>
            {MONTH.map((step) => (
              <RuledCell key={step.n} kicker={step.n} title={step.t} body={step.b} />
            ))}
          </RuledGrid>
        </div>
        <Body theme="paper" className="mt-10">
          then we plan again. that is the whole rhythm: no retainer mystery, no activity theatre. a
          team in motion and a paper trail that proves it.
        </Body>
      </Surface>

      <Surface theme="ink" id="tiers">
        <Kicker>tiers</Kicker>
        <H2 className="mt-3 max-w-[16ch]">three speeds. prices on the page, like grown-ups.</H2>
        <div className="mt-10">
          <TierGrid>
            {TIERS.map((tier) => (
              <TierCard
                key={tier.name}
                eyebrow={tier.price}
                title={tier.name}
                blurb={tier.b}
                featured={tier.featured}
              />
            ))}
          </TierGrid>
        </div>
        <Body className="mt-10">30 days notice either way, no lock-in. you stay because it works.</Body>
      </Surface>

      <Surface theme="orange">
        <H2 theme="orange">consistency compounds.</H2>
        <div className="mt-8">
          <StepLine
            steps={["product", "ai", "controls", "users", "growth"]}
            body="every month the product stays in motion, the next month costs less: knowledge compounds, releases reuse, users stay warm. stop-start resets the meter. that is the entire economics of motion."
          />
        </div>
      </Surface>

      <Close
        title="production was the beginning."
        action={<Button href="/contact">{brandMessaging.ctaPrimary}</Button>}
      />
    </MotionConfig>
  );
}
