import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FBF9F5",
        ink: "#181613",
        muted: "rgb(180 178 169)",
        accent: "#e4502a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(3rem, 8vw, 8.75rem)",
          { lineHeight: "0.98", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(2.25rem, 4.5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        h3: ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.15" }],
        "body-lg": ["clamp(1.125rem, 1.4vw, 1.375rem)", { lineHeight: "1.5" }],
        meta: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        site: "90rem",
      },
      borderRadius: {
        bmkrs: "24px",
      },
    },
  },
  plugins: [],
};

export default config;
