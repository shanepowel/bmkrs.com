"use client";

import { StickyCTA as UIStickyCTA } from "@bmkrs/ui";

export function StickyCTA() {
  return (
    <UIStickyCTA
      actions={[
        { label: "Talk to us", href: "/contact", variant: "primary" },
        { label: "Work", href: "/work", variant: "ghost" },
      ]}
    />
  );
}
