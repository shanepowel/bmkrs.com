import { useReveal } from "../../hooks/useReveal"

export function Tension() {
  const [ref, vis] = useReveal(0.12)
  return (
    <section
      ref={ref}
      className={`reveal ${vis ? "in-view" : ""}`}
      style={{
        padding: "var(--section-py) var(--grid-gap)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Syne",
          fontWeight: 700,
          fontSize: 48,
          color: "var(--text-primary)",
          maxWidth: 820,
          margin: "0 auto",
          lineHeight: 1.2,
        }}
      >
        "Most consultancies were built for one type of organisation. We weren't."
      </h2>
      <p
        style={{
          fontFamily: "DM Sans",
          fontSize: "var(--text-lg)",
          color: "var(--text-muted)",
          maxWidth: 620,
          margin: "24px auto 0",
          lineHeight: 1.6,
        }}
      >
        Whether you're a delivery director at a water utility trying to adopt AI without losing programme governance — or a founder who needs a digital platform that actually converts — we have an Amp for that.
      </p>
      <p
        style={{
          fontFamily: "DM Sans",
          fontSize: "var(--text-base)",
          color: "var(--text-muted)",
          marginTop: 16,
        }}
      >
        Two organisations. Different challenges. One methodology.
      </p>
    </section>
  )
}
