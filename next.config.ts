import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site 100% estático (pasta "out") para hospedar em Netlify/Vercel/qualquer CDN,
  // sem precisar de servidor Node rodando. Por isso as imagens ficam "unoptimized".
  output: "export",
  images: {
    // Os placeholders em /public são SVGs locais; troque-os por .jpg/.png reais
    // quando substituir as imagens finais (o next/image continua otimizando normalmente).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
};

export default nextConfig;
