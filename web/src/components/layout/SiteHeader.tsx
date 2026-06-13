"use client";

import { SiteHeader as UISiteHeader } from "@bmkrs/ui";
import { Wordmark } from "@/components/bmkrs/Wordmark";
import type { NavItem } from "@/lib/types";
import { MEMBER_LOGIN_URL } from "@/lib/urls";

const DEFAULT_NAV: NavItem[] = [
  { label: "work", href: "/work" },
  { label: "services", href: "/services" },
  { label: "motion", href: "/motion" },
  { label: "network", href: "/network" },
  { label: "journal", href: "/journal" },
  { label: "about", href: "/about" },
];

function navItems(navigation?: NavItem[]) {
  const fromCms = navigation?.filter(
    (item) => item.href !== "/" && item.href !== "/contact" && !item.highlight,
  );
  return fromCms?.length ? fromCms : DEFAULT_NAV;
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
      renderLogo={(variant) => (
        <Wordmark variant={variant === "light" ? "primary-light" : "primary-dark"} />
      )}
    />
  );
}
