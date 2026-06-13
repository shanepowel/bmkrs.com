"use client";

import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { ProjectTile } from "@/components/bmkrs/ProjectTile";
import { Button, H2, Surface, SwipeRow } from "@bmkrs/ui";
import type { Project } from "@/lib/types";

export function WorkProjectsSwipe({
  projects,
  subtitle,
}: {
  projects: Project[];
  subtitle: string;
}) {
  return (
    <Surface theme="ink">
      <div className="sec-head">
        <H2 theme="ink">
          the brands we <span className="text-accent">build for</span>
        </H2>
        <p className="text-muted">{subtitle}</p>
      </div>
      <div className="mt-[var(--bmkrs-space-block)]">
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
      <Button href="/work" className="mt-[var(--bmkrs-space-block)]">
        all projects <ArrowIcon />
      </Button>
    </Surface>
  );
}
