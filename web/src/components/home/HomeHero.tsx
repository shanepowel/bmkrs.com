import Image from "next/image";
import { Button, Hero } from "@bmkrs/ui";
import { brandMessaging } from "@/lib/content/messaging";
import { marketingImages } from "@/lib/marketing-assets";

export function HomeHero() {
  return (
    <Hero
      title={brandMessaging.heroTitle}
      lede={brandMessaging.heroSub}
      actions={
        <Button href="/contact" variant="orange">
          {brandMessaging.ctaPrimary} →
        </Button>
      }
      aside={
        <Image
          src={marketingImages.architectureConcrete}
          alt="sunlit architecture with terracotta wall"
          width={960}
          height={1200}
          priority
          className="h-full w-full object-cover"
        />
      }
    />
  );
}
