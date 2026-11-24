'use client';

import { ArrowUpRight } from "lucide-react";
import type { BmkStat } from "@/content/bmk-types";
import { revealStyle } from "./primitives";

/** Published figures with their sources, as a bordered grid. Used on the home page and in stats blocks. */
export function StatGrid({ items, visible = true }: { items: BmkStat[]; visible?: boolean }) {
  const cols = items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <ul className={`grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 ${cols}`}>
      {items.map((s, i) => (
        <li
          key={`${s.value}-${s.source}`}
          className="group relative flex flex-col border-b border-r border-white/10 p-8 lg:p-10"
          style={revealStyle(visible, i * 0.06)}
        >
          <span
            aria-hidden
            className="absolute left-0 top-0 h-[2px] w-0 bg-[#F85C70] transition-all duration-500 group-hover:w-full"
          />
          <p className="font-display text-5xl font-black leading-none tracking-[-0.03em] text-[#F85C70] [font-stretch:120%] lg:text-6xl">
            {s.value}
          </p>
          <p className="mt-5 flex-1 text-base leading-relaxed text-white/80">{s.label}</p>
          {s.href ? (
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50 transition-colors hover:text-white"
            >
              {s.source} <ArrowUpRight className="h-3 w-3" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">{s.source}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
