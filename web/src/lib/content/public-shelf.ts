import { isFilled } from "./placeholders";
import type { CaseStudyMetric, Project } from "@/lib/types";

const INCOMPLETE_COPY =
  /to be completed|to follow once|imagery to follow|coming soon|\[\[fill in|replace before launch/i;

export function isIncompleteCaseStudy(project: Project): boolean {
  if (project.published === false) return true;
  const blob = [
    project.whatWeDid,
    project.resultsNarrative,
    project.brief,
    project.thinking,
    project.outcome,
    project.positioning,
  ]
    .filter(Boolean)
    .join("\n");
  return INCOMPLETE_COPY.test(blob);
}

export function isOnPublicShelf(project: Project): boolean {
  return !isIncompleteCaseStudy(project);
}

export function publicMetrics(
  metrics?: CaseStudyMetric[] | null,
): CaseStudyMetric[] {
  if (!metrics?.length) return [];
  return metrics.filter(
    (m) =>
      isFilled(m.value) &&
      isFilled(m.label) &&
      !/placeholder/i.test(`${m.value} ${m.label}`),
  );
}
