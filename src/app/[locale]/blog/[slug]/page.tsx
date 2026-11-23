import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/views/BlogPostView";
import { getContent } from "@/content/registry";
import { POST_SLUGS } from "@/lib/blog";
import { isLocale, localePath } from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";
import { SITE } from "@/lib/site";

/**
 * Every post is known at build time, so this route blocks on `params` rather
 * than streaming a shell. Keeps the whole article prerendered as static HTML.
 */
export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;

  const post = getContent(locale).blog.posts.find((item) => item.slug === slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: localePath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE.url}${localePath(locale, path)}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const content = getContent(locale);
  const post = content.blog.posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return <BlogPostView locale={locale} content={content} post={post} />;
}
