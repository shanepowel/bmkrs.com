import clsx from "clsx";
import Link from "next/link";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { tokens } from "./tokens";

type Variant = "primary" | "ghost" | "ink";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  style?: CSSProperties;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

const baseClass =
  "inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full px-6 py-3.5 font-sans text-base font-medium transition touch-manipulation";

const variantClass: Record<Variant, string> = {
  primary: "bg-bmkrs-ink text-bmkrs-paper hover:bg-bmkrs-orange hover:text-bmkrs-paper",
  ghost: "border-2 border-bmkrs-ink hover:bg-bmkrs-ink hover:text-bmkrs-paper",
  ink: "bg-bmkrs-ink text-bmkrs-paper hover:opacity-90",
};

export function Button({
  children,
  className,
  variant = "primary",
  href,
  type = "button",
  disabled,
  onClick,
  style,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = clsx(baseClass, variantClass[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        style={style}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export function GhostButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="ghost" {...props} />;
}

/** Orange-on-ink CTA used on orange surfaces (e.g. motion teaser). */
export function InkButton({ children, className, href, ...props }: Omit<ButtonProps, "variant">) {
  const inkStyle: CSSProperties = {
    background: tokens.color.ink,
    color: tokens.color.paper,
    ...props.style,
  };

  return (
    <Button
      href={href}
      className={clsx("hover:opacity-90 motion-reduce:transform-none", className)}
      style={inkStyle}
      {...props}
    >
      {children}
    </Button>
  );
}
