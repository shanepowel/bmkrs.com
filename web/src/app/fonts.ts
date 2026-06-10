import localFont from "next/font/local";
import { Fragment_Mono } from "next/font/google";

export const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

export const fragment = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
