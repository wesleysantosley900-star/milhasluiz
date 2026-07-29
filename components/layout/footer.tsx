import Link from "next/link";
import { Instagram, Youtube, MessageCircle, Mail, Plane } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site-config";
import { CookieSettingsLink } from "@/components/consent/cookie-settings-link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="gradient-navy pt-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 font-heading text-lg font-extrabold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-navy">
                <Plane className="h-5 w-5" />
              </span>
              Milhas<span className="text-gold">Club</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/80">
              Links Úteis
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/80">
              Redes Sociais
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.email}
                  className="flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4" /> E-mail
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white/80">
              Institucional
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/politica-de-privacidade" className="transition-colors hover:text-gold">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="transition-colors hover:text-gold">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <CookieSettingsLink className="transition-colors hover:text-gold" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 py-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Feito para viajantes que não deixam dinheiro na mesa.</p>
        </div>
      </div>
    </footer>
  );
}
