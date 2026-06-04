import Image from "next/image";

type PageBannerProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function PageBanner({ src, alt, priority, className = "" }: PageBannerProps) {
  return (
    <div
      className={`relative mb-12 aspect-[21/9] min-h-[200px] overflow-hidden rounded-2xl ring-1 ring-white/10 sm:aspect-[2.4/1] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1280px) 100vw, 1280px"
        priority={priority}
      />
    </div>
  );
}

type MediaStripItem = { src: string; alt: string };

export function MediaStrip({
  items,
  className = "",
}: {
  items: MediaStripItem[];
  className?: string;
}) {
  return (
    <div
      className={`my-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 ${className}`}
    >
      {items.map((item) => (
        <div
          key={item.src}
          className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}

type SideMediaProps = {
  src: string;
  alt: string;
  className?: string;
};

export function SideMedia({ src, alt, className = "" }: SideMediaProps) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10 ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 480px" />
    </div>
  );
}
