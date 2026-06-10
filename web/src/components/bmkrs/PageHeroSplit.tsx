import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/bmkrs/Reveal";
import { cn } from "@/lib/utils";

type PageHeroSplitProps = {
  image: { src: string; alt: string };
  children: ReactNode;
  className?: string;
  minHeight?: string;
  priority?: boolean;
  imageFirst?: boolean;
};

export function PageHeroSplit({
  image,
  children,
  className,
  minHeight = "min-h-[64vh]",
  priority = true,
  imageFirst = false,
}: PageHeroSplitProps) {
  const media = (
    <Reveal delay={imageFirst ? 0 : 2} className={cn(imageFirst && "lg:order-first")}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius)] border-2 border-ink sm:aspect-[5/6] lg:max-h-[min(72vh,640px)]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 520px"
        />
      </div>
    </Reveal>
  );

  return (
    <section className={cn("page-hero", minHeight, className)} data-surface="ink">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>{children}</div>
        {media}
      </div>
    </section>
  );
}
