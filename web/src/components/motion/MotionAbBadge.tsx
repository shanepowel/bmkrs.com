"use client";

import type { MotionAbVariant } from "@/lib/motion-ab";

/** Dev/QA badge — visible when forcing a variant via ?motion= */
export function MotionAbBadge({ variant, forced }: { variant: MotionAbVariant; forced: boolean }) {
  if (!forced && process.env.NODE_ENV === "production") return null;

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-[200] rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider"
      style={{
        background: "rgba(24,22,19,0.88)",
        color: "#f1efe8",
        border: "1px solid rgba(241,239,232,0.2)",
      }}
      aria-hidden
    >
      motion ab: {variant}
      {forced ? " (forced)" : ""}
    </div>
  );
}
