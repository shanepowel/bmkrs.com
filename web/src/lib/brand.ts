/** Official bmkrs logo assets (see public/brand/). */

export const BMKRS_ORANGE = "#FF4D00";

export type WordmarkVariant =
  | "primary-dark"
  | "primary-light"
  | "mono-white"
  | "mono-black"
  | "inverse-orange";

const WORDMARK_FILES: Record<WordmarkVariant, string> = {
  "primary-dark": "bmkrs-primary-dark.svg",
  "primary-light": "bmkrs-primary-light.svg",
  "mono-white": "bmkrs-mono-white.svg",
  "mono-black": "bmkrs-mono-black.svg",
  "inverse-orange": "bmkrs-inverse-orange.svg",
};

export function wordmarkSrc(variant: WordmarkVariant = "primary-dark"): string {
  return `/brand/${WORDMARK_FILES[variant]}`;
}

export const BRAND_AVATAR = "/images/bmkrs-avatar-512.png";
export const BRAND_ICON = "/icon.png";
export const BRAND_ICON_LIGHT = "/icon-light.png";
