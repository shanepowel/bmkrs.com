import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition",
    variant === "primary" &&
      "bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-hover",
    variant === "outline" &&
      "border border-white/20 text-white hover:border-brand hover:text-brand",
    variant === "ghost" && "text-muted hover:text-white",
    className
  );

  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
