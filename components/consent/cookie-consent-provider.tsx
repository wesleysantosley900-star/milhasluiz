"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  CONSENT_EVENT,
  readStoredConsent,
  writeStoredConsent,
  type ConsentStatus,
} from "@/lib/consent";

type ConsentContextValue = {
  consent: ConsentStatus;
  hasDecided: boolean;
  accept: () => void;
  reject: () => void;
  /** Reabre o banner de preferências (usado no link do rodapé). */
  openPreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [hasDecided, setHasDecided] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    setConsent(stored);
    setHasDecided(stored !== null);

    function onExternalChange(event: Event) {
      const detail = (event as CustomEvent<ConsentStatus>).detail;
      setConsent(detail);
      setHasDecided(detail !== null);
    }

    window.addEventListener(CONSENT_EVENT, onExternalChange);
    return () => window.removeEventListener(CONSENT_EVENT, onExternalChange);
  }, []);

  function accept() {
    writeStoredConsent("accepted");
    setConsent("accepted");
    setHasDecided(true);
  }

  function reject() {
    writeStoredConsent("rejected");
    setConsent("rejected");
    setHasDecided(true);
  }

  function openPreferences() {
    setHasDecided(false);
  }

  return (
    <ConsentContext.Provider value={{ consent, hasDecided, accept, reject, openPreferences }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useCookieConsent deve ser usado dentro de <CookieConsentProvider>");
  }
  return context;
}
