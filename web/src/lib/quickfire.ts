import type { QuickfireItem } from "@/lib/types";

export function quickfireIsReady(item: QuickfireItem): boolean {
  const value = item.value?.trim() ?? "";
  if (!item.label || !value) return false;
  if (value === "TODO" || value.includes("[")) return false;
  return true;
}

export function visibleQuickfire(items?: QuickfireItem[]): QuickfireItem[] {
  return (items ?? []).filter(quickfireIsReady);
}
