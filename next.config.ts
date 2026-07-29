import type { NextConfig } from "next";

// Content-Security-Policy: como o site não tem formulários/dados de usuário,
// conseguimos manter uma política restritiva mesmo liberando Google Analytics e
// Meta Pixel (carregados só depois do consentimento no banner de cookies).
// 'unsafe-inline' em style-src é necessário pois o Next/Image e o Framer Motion
// aplicam estilos inline; em script-src é necessário pelos blocos JSON-LD (dados
// estruturados de SEO) e pelos snippets de inicialização do GA/Pixel.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.facebook.com https://www.google-analytics.com",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://www.facebook.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Bloqueia que o site seja carregado dentro de um <iframe> em outro domínio
  // (impede clonagem "por espelhamento" via iframe e ataques de clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  images: {
    // Os placeholders em /public são SVGs locais; troque-os por .jpg/.png reais
    // quando substituir as imagens finais (o next/image continua otimizando normalmente).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        // Aplica os headers de segurança a todas as rotas do site.
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Pede para o Google não indexar/mostrar essas fotos na busca por imagens
        // (dificulta que sejam encontradas e "levadas" via Google Imagens).
        source: "/gallery/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noimageindex" }],
      },
      {
        source: "/specialist.jpg",
        headers: [{ key: "X-Robots-Tag", value: "noimageindex" }],
      },
    ];
  },
};

export default nextConfig;
