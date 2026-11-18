import localFont from "next/font/local";


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

export const fragment = localFont({
  src: "../../public/fonts/GeistMono-Regular.woff2",
  variable: "--font-mono",
  weight: "400",
  display: "swap",
});
