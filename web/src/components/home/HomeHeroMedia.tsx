"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

const MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia(MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export function HomeHeroMedia({
  reelUrl,
  poster,
}: {
  reelUrl?: string;
  poster?: string;
}) {
  const motionOk = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(MOTION_QUERY).matches,
    () => false,
  );

  const showVideo = Boolean(reelUrl) && motionOk;

  if (!reelUrl && !poster) return null;

  return (
    <div className="home-hero__media" aria-hidden="true">
      {showVideo ? (
        <video
          className="home-hero__bg"
          src={reelUrl}
          poster={poster}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : poster ? (
        <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover" />
      ) : null}
      <div className="home-hero__scrim" />
    </div>
  );
}
