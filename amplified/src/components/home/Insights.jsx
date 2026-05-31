import { Link } from "react-router-dom"
import { useReveal } from "../../hooks/useReveal"
import { SectionLabel } from "../shared/SectionLabel"
import { InsightCard } from "../shared/InsightCard"

const ARTICLES = [
  {
    category: "GOVERNANCE",
    title: "The AI Governance Gap in Infrastructure Delivery",
    description: "Why project-driven organisations need a different framework — and why most AI consultancies won't tell you that.",
    readTime: "5 min read",
    href: "/insights/ai-governance-gap-infrastructure",
  },
  {
    category: "AGILE",
    title: "Squad-Based Delivery in Regulated Industries",
    description: "How to run agile delivery when your PMO and stage gates are non-negotiable.",
    readTime: "4 min read",
    href: "/insights/squad-delivery-regulated",
  },
  {
    category: "DIGITAL GROWTH",
    title: "From Build to Scale: Platform Handover That Works",
    description: "Why documentation and capability transfer matter as much as the build itself.",
    readTime: "6 min read",
    href: "/insights/platform-handover",
  },
]

export function Insights() {
  const [ref, vis] = useReveal(0.08)
  return (
    <section
      ref={ref}
      className={`reveal ${vis ? "in-view" : ""}`}
      style={{
        padding: "var(--section-py) var(--grid-gap)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        background: "var(--white)",
        color: "var(--text-dark)",
      }}
    >
      <SectionLabel>INSIGHTS</SectionLabel>
      <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 12 }}>
        Practical thinking for delivery-led organisations
      </h2>
      <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", marginBottom: 40 }}>
        No theory for its own sake. Clear, sector-literate analysis from practitioners.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "var(--grid-gap)",
        }}
        className="insights-grid"
      >
        {ARTICLES.map((a) => (
          <InsightCard key={a.href} {...a} />
        ))}
      </div>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <Link
          to="/insights"
          style={{
            fontFamily: "Syne",
            fontWeight: 600,
            fontSize: 14,
            color: "var(--accent)",
          }}
        >
          View all insights →
        </Link>
      </div>
    </section>
  )
}
