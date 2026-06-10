import { mono as monoStyle } from "@/components/bmkrs/surfaces";

export function ImageCaption({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={`absolute bottom-0 left-0 right-0 px-4 py-3 text-meta ${className}`}
      style={{
        ...monoStyle,
        color: "rgba(241, 239, 232, 0.85)",
        background: "linear-gradient(to top, rgba(24, 22, 19, 0.72), transparent)",
      }}
    >
      {children}
    </p>
  );
}
