const CRED = "10+ Years Delivery Leadership  ·  Infrastructure  ·  Energy  ·  Financial Services  ·  Public Sector  ·  AI Governance Specialists  ·  Web Platform Delivery  ·  Structured Agile Practitioners"

export function CredBar() {
  return (
    <section
      style={{
        height: 80,
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="cred-marquee"
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          animation: "marquee 30s linear infinite",
          fontFamily: "DM Sans",
          fontSize: 14,
          color: "var(--text-muted)",
        }}
      >
        <span style={{ paddingRight: 48 }}>{CRED}</span>
        <span style={{ paddingRight: 48 }}>{CRED}</span>
      </div>
    </section>
  )
}
