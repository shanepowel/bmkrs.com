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
import { brandMessaging } from "@/lib/content/messaging";

const SYMPTOMS = [
  {
    t: "the work launched. the next chapter is still unwritten.",
    b: "there are new opportunities to explore, but no space to keep building on what is already working.",
  },
  {
    t: "your team needs a partner who knows the whole story.",
    b: "context matters. Continuity makes better decisions possible and lets each piece of work build on the last.",
  },
  {
    t: "ambition is growing faster than capacity.",
    b: "bring the right mix of strategic, creative and technical experience around the work, when you need it.",
  },
];

const INCLUDED = [
  "a shared plan and clear priorities",
  "product and experience improvements",
  "design and creative development",
  "technical delivery and integrations",
  "specialist expertise when needed",
  "collaboration with your own team",
  "regular learning and review",
  "clear ownership and next steps",
];

const MONTH = [
  {
    n: "01",
    t: "week one: we plan.",
    b: "what will make the biggest difference this month, decided together, with one shared focus.",
  },
  {
    n: "02",
    t: "weeks two + three: we make.",
    b: "design, product improvements and technical delivery move forward with clear decisions and regular check-ins.",
  },
  {
    n: "03",
    t: "week four: we learn.",
    b: "what changed, what we learned and where to focus next. the work stays visible and the next step stays clear.",
  },
];

const TIERS = [
  {
    name: "motion",
    eyebrow: "steady partnership",
    b: "a connected team for regular improvements across your product, brand and experience.",
  },
  {
    name: "motion plus",
    eyebrow: "deeper collaboration",
    b: "everything in motion, with more room for exploration, design and specialist delivery.",
    featured: true,
  },
  {
    name: "motion embedded",
    eyebrow: "embedded team",
    b: "a senior creative and digital team working alongside yours, with the wider bmkrs network behind them.",
  },
];

export function MotionPageViewReworked() {
  return (
    <MotionConfig reducedMotion="user">
      <Surface theme="ink">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <Kicker>keep shipping</Kicker>
            <H1 className="mt-4 max-w-[12ch]">always in motion.</H1>
            <Body lead className="mt-7">
              good work does not stop at launch. motion is a close, ongoing partnership that keeps
              your product, brand and experience moving forward month after month, with a team that
              already understands where you want to go.
            </Body>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <OrangeButton href="#tiers">explore the partnership</OrangeButton>
              <GhostButton href="#month">what a month looks like <span aria-hidden="true">+</span></GhostButton>
            </div>
          </div>
          <div className="hidden md:block md:mx-auto md:w-full md:max-w-[30rem] lg:mx-0">
            <StarsOrbit />
          </div>
        </div>
      </Surface>

      <Surface theme="paper">
        <Kicker>you might need this if</Kicker>
        <H2 className="mt-3 max-w-[18ch]">keep the good work moving.</H2>
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
              One connected team brings the right mix of strategy, design and technology around the
              work. The focus can change month to month; the partnership stays consistent.
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
        <H2>good work builds on itself.</H2>
        <div className="mt-8">
          <StepLine
            steps={["understanding", "ideas", "experience", "product", "momentum"]}
            body="with the same people close to the work, knowledge grows, decisions get clearer and each improvement builds on what came before."
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
          Then we plan again. A steady rhythm creates room to respond as the business and its
          ambitions evolve.
        </Body>
      </Surface>

      <Surface theme="ink" id="tiers" raised>
        <Kicker>tiers</Kicker>
        <H2 className="mt-3 max-w-[16ch]">a partnership shaped around what comes next.</H2>
        <div className="mt-10">
          <TierGrid>
            {TIERS.map((tier) => (
              <TierCard
                key={tier.name}
                eyebrow={tier.eyebrow}
                title={tier.name}
                blurb={tier.b}
                featured={tier.featured}
              />
            ))}
          </TierGrid>
        </div>
        <Body className="mt-10 max-w-[60ch]">Every partnership is shaped around your priorities, team and the work ahead. Tell us what you need and we&apos;ll work out the right approach together.</Body>
        <div className="mt-8">
          <OrangeButton href="/contact">talk through your needs</OrangeButton>
        </div>
      </Surface>

      <Close
        title="have something worth keeping in motion?"
        action={<Button href="/contact">{brandMessaging.ctaPrimary}</Button>}
      />
    </MotionConfig>
  );
}
