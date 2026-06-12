import type { ReactNode } from "react";
import { C, mono } from "@/lib/bench-ui";
import { STARS_ORBIT_DISCIPLINES, StarsOrbit } from "./StarsOrbit";

export function MotionHeroSection({ children }: { children: ReactNode }) {
  return (
    <section className="overflow-hidden" style={{ background: C.ink, color: C.inkText }}>
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 pb-16 pt-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-20">
        <div className="min-w-0">{children}</div>
        <div className="hidden lg:block">
          <StarsOrbit />
        </div>
      </div>
      <div className="border-t px-6 pb-8 pt-4 lg:hidden" style={{ borderColor: C.inkRule }}>
        <p style={{ ...mono, color: C.inkFaint }} className="text-[12px] leading-relaxed">
          {STARS_ORBIT_DISCIPLINES}
        </p>
      </div>
    </section>
  );
}
