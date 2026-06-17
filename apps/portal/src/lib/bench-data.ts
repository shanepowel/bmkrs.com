import type { BenchPublicSlice } from "./bench-types";

export function getBenchPublicSlice(): BenchPublicSlice {
  return {
    rows: [
      {
        discipline: "brand + identity",
        status: "core",
        availability: "booked",
        note: "embedded on motion two",
        projects: 4,
      },
      {
        discipline: "product, web + growth",
        status: "trusted",
        availability: "available",
        note: "next slot: april",
        projects: 2,
      },
      {
        discipline: "voice + messaging",
        status: "trusted",
        availability: "available",
        note: "journal + launch copy",
        projects: 3,
      },
      {
        discipline: "photography / art direction",
        status: "trusted",
        availability: "away",
        note: "back w/c 24 mar",
        projects: 1,
      },
      {
        discipline: "motion + post",
        status: "trusted",
        availability: "available",
        note: "showreels + social",
        projects: 2,
      },
    ],
    totals: { partners: 12, disciplines: 8 },
    pulse: {
      updated: new Date().toISOString(),
      line: "two disciplines open for april starts. motion partners on waitlist.",
    },
    coreTeam: [
      { name: "shane powell", discipline: "brand + product" },
      { name: "george", discipline: "voice + pr" },
    ],
  };
}
