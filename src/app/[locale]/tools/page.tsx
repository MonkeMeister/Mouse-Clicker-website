import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolsIndexView } from "@/components/views/ToolsIndexView";
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
  const { toolsIndex } = getContent(locale);

  return {
    title: toolsIndex.metaTitle,
    description: toolsIndex.metaDescription,
    alternates: {
      canonical: localePath(locale, "/tools"),
      languages: languageAlternates("/tools"),
    },
    openGraph: {
      title: toolsIndex.metaTitle,
      description: toolsIndex.metaDescription,
      url: `${SITE.url}${localePath(locale, "/tools")}`,
    },
  };
}

export default async function ToolsIndexRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return <ToolsIndexView locale={raw} content={getContent(raw)} />;
}
