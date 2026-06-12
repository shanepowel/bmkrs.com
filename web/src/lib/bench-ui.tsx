import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { SURFACE } from "@/lib/surfaces";

/** Bench / network-page palette aliases for marketing experiments. */
export const C = {
  ink: SURFACE.ink.bg,
  inkText: SURFACE.ink.text,
  inkBody: SURFACE.ink.body,
  inkFaint: SURFACE.ink.faint,
  inkRule: SURFACE.ink.rule,
  paper: SURFACE.paper.bg,
  paperText: SURFACE.paper.text,
  paperBody: SURFACE.paper.body,
  orange: SURFACE.orange.bg,
} as const;

export const mono: CSSProperties = {
  fontFamily: "var(--font-mono, ui-monospace, monospace)",
};

export function Kicker({
  surface,
  children,
}: {
  surface?: "ink";
  children: ReactNode;
}) {
  const tokens = surface === "ink" ? SURFACE.ink : SURFACE.paper;
  return (
    <p
      style={{ ...mono, color: tokens.accent, letterSpacing: "0.08em" }}
      className="mb-5 text-[12px] uppercase"
    >
      {children}
    </p>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition hover:opacity-90";
  const style = { background: C.orange, color: "#181613" };

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  );
}
