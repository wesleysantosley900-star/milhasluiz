import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { VipCommunity } from "@/components/sections/vip-community";
import { Gallery } from "@/components/sections/gallery";
import { SavingsResults } from "@/components/sections/savings-results";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { buildBreadcrumbSchema, buildBlogSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { blogPosts } from "@/data/blog-posts";

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Início", url: siteConfig.url },
  ]);
  const blogSchema = buildBlogSchema(blogPosts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Hero />
      <SocialProof />
      <About />
      <Services />
      <VipCommunity />
      <Gallery />
      <SavingsResults />
      <Testimonials />
      <Blog />
      <Faq />
      <FinalCta />
    </>
  );
}
