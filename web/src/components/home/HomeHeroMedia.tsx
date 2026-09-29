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

  if (showVideo) {
    return (
      <video src={reelUrl} poster={poster} preload="auto" autoPlay muted loop playsInline />
    );
  }

  if (poster) {
    return <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover" />;
  }

  return null;
}
