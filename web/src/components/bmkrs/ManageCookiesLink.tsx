"use client";

import { reopenConsent } from "@/components/bmkrs/CookieBanner";

export function ManageCookiesLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        reopenConsent();
      }}
    >
      manage cookies
    </button>
  );
}
