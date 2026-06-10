"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/bmkrs/Wordmark";
import type { Theme } from "@/components/bmkrs/surfaces";
import type { NavItem } from "@/lib/types";

const DEFAULT_NAV: NavItem[] = [
  { label: "work", href: "/work" },
  { label: "services", href: "/services" },
  { label: "motion", href: "/motion" },
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

export function SiteHeader({ navigation }: { navigation?: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [surface, setSurface] = useState<Theme>("ink");
  const items = navItems(navigation);
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
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="wordmark" aria-label="bmkrs, home">
          <Wordmark variant={lightLogo ? "primary-light" : "primary-dark"} />
        </Link>

        <nav className="site-nav" aria-label="primary">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary nav-cta">
            let&apos;s talk
          </Link>
        </nav>

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

      {open ? (
        <nav id="mobile-nav" className="mobile-nav" aria-label="primary">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)}>
            let&apos;s talk
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
