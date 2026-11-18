"use client";

import { SiteHeader as UISiteHeader } from "@bmkrs/ui";
import { Wordmark } from "@/components/bmkrs/Wordmark";
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

/** Archivo SVG wordmark only. never set the logo in cabinet grotesk. */
function BrandLogo({ light }: { light?: boolean }) {
  return (
    <Wordmark
      variant={light ? "primary-light" : "primary-dark"}
      className="wordmark-img h-5 w-auto md:h-6"
    />
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
      ctaLabel="start a build"
      ctaHref="/contact"
      renderLogo={(variant) => <BrandLogo light={variant === "light"} />}
    />
  );
}
