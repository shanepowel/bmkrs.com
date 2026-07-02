"use client";

import { SiteHeader as UISiteHeader } from "@bmkrs/ui";
import type { NavItem } from "@/lib/types";
import { MEMBER_LOGIN_URL } from "@/lib/urls";

const DEFAULT_NAV: NavItem[] = [
  { label: "services", href: "/services" },
  { label: "work", href: "/work" },
  { label: "motion", href: "/motion" },
  { label: "about", href: "/about" },
  { label: "journal", href: "/journal" },
];

function navItems(navigation?: NavItem[]) {
  const fromCms = navigation?.filter(
    (item) => item.href !== "/" && item.href !== "/contact" && !item.highlight,
  );
  return fromCms?.length ? fromCms : DEFAULT_NAV;
}

function TextWordmark({ light }: { light?: boolean }) {
  return (
    <span
      className="text-logo font-medium tracking-[-0.02em]"
      style={{ color: light ? "var(--bmkrs-ink)" : "var(--bmkrs-paper)" }}
    >
      bmkrs<span className="text-bmkrs-orange">.</span>
    </span>
  );
}

export function SiteHeader({
  navigation,
  loginUrl,
  contactEmail,
}: {
  navigation?: NavItem[];
  loginUrl?: string;
  contactEmail?: string;
}) {
  const items = navItems(navigation);
  const login = loginUrl ?? MEMBER_LOGIN_URL;

  return (
    <UISiteHeader
      items={items}
      loginUrl={login}
      contactEmail={contactEmail}
      ctaLabel="start a project"
      ctaHref="/contact"
      renderLogo={(variant) => <TextWordmark light={variant === "light"} />}
    />
  );
}
