"use client";

import { useEffect } from "react";

const MAP: Record<string, string> = {
  "#branding": "#launch-kit",
  "#voice": "#story",
  "#pr": "#press-launch",
  "#product": "#storefront",
};

export function LegacyHashRedirect() {
  useEffect(() => {
    const next = MAP[window.location.hash];
    if (next) window.location.replace(next);
  }, []);

  return null;
}
