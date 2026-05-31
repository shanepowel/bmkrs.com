import { useState } from "react"
import { Nav } from "../components/layout/Nav"
import { Footer } from "../components/layout/Footer"
import { PageMeta } from "../components/shared/PageMeta"

const SECTORS = ["Infrastructure", "Energy", "Financial Services", "Public Sector", "Other"]

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : null

export function Contact() {
  const [track, setTrack] = useState("")
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const showSector = track === "Digital Transformation"
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error")
      return
    }
    setStatus("sending")
    try {
      const form = e.target
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
        setTrack("")
      } else setStatus("error")
    } catch {
      setStatus("error")
    }
  }
  return (
    <>
      <PageMeta
        title="Contact | Amplified"
        description="Start a conversation. No pitch, no deck — a 30-minute call to understand your challenge and tell you honestly whether we can help."
        path="/contact"
      />
      <Nav />
      <main style={{ paddingTop: 100, minHeight: "80vh" }}>
        <section
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            padding: "var(--section-py) var(--grid-gap)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
          }}
          className="contact-grid"
        >
          <div>
            <h1 style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "var(--text-3xl)", marginBottom: 16 }}>
              Start a Conversation
            </h1>
            <p style={{ fontFamily: "DM Sans", fontSize: "var(--text-lg)", color: "var(--text-muted)", marginBottom: 40 }}>
              No pitch. No deck. A 30-minute call to understand your challenge — and tell you honestly whether we can help.
            </p>
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              <div>
                <label htmlFor="name" style={{ display: "block", fontFamily: "DM Sans", fontSize: 14, marginBottom: 8, color: "var(--text-muted)" }}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontFamily: "DM Sans",
                    fontSize: 16,
                  }}
                />
              </div>
              <div>
                <label htmlFor="org" style={{ display: "block", fontFamily: "DM Sans", fontSize: 14, marginBottom: 8, color: "var(--text-muted)" }}>
                  Organisation
                </label>
                <input
                  id="org"
                  type="text"
                  name="organisation"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontFamily: "DM Sans",
                    fontSize: 16,
                  }}
                />
              </div>
              <div>
                <span style={{ display: "block", fontFamily: "DM Sans", fontSize: 14, marginBottom: 12, color: "var(--text-muted)" }}>
                  Track
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Digital Transformation", "Digital Growth", "Not sure yet"].map((opt) => (
                    <label key={opt} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="track"
                        value={opt}
                        checked={track === opt}
                        onChange={() => setTrack(opt)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              {showSector && (
                <div>
                  <label htmlFor="sector" style={{ display: "block", fontFamily: "DM Sans", fontSize: 14, marginBottom: 8, color: "var(--text-muted)" }}>
                    Sector
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                      fontFamily: "DM Sans",
                      fontSize: 16,
                    }}
                  >
                    <option value="">Select...</option>
                    {SECTORS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label htmlFor="challenge" style={{ display: "block", fontFamily: "DM Sans", fontSize: 14, marginBottom: 8, color: "var(--text-muted)" }}>
                  What's the challenge?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontFamily: "DM Sans",
                    fontSize: 16,
                    resize: "vertical",
                  }}
                />
              </div>
              {status === "success" && (
              <p style={{ color: "var(--accent)", fontFamily: "DM Sans" }}>
                Thanks — we'll be in touch within one business day.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "#e05c5c", fontFamily: "DM Sans" }}>
                Something went wrong. Please email hello@amplified.co.uk directly.
              </p>
            )}
            <button
              type="submit"
              className="btn-accent"
              disabled={status === "sending"}
              style={{
                alignSelf: "flex-start",
                background: "var(--accent)",
                color: "#0A0A0A",
                border: "none",
                fontFamily: "Syne",
                fontWeight: 700,
                fontSize: 16,
                padding: "14px 32px",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.8 : 1,
              }}
            >
              {status === "sending" ? "Sending…" : "Send →"}
            </button>
            </form>
            {!FORMSPREE_ENDPOINT && (
              <p style={{ marginTop: 12, fontSize: 13, color: "var(--text-muted)" }}>
                Set VITE_FORMSPREE_ID in .env to enable form submission, or email hello@amplified.co.uk.
              </p>
            )}
          </div>
          <div>
            <h3 style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "var(--text-xl)", marginBottom: 20 }}>
              What happens next
            </h3>
            <ul style={{ fontFamily: "DM Sans", color: "var(--text-muted)", lineHeight: 1.8, paddingLeft: 20 }}>
              <li>We respond within one business day</li>
              <li>If it's a fit, we arrange a 30-minute discovery call — no prep needed on your side</li>
              <li>We'll tell you at the end of that call whether we're the right fit, and if not, who might be</li>
            </ul>
            <p style={{ marginTop: 32, fontFamily: "DM Sans", color: "var(--text-muted)" }}>
              Direct contact: <a href="mailto:hello@amplified.co.uk" style={{ color: "var(--accent)" }}>hello@amplified.co.uk</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
