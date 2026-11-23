import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactView } from "@/components/views/ContactView";
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
  const { contact } = getContent(locale);

  return {
    title: contact.metaTitle,
    description: contact.metaDescription,
    alternates: {
      canonical: localePath(locale, "/contact"),
      languages: languageAlternates("/contact"),
    },
    openGraph: {
      title: contact.metaTitle,
      description: contact.metaDescription,
      url: `${SITE.url}${localePath(locale, "/contact")}`,
    },
  };
}

export default async function ContactRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return <ContactView locale={raw} content={getContent(raw)} />;
}
