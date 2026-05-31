import { useState } from "react"
import { useReveal } from "../../hooks/useReveal"
import { SectionLabel } from "../shared/SectionLabel"
import { SectorPanel } from "../shared/SectorPanel"

const SECTORS = [
  {
    id: "infrastructure",
    label: "Infrastructure & Construction",
    problem:
      "Major infrastructure programmes run on waterfall governance and PMO rigour. AI adoption threatens to bypass that accountability — and delivery directors know it.",
    deliverables: [
      "AI governance frameworks built for programme environments",
      "Squad-based delivery that integrates with existing PMO structures",
      "Structured agile that works alongside NEC contracts and stage-gate programmes",
      "Digital capability building that doesn't require replacing your workforce",
    ],
    ctaHref: "/sectors/infrastructure",
  },
  {
    id: "energy",
    label: "Energy & Utilities",
    problem:
      "Energy organisations face regulatory scrutiny and operational risk. AI implementations need to pass governance gates that most consultancies have never encountered.",
    deliverables: [
      "Responsible AI frameworks aligned to OFGEM and sector regulation",
      "Structured delivery that accommodates safety-critical review cycles",
      "AI readiness audits before implementation begins",
      "Capability programmes for technically diverse workforces",
    ],
    ctaHref: "/sectors/energy",
  },
  {
    id: "financial",
    label: "Financial Services",
    problem:
      "FS organisations live under regulatory microscopes. AI governance isn't a nice-to-have — it's an FCA expectation and a commercial necessity.",
    deliverables: [
      "EU AI Act and FCA Consumer Duty-aligned governance frameworks",
      "Explainability and auditability built into every AI delivery",
      "Agile delivery structured around compliance gates and change management",
      "Model risk management and AI assurance frameworks",
    ],
    ctaHref: "/sectors/financial",
  },
  {
    id: "public-sector",
    label: "Public Sector",
    problem:
      "Public sector organisations must demonstrate value for money, transparent governance, and accountable delivery. Most digital partners struggle with that combination. We were trained on it.",
    deliverables: [
      "DDaT-aligned delivery models",
      "AI governance compatible with GDS standards and the UK AI framework",
      "Squad models that work within procurement and assurance frameworks",
      "Capability programmes aligned to Digital, Data and Technology profession standards",
    ],
    ctaHref: "/sectors/public-sector",
  },
]

export function SectorTabs() {
  const [ref, vis] = useReveal(0.08)
  const [active, setActive] = useState("infrastructure")
  const sector = SECTORS.find((s) => s.id === active) || SECTORS[0]
  return (
    <section
      ref={ref}
      className={`reveal ${vis ? "in-view" : ""}`}
      style={{
        padding: "var(--section-py) var(--grid-gap)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      <SectionLabel>YOUR SECTOR</SectionLabel>
      <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 12 }}>
        Sectors We're Built For
      </h2>
      <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", marginBottom: 32 }}>
        The Digital Transformation track is specifically designed for regulated and project-driven industries.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0,
          borderBottom: "1px solid var(--border)",
          marginBottom: 32,
        }}
      >
        {SECTORS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            style={{
              padding: "14px 20px",
              background: "none",
              border: "none",
              borderBottom: active === s.id ? "2px solid var(--accent)" : "2px solid transparent",
              color: active === s.id ? "var(--text-primary)" : "var(--text-muted)",
              fontFamily: "DM Sans",
              fontSize: 14,
              cursor: "pointer",
              marginBottom: -1,
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <SectorPanel
        name={sector.label}
        problem={sector.problem}
        deliverables={sector.deliverables}
        ctaHref={sector.ctaHref}
      />
    </section>
  )
}
