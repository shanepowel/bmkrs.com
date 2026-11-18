import Image from "next/image";
import { FullBleed } from "@/components/bmkrs/FullBleed";
import { tokens } from "@bmkrs/ui";

type MarketingBannerProps = {
  src: string;
  alt: string;
  /** Prefer short cinematic plates. 4/3 is capped so it cannot eat the viewport. */
  aspect?: "21/9" | "4/3" | "auto";
  priority?: boolean;
};

/**
 * Full-bleed proof plate. Always height-capped so decorative imagery
 * cannot dominate a page the way uncapped 4/3 banners did.
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
      className="relative max-h-[min(40vh,22rem)]"
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
