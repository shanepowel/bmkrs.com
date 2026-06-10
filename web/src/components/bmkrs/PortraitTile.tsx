import Image from "next/image";
import { BMKRS_ORANGE } from "@/lib/brand";
import { SURFACE, type SurfaceTheme } from "@/lib/surfaces";

type PortraitTileProps = {
  name: string;
  discipline?: string;
  portraitUrl?: string;
  theme: SurfaceTheme;
  size?: number;
};

export function PortraitTile({ name, discipline, portraitUrl, theme, size = 88 }: PortraitTileProps) {
  const s = SURFACE[theme];
  const alt = discipline
    ? `illustrated portrait of ${name}, ${discipline} at bmkrs`
    : `illustrated portrait of ${name}`;

  if (portraitUrl) {
    return (
      <Image
        src={portraitUrl}
        alt={alt}
        width={size}
        height={size}
        className="rounded-lg object-cover"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="flex items-end justify-start rounded-lg p-2"
      style={{
        width: size,
        height: size,
        background: theme === "paper" ? "#181613" : "#221F1B",
        border: `1px solid ${theme === "paper" ? "transparent" : s.rule}`,
      }}
    >
      <span className="preserve-case text-2xl font-medium leading-none text-[#F1EFE8]">
        {name.charAt(0)}
        <span
          className="ml-[2px] inline-block rounded-full align-baseline"
          style={{ width: "0.14em", height: "0.14em", background: BMKRS_ORANGE }}
        />
      </span>
    </div>
  );
}
