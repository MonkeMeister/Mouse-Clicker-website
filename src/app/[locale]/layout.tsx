import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getContent } from "@/content/registry";
import {
  isLocale,
  LOCALE_BY_CODE,
  LOCALES,
  type Locale,
} from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { getToolNav } from "@/lib/tools";
import "../globals.css";

/**
 * Root layout.
 *
 * English lives at the site root and every other language under its own
 * prefix, so the layout lives inside the `[locale]` segment. The middleware
 * rewrites unprefixed paths to `/en` and redirects `/en/...` back to the
 * clean URL.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale: locale.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const { home } = getContent(locale);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: home.metaTitle,
      template: `%s | ${SITE.name}`,
    },
    description: home.metaDescription,
    applicationName: SITE.name,
    keywords: [
      "mouse test",
      "mouse button test",
      "scroll wheel test",
      "keyboard test",
      "cps test",
      "polling rate test",
      "online hardware diagnostics",
    ],
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: home.metaTitle,
      description: home.metaDescription,
      url: SITE.url,
      locale: LOCALE_BY_CODE[locale].tag.replace("-", "_"),
    },
    twitter: {
      card: "summary_large_image",
      title: home.metaTitle,
      description: home.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    alternates: {
      canonical: "/",
      languages: languageAlternates("/"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: raw } = await params;

  if (!isLocale(raw)) notFound();

  const locale = raw;
  const content = getContent(locale);
  const tools = getToolNav(locale);

  return (
    <html lang={LOCALE_BY_CODE[locale].hreflang} dir={LOCALE_BY_CODE[locale].dir} className="h-full">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          {content.ui.common.skipToContent}
        </a>
        <Header locale={locale} ui={content.ui} tools={tools} />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer locale={locale} ui={content.ui} tools={tools} />
      </body>
    </html>
  );
}
