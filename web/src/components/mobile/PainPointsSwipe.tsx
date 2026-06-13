"use client";

import { H2, Kicker, Section, themeBodyStyle } from "@/components/bmkrs/surfaces";
import type { PainPoint } from "@/lib/content/expansion-v2";
import { SwipeRow } from "./SwipeRow";
import { bmkrs, mono } from "./tokens";

export function PainPointsSwipe({ points }: { points: PainPoint[] }) {
  return (
    <Section theme="ink">
      <Kicker theme="ink">why people call us</Kicker>
      <H2 theme="ink">you usually arrive with one of these.</H2>
      <div className="mt-[var(--space-block)]">
        <SwipeRow
          ariaLabel="common problems"
          desktopGridClass="md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-2"
        >
          {points.map((point) => (
            <article
              key={point.number}
              className="h-full rounded-xl p-5"
              style={{ background: bmkrs.inkRaised, border: `1px solid ${bmkrs.rule}` }}
            >
              <p className="mb-2 text-[12px] text-accent" style={mono}>
                {point.number}
              </p>
              <h3 className="mb-2 text-lg font-medium leading-snug" style={{ color: bmkrs.paper }}>
                {point.headline}
              </h3>
              <p className="text-[14px] leading-relaxed" style={themeBodyStyle("ink")}>
                {point.body}
              </p>
            </article>
          ))}
        </SwipeRow>
      </div>
    </Section>
  );
}
