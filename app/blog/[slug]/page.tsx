import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/data/site-config";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Início", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
    { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
  ]);

  return (
    <article className="mx-auto max-w-3xl px-6 py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Link href="/#blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-premium hover:underline">
        <ArrowLeft className="h-4 w-4" /> Voltar para o blog
      </Link>

      <Badge className="mb-4 bg-premium/10 text-premium">{post.category}</Badge>

      <h1 className="mb-4 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
        {post.title}
      </h1>

      <div className="mb-10 flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" /> {post.readingTime}
        </span>
        <span>
          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

      <div className="mt-8 rounded-2xl border border-dashed border-border bg-canvas p-6 text-sm text-muted-foreground">
        Conteúdo completo em breve. Esta página está preparada para receber o corpo do
        artigo de um CMS headless (ex: Sanity, Contentful) mantendo a mesma estrutura de
        dados de <code className="rounded bg-muted px-1.5 py-0.5">BlogPost</code>.
      </div>
    </article>
  );
}
