import { Link } from "react-router-dom"
import { useTicker } from "../../hooks/useTicker"

export function Hero() {
  const { phrase, visible } = useTicker()
  return (
    <section
      className="noise hero-section"
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        padding: "140px var(--grid-gap) 80px",
        gap: 48,
        borderBottom: "1px solid var(--accent)",
      }}
    >
      <div>
        <p
          className="hero-label font-mono"
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: 24,
            animation: "fadeUp 0.5s ease 0ms both",
          }}
        >
          AI Governance  ·  Structured Delivery  ·  Digital Growth
        </p>
        <h1
          className="hero-h1"
          style={{
            fontFamily: "Syne",
            fontWeight: 800,
            fontSize: "var(--text-5xl)",
            lineHeight: 1,
            color: "var(--text-primary)",
            marginBottom: 24,
            animation: "fadeUp 0.5s ease 100ms both",
          }}
        >
          We amp up what your organisation can do.
        </h1>
        <p
          className="hero-sub"
          style={{
            fontFamily: "DM Sans",
            fontSize: "var(--text-lg)",
            color: "var(--text-secondary)",
            maxWidth: 480,
            marginBottom: 32,
            lineHeight: 1.5,
            animation: "fadeUp 0.5s ease 220ms both",
          }}
        >
          From AI governance for regulated industries to high-performance digital platforms — we build capability that compounds.
        </p>
        <div
          className="hero-ctas"
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            animation: "fadeUp 0.5s ease 360ms both",
          }}
        >
          <Link
            to="/how-we-work"
            className="btn-accent"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--accent)",
              color: "#0A0A0A",
              fontFamily: "Syne",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 24px",
            }}
          >
            Digital Transformation →
          </Link>
          <Link
            to="/web-builds"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid var(--text-muted)",
              color: "var(--text-muted)",
              fontFamily: "DM Sans",
              fontSize: 15,
              padding: "14px 24px",
            }}
          >
            Digital Growth →
          </Link>
        </div>
      </div>
      <div
        className="hero-ticker"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 120,
        }}
      >
        <span
          style={{
            fontFamily: "Syne",
            fontWeight: 700,
            fontSize: 26,
            color: "var(--accent)",
            transition: "opacity 300ms ease",
            opacity: visible ? 1 : 0,
          }}
        >
          {phrase}
        </span>
      </div>
    </section>
  )
}
