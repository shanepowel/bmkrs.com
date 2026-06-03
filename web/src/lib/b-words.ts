/** B-narrative words cycled in key headlines (not body copy). */
export const NARRATIVE_B_WORDS = [
  "brand",
  "build",
  "bold",
  "brave",
  "bright",
  "bloom",
] as const;

export type NarrativeBWord = (typeof NARRATIVE_B_WORDS)[number];
