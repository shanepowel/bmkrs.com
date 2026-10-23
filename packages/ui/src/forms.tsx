"use client";

import clsx from "clsx";
import type { CSSProperties, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { useSurface } from "./Surface";
import { tokens, type SurfaceTheme } from "./tokens";

const labelClass = "font-mono text-meta tracking-[var(--bmkrs-tracking-kicker)] lowercase";

const fieldClass =
  "bmkrs-field w-full rounded-[var(--bmkrs-radius-field)] border px-4 py-[0.85rem] text-input leading-snug focus:outline-none focus-visible:border-bmkrs-orange focus-visible:shadow-[0_0_0_3px_var(--bmkrs-accent-focus)]";

function fieldColors(theme: SurfaceTheme): CSSProperties & { label: string; idle: string; activeBg: string; activeText: string } {
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
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const colors = fieldColors(useSurface());
  return (
    <span className={clsx(labelClass, className)} style={{ color: colors.label }} {...props}>
      {children}
    </span>
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
    <label htmlFor={inputId} className={clsx("flex min-w-0 flex-col gap-2", className)}>
      <Label>{label}</Label>
      <input
        id={inputId}
        className={clsx(fieldClass, inputClassName)}
        style={{ background: colors.background, borderColor: colors.borderColor, color: colors.color }}
        {...inputProps}
      />
    </label>
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
    <label htmlFor={inputId} className={clsx("flex min-w-0 flex-col gap-2", className)}>
      <Label>{label}</Label>
      <textarea
        id={inputId}
        rows={rows}
        className={clsx(fieldClass, "min-h-[8rem] resize-y", inputClassName)}
        style={{ background: colors.background, borderColor: colors.borderColor, color: colors.color }}
        {...textareaProps}
      />
    </label>
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
    <fieldset className={clsx("flex min-w-0 flex-col gap-2 border-0 p-0", className)}>
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
              className="min-h-11 cursor-pointer rounded-full border px-4 py-2 text-[0.9375rem] transition"
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
    <label htmlFor={inputId} className={clsx("flex min-w-0 flex-col gap-2", className)}>
      <Label>{label}</Label>
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
    </label>
  );
}
