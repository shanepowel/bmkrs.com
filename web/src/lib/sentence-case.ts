/**
 * Sentence-case a string for headlines: capitalise the first letter of each
 * sentence, leave the rest as authored. Safe for already-cased CMS titles.
 */
export function sentenceCase(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return value;
  return trimmed.replace(/(^[a-z])|([.!?]\s+[a-z])/g, (match) => match.toUpperCase());
}
