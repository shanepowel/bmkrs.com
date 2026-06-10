import { BMKRS_ORANGE } from "@/lib/brand";

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
    bg: "#181613",
    text: "#F1EFE8",
    body: "#D3D1C7",
    faint: "#B4B2A9",
    rule: "rgba(241,239,232,0.16)",
    accent: BMKRS_ORANGE,
  },
  paper: {
    bg: "#F1EFE8",
    text: "#181613",
    body: "#444441",
    faint: "#5F5E5A",
    rule: "rgba(24,22,19,0.15)",
    accent: BMKRS_ORANGE,
  },
  orange: {
    bg: BMKRS_ORANGE,
    text: "#181613",
    body: "#2C1005",
    faint: "#4A1B0C",
    rule: "rgba(24,22,19,0.25)",
    accent: "#181613",
  },
};
