import Image from "next/image";
import { FullBleed } from "@/components/bmkrs/FullBleed";
import { tokens } from "@bmkrs/ui";

type MarketingBannerProps = {
  src: string;
  alt: string;
  /**
   * Short cinematic plate only. `auto` is rejected at the type level so a
   * fill Image can never collapse to zero height.
   */
  aspect?: "21/9" | "4/3";
  priority?: boolean;
};

/**
 * Full-bleed proof plate. Always aspect-sized and height-capped so decorative
 * imagery cannot dominate a page the way uncapped 4/3 banners did.
 */
export function MarketingBanner({
  src,
  alt,
  aspect = "21/9",
  priority = false,
}: MarketingBannerProps) {
  return (
    <FullBleed
      aspect={aspect}
      className="relative min-h-[10rem] max-h-[min(40vh,22rem)]"
      style={{ background: tokens.color.ink }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />
    </FullBleed>
  );
}
