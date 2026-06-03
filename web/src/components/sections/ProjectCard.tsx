import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-surface ring-1 ring-white/10 transition hover:ring-brand/50"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.thumbnailPath}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            {project.category}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
}
