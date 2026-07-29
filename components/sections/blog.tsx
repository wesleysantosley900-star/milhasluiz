import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog-posts";

function formatDate(dateISO: string) {
  return new Date(dateISO).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Blog MilhasClub"
          title="Conteúdo para você dominar o jogo das milhas"
          description="Artigos práticos sobre acúmulo, cartões e emissão inteligente de passagens."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-canvas p-6 transition-all duration-300 hover:-translate-y-1 hover:border-premium/30 hover:shadow-premium"
              >
                <Badge className="mb-4 w-fit bg-premium/10 text-premium">{post.category}</Badge>
                <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-navy">
                  {post.title}
                </h3>
                <p className="mb-6 grow text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {post.readingTime}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-premium transition-transform group-hover:translate-x-0.5">
                    Ler mais <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground/70">{formatDate(post.publishedAt)}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
