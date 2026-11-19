"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import type {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "./cn";
import { useSurface } from "./Surface";
import { tokens, type SurfaceTheme } from "./tokens";

const labelClass = "font-mono text-meta tracking-[var(--bmkrs-tracking-kicker)] lowercase";

const fieldClass =
  "bmkrs-field w-full rounded-[var(--bmkrs-radius-field)] border px-4 py-[0.85rem] text-input leading-snug focus:outline-none focus-visible:border-bmkrs-orange focus-visible:shadow-[0_0_0_3px_var(--bmkrs-accent-focus)]";

function fieldColors(theme: SurfaceTheme): CSSProperties & {
  label: string;
  idle: string;
  activeBg: string;
  activeText: string;
} {
  if (theme === "paper") {
    return {
      background: tokens.color.paper,
      borderColor: tokens.color.rulePaper,
      color: tokens.color.ink,
      label: tokens.color.paperFaint,
      idle: tokens.color.ink,
      activeBg: tokens.color.ink,
      activeText: tokens.color.paper,
    };
  }
  if (theme === "orange") {
    return {
      background: tokens.color.paper,
      borderColor: tokens.color.ruleOrange,
      color: tokens.color.ink,
      label: tokens.color.orangeFaint,
      idle: tokens.color.ink,
      activeBg: tokens.color.ink,
      activeText: tokens.color.paper,
    };
  }
  return {
    background: tokens.color.fieldFill,
    borderColor: tokens.color.fieldBorder,
    color: tokens.color.paper,
    label: tokens.color.meta,
    idle: tokens.color.paper,
    activeBg: tokens.color.paper,
    activeText: tokens.color.ink,
  };
}

export function Label({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) {
  const colors = fieldColors(useSurface());
  return (
    <LabelPrimitive.Root
      className={cn(labelClass, className)}
      style={{ color: colors.label }}
      {...props}
    >
      {children}
    </LabelPrimitive.Root>
  );
}

export function Field({
  label,
  id,
  className,
  inputClassName,
  ...inputProps
}: {
  label: ReactNode;
  id?: string;
  className?: string;
  inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  const inputId = id ?? (typeof label === "string" ? label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const colors = fieldColors(useSurface());

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <Label htmlFor={inputId}>{label}</Label>
      <input
        id={inputId}
        className={cn(fieldClass, inputClassName)}
        style={{ background: colors.background, borderColor: colors.borderColor, color: colors.color }}
        {...inputProps}
      />
    </div>
  );
}

export function TextArea({
  label,
  id,
  className,
  inputClassName,
  rows = 5,
  ...textareaProps
}: {
  label: ReactNode;
  id?: string;
  className?: string;
  inputClassName?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const inputId = id ?? (typeof label === "string" ? label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const colors = fieldColors(useSurface());

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <Label htmlFor={inputId}>{label}</Label>
      <textarea
        id={inputId}
        rows={rows}
        className={cn(fieldClass, "min-h-[8rem] resize-y", inputClassName)}
        style={{ background: colors.background, borderColor: colors.borderColor, color: colors.color }}
        {...textareaProps}
      />
    </div>
  );
}

export type PillOption = { value: string; label: string };

export function PillSelect({
  label,
  options,
  value,
  onChange,
  multiple = false,
  className,
}: {
  label: ReactNode;
  options: PillOption[];
  value: string | string[];
  onChange: (next: string | string[]) => void;
  multiple?: boolean;
  className?: string;
}) {
  const selected = Array.isArray(value) ? value : [value];
  const colors = fieldColors(useSurface());

  function toggle(optionValue: string) {
    if (multiple) {
      const next = selected.includes(optionValue)
        ? selected.filter((v) => v !== optionValue)
        : [...selected, optionValue];
      onChange(next);
      return;
    }
    onChange(optionValue);
  }

  return (
    <fieldset className={cn("flex min-w-0 flex-col gap-2 border-0 p-0", className)}>
      <legend className={labelClass} style={{ color: colors.label }}>
        {label}
      </legend>
      <div className="flex flex-wrap gap-2" role="group">
        {options.map((opt) => {
          const active = selected.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              aria-pressed={active}
              onClick={() => toggle(opt.value)}
              className="min-h-11 cursor-pointer rounded-[var(--bmkrs-radius-field)] border px-4 py-2 text-[0.9375rem] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmkrs-orange"
              style={{
                borderColor: active ? colors.activeBg : colors.borderColor,
                background: active ? colors.activeBg : "transparent",
                color: active ? colors.activeText : colors.idle,
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

/**
 * Native select for progressive-enhancement forms (FormData + name).
 * Prefer `SelectMenu` when you need a fully custom popover.
 */
export function SelectField({
  label,
  id,
  className,
  children,
  ...selectProps
}: {
  label: ReactNode;
  id?: string;
  className?: string;
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  const inputId = id ?? (typeof label === "string" ? label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const colors = fieldColors(useSurface());

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <Label htmlFor={inputId}>{label}</Label>
      <select
        id={inputId}
        className={fieldClass}
        style={{
          background: colors.background,
          borderColor: colors.borderColor,
          color: colors.color,
          appearance: "none",
          paddingRight: "2rem",
        }}
        {...selectProps}
      >
        {children}
      </select>
    </div>
  );
}

export type SelectMenuOption = { value: string; label: string };

/**
 * Premium select built on Radix Select. Use for controlled UI;
 * pair with a hidden input when posting classic forms.
 */
export function SelectMenu({
  label,
  options,
  value,
  onValueChange,
  placeholder = "select…",
  name,
  className,
}: {
  label: ReactNode;
  options: SelectMenuOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  className?: string;
}) {
  const colors = fieldColors(useSurface());
  const labelId = typeof label === "string" ? `select-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined;

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <Label id={labelId}>{label}</Label>
      {name ? <input type="hidden" name={name} value={value ?? ""} /> : null}
      <Select.Root value={value} onValueChange={onValueChange}>
        <Select.Trigger
          aria-labelledby={labelId}
          className={cn(fieldClass, "inline-flex items-center justify-between gap-3 text-left")}
          style={{ background: colors.background, borderColor: colors.borderColor, color: colors.color }}
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon aria-hidden className="font-mono text-meta opacity-70">
            ↓
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={6}
            className="z-[80] max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--bmkrs-radius-field)] border shadow-lg"
            style={{
              background: tokens.color.inkRaised,
              borderColor: tokens.color.fieldBorder,
              color: tokens.color.paper,
            }}
          >
            <Select.Viewport className="p-1">
              {options.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  className="relative flex min-h-11 cursor-pointer items-center rounded-[var(--bmkrs-radius-field)] px-3 py-2 text-[0.9375rem] outline-none data-[highlighted]:bg-bmkrs-orange data-[highlighted]:text-bmkrs-ink"
                >
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
