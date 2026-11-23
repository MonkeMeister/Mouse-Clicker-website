import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyView } from "@/components/views/PrivacyView";
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
  const { privacy } = getContent(locale);

  return {
    title: privacy.metaTitle,
    description: privacy.metaDescription,
    alternates: {
      canonical: localePath(locale, "/privacy-policy"),
      languages: languageAlternates("/privacy-policy"),
    },
    openGraph: {
      title: privacy.metaTitle,
      description: privacy.metaDescription,
      url: `${SITE.url}${localePath(locale, "/privacy-policy")}`,
    },
  };
}

export default async function PrivacyPolicyRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return <PrivacyView locale={raw} content={getContent(raw)} />;
}
