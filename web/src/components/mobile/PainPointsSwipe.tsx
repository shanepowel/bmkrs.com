"use client";

import { SwipeRow, Surface, Kicker, H2, themeBodyStyle, tokens } from "@bmkrs/ui";
import type { PainPoint } from "@/lib/content/expansion-v2";

export function PainPointsSwipe({ points }: { points: PainPoint[] }) {
  return (
    <Surface theme="ink">
      <Kicker theme="ink">why people call us</Kicker>
      <H2 theme="ink">you usually arrive with one of these.</H2>
      <div className="mt-[var(--bmkrs-space-block)]">
        <SwipeRow
          ariaLabel="common problems"
          desktopGridClass="md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-2"
        >
          {points.map((point) => (
            <article
              key={point.number}
              className="h-full rounded-xl p-5"
              style={{
                background: tokens.color.inkRaised,
                border: `1px solid ${tokens.color.rule}`,
              }}
            >
              <p
                className="mb-2 text-meta text-accent"
                style={{ fontFamily: tokens.font.mono, color: tokens.color.orange }}
              >
                {point.number}
              </p>
              <h3
                className="mb-2 text-lg font-medium leading-snug"
                style={{ color: tokens.color.paper }}
              >
                {point.headline}
              </h3>
              <p className="text-[14px] leading-relaxed" style={themeBodyStyle("ink")}>
                {point.body}
              </p>
            </article>
          ))}
        </SwipeRow>
      </div>
    </Surface>
  );
}

// re-export for consumers that import from mobile/
export { SwipeRow } from "@bmkrs/ui";
