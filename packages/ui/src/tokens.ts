import type { CSSProperties } from "react";

/** Canonical brand palette — the only place raw colour values live. */
export const tokens = {
  color: {
    ink: "#181613",
    inkRaised: "#211f1b",
    paper: "#F5F2EB",
    body: "#D3D1C7",
    meta: "#B4B2A9",
    faint: "#7d7b74",
    orange: "#FF4D00",
    rule: "rgba(241,239,232,0.14)",
    ruleInk: "rgba(241,239,232,0.16)",
    rulePaper: "rgba(24,22,19,0.15)",
    ruleOrange: "rgba(24,22,19,0.25)",
    paperBody: "#3A3936",
    paperFaint: "#4F4E4A",
    orangeBody: "#2C1005",
    orangeFaint: "#4A1B0C",
    fieldFill: "#221f1b",
    fieldBorder: "rgba(241, 239, 232, 0.22)",
    accentFocus: "rgba(255, 77, 0, 0.25)",
    orangeSoft: "rgba(255, 77, 0, 0.32)",
    orangeGlow: "rgba(255, 77, 0, 0.32)",
    stickyBar: "rgba(24,22,19,0.86)",
    ghostBorder: "rgba(241,239,232,0.3)",
    swipeInactive: "#444441",
  },
  type: {
    hero: "clamp(2.75rem, 7vw, 5.5rem)",
    h2: "clamp(1.85rem, 3.8vw, 3.1rem)",
    h3: "clamp(1.125rem, 1.5vw, 1.35rem)",
    body: "1.125rem",
    bodySm: "1rem",
    bodyLg: "clamp(1.125rem, 1.35vw, 1.3rem)",
    meta: "0.8125rem",
    input: "1rem",
  },
  leading: {
    hero: 1.08,
    h2: 1.15,
    h3: 1.2,
    body: 1.65,
  },
  tracking: {
    display: "-0.005em",
    kicker: "0.04em",
  },
  space: {
    1: "0.5rem",
    2: "1rem",
    3: "1.5rem",
    4: "2.5rem",
    5: "4rem",
    6: "6.5rem",
    7: "10rem",
    section: "clamp(4.5rem, 9vw, 9rem)",
    sectionHome: "clamp(72px, 10vh, 130px)",
    sectionSm: "clamp(3rem, 6vw, 5rem)",
    block: "clamp(2.5rem, 5vw, 4.5rem)",
    tight: "1.25rem",
    grid: "clamp(1.5rem, 2.5vw, 2.5rem)",
    gutter: "clamp(1.25rem, 5vw, 3.5rem)",
    maxWidth: "75rem",
  },
  radius: {
    pill: "999px",
    card: "4px",
    field: "2px",
    button: "2px",
  },
  font: {
    display: "var(--font-display, var(--font-sans, Georgia, serif))",
    sans: "var(--font-sans, system-ui, sans-serif)",
    mono: "var(--font-mono, ui-monospace, monospace)",
  },
} as const;

/** @deprecated use `tokens.color` — kept for migrating mobile components. */
export const bmkrs = {
  ink: tokens.color.ink,
  inkRaised: tokens.color.inkRaised,
  paper: tokens.color.paper,
  body: tokens.color.body,
  faint: tokens.color.faint,
  meta: tokens.color.meta,
  orange: tokens.color.orange,
  rule: tokens.color.rule,
} as const;

export const mono: CSSProperties = {
  fontFamily: tokens.font.mono,
};

export type SurfaceTheme = "ink" | "paper" | "orange";

export type SurfaceTokens = {
  bg: string;
  text: string;
  body: string;
  faint: string;
  rule: string;
  accent: string;
};

export const SURFACE: Record<SurfaceTheme, SurfaceTokens> = {
  ink: {
    bg: tokens.color.ink,
    text: tokens.color.paper,
    body: tokens.color.body,
    faint: tokens.color.meta,
    rule: tokens.color.ruleInk,
    accent: tokens.color.orange,
  },
  paper: {
    bg: tokens.color.paper,
    text: tokens.color.ink,
    body: tokens.color.paperBody,
    faint: tokens.color.paperFaint,
    rule: tokens.color.rulePaper,
    accent: tokens.color.orange,
  },
  orange: {
    bg: tokens.color.orange,
    text: tokens.color.ink,
    body: tokens.color.orangeBody,
    faint: tokens.color.orangeFaint,
    rule: tokens.color.ruleOrange,
    accent: tokens.color.ink,
  },
};

export function themeBodyStyle(theme: SurfaceTheme): CSSProperties {
  return { color: SURFACE[theme].body };
}

export function themeFaintStyle(theme: SurfaceTheme): CSSProperties {
  return { ...mono, color: SURFACE[theme].faint };
}
