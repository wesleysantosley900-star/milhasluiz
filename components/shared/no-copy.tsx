"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Bloqueia o menu de clique-direito (e o "user-select") sobre o conteúdo.
// É apenas um dificultador para cópia casual — não impede DevTools, captura
// de tela nem download direto da URL da imagem.
export function NoCopy({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className={cn("no-copy", className)}>
      {children}
    </div>
  );
}
