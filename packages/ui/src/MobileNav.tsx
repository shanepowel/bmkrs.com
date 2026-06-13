"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { tokens } from "./tokens";
import type { LogoVariant, NavItem } from "./types";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export type MobileNavProps = {
  items: NavItem[];
  loginUrl: string;
  contactEmail?: string;
  homeHref?: string;
  ctaLabel?: string;
  ctaHref?: string;
  renderLogo: (variant: LogoVariant) => ReactNode;
};

export function MobileNav({
  items,
  loginUrl,
  contactEmail = "hello@bmkrs.com",
  homeHref = "/",
  ctaLabel = "let's talk",
  ctaHref = "/contact",
  renderLogo,
}: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const first = panelRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="nav-toggle-mobile inline-flex h-11 w-11 items-center justify-center md:hidden"
      >
        <span className="relative block h-[10px] w-6">
          <span className="absolute left-0 top-0 h-[1.5px] w-full" style={{ background: "currentColor" }} />
          <span className="absolute bottom-0 left-0 h-[1.5px] w-full" style={{ background: "currentColor" }} />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="menu"
          className="fixed inset-0 z-[60] md:hidden"
          style={{ background: tokens.color.ink }}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div
            ref={panelRef}
            className="flex h-full flex-col"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Link href={homeHref} className="wordmark" aria-label="home" onClick={() => setOpen(false)}>
                {renderLogo("dark")}
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="close menu"
                className="inline-flex h-11 w-11 items-center justify-center text-2xl"
                style={{ color: tokens.color.paper }}
              >
                &times;
              </button>
            </div>

            <p
              style={{
                fontFamily: tokens.font.mono,
                color: tokens.color.faint,
                letterSpacing: tokens.tracking.kicker,
              }}
              className="px-6 pb-2 pt-2 text-[10px]"
            >
              MENU
            </p>

            <nav className="flex flex-1 flex-col px-6" aria-label="primary">
              {items.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
                  className="menu-item border-b py-3 text-[26px] font-medium leading-tight"
                  style={{
                    color: isNavActive(pathname, item.href) ? tokens.color.orange : tokens.color.paper,
                    borderColor: tokens.color.rule,
                    letterSpacing: "-0.01em",
                    animationDelay: `${i * 40}ms`,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="px-6 pt-4">
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="block rounded-full py-3.5 text-center text-[15px] font-medium"
                style={{ background: tokens.color.orange, color: tokens.color.ink }}
              >
                {ctaLabel}
              </Link>
              <div
                className="flex items-center justify-between pb-2 pt-4"
                style={{
                  fontFamily: tokens.font.mono,
                  color: tokens.color.faint,
                }}
              >
                <a
                  href={loginUrl}
                  className="text-[11px]"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  log in ↗
                </a>
                <a href={`mailto:${contactEmail}`} className="text-[11px]">
                  {contactEmail}
                </a>
              </div>
            </div>
          </div>

          <style>{`
            .menu-item { opacity: 0; transform: translateY(8px); animation: menu-in 0.32s ease forwards; }
            @keyframes menu-in { to { opacity: 1; transform: none; } }
            @media (prefers-reduced-motion: reduce) {
              .menu-item { opacity: 1; transform: none; animation: none; }
            }
          `}</style>
        </div>
      ) : null}
    </>
  );
}
