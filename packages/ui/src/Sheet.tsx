"use client";

/**
 * Brand-adapted sheet, patterned on the shadcn Sheet (Radix Dialog).
 * No lucide — close control is a mono glyph. Colours stay on ink/paper tokens.
 */

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "./cn";

export const Sheet = DialogPrimitive.Root;
export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetPortal = DialogPrimitive.Portal;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;

export const SheetOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-[100] bg-bmkrs-ink/70 data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
      className,
    )}
    {...props}
  />
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const sheetContentVariants = cva(
  "fixed z-[101] flex flex-col bg-bmkrs-ink text-bmkrs-paper outline-none transition-[transform,opacity] duration-300 ease-out data-[state=closed]:duration-200 motion-reduce:transition-none",
  {
    variants: {
      side: {
        full: "inset-0 h-full w-full data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
        right:
          "inset-y-0 right-0 h-full w-full border-l border-[var(--bmkrs-rule-ink)] data-[state=closed]:translate-x-full data-[state=open]:translate-x-0 sm:max-w-md",
        left:
          "inset-y-0 left-0 h-full w-full border-r border-[var(--bmkrs-rule-ink)] data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0 sm:max-w-md",
      },
    },
    defaultVariants: {
      side: "full",
    },
  },
);

export type SheetContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
  VariantProps<typeof sheetContentVariants> & {
    showCloseButton?: boolean;
  };

export const SheetContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ side = "full", className, children, showCloseButton = false, ...props }, ref) => (
  <SheetPortal>
    {side !== "full" ? <SheetOverlay /> : null}
    <DialogPrimitive.Content
      ref={ref}
      className={cn(sheetContentVariants({ side }), className)}
      {...props}
    >
      {children}
      {showCloseButton ? (
        <SheetClose
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center font-mono text-2xl text-bmkrs-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmkrs-orange"
          aria-label="close"
        >
          <span aria-hidden="true">×</span>
        </SheetClose>
      ) : null}
    </DialogPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = DialogPrimitive.Content.displayName;

export function SheetHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2 text-left", className)} {...props} />;
}

export function SheetFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-auto flex flex-col gap-3", className)} {...props} />;
}
