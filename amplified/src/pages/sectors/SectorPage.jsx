import { Link } from "react-router-dom"
import { Nav } from "../../components/layout/Nav"
import { Footer } from "../../components/layout/Footer"
import { PageMeta } from "../../components/shared/PageMeta"

export function SectorPage({ name, statement, challenge, howWeHelp, standards, ctaText = "Start a Conversation →", path }) {
  return (
    <>
      {path && (
        <PageMeta
          title={`${name} | Amplified`}
          description={statement}
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
          <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "var(--text-3xl)", marginBottom: 16 }}>
            {name}
          </h1>
          <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", maxWidth: 640 }}>
            {statement}
          </p>
        </section>
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
          <div style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            {challenge}
          </div>
        </section>
        {howWeHelp && (
          <section
            style={{
              padding: "var(--section-py) var(--grid-gap)",
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 24 }}>
              How We Help
            </h2>
            <div style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {howWeHelp}
            </div>
          </section>
        )}
        {standards && (
          <section
            style={{
              padding: "var(--section-py) var(--grid-gap)",
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              borderTop: "1px solid var(--border)",
            }}
          >
            <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-2xl)", marginBottom: 20 }}>
              Relevant Standards
            </h2>
            <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {standards}
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
