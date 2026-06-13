"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { MobileNav } from "./MobileNav";
import type { SurfaceTheme } from "./tokens";
import type { LogoVariant, NavItem } from "./types";

function readPageSurface(): SurfaceTheme {
  if (typeof document === "undefined") return "ink";
  const el = document.querySelector("main [data-surface]");
  return (el?.getAttribute("data-surface") as SurfaceTheme) ?? "ink";
}

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export type SiteHeaderProps = {
  items: NavItem[];
  loginUrl: string;
  contactEmail?: string;
  homeHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  renderLogo: (variant: LogoVariant) => ReactNode;
};

export function SiteHeader({
  items,
  loginUrl,
  contactEmail,
  homeHref = "/",
  ctaLabel = "let's talk",
  ctaHref = "/contact",
  renderLogo,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [surface, setSurface] = useState<SurfaceTheme>("ink");

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
    observer.observe(main, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-surface"],
    });
    return () => observer.disconnect();
  }, [pathname]);

  const lightLogo = surface === "paper" || surface === "orange";

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href={homeHref} className="wordmark" aria-label="home">
          {renderLogo(lightLogo ? "light" : "dark")}
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
          <a href={loginUrl} className="nav-login" rel="noopener noreferrer" target="_blank">
            log in <span aria-hidden="true">↗</span>
          </a>
          <Link href={ctaHref} className="btn-primary nav-cta">
            {ctaLabel}
          </Link>
        </nav>

        <MobileNav
          items={items}
          loginUrl={loginUrl}
          contactEmail={contactEmail}
          homeHref={homeHref}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          renderLogo={renderLogo}
        />
      </div>
    </header>
  );
}
