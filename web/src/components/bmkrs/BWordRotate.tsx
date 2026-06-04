"use client";

import { useEffect, useState } from "react";
import { NARRATIVE_B_WORDS } from "@/lib/b-words";
import { cn } from "@/lib/utils";

type BWordRotateProps = {
  words?: readonly string[];
  intervalMs?: number;
  suffix?: string;
  className?: string;
};

function longestCh(words: readonly string[]) {
  return Math.max(...words.map((w) => w.length), 4);
}

export function BWordRotate({
  words = NARRATIVE_B_WORDS,
  intervalMs = 2600,
  suffix = "",
  className,
}: BWordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words, intervalMs]);

  const word = words[index];
  const maxCh = longestCh(words);

  return (
    <span className={cn("inline-flex items-baseline gap-0", className)}>
      <span
        className="relative inline-grid overflow-hidden text-accent"
        style={{
          minWidth: `clamp(4.5ch, ${maxCh}ch, 16ch)`,
        }}
        aria-live="polite"
      >
        <span key={word} className="b-word-spin col-start-1 row-start-1 font-display font-bold">
          {word}
        </span>
      </span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}
