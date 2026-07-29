"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/components/consent/cookie-consent-provider";

export function CookieConsentBanner() {
  const { hasDecided, accept, reject } = useCookieConsent();

  return (
    <AnimatePresence>
      {!hasDecided && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-60 border-t border-white/10 bg-navy/98 px-6 py-5 shadow-premium backdrop-blur-sm"
          role="dialog"
          aria-label="Preferências de cookies"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-start gap-3 text-sm text-white/80">
              <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p>
                Usamos cookies para melhorar sua experiência e medir o desempenho de
                nossas campanhas (Google Analytics e Meta Pixel). Você pode aceitar ou
                recusar os cookies não essenciais. Saiba mais na nossa{" "}
                <Link href="/politica-de-privacidade" className="underline hover:text-gold">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button
                variant="outline"
                onClick={reject}
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Recusar
              </Button>
              <Button onClick={accept} className="bg-gold text-navy hover:bg-gold-light">
                Aceitar todos
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
