import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Class merge helper — same contract as the shadcn `cn` utility. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
