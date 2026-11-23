import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeView } from "@/components/views/HomeView";
import { getContent } from "@/content/registry";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
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
  const { home } = getContent(locale);

  return {
    title: { absolute: home.metaTitle },
    description: home.metaDescription,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: languageAlternates("/"),
    },
    openGraph: {
      title: home.metaTitle,
      description: home.metaDescription,
      url: `${SITE.url}${localePath(locale, "/")}`,
    },
  };
}

export default async function HomeRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return <HomeView locale={locale} content={getContent(locale)} />;
}
