/** Fields still holding {{ ... }} or draft placeholder copy are treated as unfilled (BMK-6). */
export function isFilled(value?: string | null): boolean {
  if (!value?.trim()) return false;
  const v = value.trim();
  if (v.includes("{{")) return false;
  if (/^placeholder\b/i.test(v)) return false;
  if (/replace before launch/i.test(v)) return false;
  if (/to be completed|to follow once|imagery to follow/i.test(v)) return false;
  if (/\[(company number|address)\]/i.test(v)) return false;
  return true;
}

export function hasFilledMetrics(
  metrics?: { value?: string; label?: string }[] | null,
): boolean {
  if (!metrics?.length) return false;
  return metrics.some((m) => isFilled(m.value) && isFilled(m.label));
}
