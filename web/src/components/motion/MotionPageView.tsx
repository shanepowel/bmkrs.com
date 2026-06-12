"use client";

import type { ReactNode } from "react";
import { MotionCTA } from "./MotionCTA";
import { MotionFeatures } from "./MotionFeatures";
import { MotionFlowDiagram } from "./MotionFlowDiagram";
import { MotionHero } from "./MotionHero";
import { MotionPlus } from "./MotionPlus";
import { MotionPricing } from "./MotionPricing";
import { MotionSolution } from "./MotionSolution";
import { MotionTiers } from "./MotionTiers";
import { HowItWorks } from "./HowItWorks";
import { PainPoints } from "./PainPoints";
import { Testimonials } from "./Testimonials";
import type { MotionContent, Product } from "@/lib/types";

export type MotionPageViewProps = {
  showcase: ReactNode;
  tiers: Product[];
  motionPlus: MotionContent["motionPlus"];
  monthInMotion: {
    kicker: string;
    headline: string;
    paragraphs: string[];
  };
  networkJoin: string;
};

export function MotionPageView({
  showcase,
  tiers,
  motionPlus,
  monthInMotion,
  networkJoin,
}: MotionPageViewProps) {
  return (
    <>
      <MotionHero />
      {showcase}
      <PainPoints />
      <MotionSolution />
      <MotionFeatures />
      <MotionFlowDiagram />
      <HowItWorks />
      <MotionTiers monthInMotion={monthInMotion} tiers={tiers} />
      <MotionPlus motionPlus={motionPlus} networkJoin={networkJoin} />
      <Testimonials />
      <MotionPricing />
      <MotionCTA />
    </>
  );
}
