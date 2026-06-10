/** Staggered publish dates for the content pack (two per week, no backdating). */
export const journalPublishSchedule: Record<string, string> = {
  "better-told-brand-wins": "2026-06-03",
  "what-a-brand-strategy-agency-does": "2026-06-03",
  "choosing-a-rebrand-agency-uk": "2026-06-10",
  "startup-pr-without-retainer": "2026-06-10",
  "brand-identity-for-startups": "2026-06-17",
  "tone-of-voice-underpriced-asset": "2026-06-17",
  "brand-guidelines-people-use": "2026-06-24",
  "messaging-framework-how-to": "2026-06-24",
  "website-copywriting-that-converts": "2026-07-01",
  "product-launch-pr-checklist": "2026-07-01",
  "ux-writing-is-brand-voice": "2026-07-08",
  "thought-leadership-without-cringe": "2026-07-08",
  "seo-for-new-brands": "2026-07-15",
  "landing-page-ux-five-seconds": "2026-07-15",
  "design-systems-small-teams": "2026-07-22",
  "one-team-vs-five-agencies": "2026-07-22",
};

/** Posts in the pack that replace an older slug. */
export const journalSlugRedirects: Record<string, string> = {
  "better-told-brand-isnt-fair": "better-told-brand-wins",
  "better-told-brand-wins-legacy": "better-told-brand-wins",
  "same-team": "one-team-vs-five-agencies",
  "hand-off-brands-die": "one-team-vs-five-agencies",
};

export function journalPublishDate(slug: string, fallback: string): string {
  return journalPublishSchedule[slug] ?? fallback;
}

export function isJournalPublished(publishedAt: string, now = new Date()): boolean {
  const day = now.toISOString().slice(0, 10);
  return publishedAt.slice(0, 10) <= day;
}

export function filterPublishedPosts<T extends { slug: string; publishedAt: string }>(
  posts: T[],
  now = new Date(),
): T[] {
  return posts.filter((p) => isJournalPublished(p.publishedAt, now));
}
