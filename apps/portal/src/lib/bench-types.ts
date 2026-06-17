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
