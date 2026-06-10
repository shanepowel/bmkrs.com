import type { CSSProperties, ReactNode } from "react";
import { BMKRS_ORANGE } from "@/lib/brand";
import { SURFACE, type SurfaceTheme } from "@/lib/surfaces";

export type Theme = SurfaceTheme;
export { SURFACE, BMKRS_ORANGE as ORANGE };

export const mono: CSSProperties = {
  fontFamily: "var(--font-mono, ui-monospace, monospace)",
};

export function Section({
  theme,
  children,
  className = "",
  tight = false,
  id,
}: {
  theme: Theme;
  children: ReactNode;
  className?: string;
  /** reduced vertical padding for bands like tickers */
  tight?: boolean;
  id?: string;
}) {
  const s = SURFACE[theme];
  return (
    <section
      id={id}
      style={{ background: s.bg, color: s.text }}
      className={className}
      data-surface={theme}
    >
      <div
        className={`mx-auto max-w-[1440px] px-6 md:px-12 ${
          tight ? "py-6" : "py-[clamp(4.5rem,9vw,8.5rem)]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export function Kicker({ theme, children }: { theme: Theme; children: ReactNode }) {
  return (
    <p
      style={{ ...mono, color: SURFACE[theme].accent, letterSpacing: "0.08em" }}
      className="mb-5 text-meta"
    >
      {children}
    </p>
  );
}

export function H1({ theme, children, className = "" }: { theme: Theme; children: ReactNode; className?: string }) {
  return (
    <h1
      className={`display text-hero font-medium ${className}`}
      style={{
        lineHeight: 0.98,
        letterSpacing: "-0.02em",
        color: SURFACE[theme].text,
      }}
    >
      {children}
    </h1>
  );
}

export function H2({ theme, children, className = "" }: { theme: Theme; children: ReactNode; className?: string }) {
  return (
    <h2
      className={`display text-h2 font-medium ${className}`}
      style={{
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
        color: SURFACE[theme].text,
      }}
    >
      {children}
    </h2>
  );
}

export function Rule({ theme }: { theme: Theme }) {
  return <div aria-hidden style={{ borderTop: `1px solid ${SURFACE[theme].rule}` }} />;
}

export function Body({
  theme,
  children,
  lead = false,
  className = "",
}: {
  theme: Theme;
  children: ReactNode;
  lead?: boolean;
  className?: string;
}) {
  return (
    <div
      style={{ color: SURFACE[theme].body }}
      className={`max-w-[65ch] leading-relaxed ${lead ? "text-lg md:text-[1.375rem]" : "text-lg"} ${className}`}
    >
      {children}
    </div>
  );
}

export function themeBodyStyle(theme: Theme): CSSProperties {
  return { color: SURFACE[theme].body };
}

export function themeFaintStyle(theme: Theme): CSSProperties {
  return { ...mono, color: SURFACE[theme].faint };
}
