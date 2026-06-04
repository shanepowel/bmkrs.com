import Image from "next/image";
import { Reveal } from "@/components/bmkrs/Reveal";
import { cn } from "@/lib/utils";

type SectionImageProps = {
  src: string;
  alt: string;
  aspect?: "wide" | "cinema" | "square";
  className?: string;
  priority?: boolean;
};

const aspectClass = {
  wide: "aspect-[16/10]",
  cinema: "aspect-[21/9]",
  square: "aspect-square",
};

export function SectionImage({
  src,
  alt,
  aspect = "wide",
  className,
  priority = false,
}: SectionImageProps) {
  return (
    <Reveal>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[var(--radius)] border-2 border-ink",
          aspectClass[aspect],
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>
    </Reveal>
  );
}
