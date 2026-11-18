import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional Tailwind classes using the standard shadcn utility. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
