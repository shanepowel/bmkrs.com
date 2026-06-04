import Image from "next/image";
import Link from "next/link";
import { disciplineImages } from "@/lib/content/image-fallbacks";

export function DisciplineVisuals() {
  return (
    <section className="section-pad section--paper">
      <div className="wrap section">
        <p className="eyebrow">four disciplines</p>
        <h2 className="display mt-4 max-w-[16ch] text-[clamp(2rem,5vw,3.5rem)] font-bold">
          brand-led. <span className="text-accent">growth-built.</span>
        </h2>
        <div className="discipline-visual-grid mt-10">
          {disciplineImages.map((d) => (
            <Link key={d.n} href={d.href} className="discipline-visual group">
              <div className="discipline-visual-media relative">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <span className="eyebrow mt-4 block">{d.n}</span>
              <h3 className="display mt-1 text-xl">{d.name}</h3>
              <p className="mt-2 text-sm text-muted">{d.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
