import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogView } from "@/components/views/BlogView";
import { getContent } from "@/content/registry";
import { isLocale, localePath } from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const instant = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;
  const { blog } = getContent(locale);

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: localePath(locale, "/blog"),
      languages: languageAlternates("/blog"),
    },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `${SITE.url}${localePath(locale, "/blog")}`,
    },
  };
}

export default async function BlogRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return <BlogView locale={raw} content={getContent(raw)} />;
}
