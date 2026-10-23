import type { ReactNode } from "react";
import { PageHero } from "@bmkrs/ui";

type PageHeroSplitProps = {
  image: { src: string; alt: string };
  children?: ReactNode;
  className?: string;
  minHeight?: string;
  priority?: boolean;
  imageFirst?: boolean;
};

/** Older page heroes now render through the shared PageHero. */
export function PageHeroSplit({ image, children }: PageHeroSplitProps) {
  return <PageHero image={image}>{children}</PageHero>;
}
