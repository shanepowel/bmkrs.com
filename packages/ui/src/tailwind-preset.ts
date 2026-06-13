import type { Config } from "tailwindcss";
import { tokens } from "./tokens";

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        "bmkrs-ink": tokens.color.ink,
        "bmkrs-ink-raised": tokens.color.inkRaised,
        "bmkrs-paper": tokens.color.paper,
        "bmkrs-body": tokens.color.body,
        "bmkrs-meta": tokens.color.meta,
        "bmkrs-faint": tokens.color.faint,
        "bmkrs-orange": tokens.color.orange,
        ink: tokens.color.ink,
        paper: tokens.color.paper,
        accent: tokens.color.orange,
        muted: tokens.color.meta,
        bg: "#FBF9F5",
      },
      fontFamily: {
        sans: [tokens.font.sans, "system-ui", "sans-serif"],
        mono: [tokens.font.mono, "ui-monospace", "monospace"],
        display: [tokens.font.sans, "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [tokens.type.hero, { lineHeight: String(tokens.leading.hero), letterSpacing: tokens.tracking.display }],
        h2: [tokens.type.h2, { lineHeight: String(tokens.leading.h2), letterSpacing: tokens.tracking.display }],
        h3: [tokens.type.h3, { lineHeight: String(tokens.leading.h3) }],
        "body-lg": [tokens.type.bodyLg, { lineHeight: "1.5" }],
        meta: [tokens.type.meta, { lineHeight: "1.4", letterSpacing: tokens.tracking.kicker }],
        input: [tokens.type.input, { lineHeight: "1.4" }],
      },
      maxWidth: {
        site: tokens.space.maxWidth,
      },
      borderRadius: {
        bmkrs: tokens.radius.card,
        pill: tokens.radius.pill,
      },
      spacing: {
        "bmkrs-1": tokens.space[1],
        "bmkrs-2": tokens.space[2],
        "bmkrs-3": tokens.space[3],
        "bmkrs-4": tokens.space[4],
        "bmkrs-5": tokens.space[5],
        "bmkrs-section": tokens.space.section,
        "bmkrs-block": tokens.space.block,
        "bmkrs-tight": tokens.space.tight,
      },
    },
  },
};

export default preset;
