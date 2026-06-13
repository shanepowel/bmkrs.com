"use client";

import { SwipeRow, Surface, Kicker, H2, themeBodyStyle, tokens } from "@bmkrs/ui";
import type { PainPoint } from "@/lib/content/expansion-v2";

export function PainPointsSwipe({ points }: { points: PainPoint[] }) {
  return (
    <Surface theme="ink">
      <div className="heading-group">
        <Kicker theme="ink">why people call us</Kicker>
        <H2 theme="ink">you usually arrive with one of these.</H2>
      </div>
      <div className="block-gap">
        <SwipeRow
          ariaLabel="common problems"
          desktopGridClass="md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4"
        >
          {points.map((point) => (
            <article
              key={point.number}
              className="flex h-full min-h-[12rem] flex-col rounded-xl p-6"
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
              <h3 className="mb-2 text-h3 font-medium leading-[var(--lh-heading)]" style={{ color: tokens.color.paper }}>
                {point.headline}
              </h3>
              <p className="text-body-sm" style={themeBodyStyle("ink")}>
                {point.body}
              </p>
            </article>
          ))}
        </SwipeRow>
      </div>
    </Surface>
  );
}

export { SwipeRow } from "@bmkrs/ui";
