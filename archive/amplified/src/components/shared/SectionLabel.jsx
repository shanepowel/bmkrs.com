export function SectionLabel({ children }) {
  return (
    <p
      className="font-mono"
      style={{
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        marginBottom: 12,
        marginTop: 0,
      }}
    >
      {children}
    </p>
  )
}
