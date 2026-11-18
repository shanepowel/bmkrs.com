"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { cn } from "./cn";
import { useSurface } from "./Surface";
import { tokens, type SurfaceTheme } from "./tokens";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 font-sans text-[var(--text-body)] font-medium transition touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmkrs-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-bg,transparent)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "",
        ghost: "",
        ink: "bg-bmkrs-ink text-bmkrs-paper hover:opacity-90",
        orange:
          "border border-bmkrs-orange bg-bmkrs-orange text-bmkrs-paper hover:bg-transparent hover:text-bmkrs-orange",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

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

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
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
    variant === "primary" ? primaryClass(theme) : variant === "ghost" ? ghostClass(theme) : "";
  const classes = cn(buttonVariants({ variant }), surfaceClass, className);

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
export function InkButton({ children, className, href, ...props }: Omit<ButtonProps, "variant">) {
  const inkStyle: CSSProperties = {
    background: tokens.color.ink,
    color: tokens.color.paper,
    ...props.style,
  };

  return (
    <Button
      href={href}
      className={cn("hover:opacity-90 motion-reduce:transform-none", className)}
      style={inkStyle}
      {...props}
    >
      {children}
    </Button>
  );
}
