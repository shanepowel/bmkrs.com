import { Surface } from "@bmkrs/ui";
import { Reveal } from "@/components/bmkrs/Reveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesList } from "@/components/home/ServicesList";
import { WhyBand } from "@/components/home/WhyBand";
import { WorkSection } from "@/components/home/WorkSection";
import { brandMessaging } from "@/lib/content/messaging";
import { getHomeContent, getHomeTestimonials, getProducts, getShowcaseProjects } from "@/lib/content";
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
    <main data-surface="paper">
      <HomeHero frames={reelFrames} />
      <HomeMarquee items={home.marqueeItems} />

      <Reveal>
        <WorkSection
          projects={showcase}
          testimonial={workTestimonial}
          eyebrow="selected work"
          title={brandMessaging.workTitle}
        />
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

      <Reveal><WhyBand /></Reveal>
      <Reveal><ProcessSection /></Reveal>

      <Surface theme="paper" pad="home" id="packages">
        <Reveal><PackagesSection products={products} /></Reveal>
      </Surface>

      <Reveal><FinalCTA /></Reveal>
    </main>
  );
}
