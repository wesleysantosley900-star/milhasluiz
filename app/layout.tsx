import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { CookieConsentProvider } from "@/components/consent/cookie-consent-provider";
import { CookieConsentBanner } from "@/components/consent/cookie-consent-banner";
import { AnalyticsScripts } from "@/components/consent/analytics-scripts";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Consultoria de Milhas Aéreas e Comunidade VIP | Aprenda a Viajar Mais Gastando Menos",
    template: "%s | MilhasClub",
  },
  description:
    "Consultoria de milhas aéreas, emissão inteligente de passagens e comunidade VIP com alertas em tempo real. Aprenda a viajar mais gastando menos com estratégias validadas.",
  keywords: [
    "consultoria de milhas",
    "milhas aéreas",
    "passagens com milhas",
    "comunidade de milhas",
    "emissão de passagens",
    "como viajar barato",
    "clube de milhas",
    "acumular milhas",
  ],
  authors: [{ name: siteConfig.specialist.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Consultoria de Milhas Aéreas e Comunidade VIP | MilhasClub",
    description:
      "Descubra as estratégias utilizadas por viajantes inteligentes para economizar milhares de reais utilizando milhas aéreas.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "MilhasClub - Consultoria de Milhas Aéreas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria de Milhas Aéreas e Comunidade VIP | MilhasClub",
    description:
      "Aprenda a transformar milhas em economia real com estratégias validadas e uma comunidade exclusiva de viajantes.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background font-body text-foreground">
        <CookieConsentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsappFloat />
          <CookieConsentBanner />
          <AnalyticsScripts />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
