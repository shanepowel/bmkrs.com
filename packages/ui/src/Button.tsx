"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { cn } from "./cn";
import { useSurface } from "./Surface";
import type { SurfaceTheme } from "./tokens";

/**
 * Button API follows the shadcn pattern (CVA + Slot asChild + size/variant),
 * with surface-aware primary/ghost fills so CTAs stay on brand.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--bmkrs-radius-button)] font-sans font-medium transition touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmkrs-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg,transparent)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "",
        ghost: "",
        ink: "border border-bmkrs-ink bg-bmkrs-ink text-bmkrs-paper hover:opacity-90",
        orange:
          "border border-bmkrs-orange bg-bmkrs-orange text-bmkrs-paper hover:bg-bmkrs-ink hover:border-bmkrs-ink",
        link: "h-auto min-h-0 rounded-none border-0 bg-transparent px-0 py-0 underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-12 px-7 py-3 text-[var(--text-body)]",
        sm: "min-h-11 px-5 py-2.5 text-[0.9375rem]",
        nav: "min-h-11 px-5 py-2.5 text-[0.9rem]",
        icon: "h-11 w-11 min-h-11 px-0",
        sticky: "min-h-11 flex-1 px-4 text-[0.9375rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function primaryClass(theme: SurfaceTheme) {
  if (theme === "paper") {
    return "border border-bmkrs-orange bg-bmkrs-orange text-bmkrs-paper hover:bg-bmkrs-ink hover:border-bmkrs-ink";
  }
  if (theme === "orange") {
    return "border border-bmkrs-ink bg-bmkrs-ink text-bmkrs-paper hover:opacity-90";
  }
  return "border border-bmkrs-orange bg-bmkrs-orange text-bmkrs-paper hover:bg-bmkrs-paper hover:text-bmkrs-ink hover:border-bmkrs-paper";
}

function ghostClass(theme: SurfaceTheme) {
  if (theme === "ink") {
    return "border border-bmkrs-paper bg-transparent text-bmkrs-paper hover:bg-bmkrs-paper hover:text-bmkrs-ink";
  }
  return "border border-bmkrs-ink bg-transparent text-bmkrs-ink hover:bg-bmkrs-ink hover:text-bmkrs-paper";
}

function linkClass(theme: SurfaceTheme) {
  if (theme === "ink") return "text-bmkrs-paper";
  if (theme === "orange") return "text-bmkrs-ink";
  return "text-bmkrs-ink";
}

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
  size?: NonNullable<VariantProps<typeof buttonVariants>["size"]>;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  style?: CSSProperties;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  /** Compose onto a child element via Radix Slot (shadcn pattern). */
  asChild?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "default",
  href,
  type = "button",
  disabled,
  onClick,
  style,
  target,
  rel,
  asChild = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const theme = useSurface();
  const surfaceClass =
    variant === "primary"
      ? primaryClass(theme)
      : variant === "ghost"
        ? ghostClass(theme)
        : variant === "link"
          ? linkClass(theme)
          : "";
  const classes = cn(buttonVariants({ variant, size }), surfaceClass, className);

  if (href && !asChild) {
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

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type={asChild ? undefined : type}
      className={classes}
      disabled={asChild ? undefined : disabled}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </Comp>
  );
}

export function GhostButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="ghost" {...props} />;
}

export function OrangeButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="orange" {...props} />;
}

/** Ink fill CTA used on orange surfaces (e.g. motion teaser). */
export function InkButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="ink" {...props} />;
}
