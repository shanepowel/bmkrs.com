"use client";

import clsx from "clsx";
import Link from "next/link";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { useSurface } from "./Surface";
import { tokens, type SurfaceTheme } from "./tokens";

type Variant = "primary" | "ghost" | "ink" | "orange";

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
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 font-sans text-[var(--text-body)] font-medium transition touch-manipulation";

function primaryClass(theme: SurfaceTheme) {
  if (theme === "paper") {
    return "bg-bmkrs-ink text-bmkrs-paper hover:bg-bmkrs-orange hover:text-bmkrs-paper";
  }
  if (theme === "orange") {
    return "bg-bmkrs-ink text-bmkrs-paper hover:opacity-90";
  }
  return "bg-bmkrs-paper text-bmkrs-ink hover:bg-bmkrs-orange hover:text-bmkrs-paper";
}

function ghostClass(theme: SurfaceTheme) {
  if (theme === "ink") {
    return "border border-bmkrs-paper text-bmkrs-paper hover:bg-bmkrs-paper hover:text-bmkrs-ink";
  }
  return "border border-bmkrs-ink text-bmkrs-ink hover:bg-bmkrs-ink hover:text-bmkrs-paper";
}

const fixedClass = {
  ink: "bg-bmkrs-ink text-bmkrs-paper hover:opacity-90",
  orange:
    "border border-bmkrs-orange bg-bmkrs-orange text-bmkrs-paper hover:bg-transparent hover:text-bmkrs-orange",
} as const;

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
  const theme = useSurface();
  const variantClasses =
    variant === "primary" ? primaryClass(theme) : variant === "ghost" ? ghostClass(theme) : fixedClass[variant];
  const classes = clsx(baseClass, variantClasses, className);

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

export function OrangeButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="orange" {...props} />;
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
