import { resolveNetworkPortalUrl } from "@/lib/urls";

export type BenchPublicRow = {
  discipline: string;
  status: "trusted" | "core";
  availability: "available" | "booked" | "away";
  note: string;
  projects: number;
};

export type BenchPublicPulse = {
  updated: string;
  line: string;
};

export type BenchPublicTeamMember = {
  name: string;
  discipline: string;
};

export type BenchPublicSlice = {
  rows: BenchPublicRow[];
  totals: { partners: number; disciplines: number };
  pulse: BenchPublicPulse | null;
  coreTeam: BenchPublicTeamMember[];
};

const REVALIDATE_SECONDS = 3600;

export async function fetchBenchPublic(): Promise<BenchPublicSlice | null> {
  const base = resolveNetworkPortalUrl();
  try {
    const res = await fetch(`${base}/api/bench-public`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as BenchPublicSlice;
  } catch {
    return null;
  }
}

export function benchRowsToTiles(rows: BenchPublicRow[]) {
  return rows.map((row) => ({
    title: row.discipline,
    sub: row.note,
  }));
}

export function benchTotalsToStats(totals: BenchPublicSlice["totals"]) {
  return [
    { value: String(totals.partners), label: "partners on the bench" },
    { value: String(totals.disciplines), label: "disciplines covered" },
  ];
}
