"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import { tokens } from "./tokens";

export type SwipeRowProps = {
  children: ReactNode;
  ariaLabel: string;
  /** When set, switches to a CSS grid from the md breakpoint up. */
  desktopGridClass?: string;
};

export function SwipeRow({
  children,
  ariaLabel,
  desktopGridClass = "md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4",
}: SwipeRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  const onScroll = () => {
    const el = ref.current;
    if (!el || items.length === 0) return;
    const cardW = el.scrollWidth / items.length;
    setActive(Math.round(el.scrollLeft / cardW));
  };

  return (
    <div>
      <div
        ref={ref}
        onScroll={onScroll}
        aria-label={ariaLabel}
        className={`swipe-row flex gap-[var(--grid-gap)] overflow-x-auto pb-1 ${desktopGridClass}`}
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((child, i) => (
          <div key={i} className="snap-card shrink-0" style={{ scrollSnapAlign: "start" }}>
            {child}
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-1.5 md:hidden" role="presentation">
        {items.map((_, i) => (
          <span
            key={i}
            className="h-[3px] rounded-full transition-all"
            style={{
              width: i === active ? 18 : 6,
              background: i === active ? tokens.color.orange : tokens.color.swipeInactive,
            }}
          />
        ))}
      </div>

      <style>{`
        .swipe-row::-webkit-scrollbar { display: none; }
        .swipe-row > .snap-card { width: 78vw; max-width: 320px; }
        @media (min-width: 768px) {
          .swipe-row.md\\:grid > .snap-card { width: auto; max-width: none; }
        }
      `}</style>
    </div>
  );
}
