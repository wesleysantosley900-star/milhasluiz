"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Plane } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-navy/95 sm:bg-white/10 sm:backdrop-blur-xl border-b border-white/10 shadow-premium"
          : "py-5 bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/#inicio" className="flex items-center gap-2 font-heading text-lg font-extrabold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-navy">
            <Plane className="h-5 w-5" />
          </span>
          {siteConfig.name.replace("Club", "")}
          <span className="text-gold">Club</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<Link href="/#comunidade" />}
            nativeButton={false}
            className="bg-gold text-navy hover:bg-gold-light shadow-gold font-bold"
          >
            Entrar para Comunidade VIP
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
                aria-label="Abrir menu"
              />
            }
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy border-white/10 text-white w-75">
            <SheetHeader>
              <SheetTitle className="text-white font-heading">
                Milhas<span className="text-gold">Club</span>
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-6 px-6">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link href={link.href} className="text-base font-medium text-white/85 hover:text-gold" />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
              <SheetClose
                render={<Link href="/#comunidade" />}
                className={cn(buttonVariants(), "mt-4 bg-gold text-navy hover:bg-gold-light font-bold")}
              >
                Entrar para Comunidade VIP
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
