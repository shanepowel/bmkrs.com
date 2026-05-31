import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "48px var(--grid-gap) 24px",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 40,
          marginBottom: 48,
          fontSize: 13,
          color: "var(--text-dim)",
        }}
        className="footer-grid"
      >
        <div>
          <Link to="/" style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 18, color: "var(--accent)" }}>
            AMPLIFIED
          </Link>
          <p style={{ margin: "12px 0 0", lineHeight: 1.5 }}>
            AI governance, structured delivery, digital growth. We amp up what your organisation can do.
          </p>
          <p style={{ margin: "16px 0 0" }}>London, UK</p>
          <a href="mailto:hello@amplified.co.uk" style={{ color: "var(--text-dim)" }}>hello@amplified.co.uk</a>
        </div>
        <div>
          <p className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 12 }}>DIGITAL TRANSFORMATION</p>
          <Link to="/ai-governance" style={{ display: "block", marginBottom: 6 }}>AI Governance</Link>
          <Link to="/ai-implementation" style={{ display: "block", marginBottom: 6 }}>AI Implementation</Link>
          <Link to="/structured-delivery" style={{ display: "block", marginBottom: 6 }}>Structured Delivery</Link>
          <Link to="/capability" style={{ display: "block" }}>Capability Building</Link>
        </div>
        <div>
          <p className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 12 }}>DIGITAL GROWTH</p>
          <Link to="/web-builds" style={{ display: "block", marginBottom: 6 }}>Web & Platform Builds</Link>
          <Link to="/ux-and-conversion" style={{ display: "block", marginBottom: 6 }}>UX & Conversion</Link>
          <Link to="/performance-marketing" style={{ display: "block" }}>Performance Marketing</Link>
        </div>
        <div>
          <p className="font-mono" style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 12 }}>COMPANY</p>
          <Link to="/how-we-work" style={{ display: "block", marginBottom: 6 }}>How We Work</Link>
          <Link to="/insights" style={{ display: "block", marginBottom: 6 }}>Insights</Link>
          <Link to="/contact" style={{ display: "block", marginBottom: 6 }}>Contact</Link>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>LinkedIn →</a>
        </div>
      </div>
      <div
        style={{
          paddingTop: 24,
          borderTop: "1px solid var(--border)",
          fontSize: 12,
          color: "var(--text-dim)",
        }}
      >
        © 2025 Amplified Ltd · Registered in England & Wales · <Link to="/privacy" style={{ color: "var(--text-dim)" }}>Privacy</Link> · <Link to="/terms" style={{ color: "var(--text-dim)" }}>Terms</Link>
      </div>
    </footer>
  )
}
