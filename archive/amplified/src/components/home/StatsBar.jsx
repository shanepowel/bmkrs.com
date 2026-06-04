import { useReveal } from "../../hooks/useReveal"

const STATS = [
  { value: "10+", label: "Years delivery leadership" },
  { value: "4", label: "Major sectors served" },
  { value: "100%", label: "Structured governance, every engagement" },
]

export function StatsBar() {
  const [ref, vis] = useReveal(0.12)
  return (
    <section
      ref={ref}
      className={`reveal ${vis ? "in-view" : ""}`}
      style={{
        padding: "var(--section-py) var(--grid-gap)",
        maxWidth: "var(--max-w)",
        margin: "0 auto",
      }}
    >
      <div
        className="stats-bar-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "48px 0",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0 32px",
              borderLeft: i === 0 ? "none" : "1px solid var(--border)",
            }}
          >
            <span
              style={{
                fontFamily: "Syne",
                fontWeight: 800,
                fontSize: 64,
                color: "var(--accent)",
                lineHeight: 1,
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "DM Sans",
                fontSize: "var(--text-sm)",
                color: "var(--text-muted)",
                marginTop: 8,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
