"use client";

import { useState } from "react";

const LABELS: Record<string, string> = {
  all: "all",
  brand: "brand + identity",
  voice: "voice + messaging",
  pr: "pr + comms",
  growth: "growth",
  studio: "studio",
};

export function JournalFilter() {
  const [active, setActive] = useState("all");

  return (
    <div className="journal-filter">
      <span className="eyebrow">filter</span>
      {Object.keys(LABELS).map((cat) => (
        <button
          key={cat}
          type="button"
          className={`chip ${active === cat ? "chip--active" : ""}`}
          data-cat={cat}
          onClick={() => {
            setActive(cat);
            document.querySelectorAll<HTMLElement>("[data-category]").forEach((el) => {
              const show = cat === "all" || el.dataset.category === cat;
              el.style.display = show ? "" : "none";
            });
          }}
        >
          {LABELS[cat]}
        </button>
      ))}
    </div>
  );
}
