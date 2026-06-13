"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/bmkrs/Wordmark";
import { MobileNav } from "@/components/mobile/MobileNav";
import type { Theme } from "@/components/bmkrs/surfaces";
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

function readPageSurface(): Theme {
  if (typeof document === "undefined") return "ink";
  const el = document.querySelector("main [data-surface]");
  return (el?.getAttribute("data-surface") as Theme) ?? "ink";
}

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
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
  const pathname = usePathname();
  const [surface, setSurface] = useState<Theme>("ink");
  const items = navItems(navigation);
  const login = loginUrl ?? MEMBER_LOGIN_URL;

  useEffect(() => {
    const sync = () => {
      const theme = readPageSurface();
      setSurface(theme);
      document.documentElement.dataset.headerSurface =
        theme === "paper" || theme === "orange" ? "paper" : "ink";
    };
    sync();
    const main = document.querySelector("main");
    if (!main) return;
    const observer = new MutationObserver(sync);
    observer.observe(main, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-surface"] });
    return () => observer.disconnect();
  }, [pathname]);

  const lightLogo = surface === "paper" || surface === "orange";

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="wordmark" aria-label="bmkrs, home">
          <Wordmark variant={lightLogo ? "primary-light" : "primary-dark"} />
        </Link>

        <nav className="site-nav hidden md:flex" aria-label="primary">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={login} className="nav-login" rel="noopener noreferrer" target="_blank">
            log in <span aria-hidden="true">↗</span>
          </a>
          <Link href="/contact" className="btn-primary nav-cta">
            let&apos;s talk
          </Link>
        </nav>

        <MobileNav items={items} loginUrl={login} contactEmail={contactEmail} />
      </div>
    </header>
  );
}
