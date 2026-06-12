"use client";

import { useEffect } from "react";
import { LEGACY_DISCIPLINE_HASH_MAP } from "@/lib/service-anchors";

export function LegacyHashRedirect() {
  useEffect(() => {
    const next = LEGACY_DISCIPLINE_HASH_MAP[window.location.hash];
    if (next) window.location.replace(next);
  }, []);

  return null;
}
