import { Link } from "react-router-dom"
import { Nav } from "../../components/layout/Nav"
import { Footer } from "../../components/layout/Footer"
import { PageMeta } from "../../components/shared/PageMeta"

export function ServicePage({ label, title, positioning, challenge, whatWeDo, frameworks, ctaText = "Start a Conversation →", path }) {
  return (
    <>
      {path && (
        <PageMeta
          title={`${title} | Amplified`}
          description={positioning}
          path={path}
        />
      )}
      <Nav />
      <main style={{ paddingTop: 100 }}>
        <section
          style={{
            padding: "var(--section-py) var(--grid-gap)",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
          }}
        >
          <p className="font-mono" style={{ fontSize: "var(--text-xs)", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
            {label}
          </p>
          <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "var(--text-3xl)", marginBottom: 20 }}>
            {title}
          </h1>
          <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", maxWidth: 640, lineHeight: 1.5 }}>
            {positioning}
          </p>
        </section>
        {challenge && (
          <section
            style={{
              padding: "0 var(--grid-gap) var(--section-py)",
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 20 }}>
              The Challenge
            </h2>
            <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {challenge}
            </p>
          </section>
        )}
        {whatWeDo && whatWeDo.length > 0 && (
          <section
            style={{
              padding: "var(--section-py) var(--grid-gap)",
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 24 }}>
              What We Do
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {whatWeDo.map((item, i) => (
                <li
                  key={i}
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid var(--border)",
                    fontFamily: "DM Sans",
                  }}
                >
                  <strong style={{ color: "var(--accent)" }}>{item.title}</strong>
                  <p style={{ margin: "8px 0 0", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {frameworks && (
          <section
            style={{
              padding: "var(--section-py) var(--grid-gap)",
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 20 }}>
              Relevant Standards & Frameworks
            </h2>
            <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {frameworks}
            </p>
          </section>
        )}
        <section
          style={{
            padding: "var(--section-py) var(--grid-gap)",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--accent)",
              color: "#0A0A0A",
              fontFamily: "Syne",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 32px",
            }}
          >
            {ctaText}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
