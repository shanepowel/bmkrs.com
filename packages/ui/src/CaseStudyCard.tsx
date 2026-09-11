import Link from "next/link";
import type { ReactNode } from "react";
import { SURFACE, tokens, type SurfaceTheme } from "./tokens";

export type CaseStudyCardProps = {
  href: string;
  category: string;
  title: string;
  /** Bold lead-in for a hard number, e.g. "15k". Omit when the proof is qualitative. */
  statValue?: string;
  /** Rest of the proof line, or the full line when there is no statValue. */
  stat?: string;
  image: ReactNode;
  theme?: SurfaceTheme;
};

export function CaseStudyCard({
  href,
  category,
  title,
  statValue,
  stat,
  image,
  theme = "ink",
}: CaseStudyCardProps) {
  const surface = SURFACE[theme];
  const proof = [statValue, stat].filter(Boolean).join(" ").trim();

  return (
    <Link
      href={href}
      className="group block overflow-hidden border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{
        background: theme === "paper" ? surface.bg : tokens.color.inkRaised,
        borderColor: surface.rule,
        outlineColor: surface.accent,
        color: surface.text,
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: tokens.color.paper }}>
        <div className="relative h-full w-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]">
          {image}
        </div>
      </div>
      <div className="p-5">
        <span
          className="font-mono text-meta lowercase"
          style={{ color: surface.accent, letterSpacing: tokens.tracking.kicker }}
        >
          {category}
        </span>
        <h3 className="mt-1.5 text-lg font-medium" style={{ color: surface.text }}>
          {title}
        </h3>
        {proof ? (
          <p className="mt-1 text-body-sm" style={{ color: surface.body }}>
            {statValue ? (
              <b className="font-medium" style={{ color: surface.text }}>
                {statValue}
              </b>
            ) : null}
            {statValue && stat ? " " : null}
            {stat}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
