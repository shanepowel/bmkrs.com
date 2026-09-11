import type { Metadata } from "next";
import { MotionPageViewReworked } from "@/components/motion/MotionPageViewReworked";
import { getMotionTiers } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "motion",
  "a rolling monthly partnership for brands that never stop talking. one senior team keeping your brand, voice, pr and growth moving, month after month. no lock-in.",
  "/motion",
);

export default async function MotionPage() {
  const tiers = await getMotionTiers();
  return (
    <main>
      <MotionPageViewReworked tiers={tiers} />
    </main>
  );
}
