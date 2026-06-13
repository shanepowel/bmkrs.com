import { tokens } from "./tokens";

export type StatusDotVariant = "solid" | "ring";

export function StatusDot({
  variant = "solid",
  className = "",
}: {
  variant?: StatusDotVariant;
  className?: string;
}) {
  const size = 8;
  if (variant === "ring") {
    return (
      <span
        aria-hidden
        className={className}
        style={{
          display: "inline-block",
          width: size,
          height: size,
          borderRadius: "50%",
          border: `1.5px solid ${tokens.color.orange}`,
          background: "transparent",
          flexShrink: 0,
        }}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: tokens.color.orange,
        flexShrink: 0,
      }}
    />
  );
}

export function Status({
  label,
  variant = "solid",
}: {
  label: string;
  variant?: StatusDotVariant;
}) {
  return (
    <span className="inline-flex min-h-11 items-center gap-2">
      <StatusDot variant={variant} />
      <span
        style={{
          fontFamily: tokens.font.mono,
          fontSize: tokens.type.meta,
          letterSpacing: tokens.tracking.kicker,
          color: tokens.color.meta,
        }}
      >
        {label}
      </span>
    </span>
  );
}
