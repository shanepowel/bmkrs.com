import placeholders from "../../../content/case-study-placeholders.json";

export type PlaceholderResult = { value: string; label: string };

export const placeholderCompany = placeholders.company;

export const placeholderResultsByCaseId = placeholders.resultsByCaseId as Record<
  string,
  PlaceholderResult[]
>;

export const placeholderResultsBySlug: Record<string, PlaceholderResult[]> = {
  copa: placeholderResultsByCaseId["caseStudy-copa"] ?? [],
  fdb: placeholderResultsByCaseId["caseStudy-fdb"] ?? [],
  carter: placeholderResultsByCaseId["caseStudy-carter"] ?? [],
  wanderlust: placeholderResultsByCaseId["caseStudy-wanderlust"] ?? [],
  smoothies: placeholderResultsByCaseId["caseStudy-smoothies"] ?? [],
  flipster: placeholderResultsByCaseId["caseStudy-flipster"] ?? [],
  "podcast-studio-london": placeholderResultsByCaseId["caseStudy-podcast-studio-london"] ?? [],
  "freelance-near-me": placeholderResultsByCaseId["caseStudy-freelance-near-me"] ?? [],
  "david-wheeler-psychology": placeholderResultsByCaseId["caseStudy-david-wheeler-psychology"] ?? [],
  "three18-media": placeholderResultsByCaseId["caseStudy-three18-media"] ?? [],
};

export const placeholderHomeTestimonials = placeholders.testimonials.map((t) => ({
  quote: t.quote,
  name: t.name,
  role: t.role,
  company: t.company,
}));
