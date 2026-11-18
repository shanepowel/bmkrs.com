import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "bmkrs-ink": "var(--bmkrs-ink)",
        "bmkrs-ink-raised": "var(--bmkrs-ink-raised)",
        "bmkrs-paper": "var(--bmkrs-paper)",
        "bmkrs-body": "var(--bmkrs-body)",
        "bmkrs-meta": "var(--bmkrs-meta)",
        "bmkrs-muted": "var(--bmkrs-muted)",
        "bmkrs-faint": "var(--bmkrs-faint)",
        "bmkrs-orange": "var(--bmkrs-orange)",
        "bmkrs-orange-soft": "var(--bmkrs-orange-soft)",
        ink: "var(--bmkrs-ink)",
        paper: "var(--bmkrs-paper)",
        bg: "var(--bmkrs-paper-bright)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "var(--lh-display)", letterSpacing: "var(--tracking-display)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--lh-heading)", letterSpacing: "var(--tracking-display)" }],
        h3: ["var(--text-h3)", { lineHeight: "1.15" }],
        lead: ["var(--text-lead)", { lineHeight: "var(--lh-body)" }],
        body: ["var(--text-body)", { lineHeight: "var(--lh-body)" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "var(--lh-body)" }],
        meta: ["var(--text-meta)", { lineHeight: "1.4", letterSpacing: "var(--tracking-kicker)" }],
        input: ["1rem", { lineHeight: "1.4" }],
      },
      maxWidth: { site: "var(--maxw)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        bmkrs: "var(--bmkrs-radius-card)",
        pill: "9999px",
      },
      spacing: {
        "bmkrs-1": "0.5rem", "bmkrs-2": "1rem", "bmkrs-3": "1.5rem",
        "bmkrs-4": "2rem", "bmkrs-5": "4rem", "bmkrs-section": "var(--section-y)",
        "bmkrs-section-sm": "var(--section-y-sm)", "bmkrs-block": "var(--block-gap)",
        "bmkrs-tight": "var(--cluster-gap)",
      },
    },
  },
};

export default config;
