"use client";

import { useCookieConsent } from "@/components/consent/cookie-consent-provider";

export function CookieSettingsLink({ className }: { className?: string }) {
  const { openPreferences } = useCookieConsent();

  return (
    <button type="button" onClick={openPreferences} className={className}>
      Preferências de Cookies
    </button>
  );
}
