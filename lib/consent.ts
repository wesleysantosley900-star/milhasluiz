export type ConsentStatus = "accepted" | "rejected" | null;

export const CONSENT_STORAGE_KEY = "milhasclub:cookie-consent";
export const CONSENT_EVENT = "milhasclub:cookie-consent-changed";

export function readStoredConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function writeStoredConsent(value: ConsentStatus) {
  if (typeof window === "undefined") return;
  if (value === null) {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } else {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
