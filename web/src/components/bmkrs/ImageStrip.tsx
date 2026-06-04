import Image from "next/image";

type ImageStripProps = {
  images: readonly { src: string; alt: string }[];
  className?: string;
};

export function ImageStrip({ images, className }: ImageStripProps) {
  if (!images.length) return null;

  return (
    <div className={className ?? "image-strip"}>
      {images.map((img) => (
        <div key={img.src} className="image-strip-item relative">
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="280px" />
        </div>
      ))}
    </div>
  );
}
