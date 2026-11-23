import Link from "next/link";
import type { LocaleContent } from "@/content/types";
import { LOCALE_BY_CODE, localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";

export function ToolsIndexView({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleContent;
}) {
  const { toolsIndex, ui } = content;
  const language = LOCALE_BY_CODE[locale].hreflang;
  const url = `${SITE.url}${localePath(locale, "/tools")}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: toolsIndex.heading,
    url,
    description: toolsIndex.metaDescription,
    inLanguage: language,
    isPartOf: { "@id": `${SITE.url}/#website` },
    hasPart: Object.entries(content.toolPages).map(([slug, tool]) => ({
      "@type": "SoftwareApplication",
      name: tool.name,
      url: `${SITE.url}${localePath(locale, `/tools/${slug}`)}`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      inLanguage: language,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <Container className="py-14 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-[13px] text-ink-400">
              <li>
                <Link
                  href={localePath(locale, "/")}
                  className="transition-colors hover:text-brand-600"
                >
                  {ui.common.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-600">{ui.common.breadcrumbTools}</li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              {toolsIndex.heading}
            </h1>
            <p className="mt-5 text-[17px] leading-8 text-ink-600">
              {toolsIndex.intro}
            </p>
          </div>

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {Object.entries(content.toolPages).map(([slug, tool]) => (
              <li key={slug}>
                <Link
                  href={localePath(locale, `/tools/${slug}`)}
                  className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-7 transition-colors hover:border-brand-300 hover:shadow-sm"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-600">
                    {tool.category}
                  </span>
                  <h2 className="mt-2 text-[21px] font-semibold text-ink-900">
                    {tool.name}
                  </h2>
                  <p className="mt-2.5 flex-1 text-[15px] leading-7 text-ink-600">
                    {toolsIndex.blurbs[slug as keyof typeof toolsIndex.blurbs]}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">
                    {ui.common.openTest}
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10h11m0 0-4-4m4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
    </>
  );
}
