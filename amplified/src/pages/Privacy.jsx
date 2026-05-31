import { Link } from "react-router-dom"
import { Nav } from "../components/layout/Nav"
import { Footer } from "../components/layout/Footer"
import { PageMeta } from "../components/shared/PageMeta"

export function Privacy() {
  return (
    <>
      <PageMeta
        title="Privacy | Amplified"
        description="Privacy policy for Amplified Ltd. How we collect, use and protect your data."
        path="/privacy"
      />
      <Nav />
      <main style={{ paddingTop: 100, minHeight: "60vh" }}>
        <section style={{ maxWidth: "720px", margin: "0 auto", padding: "var(--section-py) var(--grid-gap)" }}>
          <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "var(--text-3xl)", marginBottom: 24 }}>Privacy Policy</h1>
          <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: 32 }}>
            Last updated: March 2025. Amplified Ltd (“we”, “us”) is committed to protecting your privacy.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>1. Who we are</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Amplified Ltd is a management consultancy and digital agency registered in England & Wales. Our contact address is London, UK. Email: hello@amplified.co.uk.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>2. Data we collect</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            When you use our website or contact us, we may collect: name, organisation, email address, sector, and the content of your message. We may also collect technical data such as IP address and browser type for security and analytics.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>3. How we use your data</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            We use your data to respond to enquiries, deliver services, send relevant updates (where you have agreed), and improve our website. We do not sell your data to third parties.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>4. Legal basis</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            We process your data on the basis of consent (e.g. when you submit the contact form), contract (when we provide services), or our legitimate interests (e.g. improving our site and services), in line with UK GDPR.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>5. Retention and security</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            We retain your data only as long as needed for the purposes above or as required by law. We use appropriate technical and organisational measures to keep your data secure.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>6. Your rights</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            You have the right to access, rectify, erase, restrict processing, object, and data portability where applicable. You may also lodge a complaint with the ICO (ico.org.uk). To exercise these rights, contact hello@amplified.co.uk.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>7. Changes</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            We may update this policy from time to time. The “Last updated” date at the top will change. Continued use of the site after changes constitutes acceptance.
          </p>

          <p style={{ marginTop: 48 }}>
            <Link to="/" style={{ color: "var(--accent)", fontFamily: "Syne", fontWeight: 600 }}>← Home</Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
