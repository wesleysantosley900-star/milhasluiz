import { siteConfig } from "@/data/site-config";
import type { FaqItem } from "@/data/faq";
import type { BlogPost } from "@/data/blog-posts";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  description: siteConfig.description,
  sameAs: [siteConfig.social.instagram, siteConfig.social.youtube],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.specialist.name,
  jobTitle: siteConfig.specialist.role,
  url: siteConfig.url,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.youtube],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "pt-BR",
};

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildBlogSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/#blog`,
    name: `Blog ${siteConfig.name}`,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: siteConfig.specialist.name,
      },
    })),
  };
}
