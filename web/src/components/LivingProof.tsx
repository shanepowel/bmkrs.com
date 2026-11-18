// "one vision, infinite teams" — living proof element. pure css keyframes;
// reduced-motion collapses to a single static team + the facts row.
"use client";

import { StatusDot, tokens } from "@bmkrs/ui";

export type ProofTeam = {
  forWork: string;
  core: string[];
  benchPartner: string;
};

export type ProofFact = { value: string; label: string; accent?: boolean };

const DEFAULT_TEAMS: ProofTeam[] = [
  { forWork: "a product build", core: ["product", "ux", "engineering"], benchPartner: "delivery" },
  { forWork: "an ai implementation", core: ["ai", "governance", "product"], benchPartner: "data" },
  { forWork: "a motion engagement", core: ["product", "ai", "ops"], benchPartner: "engineering" },
];

const DEFAULT_FACTS: ProofFact[] = [
  { value: "17+", label: "years shipping" },
  { value: "3", label: "phases: assess, implement, amplify" },
  { value: "days", label: "to assemble, not months" },
  { value: "1", label: "point of contact", accent: true },
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
  const cycle = teams.length * 3;

  return (
    <div
      className="lp-wrap"
      style={{ background: tokens.color.ink, border: `1px solid ${tokens.color.ruleInk}` }}
    >
      <p className="lp-kicker" style={{ color: tokens.color.orange }}>
        {kicker}
      </p>
      <p className="lp-heading" style={{ color: tokens.color.paper }}>
        {heading}
      </p>

      <div className="lp-grid">
        <div className="lp-node-col">
          <div className="lp-node" style={{ borderColor: tokens.color.orange }}>
            <span className="lp-node-label lp-pulse" style={{ color: tokens.color.paper }}>
              bmkrs
              <StatusDot variant="solid" className="ml-0.5 inline-block align-baseline" />
            </span>
          </div>
          <p className="lp-node-cap" style={{ color: tokens.color.faint }}>
            one vision
          </p>
        </div>

        <div className="lp-teams" aria-live="off">
          {teams.map((team, i) => (
            <div
              key={team.forWork}
              className="lp-team"
              style={{
                animationDelay: `${(cycle / teams.length) * i}s`,
                animationDuration: `${cycle}s`,
              }}
            >
              <p className="lp-team-for" style={{ color: tokens.color.orange }}>
                → team spun up for {team.forWork}
              </p>
              <div className="lp-pills">
                {team.core.map((d) => (
                  <span
                    key={d}
                    className="lp-pill"
                    style={{
                      color: tokens.color.body,
                      background: tokens.color.inkRaised,
                      borderColor: tokens.color.rule,
                    }}
                  >
                    {d}
                  </span>
                ))}
                <span
                  className="lp-pill"
                  style={{
                    color: tokens.color.paper,
                    background: tokens.color.inkRaised,
                    borderColor: tokens.color.orange,
                  }}
                >
                  + partner: {team.benchPartner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lp-facts" style={{ borderColor: tokens.color.rule }}>
        {facts.map((f) => (
          <span key={f.label} className="lp-fact" style={{ color: tokens.color.faint }}>
            <span style={{ color: f.accent ? tokens.color.orange : tokens.color.paper }}>{f.value}</span>{" "}
            {f.label}
          </span>
        ))}
      </div>

      <style>{`
        .lp-wrap { border-radius: var(--bmkrs-radius-card, 24px); padding: clamp(1.5rem, 4vw, 1.875rem); overflow: hidden; }
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
