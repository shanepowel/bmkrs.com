import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const gradients = ["block-peach", "block-lilac", "block-mint", "block-sky"];

function initials(title: string) {
  return title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toLowerCase();
}

export function ProjectTile({
  project,
  featured = false,
  delay = 0,
  gradientIndex = 0,
}: {
  project: Project;
  featured?: boolean;
  delay?: 0 | 1 | 2 | 3;
  gradientIndex?: number;
}) {
  const grad = gradients[gradientIndex % gradients.length];

  return (
    <Reveal delay={delay}>
      <Link
        href={`/work/${project.slug}`}
        className={cn("proj-tile group block", featured && "featured")}
      >
        <div className={cn("proj-media", grad)}>
          {project.projectType ? (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-bg/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
              {project.projectType === "studio" ? "built in the studio" : "client work"}
            </span>
          ) : null}
          <Image
            src={project.thumbnailPath}
            alt={project.title}
            fill
            quality={75}
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 50vw"}
            priority={featured}
            fetchPriority={featured ? "high" : "auto"}
            loading={featured ? "eager" : "lazy"}
          />
          <div className="pointer-events-none absolute inset-0 bg-ink/0 transition group-hover:bg-ink/10" />
          <span className="absolute right-5 top-4 grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-bg opacity-0 transition group-hover:opacity-100">
            ↗
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="display text-[clamp(22px,2.6vw,32px)]">{project.title}</h3>
          <span className="text-[13px] font-medium text-accent">{project.category}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ProjectTilePlaceholder({
  title,
  category,
  href,
  label,
  gradientIndex = 0,
}: {
  title: string;
  category: string;
  href: string;
  label?: string;
  gradientIndex?: number;
}) {
  const grad = gradients[gradientIndex % gradients.length];

  return (
    <Link href={href} className="proj-tile group block">
      <div className={cn("proj-media", grad)}>
        <span className="absolute inset-0 grid place-items-center font-display text-[clamp(40px,7vw,120px)] font-bold text-ink/15">
          {label || initials(title)}
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="display text-[clamp(22px,2.6vw,32px)]">{title}</h3>
        <span className="text-[13px] font-medium text-accent">{category}</span>
      </div>
    </Link>
  );
}
