import type { JournalPost } from "@/lib/types";

export const JOURNAL_CATEGORY_MIN_POSTS = 3;

export const JOURNAL_CATEGORY_LABEL: Record<string, string> = {
  brand: "brand + identity",
  voice: "voice + messaging",
  pr: "pr + comms",
  growth: "growth",
  studio: "studio",
};

export const JOURNAL_CATEGORY_INTRO: Record<string, string> = {
  brand: "positioning, identity, and the decisions that make a brand legible.",
  voice: "tone, messaging, and the words that carry the brand.",
  pr: "coverage, launches, and earning attention without the cringe.",
  growth: "sites, seo, and turning attention into pipeline.",
  studio: "how we work and why we built bmkrs this way.",
};

export function journalCategoryLabel(slug: string): string {
  return JOURNAL_CATEGORY_LABEL[slug] ?? slug;
}

export function groupPostsByCategory(posts: JournalPost[]): Map<string, JournalPost[]> {
  const map = new Map<string, JournalPost[]>();
  for (const post of posts) {
    const cat = post.category || "studio";
    const list = map.get(cat) ?? [];
    list.push(post);
    map.set(cat, list);
  }
  return map;
}

export function categorySlugsWithMinPosts(
  posts: JournalPost[],
  min = JOURNAL_CATEGORY_MIN_POSTS,
): string[] {
  const grouped = groupPostsByCategory(posts);
  return [...grouped.entries()]
    .filter(([, list]) => list.length >= min)
    .map(([slug]) => slug)
    .sort();
}
