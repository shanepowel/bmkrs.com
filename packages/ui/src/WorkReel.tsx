"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export type WorkReelFrame = {
  href: string;
  name: string;
  tag: string;
  src: string;
  alt?: string;
};

export type WorkReelProps = {
  frames: WorkReelFrame[];
  /** ms each frame holds before the next one fades in */
  interval?: number;
  /** mono label in the top-left of the plate, e.g. "live work" */
  label?: string;
  className?: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Framed, blueprint-style reel of real shipped work. Crossfades between
 * frames, pauses on hover or focus, and holds the first frame when the
 * visitor prefers reduced motion.
 */
export function WorkReel({ frames, interval = 4200, label = "live work", className }: WorkReelProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = frames.length;

  useEffect(() => {
    if (reduceMotion || paused || count < 2) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % count), interval);
    return () => window.clearInterval(timer);
  }, [count, interval, paused, reduceMotion]);

  if (count === 0) return null;
  const current = frames[active] ?? frames[0];

  return (
    <figure
      className={clsx("bmkrs-reel", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="bmkrs-reel__plate" aria-hidden>
        <span>{label}</span>
        <span>
          fig. {pad(active + 1)} / {pad(count)}
        </span>
      </div>

      <div className="bmkrs-reel__stage">
        {frames.map((frame, index) => (
          <div
            key={frame.href}
            className={clsx("bmkrs-reel__frame", index === active && "is-active")}
            aria-hidden={index !== active}
          >
            <Image
              src={frame.src}
              alt={frame.alt ?? ""}
              fill
              priority={index === 0}
              sizes="(max-width: 960px) 100vw, 40vw"
              className="bmkrs-reel__img"
            />
          </div>
        ))}
        <span className="bmkrs-reel__corner bmkrs-reel__corner--tl" aria-hidden />
        <span className="bmkrs-reel__corner bmkrs-reel__corner--br" aria-hidden />
      </div>

      <figcaption className="bmkrs-reel__caption">
        <Link href={current.href} className="bmkrs-reel__link">
          <span className="bmkrs-reel__tag">{current.tag}</span>
          <span className="bmkrs-reel__name">{current.name}</span>
        </Link>
        {count > 1 ? (
          <div className="bmkrs-reel__ticks" role="group" aria-label="choose a project">
            {frames.map((frame, index) => (
              <button
                key={frame.href}
                type="button"
                className={clsx("bmkrs-reel__tick", index === active && "is-active")}
                aria-label={`show ${frame.name}`}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              >
                <span />
              </button>
            ))}
          </div>
        ) : null}
      </figcaption>
    </figure>
  );
}
