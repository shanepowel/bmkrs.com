"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { SURFACE, tokens, type SurfaceTheme } from "./tokens";

export type { SurfaceTheme as Theme };

const SurfaceContext = createContext<SurfaceTheme>("ink");

export function useSurface(): SurfaceTheme {
  return useContext(SurfaceContext);
}

function useTheme(theme?: SurfaceTheme): SurfaceTheme {
  const current = useSurface();
  return theme ?? current;
}

const padClass = {
  section: "py-[var(--section-y)]",
  home: "py-[var(--section-y-home)]",
  tight: "py-[var(--section-y-sm)]",
  none: "",
} as const;

export function Surface({
  theme,
  children,
  className = "",
  innerClassName = "",
  tight = false,
  pad,
  raised = false,
  id,
  as: Tag = "section",
}: {
  theme: SurfaceTheme;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** reduced vertical padding for bands like tickers */
  tight?: boolean;
  pad?: keyof typeof padClass;
  /** ink raised band. used for interstitial blocks on ink pages. */
  raised?: boolean;
  id?: string;
  as?: "section" | "div";
}) {
  const s = SURFACE[theme];
  const resolvedPad = pad ?? (tight ? "tight" : "section");
  const background = theme === "ink" && raised ? tokens.color.inkRaised : s.bg;

  return (
    <SurfaceContext.Provider value={theme}>
      <Tag
        id={id}
        style={{ background, color: s.text }}
        className={`${raised ? "bmkrs-raised" : ""} ${className}`.trim()}
        data-surface={theme}
      >
        <div
          className={`mx-auto max-w-[var(--maxw)] px-[var(--gutter)] ${padClass[resolvedPad]} ${innerClassName}`.trim()}
        >
          {children}
        </div>
      </Tag>
    </SurfaceContext.Provider>
  );
}

/** @deprecated use Surface */
export const Section = Surface;

export function Kicker({ theme, children }: { theme?: SurfaceTheme; children: ReactNode }) {
  const resolved = useTheme(theme);
  return (
    <p
      style={{
        fontFamily: "var(--bmkrs-font-mono)",
        color: SURFACE[resolved].accent,
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
  theme?: SurfaceTheme;
  children: ReactNode;
  className?: string;
}) {
  const resolved = useTheme(theme);
  return (
    <h1
      className={`display text-hero font-medium ${className}`}
      style={{
        lineHeight: "var(--lh-display)",
        letterSpacing: "var(--tracking-display)",
        color: SURFACE[resolved].text,
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
  theme?: SurfaceTheme;
  children: ReactNode;
  className?: string;
}) {
  const resolved = useTheme(theme);
  return (
    <h2
      className={`display text-h2 font-medium ${className}`}
      style={{
        lineHeight: "var(--lh-heading)",
        letterSpacing: "var(--tracking-display)",
        color: SURFACE[resolved].text,
      }}
    >
      {children}
    </h2>
  );
}

export function H3({
  theme,
  children,
  className = "",
}: {
  theme?: SurfaceTheme;
  children: ReactNode;
  className?: string;
}) {
  const resolved = useTheme(theme);
  return (
    <h3
      className={`display text-h3 font-medium ${className}`}
      style={{ color: SURFACE[resolved].text }}
    >
      {children}
    </h3>
  );
}

export function Rule({ theme }: { theme?: SurfaceTheme }) {
  const resolved = useTheme(theme);
  return <div aria-hidden style={{ borderTop: `1px solid ${SURFACE[resolved].rule}` }} />;
}

export function Body({
  theme,
  children,
  lead = false,
  className = "",
}: {
  theme?: SurfaceTheme;
  children: ReactNode;
  lead?: boolean;
  className?: string;
}) {
  const resolved = useTheme(theme);
  return (
    <div
      style={{ color: SURFACE[resolved].body, lineHeight: "var(--lh-body)" }}
      className={`max-w-[65ch] ${lead ? "text-lead" : "text-body"} ${className}`}
    >
      {children}
    </div>
  );
}

export function Meta({
  theme,
  children,
  className = "",
}: {
  theme?: SurfaceTheme;
  children: ReactNode;
  className?: string;
}) {
  const resolved = useTheme(theme);
  return (
    <span
      className={`font-mono text-meta ${className}`}
      style={{ color: SURFACE[resolved].faint, letterSpacing: "var(--tracking-kicker)" }}
    >
      {children}
    </span>
  );
}

export function Wordmark({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  return (
    <span
      className="bmkrs-wordmark"
      style={{ color: tone === "ink" ? tokens.color.ink : tokens.color.paper }}
    >
      bmkrs<span style={{ color: tokens.color.orange }}>.</span>
    </span>
  );
}

/** Page bar. sets the surface so links and labels inside it match. */
export function Bar({
  theme = "paper",
  children,
}: {
  theme?: SurfaceTheme;
  children: ReactNode;
}) {
  const s = SURFACE[theme];
  return (
    <SurfaceContext.Provider value={theme}>
      <header
        data-surface={theme}
        style={{
          background: s.bg,
          color: s.text,
          borderBottom: `1px solid ${s.rule}`,
        }}
      >
        <div className="mx-auto flex min-h-16 max-w-[var(--maxw)] items-center px-[var(--gutter)]">
          {children}
        </div>
      </header>
    </SurfaceContext.Provider>
  );
}
