export const MOTION_AB_COOKIE = "bmkrs-motion-ab";

export type MotionAbVariant = "control" | "reworked";

const VARIANTS: MotionAbVariant[] = ["control", "reworked"];

export function parseMotionAbOverride(value?: string | null): MotionAbVariant | null {
  if (!value) return null;
  if (value === "reworked" || value === "b") return "reworked";
  if (value === "control" || value === "a") return "control";
  return null;
}

export function isMotionAbVariant(value?: string | null): value is MotionAbVariant {
  return value === "control" || value === "reworked";
}

/** Assign a random variant when middleware has not set a cookie yet. */
export function randomMotionAbVariant(): MotionAbVariant {
  return VARIANTS[Math.floor(Math.random() * VARIANTS.length)] ?? "control";
}

export function resolveMotionAbVariant(input: {
  override?: string | null;
  cookie?: string | null;
}): MotionAbVariant {
  return (
    parseMotionAbOverride(input.override) ??
    (isMotionAbVariant(input.cookie) ? input.cookie : randomMotionAbVariant())
  );
}
