import type { Metadata } from "next";
import { cookies } from "next/headers";
import { MotionShowcase } from "@/components/bmkrs/MotionShowcase";
import { MotionAbBadge } from "@/components/motion/MotionAbBadge";
import { MotionPageView } from "@/components/motion";
import { MotionPageViewReworked } from "@/components/motion/MotionPageViewReworked";
import { motionMonthInMotion } from "@/lib/content/expansion-v2";
import { getMotionContent, getMotionTiers, getSiteSettings } from "@/lib/content";
import {
  MOTION_AB_COOKIE,
  parseMotionAbOverride,
  resolveMotionAbVariant,
  type MotionAbVariant,
} from "@/lib/motion-ab";
import { resolveNetworkJoinUrl } from "@/lib/urls";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "motion",
  "a rolling monthly partnership for brands that never stop talking. one senior team keeping your brand, voice, pr and growth moving, month after month. no lock-in.",
  "/motion",
);

type MotionPageProps = {
  searchParams: Promise<{ motion?: string }>;
};

export default async function MotionPage({ searchParams }: MotionPageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const override = parseMotionAbOverride(params.motion);
  const forced = override !== null;
  const variant: MotionAbVariant = resolveMotionAbVariant({
    override: params.motion,
    cookie: cookieStore.get(MOTION_AB_COOKIE)?.value,
  });

  if (variant === "reworked") {
    return (
      <main data-motion-ab="reworked">
        <MotionPageViewReworked />
        <MotionAbBadge variant={variant} forced={forced} />
      </main>
    );
  }

  const [tiers, motion, settings] = await Promise.all([
    getMotionTiers(),
    getMotionContent(),
    getSiteSettings(),
  ]);
  const networkJoin = resolveNetworkJoinUrl(settings);

  return (
    <main data-motion-ab="control">
      <MotionPageView
        showcase={<MotionShowcase />}
        tiers={tiers}
        motionPlus={motion.motionPlus}
        monthInMotion={motionMonthInMotion}
        networkJoin={networkJoin}
      />
      <MotionAbBadge variant={variant} forced={forced} />
    </main>
  );
}
