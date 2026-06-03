"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SiteHeader({ navigation }: { navigation: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] pt-[env(safe-area-inset-top,0px)]">
      <nav
        aria-label="main"
        className={cn(
          "flex items-center justify-between px-[var(--pad)] py-3 transition-all duration-300 md:py-[18px]",
          scrolled && "bg-bg/90 shadow-[0_1px_0_var(--line)] backdrop-blur-xl md:bg-bg/80"
        )}
      >
        <Link
          href="/"
          className="touch-target -ml-2 font-display text-[23px] font-bold tracking-[-0.04em] md:ml-0"
        >
          bmkrs<span className="text-accent">.</span>
        </Link>

        <div
          id="nav-links"
          className={cn(
            "items-center gap-7 md:flex",
            open
              ? "fixed inset-0 z-[99] flex flex-col justify-center gap-8 bg-[linear-gradient(142deg,#ece5ff_0%,#d7c9ff_70%)] px-[var(--pad)] pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]"
              : "hidden md:flex"
          )}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative py-2 text-[15px] font-medium opacity-80 transition hover:opacity-100 max-md:font-display max-md:text-[clamp(28px,8vw,40px)] max-md:font-semibold md:py-0",
                isActive(item.href) &&
                  "opacity-100 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-sm after:bg-accent max-md:after:bottom-0"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full max-w-xs justify-center md:w-auto md:max-w-none"
          >
            start a project
          </Link>
        </div>

        <button
          type="button"
          className="touch-target relative z-[101] -mr-2 flex flex-col justify-center gap-1.5 md:hidden md:mr-0"
          aria-label={open ? "close menu" : "open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(open ? false : true)}
        >
          <span
            className={cn(
              "h-0.5 w-[26px] rounded-sm bg-ink transition",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span className={cn("h-0.5 w-[26px] rounded-sm bg-ink transition", open && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-[26px] rounded-sm bg-ink transition",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </nav>
    </header>
  );
}
