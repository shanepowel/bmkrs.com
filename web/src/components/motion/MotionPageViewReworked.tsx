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
import { fadeUp, stagger } from "./animations";
import { StarsOrbit } from "./StarsOrbit";

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
    featured: true,
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
      <Surface theme="ink">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <Kicker>keep moving</Kicker>
            <H1 className="mt-4 max-w-[12ch]">always in motion.</H1>
            <Body lead className="mt-7">
              launches are exciting. momentum is hard. motion is the team that keeps your brand moving
              month after month: senior strategy, creative and delivery, without hiring an internal team
              or re-briefing a new supplier every quarter.
            </Body>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <OrangeButton href="#tiers">see the tiers + prices</OrangeButton>
              <GhostButton href="#month">what a month looks like →</GhostButton>
            </div>
          </div>
          <div className="hidden lg:block">
            <StarsOrbit />
          </div>
        </div>
      </Surface>

      <Surface theme="paper">
        <Kicker>you might need this if</Kicker>
        <H2 className="mt-3 max-w-[18ch]">growth creates complexity. complexity eats momentum.</H2>
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

      <Surface theme="orange">
        <H2>consistency compounds.</H2>
        <div className="mt-8">
          <StepLine
            steps={["brand", "content", "campaigns", "customers", "growth"]}
            body="every month the brand stays in motion, the next month costs less: recognition builds, content reuses, audiences warm. stop-start resets the meter. that is the entire economics of motion."
          />
        </div>
      </Surface>

      <Surface theme="ink" id="month">
        <Kicker>what it actually looks like</Kicker>
        <H2 className="mt-3">a month in motion.</H2>
        <div className="mt-10">
          <RuledGrid>
            {MONTH.map((step) => (
              <RuledCell key={step.n} kicker={step.n} title={step.t} body={step.b} />
            ))}
          </RuledGrid>
        </div>
        <Body className="mt-10">
          then we plan again. that is the whole rhythm: no retainer mystery, no activity theatre. a
          team in motion and a paper trail that proves it.
        </Body>
      </Surface>

      <Surface theme="ink" id="tiers" raised>
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

      <Close
        title="your launch was the beginning."
        action={<Button href="/contact">let&apos;s talk</Button>}
      />
    </MotionConfig>
  );
}
