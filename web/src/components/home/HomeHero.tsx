import Image from "next/image";
import Link from "next/link";
import type { WorkReelFrame } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";

const CAPABILITIES = [
  { name: "product strategy", href: "/services#readiness" },
  { name: "AI delivery", href: "/services#ai-implementation" },
  { name: "governance", href: "/services#ai-governance" },
  { name: "team enablement", href: "/services#onboard" },
];

export function HomeHero({ frames }: { frames: WorkReelFrame[] }) {
  const projects = frames.slice(0, 3);

  return (
    <section className="bmkrs-editorial-home" data-surface="paper" aria-labelledby="home-title">
      <div className="bmkrs-wrap">
        <div className="bmkrs-editorial-home__lead">
          <div className="bmkrs-editorial-home__copy">
            <h1 id="home-title">
              {brandMessaging.heroTitleLead}<br />{brandMessaging.heroTitleEm}
            </h1>
            <p>{brandMessaging.heroSub}</p>
            <Link href="/contact" className="bmkrs-editorial-home__cta">
              {brandMessaging.ctaPrimary}<span aria-hidden="true">+</span>
            </Link>
          </div>
          <div className="bmkrs-editorial-home__image">
            <Image
              src="/images/bmkrs-hero-editorial.webp"
              alt="Editorial portrait beside sculptural concrete architecture against a vivid orange sky"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 52vw"
            />
          </div>
        </div>

        <div className="bmkrs-editorial-home__work">
          <div className="bmkrs-editorial-home__projects">
            <div className="bmkrs-editorial-home__section-label">
              <span>selected work</span>
              <Link href="/work">all projects <span aria-hidden="true">+</span></Link>
            </div>
            <div className="bmkrs-editorial-home__project-grid">
              {projects.map((project) => (
                <Link href={project.href} className="bmkrs-editorial-home__project" key={project.href}>
                  <span className="bmkrs-editorial-home__project-image">
                    <Image
                      src={project.src}
                      alt={project.alt ?? `${project.name} project work`}
                      fill
                      sizes="(max-width: 760px) 100vw, 18vw"
                    />
                  </span>
                  <span className="bmkrs-editorial-home__project-name">
                    {project.name}<span aria-hidden="true">+</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="bmkrs-editorial-home__capabilities">
            <span className="bmkrs-editorial-home__section-label">what we do</span>
            <div>
              {CAPABILITIES.map((item) => (
                <Link key={item.name} href={item.href}>{item.name}</Link>
              ))}
            </div>
            <Link className="bmkrs-editorial-home__capabilities-more" href="/services" aria-label="Explore all services">+</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
