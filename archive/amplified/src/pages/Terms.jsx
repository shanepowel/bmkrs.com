import { Link } from "react-router-dom"
import { Nav } from "../components/layout/Nav"
import { Footer } from "../components/layout/Footer"
import { PageMeta } from "../components/shared/PageMeta"

export function Terms() {
  return (
    <>
      <PageMeta
        title="Terms of Use | Amplified"
        description="Terms of use for the Amplified website and services."
        path="/terms"
      />
      <Nav />
      <main style={{ paddingTop: 100, minHeight: "60vh" }}>
        <section style={{ maxWidth: "720px", margin: "0 auto", padding: "var(--section-py) var(--grid-gap)" }}>
          <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "var(--text-3xl)", marginBottom: 24 }}>Terms of Use</h1>
          <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: 32 }}>
            Last updated: March 2025. These terms apply to your use of the Amplified website (amplified.co.uk) and related services operated by Amplified Ltd (“we”, “us”).
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>1. Acceptance</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            By accessing or using this website, you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>2. Use of the website</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            You may use this website for lawful purposes only. You must not use it in any way that is unlawful, harmful, or that could damage or impair the site or our reputation. Content on the site (including text, graphics, and layout) is owned by Amplified Ltd and is for general information only; it does not constitute professional advice.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>3. Contact and services</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Contact forms and enquiries are subject to our Privacy Policy. Any engagement for consultancy or other services will be governed by separate terms agreed with you.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>4. Limitation of liability</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            To the fullest extent permitted by law, we exclude liability for any indirect, incidental, or consequential loss arising from your use of this website. Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>5. Links</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            This website may link to third-party sites. We are not responsible for the content or practices of those sites.
          </p>

          <h2 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginTop: 32, marginBottom: 12 }}>6. Changes and governing law</h2>
          <p style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.6 }}>
            We may update these terms at any time; the “Last updated” date will change. These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.
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
