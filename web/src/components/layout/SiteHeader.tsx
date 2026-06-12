"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/bmkrs/Wordmark";
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
}: {
  navigation?: NavItem[];
  loginUrl?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [surface, setSurface] = useState<Theme>("ink");
  const items = navItems(navigation);
  const login = loginUrl ?? MEMBER_LOGIN_URL;
  const lightLogo = surface === "paper" || surface === "orange";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${open ? " site-header--open" : ""}`}>
      <div className="site-header-inner">
        <Link href="/" className="wordmark" aria-label="bmkrs, home">
          <Wordmark variant={lightLogo ? "primary-light" : "primary-dark"} />
        </Link>

        <nav className="site-nav" aria-label="primary">
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

        <div className="site-header-mobile">
          <Link href="/contact" className="btn-primary site-header-mobile-cta">
            let&apos;s talk
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "close menu" : "open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="mobile-nav-backdrop"
            aria-label="close menu"
            onClick={() => setOpen(false)}
          />
          <nav id="mobile-nav" className="mobile-nav" aria-label="primary">
            <div className="mobile-nav__links">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav__link${isNavActive(pathname, item.href) ? " mobile-nav__link--active" : ""}`}
                  aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mobile-nav__footer">
              <a
                href={login}
                className="mobile-nav__secondary"
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                log in <span aria-hidden="true">↗</span>
              </a>
              <Link href="/contact" className="btn-primary mobile-nav__cta" onClick={() => setOpen(false)}>
                let&apos;s talk
              </Link>
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
