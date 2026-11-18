import Image from "next/image";
import { StatusDot, tokens, SURFACE, type SurfaceTheme } from "@bmkrs/ui";

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
        background: theme === "paper" ? tokens.color.ink : tokens.color.inkRaised,
        border: `1px solid ${theme === "paper" ? "transparent" : s.rule}`,
      }}
    >
      <span
        className="preserve-case text-2xl font-medium leading-none"
        style={{ color: tokens.color.paper }}
      >
        {name.charAt(0)}
        <StatusDot variant="solid" className="ml-[2px] inline-block align-baseline" />
      </span>
    </div>
  );
}
