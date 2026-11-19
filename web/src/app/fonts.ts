import localFont from "next/font/local";
import { Fragment_Mono, Instrument_Serif } from "next/font/google";

/**
 * Editorial type trio (locked to the moodboard):
 * - Instrument Serif → display / headlines (`--font-display`)
 * - Cabinet Grotesk → UI / body (`--font-sans`)
 * - Fragment Mono → labels / meta (`--font-mono`)
 * Archivo stays logo-only via SVG wordmarks, never as a UI face.
 * Sans weights 400 and 500 only. Display serif at 400 (+ italic).
 */
export const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-sans",
  weight: "400 500",
  display: "swap",
});

export const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fragment = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
