import { Link } from "react-router-dom"

export function SectorPanel({ name, problem, deliverables = [], ctaHref, ctaText = "See how we've done this →" }) {
  return (
    <div>
      <div
        style={{
          background: "#FFF8E0",
          padding: "24px 28px",
          borderRadius: 0,
          marginBottom: 24,
        }}
      >
        <p style={{ margin: 0, fontSize: "var(--text-lg)", lineHeight: 1.5, color: "var(--text-dark)" }}>
          {problem}
        </p>
      </div>
      {deliverables.length > 0 && (
        <ul style={{ margin: "0 0 24px", paddingLeft: 20, fontSize: "var(--text-base)", lineHeight: 1.6, color: "var(--text-primary)" }}>
          {deliverables.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
      {ctaHref && (
        <Link
          to={ctaHref}
          style={{
            fontFamily: "Syne",
            fontWeight: 600,
            fontSize: 14,
            color: "var(--accent)",
          }}
        >
          {ctaText}
        </Link>
      )}
    </div>
  )
}
