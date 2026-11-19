"use client";

import { tokens } from "@bmkrs/ui";

const mono = { fontFamily: tokens.font.mono } as const;

type Star = {
  at: number;
  size: number;
  tone: "paper" | "dim" | "orange";
  twinkle?: boolean;
  label?: string;
};

type Ring = {
  d: number;
  period: number;
  reverse?: boolean;
  line: number;
  stars: Star[];
};

/** Product-era orbit labels — not the old agency set. */
const RINGS: Ring[] = [
  {
    d: 46,
    period: 14,
    line: 0.18,
    stars: [
      { at: 0, size: 7, tone: "orange" },
      { at: 180, size: 4, tone: "paper", twinkle: true },
    ],
  },
  {
    d: 70,
    period: 26,
    reverse: true,
    line: 0.14,
    stars: [
      { at: 0, size: 5, tone: "paper", twinkle: true, label: "product" },
      { at: 130, size: 6, tone: "dim" },
      { at: 235, size: 4, tone: "orange", twinkle: true, label: "ai" },
    ],
  },
  {
    d: 94,
    period: 44,
    line: 0.1,
    stars: [
      { at: 0, size: 5, tone: "paper", label: "governance" },
      { at: 95, size: 4, tone: "dim", twinkle: true },
      { at: 185, size: 7, tone: "orange", label: "releases" },
      { at: 275, size: 3, tone: "paper", twinkle: true, label: "handover" },
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
  paper: { background: tokens.color.paper, boxShadow: "none" },
  dim: { background: tokens.color.body, boxShadow: "none" },
  orange: {
    background: tokens.color.orange,
    boxShadow: `0 0 9px ${tokens.color.orangeGlow}`,
  },
} as const;

export const STARS_ORBIT_DISCIPLINES =
  "product · ai · governance · releases · evaluation · handover · shipping · amplify";

export function StarsOrbit() {
  return (
    <div
      className="orbit-wrap relative mx-auto aspect-square w-full max-w-[min(100%,28rem)]"
      aria-hidden
    >
      {RINGS.map((ring) => {
        const inset = `${(100 - ring.d) / 2}%`;
        const spin = ring.reverse ? "orbit-spin-rev" : "orbit-spin";
        const counter = ring.reverse ? "orbit-spin" : "orbit-spin-rev";
        return (
          <div key={ring.d} className="absolute" style={{ inset }}>
            <div
              className="absolute inset-0 rounded-full"
              style={{ border: `1px solid rgba(241,239,232,${ring.line})` }}
            />
            {ring.stars.map((star) => (
              <div
                key={`${ring.d}-${star.at}`}
                className={`orbit-carrier absolute inset-0 ${spin}`}
                style={{
                  rotate: `${star.at}deg`,
                  animationDuration: `${ring.period}s`,
                }}
              >
                <span
                  className={`absolute left-1/2 top-0 rounded-full ${star.twinkle ? "orbit-twinkle" : ""}`}
                  style={{
                    width: star.size,
                    height: star.size,
                    marginLeft: -star.size / 2,
                    marginTop: -star.size / 2,
                    ...TONE[star.tone],
                  }}
                />
                {star.label ? (
                  <span
                    className="absolute left-1/2 top-0"
                    style={{ transform: "translate(-50%, -50%)", marginTop: -16 }}
                  >
                    <span
                      className={`orbit-carrier inline-block ${counter}`}
                      style={{
                        rotate: `${-star.at}deg`,
                        animationDuration: `${ring.period}s`,
                        ...mono,
                        fontSize: 11,
                        color: tokens.color.meta,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {star.label}
                    </span>
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        );
      })}

      {FIELD.map(([left, top, opacity]) => (
        <span
          key={`${left}-${top}`}
          className="absolute h-[2px] w-[2px] rounded-full"
          style={{ left: `${left}%`, top: `${top}%`, background: tokens.color.paper, opacity }}
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
            color: tokens.color.paper,
          }}
        >
          motion
          <span
            className="inline-block rounded-full align-baseline"
            style={{
              width: "0.13em",
              height: "0.13em",
              background: tokens.color.orange,
              marginLeft: "0.04em",
            }}
          />
        </p>
        <p style={{ ...mono, color: tokens.color.meta }} className="mt-2.5 text-[11px]">
          the product, kept shipping
        </p>
      </div>

      <style>{`
        @keyframes orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit-spin-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes orbit-twinkle { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .orbit-spin { animation-name: orbit-spin; animation-timing-function: linear; animation-iteration-count: infinite; }
        .orbit-spin-rev { animation-name: orbit-spin-rev; animation-timing-function: linear; animation-iteration-count: infinite; }
        .orbit-twinkle { animation: orbit-twinkle 4.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .orbit-carrier, .orbit-twinkle { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
