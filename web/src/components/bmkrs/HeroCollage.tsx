import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroCollageProps = {
  images: { src: string; alt: string }[];
};

export function HeroCollage({ images }: HeroCollageProps) {
  const slots = images.slice(0, 4);
  if (slots.length === 0) return null;

  return (
    <div className="grid w-full max-w-full grid-cols-2 gap-2.5 sm:gap-3 lg:max-w-none">
      {slots.map((item, i) => (
        <div
          key={item.src}
          className={cn(
            "relative overflow-hidden rounded-[var(--radius)] border-2 border-ink",
            i === 0 && "col-span-2 aspect-[21/9]",
            i > 0 && "aspect-[4/3]",
            i === 1 && "block-lilac",
            i === 2 && "block-mint",
            i === 3 && "block-sky"
          )}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            quality={75}
            className="object-cover"
            sizes={
              i === 0
                ? "(min-width: 1024px) 520px, 100vw"
                : "(max-width: 768px) 50vw, 240px"
            }
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "low"}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}
