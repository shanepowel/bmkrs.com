import type { ReactNode } from "react";
import { Button, Kicker, mono, tokens } from "@bmkrs/ui";

/** Bench / network-page palette aliases (motion page). */
export const C = {
  ink: tokens.color.ink,
  inkText: tokens.color.paper,
  inkBody: tokens.color.body,
  inkFaint: tokens.color.faint,
  inkRule: tokens.color.ruleInk,
  paper: tokens.color.paper,
  paperText: tokens.color.ink,
  paperBody: tokens.color.paperBody,
  orange: tokens.color.orange,
} as const;

export { mono };

export function BenchKicker({
  surface,
  children,
}: {
  surface?: "ink";
  children: ReactNode;
}) {
  return <Kicker theme={surface === "ink" ? "ink" : "paper"}>{children}</Kicker>;
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Button href={href} variant="primary" className="!bg-bmkrs-orange !text-bmkrs-ink hover:!opacity-90">
      {children}
    </Button>
  );
}
