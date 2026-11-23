import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutView } from "@/components/views/AboutView";
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
  const { about } = getContent(locale);

  return {
    title: about.metaTitle,
    description: about.metaDescription,
    alternates: {
      canonical: localePath(locale, "/about"),
      languages: languageAlternates("/about"),
    },
    openGraph: {
      title: about.metaTitle,
      description: about.metaDescription,
      url: `${SITE.url}${localePath(locale, "/about")}`,
    },
  };
}

export default async function AboutRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return <AboutView locale={raw} content={getContent(raw)} />;
}
