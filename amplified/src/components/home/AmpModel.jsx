import { useReveal } from "../../hooks/useReveal"
import { SectionLabel } from "../shared/SectionLabel"
import { AmpCard } from "../shared/AmpCard"

const TRANSFORMATION_CARDS = [
  {
    tag: "AMP 01",
    title: "AI Governance",
    tagline: "Responsible AI for regulated industries",
    description: "We build governance foundations before your teams write a line of code — frameworks that stand up to regulatory scrutiny, audit, and board challenge.",
    bullets: [
      "AI readiness assessments and risk frameworks",
      "Responsible AI policy and ethics governance",
      "EU AI Act and UK AI framework alignment",
      "Auditability and explainability standards",
      "Board-level AI risk reporting",
    ],
    href: "/ai-governance",
    track: "transformation",
  },
  {
    tag: "AMP 02",
    title: "AI Implementation",
    tagline: "End-to-end AI delivery within your governance",
    description: "We don't just advise. We embed with your teams and deliver AI capabilities that work inside your existing accountability structures — not around them.",
    bullets: [
      "AI use case prioritisation and proof of concept",
      "Production deployment with governance gates built in",
      "Integration with existing PMO and programme frameworks",
      "Handover with internal capability transfer",
    ],
    href: "/ai-implementation",
    track: "transformation",
  },
  {
    tag: "AMP 03",
    title: "Structured Delivery",
    tagline: "Agile without the chaos",
    description: "Squad-based delivery designed for organisations where PMO governance, stage gates, and contract structures are non-negotiable — not obstacles.",
    bullets: [
      "Agile operating model design for PM-heavy industries",
      "Squad implementation with PMO integration",
      "Hybrid agile/waterfall frameworks",
      "Programme-level reporting your board recognises",
    ],
    href: "/structured-delivery",
    track: "transformation",
  },
  {
    tag: "AMP 04",
    title: "Capability Building",
    tagline: "Build it in, not bolted on",
    description: "Every engagement ends with your teams running it independently. Product Owner programmes, Centres of Excellence, AI literacy — capability that compounds.",
    bullets: [
      "Product Owner and PM development programmes",
      "Centre of Excellence design and setup",
      "AI literacy for non-technical teams",
      "Embedded upskilling alongside live delivery",
    ],
    href: "/capability",
    track: "transformation",
  },
]

const GROWTH_CARDS = [
  {
    tag: "AMP 05",
    title: "Web & Platform Builds",
    tagline: "Platforms that perform and scale",
    description: "We design and build digital platforms, websites, and web applications — with the same delivery rigour we bring to enterprise transformation programmes.",
    bullets: [
      "Discovery, UX design, and technical architecture",
      "React / Next.js development with clean handover",
      "CMS integration, e-commerce, and API connectivity",
      "Post-launch optimisation and support",
    ],
    href: "/web-builds",
    track: "growth",
  },
  {
    tag: "AMP 06",
    title: "UX & Conversion",
    tagline: "Designed around your users, optimised for results",
    description: "User research, experience design, and conversion rate optimisation — grounded in evidence, not aesthetic preference.",
    bullets: [
      "User research and journey mapping",
      "Wireframing, prototyping, and usability testing",
      "Conversion rate optimisation",
      "Design systems and component libraries",
    ],
    href: "/ux-and-conversion",
    track: "growth",
  },
  {
    tag: "AMP 07",
    title: "Performance Marketing",
    tagline: "Growth that's measurable and compounding",
    description: "Paid search, SEO, and content strategy — built on data, accountable to commercial outcomes, not vanity metrics.",
    bullets: [
      "Paid search (Google / Microsoft Ads)",
      "SEO — technical, on-page, and link acquisition",
      "Content strategy and production",
      "Analytics, attribution, and reporting",
    ],
    href: "/performance-marketing",
    track: "growth",
  },
]

export function AmpModel() {
  const [ref, vis] = useReveal(0.08)
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
      <SectionLabel>HOW WE WORK</SectionLabel>
      <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 12 }}>
        We Have an Amp for That
      </h2>
      <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", marginBottom: 48 }}>
        Seven capabilities. Two tracks. One methodology.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr",
          gap: "var(--grid-gap)",
          alignItems: "start",
        }}
        className="amp-model-grid"
      >
        <div>
          <p
            className="font-mono"
            style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 20 }}
          >
            DIGITAL TRANSFORMATION
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--grid-gap)" }}>
            {TRANSFORMATION_CARDS.map((c) => (
              <AmpCard key={c.href} {...c} />
            ))}
          </div>
        </div>
        <div style={{ background: "var(--border)", minHeight: 1 }} aria-hidden />
        <div>
          <p
            className="font-mono"
            style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 20 }}
          >
            DIGITAL GROWTH
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--grid-gap)" }}>
            {GROWTH_CARDS.map((c) => (
              <AmpCard key={c.href} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
