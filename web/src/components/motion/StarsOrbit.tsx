import { SURFACE } from "@/lib/surfaces";

const ink = SURFACE.ink;
const mono = { fontFamily: "var(--font-mono, ui-monospace, monospace)" } as const;

type Star = {
  /** starting angle on the ring, degrees */
  at: number;
  /** px diameter */
  size: number;
  tone: "paper" | "dim" | "orange";
  /** dimmer static opacity for depth */
  twinkle?: boolean;
  label?: string;
};

type Ring = {
  /** ring diameter as % of the container */
  d: number;
  /** hairline ring opacity */
  line: number;
  stars: Star[];
};

const RINGS: Ring[] = [
  {
    d: 46,
    line: 0.18,
    stars: [
      { at: 0, size: 7, tone: "orange" },
      { at: 180, size: 4, tone: "paper", twinkle: true },
    ],
  },
  {
    d: 70,
    line: 0.14,
    stars: [
      { at: 0, size: 5, tone: "paper", twinkle: true, label: "content" },
      { at: 130, size: 6, tone: "dim" },
      { at: 235, size: 4, tone: "orange", twinkle: true, label: "campaigns" },
    ],
  },
  {
    d: 94,
    line: 0.1,
    stars: [
      { at: 0, size: 5, tone: "paper", label: "strategy" },
      { at: 95, size: 4, tone: "dim", twinkle: true },
      { at: 185, size: 7, tone: "orange", label: "growth" },
      { at: 275, size: 3, tone: "paper", twinkle: true },
    ],
  },
];

const FIELD: [number, number, number][] = [
  [8, 18, 0.35],
  [88, 30, 0.3],
  [14, 78, 0.25],
  [82, 84, 0.3],
  [50, 4, 0.2],
];

const TONE = {
  paper: { background: ink.text, boxShadow: "none" },
  dim: { background: ink.body, boxShadow: "none" },
  orange: { background: ink.accent, boxShadow: "0 0 9px rgba(255,77,0,0.8)" },
} as const;

export function StarsOrbit() {
  return (
    <div className="orbit-wrap relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden>
      {RINGS.map((ring) => {
        const inset = `${(100 - ring.d) / 2}%`;
        return (
          <div key={ring.d} className="absolute" style={{ inset }}>
            <div
              className="absolute inset-0 rounded-full"
              style={{ border: `1px solid rgba(241,239,232,${ring.line})` }}
            />
            {ring.stars.map((star) => (
              <div
                key={`${ring.d}-${star.at}`}
                className="absolute inset-0"
                style={{ rotate: `${star.at}deg` }}
              >
                <span
                  className="absolute left-1/2 top-0 rounded-full"
                  style={{
                    width: star.size,
                    height: star.size,
                    marginLeft: -star.size / 2,
                    marginTop: -star.size / 2,
                    opacity: star.twinkle ? 0.65 : 1,
                    ...TONE[star.tone],
                  }}
                />
                {star.label && (
                  <span
                    className="absolute left-1/2 top-0"
                    style={{ transform: "translate(-50%, -50%)", marginTop: -16 }}
                  >
                    <span
                      className="inline-block"
                      style={{
                        rotate: `${-star.at}deg`,
                        ...mono,
                        fontSize: 11,
                        color: ink.faint,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {star.label}
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>
        );
      })}

      {FIELD.map(([left, top, opacity]) => (
        <span
          key={`${left}-${top}`}
          className="absolute h-[2px] w-[2px] rounded-full"
          style={{ left: `${left}%`, top: `${top}%`, background: ink.text, opacity }}
        />
      ))}

      <div
        className="absolute text-center"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <p
          className="font-medium"
          style={{
            fontSize: "clamp(2.5rem,4vw,3.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: ink.text,
          }}
        >
          motion
          <span
            className="inline-block rounded-full align-baseline"
            style={{
              width: "0.13em",
              height: "0.13em",
              background: ink.accent,
              marginLeft: "0.04em",
            }}
          />
        </p>
        <p style={{ ...mono, color: ink.faint }} className="mt-2.5 text-[11px]">
          the brand, kept moving
        </p>
      </div>
    </div>
  );
}

export const STARS_ORBIT_DISCIPLINES =
  "strategy · content · campaigns · websites · creative · messaging · growth";
