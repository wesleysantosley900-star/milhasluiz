import { NextResponse, type NextRequest } from "next/server";

// Bloqueia hotlinking: impede que OUTROS sites usem nossas fotos direto pela URL
// (ex: <img src="seusite.com/gallery/foto.jpg"> embutido no site de terceiros).
// Não bloqueia quem acessa sem Referer (navegação direta, apps, curl, navegadores
// que omitem o cabeçalho por privacidade) — isso evitaria falsos positivos legítimos.
const PROTECTED_PATHS = ["/gallery/", "/specialist.jpg"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtectedAsset =
    PROTECTED_PATHS.some((p) => pathname.startsWith(p)) ||
    (pathname.startsWith("/_next/image") &&
      PROTECTED_PATHS.some((p) => request.nextUrl.searchParams.get("url")?.includes(p)));

  if (!isProtectedAsset) return NextResponse.next();

  const referer = request.headers.get("referer");
  if (referer) {
    const refererHost = new URL(referer).host;
    if (refererHost !== request.nextUrl.host) {
      return new NextResponse("Acesso não permitido a este recurso.", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/gallery/:path*", "/specialist.jpg", "/_next/image"],
};
