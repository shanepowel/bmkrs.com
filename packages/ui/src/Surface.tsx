"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { SURFACE, type SurfaceTheme } from "./tokens";

export type { SurfaceTheme as Theme };

const SurfaceContext = createContext<SurfaceTheme>("ink");

export function useSurface(): SurfaceTheme {
  return useContext(SurfaceContext);
}

export function Surface({
  theme,
  children,
  className = "",
  tight = false,
  id,
  as: Tag = "section",
}: {
  theme: SurfaceTheme;
  children: ReactNode;
  className?: string;
  /** reduced vertical padding for bands like tickers */
  tight?: boolean;
  id?: string;
  as?: "section" | "div";
}) {
  const s = SURFACE[theme];
  return (
    <SurfaceContext.Provider value={theme}>
      <Tag
        id={id}
        style={{ background: s.bg, color: s.text }}
        className={className}
        data-surface={theme}
      >
        <div
          className={`mx-auto max-w-[var(--maxw)] px-[var(--gutter)] ${
            tight ? "py-[var(--section-y-sm)]" : "py-[var(--section-y)]"
          }`}
        >
          {children}
        </div>
      </Tag>
    </SurfaceContext.Provider>
  );
}

/** @deprecated use Surface */
export const Section = Surface;

export function Kicker({ theme, children }: { theme: SurfaceTheme; children: ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--bmkrs-font-mono)",
        color: SURFACE[theme].accent,
        letterSpacing: "var(--bmkrs-tracking-kicker)",
      }}
      className="mb-0 text-meta"
    >
      {children}
    </p>
  );
}

export function H1({
  theme,
  children,
  className = "",
}: {
  theme: SurfaceTheme;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`display text-hero font-medium ${className}`}
      style={{
        lineHeight: "var(--lh-display)",
        letterSpacing: "var(--tracking-display)",
        color: SURFACE[theme].text,
      }}
    >
      {children}
    </h1>
  );
}

export function H2({
  theme,
  children,
  className = "",
}: {
  theme: SurfaceTheme;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`display text-h2 font-medium ${className}`}
      style={{
        lineHeight: "var(--lh-heading)",
        letterSpacing: "var(--tracking-display)",
        color: SURFACE[theme].text,
      }}
    >
      {children}
    </h2>
  );
}

export function Rule({ theme }: { theme: SurfaceTheme }) {
  return <div aria-hidden style={{ borderTop: `1px solid ${SURFACE[theme].rule}` }} />;
}

export function Body({
  theme,
  children,
  lead = false,
  className = "",
}: {
  theme: SurfaceTheme;
  children: ReactNode;
  lead?: boolean;
  className?: string;
}) {
  return (
    <div
      style={{ color: SURFACE[theme].body, lineHeight: "var(--lh-body)" }}
      className={`max-w-[65ch] ${lead ? "text-lead" : "text-body"} ${className}`}
    >
      {children}
    </div>
  );
}
