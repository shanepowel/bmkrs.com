"use client";

import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { ProjectTile } from "@/components/bmkrs/ProjectTile";
import { H2, Section } from "@/components/bmkrs/surfaces";
import type { Project } from "@/lib/types";
import { SwipeRow } from "./SwipeRow";

export function WorkProjectsSwipe({
  projects,
  subtitle,
}: {
  projects: Project[];
  subtitle: string;
}) {
  return (
    <Section theme="ink">
      <div className="sec-head">
        <H2 theme="ink">
          the brands we <span className="text-accent">build for</span>
        </H2>
        <p className="text-muted">{subtitle}</p>
      </div>
      <div className="mt-[var(--space-block)]">
        <SwipeRow ariaLabel="selected work" desktopGridClass="md:grid md:grid-cols-2 md:overflow-visible">
          {projects.map((project, i) => (
            <ProjectTile
              key={project.slug}
              project={project}
              featured={false}
              delay={(i as 0 | 1 | 2 | 3) || 0}
              gradientIndex={i}
            />
          ))}
        </SwipeRow>
      </div>
      <Link href="/work" className="btn-primary mt-[var(--space-block)] inline-flex">
        all projects <ArrowIcon />
      </Link>
    </Section>
  );
}
