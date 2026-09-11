import { SURFACE, tokens, type SurfaceTheme } from "./tokens";

export type TestimonialItem = {
  quote: string;
  attribution: string;
};

export function TestimonialGrid({
  items,
  theme = "paper",
}: {
  items: TestimonialItem[];
  theme?: SurfaceTheme;
}) {
  if (!items.length) return null;

  const surface = SURFACE[theme];
  const cols = items.length >= 3 ? "md:grid-cols-3" : items.length === 2 ? "md:grid-cols-2" : "";

  return (
    <div
      className={`grid grid-cols-1 gap-px ${cols}`}
      style={{ background: surface.rule, border: `1px solid ${surface.rule}` }}
    >
      {items.map((item) => (
        <figure
          key={item.attribution}
          className="flex flex-col gap-3.5 p-5"
          style={{ background: surface.bg }}
        >
          <blockquote className="text-body leading-relaxed" style={{ color: surface.body }}>
            &ldquo;{item.quote}&rdquo;
          </blockquote>
          <figcaption
            className="font-mono text-meta"
            style={{ color: surface.faint, letterSpacing: tokens.tracking.kicker }}
          >
            {item.attribution}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
