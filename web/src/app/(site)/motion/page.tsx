import type { Metadata } from "next";
import { MotionShowcase } from "@/components/bmkrs/MotionShowcase";
import { MotionPageView } from "@/components/motion";
import { motionMonthInMotion } from "@/lib/content/expansion-v2";
import { getMotionContent, getMotionTiers, getSiteSettings } from "@/lib/content";
import { resolveNetworkJoinUrl } from "@/lib/urls";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "motion",
  "a rolling monthly partnership for brands that never stop talking. one senior team keeping your brand, voice, pr and growth moving, month after month. no lock-in.",
  "/motion",
);

export default async function MotionPage() {
  const [tiers, motion, settings] = await Promise.all([
    getMotionTiers(),
    getMotionContent(),
    getSiteSettings(),
  ]);
  const networkJoin = resolveNetworkJoinUrl(settings);

  return (
    <main>
      <MotionPageView
        showcase={<MotionShowcase />}
        tiers={tiers}
        motionPlus={motion.motionPlus}
        monthInMotion={motionMonthInMotion}
        networkJoin={networkJoin}
      />
    </main>
  );
}
