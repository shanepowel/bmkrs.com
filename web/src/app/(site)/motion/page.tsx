import type { Metadata } from "next";
import { MotionPageViewReworked } from "@/components/motion/MotionPageViewReworked";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "motion",
  "a rolling monthly partnership for products that cannot go quiet. one senior team keeping your product and ai estate moving, month after month. no lock-in.",
  "/motion",
);

export default function MotionPage() {
  return (
    <main>
      <MotionPageViewReworked />
    </main>
  );
}
