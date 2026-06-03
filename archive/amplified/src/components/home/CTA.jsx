import { Link } from "react-router-dom"
import { useReveal } from "../../hooks/useReveal"

export function CTA() {
  const [ref, vis] = useReveal(0.12)
  return (
    <section
      ref={ref}
      className={`reveal noise ${vis ? "in-view" : ""}`}
      style={{
        padding: "var(--section-py) var(--grid-gap)",
        background: "var(--surface)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Syne",
          fontWeight: 700,
          fontSize: "var(--text-4xl)",
          color: "var(--text-primary)",
          marginBottom: 20,
        }}
      >
        Ready to Amp Up?
      </h2>
      <p
        style={{
          fontFamily: "DM Sans",
          fontSize: "var(--text-lg)",
          color: "var(--text-muted)",
          maxWidth: 520,
          margin: "0 auto 32px",
          lineHeight: 1.5,
        }}
      >
        Whether you're navigating AI governance for a regulated programme or need a platform that actually performs — we'll tell you honestly in 30 minutes whether we can help.
      </p>
      <Link
        to="/contact"
        className="btn-accent"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--accent)",
          color: "#0A0A0A",
          fontFamily: "Syne",
          fontWeight: 700,
          fontSize: 16,
          height: 52,
          padding: "0 40px",
        }}
      >
        Start a Conversation →
      </Link>
      <p style={{ fontFamily: "DM Sans", fontSize: 13, color: "var(--text-muted)", marginTop: 16 }}>
        No pitch. No deck. Just a straight conversation.
      </p>
    </section>
  )
}
