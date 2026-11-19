import type { Metadata } from "next";
import { MotionPageViewReworked } from "@/components/motion/MotionPageViewReworked";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Motion",
  "An ongoing creative and digital partnership for brands, products and experiences ready to keep moving forward.",
  "/motion",
);

export default function MotionPage() {
  return (
    <main>
      <MotionPageViewReworked />
    </main>
  );
}
