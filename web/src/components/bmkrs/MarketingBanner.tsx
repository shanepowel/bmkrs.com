import Image from "next/image";
import { FullBleed } from "@/components/bmkrs/FullBleed";

type MarketingBannerProps = {
  src: string;
  alt: string;
  aspect?: "21/9" | "4/3" | "auto";
  priority?: boolean;
};

export function MarketingBanner({
  src,
  alt,
  aspect = "21/9",
  priority = false,
}: MarketingBannerProps) {
  return (
    <FullBleed aspect={aspect} className="relative bg-[#181613]">
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
