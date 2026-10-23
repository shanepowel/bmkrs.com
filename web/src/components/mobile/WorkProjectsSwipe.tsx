"use client";

import { Button, H2, Kicker, Surface, SwipeRow, WorkTile } from "@bmkrs/ui";
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
      <div className="heading-group">
        <Kicker theme="ink">selected work</Kicker>
        <H2 theme="ink">
          the brands we <span className="text-accent">build for</span>
        </H2>
        <p className="text-body-sm text-muted max-w-[65ch]">{subtitle}</p>
      </div>
      <div className="block-gap">
        <SwipeRow ariaLabel="selected work" desktopGridClass="md:grid md:grid-cols-2 md:overflow-visible">
          {projects.map((project) => (
            <WorkTile
              key={project.slug}
              href={`/work/${project.slug}`}
              tag={project.category}
              name={project.title}
              image={{ src: project.thumbnailPath, alt: "" }}
            />
          ))}
        </SwipeRow>
      </div>
      <Button href="/work" className="block-gap">
        all projects
      </Button>
    </Surface>
  );
}
