import localFont from "next/font/local";
import { Fragment_Mono } from "next/font/google";

/**
 * Type pairing is still open.
 * Current live pairing: Cabinet Grotesk (sans) + Fragment Mono.
 * Swap by changing these loaders only — UI consumes `--font-sans` / `--font-mono`.
 * Archivo stays logo-only via SVG wordmarks, never as a UI face.
 * Brand rule while debating: UI weights 400 and 500 only.
 */
export const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-sans",
  weight: "400 500",
  display: "swap",
});

export const fragment = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
