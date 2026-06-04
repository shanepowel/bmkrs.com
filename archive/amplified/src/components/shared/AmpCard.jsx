import { Link } from "react-router-dom"

export function AmpCard({ tag, title, tagline, description, bullets = [], href, track }) {
  const isTransformation = track === "transformation"
  return (
    <Link
      to={href}
      className="amp-card"
      style={{
        display: "block",
        border: "1px solid var(--border-light)",
        borderTop: "2px solid var(--accent)",
        background: "var(--white)",
        padding: "28px 24px",
        color: "var(--text-dark)",
        transition: "all 0.25s ease",
      }}
    >
      <p
        className="font-mono"
        style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}
      >
        {tag}
      </p>
      <h3 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", margin: "0 0 6px" }}>{title}</h3>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", margin: "0 0 16px" }}>{tagline}</p>
      <p style={{ fontSize: "var(--text-base)", lineHeight: 1.5, marginBottom: 20 }}>{description}</p>
      {bullets.length > 0 && (
        <ul style={{ margin: "0 0 20px", paddingLeft: 20, fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      <span
        style={{
          fontFamily: "Syne",
          fontWeight: 600,
          fontSize: 14,
          color: "var(--accent)",
        }}
      >
        Learn more →
      </span>
    </Link>
  )
}
