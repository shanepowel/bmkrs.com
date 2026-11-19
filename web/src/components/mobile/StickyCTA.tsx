"use client";

import { StickyCTA as UIStickyCTA } from "@bmkrs/ui";

export function StickyCTA() {
  return (
    <UIStickyCTA
      actions={[
        { label: "talk to us", href: "/contact", variant: "primary" },
        { label: "work", href: "/work", variant: "ghost" },
      ]}
    />
  );
}
