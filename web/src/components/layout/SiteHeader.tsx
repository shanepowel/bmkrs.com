"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

type SiteHeaderProps = {
  navigation: NavItem[];
  tagline: string;
};

export function SiteHeader({ navigation, tagline }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/white.png"
            alt="BMKRS"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-muted hover:text-white",
                item.highlight && !isActive(item.href) && "text-brand"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="ml-2 !py-2 !text-xs">
            Start a project
          </Button>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-surface md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base",
                  isActive(item.href) ? "bg-white/10 text-white" : "text-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-4 px-4 text-xs text-muted">{tagline}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
