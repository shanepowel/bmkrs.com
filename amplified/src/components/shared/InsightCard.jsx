import { Link } from "react-router-dom"

export function InsightCard({ category, title, description, readTime, href }) {
  return (
    <Link
      to={href}
      style={{
        display: "block",
        border: "1px solid var(--border-light)",
        background: "var(--white)",
        padding: "24px",
        color: "var(--text-dark)",
        transition: "all 0.25s ease",
      }}
      className="insight-card"
    >
      <p
        className="font-mono"
        style={{ fontSize: "var(--text-xs)", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}
      >
        {category}
      </p>
      <h3 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 20, margin: "0 0 8px" }}>{title}</h3>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: "0 0 12px", lineHeight: 1.5 }}>
        {description}
      </p>
      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{readTime} →</span>
    </Link>
  )
}
