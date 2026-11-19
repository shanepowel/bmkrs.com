"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "./Button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./Sheet";
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
  ctaLabel = "Talk to us",
  ctaHref = "/contact",
  renderLogo,
}: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="open menu"
          className="nav-toggle-mobile inline-flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-[10px] w-6" aria-hidden="true">
            <span className="absolute left-0 top-0 h-[1.5px] w-full bg-current" />
            <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-current" />
          </span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="full"
        className="md:hidden"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        aria-describedby={undefined}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <SheetClose asChild>
              <Link href={homeHref} className="wordmark" aria-label="home">
                {renderLogo("light")}
              </Link>
            </SheetClose>
            <SheetClose
              aria-label="close menu"
              className="inline-flex h-11 w-11 items-center justify-center font-mono text-2xl text-bmkrs-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmkrs-orange"
            >
              <span aria-hidden="true">×</span>
            </SheetClose>
          </div>

          <SheetTitle className="sr-only">menu</SheetTitle>

          <p
            style={{
              fontFamily: tokens.font.mono,
              color: tokens.color.faint,
              letterSpacing: tokens.tracking.kicker,
            }}
            className="px-6 pb-2 pt-2 text-meta"
          >
            menu
          </p>

          <nav className="flex flex-1 flex-col px-6" aria-label="primary">
            {items.map((item, i) => (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
                  className="menu-item border-b py-3 text-[1.625rem] font-medium leading-tight"
                  style={{
                    color: isNavActive(pathname, item.href) ? tokens.color.orange : tokens.color.paper,
                    borderColor: tokens.color.rule,
                    letterSpacing: "-0.01em",
                    animationDelay: `${i * 40}ms`,
                  }}
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          <div className="px-6 pt-4 pb-6">
            <SheetClose asChild>
              <Button href={ctaHref} variant="orange" size="default" className="w-full">
                {ctaLabel}
              </Button>
            </SheetClose>
            <div
              className="flex items-center justify-between pb-2 pt-4"
              style={{
                fontFamily: tokens.font.mono,
                color: tokens.color.faint,
              }}
            >
              <a
                href={loginUrl}
                className="text-meta"
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                log in ↗
              </a>
              <a href={`mailto:${contactEmail}`} className="text-meta">
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
      </SheetContent>
    </Sheet>
  );
}
