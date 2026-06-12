import Image from "next/image";
import { motionStripImages } from "@/lib/marketing-assets";

export function MotionShowcase() {
  return (
    <section className="section-pad bg-[var(--surface-bg)] text-[var(--surface-text)]" data-surface="ink">
      <div className="wrap">
        <p className="eyebrow">work in motion</p>
        <div className="motion-showcase mt-6">
          {motionStripImages.map((img) => (
            <div key={img.src} className="motion-showcase-item relative">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 280px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
