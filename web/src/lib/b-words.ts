/** Adjectives in the home hero: we make [word] brands. */
export const HERO_BRAND_ADJECTIVES = [
  "bold",
  "brave",
  "brilliant",
  "beloved",
  "better",
  "bankable",
  "big",
] as const;

/** Capabilities headline: [word]-led. */
export const CAPABILITY_LED_WORDS = ["brand", "bold", "brave", "build"] as const;

/** Work hero + portfolio: we build [target]. */
export const WORK_BUILD_TARGETS = [
  "brands",
  "brand worlds",
  "brand voices",
  "believers",
  "buzz",
] as const;

/** Services hero: everything your [word] needs to grow. */
export const SERVICES_FOCUS_WORDS = ["brand", "voice", "story", "product", "audience"] as const;

/** Home pillars: built around your [word]. */
export const TEAM_CENTER_WORDS = ["brand", "voice", "story", "mission", "product"] as const;

/** About “what we are”: we are the [word]. */
export const ABOUT_IDENTITY_WORDS = [
  "brandmakers",
  "believers",
  "builders",
  "noise-makers",
] as const;

/** Journal index: notes on [word] work. */
export const JOURNAL_TOPIC_WORDS = ["brand", "voice", "pr", "growth"] as const;

/** Contact hero: start a [word] project. */
export const PROJECT_ADJECTIVES = ["bold", "brave", "brilliant", "big"] as const;

/** Default set when a page does not pass `words`. */
export const NARRATIVE_B_WORDS = HERO_BRAND_ADJECTIVES;

export type NarrativeBWord = (typeof HERO_BRAND_ADJECTIVES)[number];
