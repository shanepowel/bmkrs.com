import { Link } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import { PageMeta } from "../components/shared/PageMeta"
import { Nav } from "../components/layout/Nav"
import { Footer } from "../components/layout/Footer"
import { SectionLabel } from "../components/shared/SectionLabel"

const PHASES = [
  {
    num: "01",
    title: "ASSESS",
    h3: "We start by understanding what's actually there.",
    body: "Before any implementation or build begins, we run a structured assessment. For transformation engagements: AI readiness, governance maturity, delivery capability, regulatory alignment. For growth engagements: current platform performance, user behaviour, channel mix, conversion blockers.",
    outputs: "Outputs: Readiness Report · Prioritised Roadmap · Defined Success Metrics",
    timeline: "Timeline: 2–4 weeks depending on scope.",
  },
  {
    num: "02",
    title: "IMPLEMENT",
    h3: "We build it with you — not for you.",
    body: "Implementation is always embedded. Our practitioners work inside your teams, delivering within your existing structures — not in a parallel workstream that disappears at the end of the contract.",
    outputs: "Outputs: Working delivery · Governance integration · Weekly stakeholder reporting",
    note: "Transformation: AI implementation, governance frameworks, agile operating models. Growth: Platform builds, campaign deployment, UX improvements.",
  },
  {
    num: "03",
    title: "AMPLIFY",
    h3: "We build the capability so you don't need us again.",
    body: "The measure of a successful engagement is whether your teams can own it independently twelve months later. Every implementation phase includes a structured Amplify programme — training, documentation, Centre of Excellence setup, and handover.",
    outputs: "Outputs: Internal capability programme · Knowledge transfer documentation · 3-month check-in",
  },
]

const PRINCIPLES = [
  "Governance-first — we never skip the readiness work, regardless of time pressure",
  "Embedded, not external — our practitioners work inside your teams",
  "Sector-literate — we understand the constraints of your industry, not just best-practice theory",
  "Honest about fit — if you're not ready for something, we'll tell you before you spend the budget",
  "Outcomes over outputs — every phase has a defined success metric you sign off before we start",
]

export function HowWeWork() {
  const [refHero, visHero] = useReveal(0.2)
  const [refPhases, visPhases] = useReveal(0.08)
  const [refPrinciples, visPrinciples] = useReveal(0.08)
  return (
    <>
      <PageMeta
        title="How We Work | Amplified"
        description="Every engagement runs through three phases: Assess, Implement, Amplify. Defined outputs, governance checkpoints, and handover built in."
        path="/how-we-work"
      />
      <Nav />
      <main style={{ paddingTop: 80 }}>
        <section
          ref={refHero}
          className={`reveal ${visHero ? "in-view" : ""}`}
          style={{
            padding: "var(--section-py) var(--grid-gap)",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
          }}
        >
          <SectionLabel>THE AMP MODEL</SectionLabel>
          <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "var(--text-3xl)", marginBottom: 16 }}>
            How We Work
          </h1>
          <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", maxWidth: 640 }}>
            Every engagement — transformation or growth — runs through three phases. Each has defined outputs, governance checkpoints, and a handover plan built in.
          </p>
        </section>

        <section
          ref={refPhases}
          className={`reveal ${visPhases ? "in-view" : ""}`}
          style={{
            padding: "0 var(--grid-gap) var(--section-py)",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
          }}
        >
          {PHASES.map((phase, i) => (
            <div
              key={phase.num}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: 32,
                marginBottom: 48,
                position: "relative",
              }}
            >
              {i < PHASES.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    left: 39,
                    top: 100,
                    bottom: -48,
                    width: 2,
                    background: "var(--border)",
                  }}
                />
              )}
              <div>
                <span
                  style={{
                    fontFamily: "Syne",
                    fontWeight: 800,
                    fontSize: "var(--text-2xl)",
                    color: "var(--accent)",
                  }}
                >
                  {phase.num}
                </span>
              </div>
              <div>
                <h3 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginBottom: 12 }}>
                  — {phase.title}
                </h3>
                <h4 style={{ fontFamily: "Syne", fontWeight: 600, fontSize: "var(--text-lg)", marginBottom: 12 }}>
                  {phase.h3}
                </h4>
                <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 12 }}>
                  {phase.body}
                </p>
                <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                  {phase.outputs}
                </p>
                {phase.timeline && (
                  <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: 8 }}>
                    {phase.timeline}
                  </p>
                )}
                {phase.note && (
                  <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: 12 }}>
                    {phase.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>

        <section
          ref={refPrinciples}
          className={`reveal ${visPrinciples ? "in-view" : ""}`}
          style={{
            padding: "var(--section-py) var(--grid-gap)",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            borderTop: "1px solid var(--border)",
          }}
        >
          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 24 }}>
            Working Principles
          </h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", marginBottom: 20 }}>
            Applies to all engagements.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {PRINCIPLES.map((p, i) => (
              <li
                key={i}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "DM Sans",
                  lineHeight: 1.5,
                }}
              >
                {p}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--accent)",
                color: "#0A0A0A",
                fontFamily: "Syne",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
              }}
            >
              Start a Conversation →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
