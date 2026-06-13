"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { tokens } from "./tokens";

export type StickyCTAAction = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

export type StickyCTAProps = {
  actions: StickyCTAAction[];
  hiddenOn?: string[];
};

export function StickyCTA({
  actions,
  hiddenOn = ["/contact"],
}: StickyCTAProps) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const lastY = useRef(0);

  const hidden = hiddenOn.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  useEffect(() => {
    if (hidden) return;
    const onScroll = () => {
      const y = window.scrollY;
      const pastHero = y > window.innerHeight * 0.7;
      const scrollingUp = y < lastY.current;
      setShow(
        pastHero &&
          (scrollingUp || y + window.innerHeight > document.body.scrollHeight - 200),
      );
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden]);

  if (hidden || actions.length === 0) return null;

  return (
    <div
      className="sticky-cta fixed inset-x-0 bottom-0 z-50 md:hidden"
      data-show={show}
      style={{
        background: tokens.color.stickyBar,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderTop: `1px solid ${tokens.color.rule}`,
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex gap-2.5 px-4 py-3">
        {actions.map((action, i) => {
          const isPrimary = action.variant === "primary" || (i === 0 && !action.variant);
          return (
            <Link
              key={action.href + action.label}
              href={action.href}
              className={`rounded-full py-3 text-center text-[14px] font-medium ${
                isPrimary ? "flex-1" : "px-6"
              }`}
              style={
                isPrimary
                  ? { background: tokens.color.orange, color: tokens.color.ink }
                  : {
                      border: `1px solid ${tokens.color.ghostBorder}`,
                      color: tokens.color.paper,
                    }
              }
            >
              {action.label}
            </Link>
          );
        })}
      </div>

      <style>{`
        .sticky-cta { transform: translateY(110%); transition: transform 0.3s ease; }
        .sticky-cta[data-show="true"] { transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .sticky-cta { transition: none; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
