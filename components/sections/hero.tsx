"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden gradient-navy pt-36 pb-24 sm:pt-40 sm:pb-28"
    >
      {/* Fundo decorativo: grid + glow dourado */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-gold/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-premium/30 blur-[100px]" />

      {/* Rota de voo decorativa */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <path
          d="M-50 650 C 250 550, 450 750, 650 500 S 1050 250, 1300 150"
          stroke="url(#route)"
          strokeWidth="2"
          strokeDasharray="8 10"
        />
        <defs>
          <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0" />
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
            <Plane className="h-3.5 w-3.5" />
            Consultoria de Milhas &amp; Comunidade VIP
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Aprenda a Viajar Mais{" "}
            <span className="gradient-gold-text">Gastando Menos</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Descubra as estratégias utilizadas por viajantes inteligentes para
            economizar milhares de reais utilizando milhas aéreas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              render={<Link href="/#comunidade" />}
              nativeButton={false}
              size="lg"
              className="h-14 bg-gold px-8 text-base font-bold text-navy shadow-gold hover:bg-gold-light"
            >
              Entrar para Comunidade VIP
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              render={
                <a href={siteConfig.social.whatsappConsultoria} target="_blank" rel="noopener noreferrer" />
              }
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-14 border-white/25 bg-white/5 px-8 text-base font-bold text-white hover:bg-white/10 hover:text-white"
            >
              Agendar Consultoria
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {["MF", "RC", "AL", "JP"].map((initials) => (
                <div
                  key={initials}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy bg-premium text-xs font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/60">
              <strong className="text-white">+3.000 clientes</strong> já economizam
              com estratégias de milhas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
