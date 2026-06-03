"use client";

import { useEffect, useState } from "react";
import { NARRATIVE_B_WORDS, type NarrativeBWord } from "@/lib/b-words";
import { cn } from "@/lib/utils";

type BWordRotateProps = {
  words?: readonly NarrativeBWord[];
  intervalMs?: number;
  suffix?: string;
  className?: string;
};

export function BWordRotate({
  words = NARRATIVE_B_WORDS,
  intervalMs = 2600,
  suffix = "",
  className,
}: BWordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words, intervalMs]);

  const word = words[index];

  return (
    <span className={cn("inline-flex items-baseline gap-0", className)}>
      <span
        className="relative inline-grid overflow-hidden text-accent"
        style={{ minWidth: `${Math.max(...words.map((w) => w.length))}ch` }}
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
