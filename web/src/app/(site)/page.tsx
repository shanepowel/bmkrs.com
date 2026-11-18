import { SectionHeading, Surface } from "@bmkrs/ui";
import { Reveal } from "@/components/bmkrs/Reveal";
import { ArriveGrid } from "@/components/home/ArriveGrid";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesList } from "@/components/home/ServicesList";
import { WhyBand } from "@/components/home/WhyBand";
import { WorkSection } from "@/components/home/WorkSection";
import { homePainPoints } from "@/lib/content/expansion-v2";
import {
  getHomeContent,
  getHomeTestimonials,
  getProducts,
  getShowcaseProjects,
} from "@/lib/content";
import type { Testimonial } from "@/lib/types";

function pickWorkTestimonial(testimonials: Testimonial[]) {
  const podcast = testimonials.find((item) =>
    `${item.company ?? ""} ${item.role ?? ""} ${item.attribution ?? ""}`
      .toLowerCase()
      .includes("podcast studio london"),
  );
  return podcast ?? testimonials[0];
}

export default async function HomePage() {
  const [home, showcase, testimonials, products] = await Promise.all([
    getHomeContent(),
    getShowcaseProjects(4),
    getHomeTestimonials(),
    getProducts(),
  ]);

  const workTestimonial = pickWorkTestimonial(testimonials);
  const reelFrames = showcase.map((project) => ({
    href: `/work/${project.slug}`,
    name: project.title.toLowerCase(),
    tag: (project.sector || project.category).toLowerCase(),
    src: project.thumbnailPath,
    alt: `${project.title.toLowerCase()}, project work`,
  }));

  return (
    <main data-surface="ink">
      <HomeHero frames={reelFrames} />

      <HomeMarquee items={home.marqueeItems} />

      {/* surface rhythm: ink / paper alternating. never two paper blocks adjacent; orange never touches paper. */}
      <Surface theme="paper" pad="home" id="arrive">
        <Reveal>
          <SectionHeading title="you usually arrive with one of these." eyebrow="why people call us" />
          <ArriveGrid points={homePainPoints} />
        </Reveal>
      </Surface>

      <Reveal>
        <WhyBand />
      </Reveal>

      <Surface theme="paper" pad="home" id="services">
        <Reveal>
          <ServicesList
            eyebrow={home.positioning.eyebrow}
            statement={home.positioning.statement}
            lead={home.positioning.lead}
            tiles={home.capabilityTiles}
          />
        </Reveal>
      </Surface>

      <Reveal>
        <WorkSection
          projects={showcase}
          testimonial={workTestimonial}
          eyebrow={home.selectedWork.eyebrow}
          title={home.selectedWork.title}
        />
      </Reveal>

      <Surface theme="paper" pad="home" id="packages">
        <Reveal>
          <PackagesSection products={products} />
        </Reveal>
      </Surface>

      <Reveal>
        <ProcessSection />
      </Reveal>

      <Reveal>
        <FinalCTA />
      </Reveal>
    </main>
  );
}
