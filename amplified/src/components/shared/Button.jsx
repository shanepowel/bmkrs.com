export function Button({ children, href, variant = "filled", className = "" }) {
  const isFilled = variant === "filled"
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Syne, sans-serif",
    fontWeight: 700,
    fontSize: 15,
    padding: "14px 24px",
    border: `1px solid ${isFilled ? "var(--accent)" : "var(--text-muted)"}`,
    background: isFilled ? "var(--accent)" : "transparent",
    color: isFilled ? "#0A0A0A" : "var(--text-muted)",
    cursor: "pointer",
    transition: "all 0.25s ease",
  }
  const content = <span>{children}</span>
  if (href) {
    return (
      <a href={href} className={className} style={style}>
        {content}
      </a>
    )
  }
  return <button type="button" className={className} style={style}>{content}</button>
}
