import { useState } from "react"
import { Nav } from "../../components/layout/Nav"
import { Footer } from "../../components/layout/Footer"
import { PageMeta } from "../../components/shared/PageMeta"
import { InsightCard } from "../../components/shared/InsightCard"

const FILTERS = ["ALL", "TRANSFORMATION", "DIGITAL GROWTH", "GOVERNANCE", "AGILE"]

const ARTICLES = [
  { category: "GOVERNANCE", title: "The AI Governance Gap in Infrastructure Delivery", description: "Why project-driven organisations need a different framework — and why most AI consultancies won't tell you that.", readTime: "5 min read", href: "/insights/ai-governance-gap-infrastructure" },
  { category: "AGILE", title: "Squad-Based Delivery in Regulated Industries", description: "How to run agile delivery when your PMO and stage gates are non-negotiable.", readTime: "4 min read", href: "/insights/squad-delivery-regulated" },
  { category: "DIGITAL GROWTH", title: "From Build to Scale: Platform Handover That Works", description: "Why documentation and capability transfer matter as much as the build itself.", readTime: "6 min read", href: "/insights/platform-handover" },
]

export function InsightsHub() {
  const [filter, setFilter] = useState("ALL")
  return (
    <>
      <PageMeta
        title="Insights | Amplified"
        description="Practical thinking for delivery-led organisations. No theory for its own sake."
        path="/insights"
      />
      <Nav />
      <main style={{ paddingTop: 100 }}>
        <section
          style={{
            padding: "var(--section-py) var(--grid-gap)",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
          }}
        >
          <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "var(--text-3xl)", marginBottom: 16 }}>
            Insights
          </h1>
          <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", marginBottom: 40 }}>
            Practical thinking for delivery-led organisations. No theory for its own sake.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 40,
            }}
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className="font-mono"
                style={{
                  fontSize: 12,
                  padding: "8px 16px",
                  background: filter === f ? "var(--accent)" : "transparent",
                  color: filter === f ? "#0A0A0A" : "var(--text-muted)",
                  border: `1px solid ${filter === f ? "var(--accent)" : "var(--border)"}`,
                  cursor: "pointer",
                }}
              >
                {f}
              </button>
            ))}
          </div>
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
        </section>
      </main>
      <Footer />
    </>
  )
}
