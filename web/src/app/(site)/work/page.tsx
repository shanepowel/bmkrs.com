import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BWordRotate } from "@/components/bmkrs/BWordRotate";
import { WORK_BUILD_TARGETS } from "@/lib/b-words";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "work",
  description: "selected projects across branding, ecommerce and digital. the bold brands we build for.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <main>
      <section className="page-hero min-h-[58vh]">
        <div className="wrap section">
          <p className="eyebrow">work</p>
          <h1 className="display mt-4 text-[clamp(2.25rem,11vw,10rem)] font-bold">
            we build <BWordRotate words={WORK_BUILD_TARGETS} className="text-[1em]" />
            <span className="text-accent">.</span>
          </h1>
          <p className="lead mt-7">selected projects across branding, ecommerce and digital.</p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="wrap">
          <div className="work-grid work-grid--index">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="work-card group block overflow-hidden rounded-[var(--radius)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.thumbnailPath}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="meta">
                  <span className="eyebrow mb-2 block">
                    {project.serviceTags?.length
                      ? project.serviceTags.join(" · ")
                      : (project.sector ?? project.category)}
                  </span>
                  <h3 className="display text-xl">{project.title}</h3>
                  <p>{project.positioning ?? project.tagline}</p>
                </div>
              </Link>
            ))}

            <Link href="/contact" className="work-card work-card--cta">
              <div className="meta meta--static">
                <span className="eyebrow">+ your brand next</span>
                <h3 className="display text-2xl">start a project</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
