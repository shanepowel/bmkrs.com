"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SiteHeader({ navigation }: { navigation: NavItem[]; tagline?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-[var(--pad)] py-[18px] transition-all duration-300",
        scrolled && "bg-bg/80 py-3 shadow-[0_1px_0_var(--line)] backdrop-blur-xl"
      )}
    >
      <Link href="/" className="font-display text-[23px] font-bold tracking-[-0.04em]">
        bmkrs<span className="text-accent">.</span>
      </Link>

      <div
        className={cn(
          "hidden items-center gap-7 md:flex",
          open &&
            "fixed inset-0 flex flex-col justify-center gap-6 bg-[linear-gradient(142deg,#ece5ff_0%,#d7c9ff_70%)] md:static md:flex-row md:bg-transparent"
        )}
        id="nav-links"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              "relative text-[15px] font-medium opacity-80 transition hover:opacity-100",
              isActive(item.href) && "opacity-100 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-sm after:bg-accent",
              open && "font-display text-[34px] font-semibold md:text-[15px]"
            )}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className={cn(
            "rounded-full bg-ink px-5 py-2.5 font-semibold text-bg opacity-100 transition hover:-translate-y-0.5 hover:bg-accent",
            open && "text-base md:text-[15px]"
          )}
        >
          start a project
        </Link>
      </div>

      <button
        type="button"
        className="relative z-[101] flex flex-col gap-1.5 md:hidden"
        aria-label={open ? "close menu" : "open menu"}
        onClick={() => setOpen(!open)}
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
  );
}
