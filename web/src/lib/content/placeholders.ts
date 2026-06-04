/** Fields still holding {{ ... }} placeholders are treated as unfilled (BMK-6). */
export function isFilled(value?: string | null): boolean {
  if (!value?.trim()) return false;
  return !value.includes("{{");
}

export function hasFilledMetrics(
  metrics?: { value?: string; label?: string }[] | null,
): boolean {
  if (!metrics?.length) return false;
  return metrics.some((m) => isFilled(m.value) && isFilled(m.label));
}
