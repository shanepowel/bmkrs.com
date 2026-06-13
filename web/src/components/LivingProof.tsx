// components/LivingProof.tsx
// "one vision, infinite teams" — a living proof element. the bmkrs vision node
// holds steady while teams visibly assemble and dissolve beside it, each
// pulling a partner from the bench. demonstrates the scale claim instead of
// stating it. pure css keyframes (no framer). reduced-motion collapses to a
// single static team + the facts row.
//
// data: `teams` is a prop. hardcode now; later pass live compositions from the
// bench api (shape is intentionally simple). DO NOT fetch inside this
// component — keep it presentational; the page passes data in.
"use client";

const tokens = {
  ink: "#181613",
  inkRaised: "#211f1b",
  paper: "#F1EFE8",
  body: "#D3D1C7",
  faint: "#7d7b74",
  orange: "#FF4D00",
  rule: "rgba(241,239,232,0.16)",
} as const;

export type ProofTeam = {
  /** the work this team was spun up for, e.g. "a launch" */
  forWork: string;
  /** core disciplines on the team (mono pills) */
  core: string[];
  /** the partner pulled from the bench (highlighted pill) */
  benchPartner: string;
};

export type ProofFact = { value: string; label: string; accent?: boolean };

const DEFAULT_TEAMS: ProofTeam[] = [
  { forWork: "a launch", core: ["brand", "voice", "pr"], benchPartner: "motion" },
  { forWork: "a rebrand + build", core: ["identity", "product", "growth"], benchPartner: "engineering" },
  { forWork: "an always-on retainer", core: ["strategy", "content", "campaigns"], benchPartner: "3d" },
];

const DEFAULT_FACTS: ProofFact[] = [
  { value: "17+", label: "years building" },
  { value: "4", label: "disciplines per team" },
  { value: "days", label: "to assemble, not months" },
  { value: "7+", label: "partners on the bench, growing", accent: true },
];

export default function LivingProof({
  teams = DEFAULT_TEAMS,
  facts = DEFAULT_FACTS,
  kicker = "one vision. infinite teams.",
  heading = "we don't staff up. we spin up.",
}: {
  teams?: ProofTeam[];
  facts?: ProofFact[];
  kicker?: string;
  heading?: string;
}) {
  // each team gets an evenly distributed animation delay across the cycle.
  const cycle = teams.length * 3; // seconds; 3s visible window per team

  return (
    <div className="lp-wrap" style={{ background: tokens.ink, border: `1px solid ${tokens.rule}` }}>
      <p className="lp-kicker" style={{ color: tokens.orange }}>{kicker}</p>
      <p className="lp-heading" style={{ color: tokens.paper }}>{heading}</p>

      <div className="lp-grid">
        {/* the vision node */}
        <div className="lp-node-col">
          <div className="lp-node" style={{ borderColor: tokens.orange }}>
            <span className="lp-node-label lp-pulse" style={{ color: tokens.paper }}>
              bmkrs<span style={{ color: tokens.orange }}>.</span>
            </span>
          </div>
          <p className="lp-node-cap" style={{ color: tokens.faint }}>one vision</p>
        </div>

        {/* the forming teams (absolutely stacked; css cycles them) */}
        <div className="lp-teams" aria-live="off">
          {teams.map((team, i) => (
            <div
              key={team.forWork}
              className="lp-team"
              style={{ animationDelay: `${(cycle / teams.length) * i}s`, animationDuration: `${cycle}s` }}
            >
              <p className="lp-team-for" style={{ color: tokens.orange }}>
                → team spun up for {team.forWork}
              </p>
              <div className="lp-pills">
                {team.core.map((d) => (
                  <span key={d} className="lp-pill" style={{ color: tokens.body, background: tokens.inkRaised, borderColor: tokens.rule }}>
                    {d}
                  </span>
                ))}
                <span className="lp-pill" style={{ color: tokens.paper, background: tokens.inkRaised, borderColor: tokens.orange }}>
                  + partner: {team.benchPartner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* grounding facts */}
      <div className="lp-facts" style={{ borderColor: tokens.rule }}>
        {facts.map((f) => (
          <span key={f.label} className="lp-fact" style={{ color: tokens.faint }}>
            <span style={{ color: f.accent ? tokens.orange : tokens.paper }}>{f.value}</span> {f.label}
          </span>
        ))}
      </div>

      <style>{`
        .lp-wrap { border-radius: 16px; padding: clamp(1.5rem, 4vw, 1.875rem); overflow: hidden; }
        .lp-kicker { font-family: var(--font-mono, monospace); font-size: 0.8125rem; letter-spacing: 0.08em; margin: 0 0 0.375rem; }
        .lp-heading { font-weight: 500; font-size: clamp(1.375rem, 3vw, 1.5rem); letter-spacing: -0.02em; margin: 0 0 1.5rem; max-width: 24ch; line-height: 1.1; }
        .lp-grid { display: grid; grid-template-columns: auto 1fr; gap: 1.375rem; align-items: center; }
        .lp-node-col { text-align: center; }
        .lp-node { width: 84px; height: 84px; border-radius: 50%; border-width: 1px; border-style: solid; display: flex; align-items: center; justify-content: center; }
        .lp-node-label { font-weight: 500; font-size: 0.9375rem; }
        .lp-node-cap { font-family: var(--font-mono, monospace); font-size: 0.5625rem; margin: 0.5rem 0 0; }
        .lp-teams { position: relative; min-height: 120px; }
        .lp-team { position: absolute; inset: 0; opacity: 0; animation-name: lp-cycle; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        .lp-team-for { font-family: var(--font-mono, monospace); font-size: 0.5625rem; margin: 0 0 0.5625rem; }
        .lp-pills { display: flex; flex-wrap: wrap; gap: 0.4375rem; }
        .lp-pill { font-family: var(--font-mono, monospace); font-size: 0.6875rem; border-width: 1px; border-style: solid; border-radius: 999px; padding: 0.3125rem 0.6875rem; }
        .lp-facts { display: flex; flex-wrap: wrap; gap: 1.125rem; border-top-width: 1px; border-top-style: solid; margin-top: 1.5rem; padding-top: 1rem; }
        .lp-fact { font-family: var(--font-mono, monospace); font-size: 0.625rem; }
        .lp-pulse { animation: lp-pulse 2s ease-in-out infinite; }

        /* visible window = (3s / cycle) of the loop, with fade in/out either side */
        @keyframes lp-cycle {
          0%, 16%   { opacity: 0; transform: translateY(8px); }
          22%, 40%  { opacity: 1; transform: none; }
          46%, 100% { opacity: 0; transform: translateY(-8px); }
        }
        @keyframes lp-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.45; } }

        @media (max-width: 640px) {
          .lp-grid { grid-template-columns: 1fr; gap: 1rem; }
          .lp-node-col { display: flex; align-items: center; gap: 0.75rem; }
          .lp-node { width: 60px; height: 60px; }
          .lp-node-label { font-size: 0.75rem; }
          .lp-node-cap { margin: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .lp-team { animation: none; opacity: 0; }
          .lp-team:first-child { opacity: 1; position: relative; }
          .lp-pulse { animation: none; }
        }
      `}</style>
    </div>
  );
}
