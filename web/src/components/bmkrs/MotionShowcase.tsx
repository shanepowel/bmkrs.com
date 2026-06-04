import Image from "next/image";
import { motionShowcaseImages } from "@/lib/content/image-fallbacks";

export function MotionShowcase() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <p className="eyebrow">work in motion</p>
        <div className="motion-showcase mt-6">
          {motionShowcaseImages.map((img) => (
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
