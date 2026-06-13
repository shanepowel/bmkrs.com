"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { bmkrs } from "./tokens";

const HIDDEN_ON = ["/contact"];

export function StickyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const lastY = useRef(0);

  const hidden = HIDDEN_ON.some((path) => pathname === path || pathname.startsWith(`${path}/`));

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

  if (hidden) return null;

  return (
    <div
      className="sticky-cta fixed inset-x-0 bottom-0 z-50 md:hidden"
      data-show={show}
      style={{
        background: "rgba(24,22,19,0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderTop: `1px solid ${bmkrs.rule}`,
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex gap-2.5 px-4 py-3">
        <Link
          href="/contact"
          className="flex-1 rounded-full py-3 text-center text-[14px] font-medium"
          style={{ background: bmkrs.orange, color: bmkrs.ink }}
        >
          start a project
        </Link>
        <Link
          href="/work"
          className="rounded-full px-6 py-3 text-center text-[14px] font-medium"
          style={{ border: "1px solid rgba(241,239,232,0.3)", color: bmkrs.paper }}
        >
          work
        </Link>
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
