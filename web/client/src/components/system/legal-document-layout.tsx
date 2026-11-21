import * as React from "react";
import { PageShell } from "./page-shell";
import { PageHero } from "./page-hero";
import { Section } from "./section";
import { Stack } from "./stack";
import { Grid } from "./grid";
import { Text, Eyebrow } from "./text";

export type LegalDocumentSection = {
  title: string;
  body: string | null;
  list?: string[];
};

export interface LegalDocumentLayoutProps {
  title: React.ReactNode;
  titleTestId?: string;
  lastUpdated: string;
  /** Overrides the default “Last updated: …” line under the title. */
  lastUpdatedLine?: React.ReactNode;
  intro?: React.ReactNode;
  sections: LegalDocumentSection[];
  /** Optional prose block after sections, before the company information band. */
  afterSections?: React.ReactNode;
  companyInfo: [string, string][];
}

const legalContainerClass = "max-w-[860px]";

function LegalProseBlock({ section }: { section: LegalDocumentSection }) {
  return (
    <section>
      <div className="mb-5 flex items-start gap-4">
        <div className="mt-0.5 h-7 w-0.5 flex-shrink-0 rounded bg-[#F85C70]" />
        <Text variant="h3">{section.title}</Text>
      </div>
      {section.body ? (
        <div className="space-y-4 pl-[calc(0.5rem+1rem)]">
          {section.body.split("\n\n").map((para, i) => (
            <Text key={i} variant="body" tone="muted">
              {para}
            </Text>
          ))}
        </div>
      ) : null}
      {section.list ? (
        <ul className="mt-3 space-y-3 pl-[calc(0.5rem+1rem)]">
          {section.list.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F85C70]" />
              <Text as="span" variant="body" tone="muted">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

/** Standard layout for legal and policy pages: navy hero, prose body, company facts band. */
export function LegalDocumentLayout({
  title,
  titleTestId,
  lastUpdated,
  lastUpdatedLine,
  intro,
  sections,
  afterSections,
  companyInfo,
}: LegalDocumentLayoutProps) {
  return (
    <PageShell>
      <PageHero
        eyebrow="Legal"
        title={<span data-testid={titleTestId}>{title}</span>}
        padding="lg"
        contentClassName={legalContainerClass}
      >
        {lastUpdatedLine ?? (
          <Text variant="small" tone="white-45">
            Last updated: {lastUpdated}
          </Text>
        )}
      </PageHero>

      <Section tone="white" padding="lg" containerClassName={legalContainerClass}>
        <Stack gap="2xl">
          {intro ? (
            <Text variant="body" tone="muted" className="max-w-none">
              {intro}
            </Text>
          ) : null}
          <Stack gap="2xl">
            {sections.map((section) => (
              <LegalProseBlock key={section.title} section={section} />
            ))}
          </Stack>
          {afterSections}
        </Stack>
      </Section>

      <Section tone="mist" padding="sm" containerClassName={legalContainerClass}>
        <Eyebrow className="mb-6 text-[#6B6E81]">Company information</Eyebrow>
        <Grid cols={2} gap="md" equal={false}>
          {companyInfo.map(([label, value]) => (
            <div key={label}>
              <Text variant="caption" className="mb-1 uppercase tracking-[0.08em] text-[#9597A5]">
                {label}
              </Text>
              <Text variant="small">{value}</Text>
            </div>
          ))}
        </Grid>
      </Section>
    </PageShell>
  );
}
