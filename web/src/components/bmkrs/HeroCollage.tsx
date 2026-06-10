import Image from "next/image";
import { FullBleed } from "@/components/bmkrs/FullBleed";
import { ImageCaption } from "@/components/bmkrs/ImageCaption";

type HeroCollageProps = {
  images: { src: string; alt: string; caption?: string }[];
};

export function HeroCollage({ images }: HeroCollageProps) {
  const slots = images.slice(0, 6);
  if (slots.length === 0) return null;

  return (
    <FullBleed className="hero-carousel mt-[var(--space-block)]">
      <div
        className="hero-carousel__track flex snap-x snap-mandatory gap-3 overflow-x-auto px-[var(--pad)] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="selected project imagery"
      >
        {slots.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="hero-carousel__slide relative aspect-[21/9] w-[min(88vw,72rem)] shrink-0 snap-start overflow-hidden rounded-[var(--radius)] border border-ink/10 bg-ink"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              quality={75}
              className="object-cover"
              sizes="(min-width: 1024px) 1152px, 88vw"
              priority={i < 2}
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i < 2 ? "eager" : "lazy"}
            />
            {item.caption ? <ImageCaption>{item.caption}</ImageCaption> : null}
          </div>
        ))}
      </div>
    </FullBleed>
  );
}
