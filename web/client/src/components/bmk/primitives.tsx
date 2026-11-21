'use client';

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-intersection-observer";
import { Eyebrow, Text } from "@/components/system";

/** Coral chalk line that snaps across when scrolled into view. */
export function SnapLine({ className = "" }: { className?: string }) {
  const [ref, visible] = useReveal(0.4);
  return <div ref={ref} aria-hidden className={`bmk-snap ${visible ? "is-snapped" : ""} ${className}`} />;
}

/** Coral corner marks shown on hover inside a .bmk-tile. */
export function Corners() {
  return (
    <>
      <span aria-hidden className="bmk-corner tl" />
      <span aria-hidden className="bmk-corner br" />
    </>
  );
}

/** Small mono spec label pinned to the top-left of an image. */
export function FigLabel({ children }: { children: ReactNode }) {
  return (
    <span className="absolute left-0 top-0 z-10 bg-[#181F4F]/85 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85">
      {children}
    </span>
  );
}

export function revealStyle(visible: boolean, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  };
}

/** Section heading: section code, snap-line, eyebrow, title and optional lead/action. */
export function SectionHead({
  code,
  eyebrow,
  title,
  lead,
  action,
}: {
  code: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-12 lg:mb-16">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.12em] text-white/40">{code}</span>
        <SnapLine className="flex-1" />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
          <Text variant="h2" tone="white" className="text-3xl md:text-4xl lg:text-5xl">
            {title}
          </Text>
          {lead && (
            <Text variant="lead" tone="white-70" className="mt-5 max-w-2xl">
              {lead}
            </Text>
          )}
        </div>
        {action}
      </div>
    </div>
  );
}
