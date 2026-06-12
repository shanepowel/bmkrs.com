"use client";

import type { ReactNode } from "react";
import { MotionCTA } from "./MotionCTA";
import { MotionFeatures } from "./MotionFeatures";
import { MotionFlowDiagram } from "./MotionFlowDiagram";
import { MotionHero } from "./MotionHero";
import { MotionPlus } from "./MotionPlus";
import { MotionSolution } from "./MotionSolution";
import { MotionTiers } from "./MotionTiers";
import { PainPoints } from "./PainPoints";
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
      <MotionTiers monthInMotion={monthInMotion} tiers={tiers} />
      <MotionPlus motionPlus={motionPlus} networkJoin={networkJoin} />
      <MotionCTA />
    </>
  );
}
