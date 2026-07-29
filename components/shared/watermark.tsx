import Image from "next/image";

// Marca d'água discreta sobre as fotos: não impede o download de quem realmente
// quer copiar (isso não existe na web), mas identifica a origem da imagem e
// desestimula reuso casual em outros lugares.
export function Watermark({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-navy/50 px-2.5 py-1 backdrop-blur-sm ${className}`}
    >
      <Image src="/logo.svg" alt="" width={14} height={14} className="opacity-90" />
      <span className="font-heading text-[10px] font-bold tracking-wide text-white/90">
        MilhasClub
      </span>
    </div>
  );
}
