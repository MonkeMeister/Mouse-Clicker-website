import Link from "next/link";
import type { LocaleContent } from "@/content/types";
import { LOCALE_BY_CODE, localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { MouseTester } from "@/components/tools/MouseTester";

export function HomeView({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleContent;
}) {
  const { home, ui, toolUi } = content;
  const language = LOCALE_BY_CODE[locale].hreflang;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: language,
        publisher: { "@id": `${SITE.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE.url}/tools?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/icon.svg`,
      },
      {
        "@type": "WebApplication",
        "@id": `${SITE.url}/#app`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        inLanguage: language,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        inLanguage: language,
        mainEntity: home.faq.items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={websiteSchema} />

      <main>
        {/* ---- Hero ------------------------------------------------------- */}
        <section className="border-b border-ink-200 bg-white">
          <Container className="py-14 sm:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3.5 py-1.5 text-[13px] font-medium text-ink-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {home.badge}
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-6xl">
                {home.heroTitleBefore}{" "}
                <span className="text-brand-600">{home.heroTitleHighlight}</span>{" "}
                {home.heroTitleAfter}
              </h1>
              <p className="mt-6 max-w-2xl text-[18px] leading-8 text-ink-600">
                {home.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#tester"
                  className="rounded-lg bg-brand-600 px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
                >
                  {home.ctaPrimary}
                </a>
                <Link
                  href={localePath(locale, "/tools")}
                  className="rounded-lg border border-ink-200 bg-white px-5 py-3 text-[15px] font-semibold text-ink-700 transition-colors hover:bg-ink-50"
                >
                  {home.ctaSecondary}
                </Link>
              </div>
              <dl className="mt-10 grid gap-6 border-t border-ink-200 pt-8 sm:grid-cols-3">
                {home.stats.map((item) => (
                  <div key={item.term}>
                    <dt className="text-[15px] font-semibold text-ink-900">
                      {item.term}
                    </dt>
                    <dd className="mt-0.5 text-[14px] text-ink-500">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        {/* ---- The tester, immediately ------------------------------------ */}
        <Container className="py-14 sm:py-16" id="tester">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                {home.tester.heading}
              </h2>
              <p className="mt-2 max-w-2xl text-[16px] leading-7 text-ink-600">
                {home.tester.description}
              </p>
            </div>
            <Link
              href={localePath(locale, "/tools/mouse-test")}
              className="text-[15px] font-semibold text-brand-600 hover:text-brand-700"
            >
              {home.tester.linkLabel}
            </Link>
          </div>
          <MouseTester labels={toolUi["mouse-test"]} />
        </Container>

        {/* ---- Tool grid --------------------------------------------------- */}
        <Container className="pb-16">
          <section aria-labelledby="all-tools-heading">
            <h2
              id="all-tools-heading"
              className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl"
            >
              {home.allTools.heading}
            </h2>
            <p className="mt-2 max-w-2xl text-[16px] leading-7 text-ink-600">
              {home.allTools.description}
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(content.toolPages).map(([slug, tool]) => (
                <li key={slug}>
                  <Link
                    href={localePath(locale, `/tools/${slug}`)}
                    className="group flex h-full flex-col rounded-xl border border-ink-200 bg-white p-6 transition-colors hover:border-brand-300 hover:shadow-sm"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-600">
                      {tool.category}
                    </span>
                    <span className="mt-2 text-[19px] font-semibold text-ink-900">
                      {tool.name}
                    </span>
                    <span className="mt-2 flex-1 text-[15px] leading-7 text-ink-500">
                      {home.allTools.blurbs[slug as keyof typeof home.allTools.blurbs]}
                    </span>
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
          </section>
        </Container>

        {/* ---- Why browser-based ------------------------------------------- */}
        <section className="border-y border-ink-200 bg-white">
          <Container className="py-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                {home.why.heading}
              </h2>
              <p className="mt-3 text-[16px] leading-8 text-ink-600">
                {home.why.description}
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {home.why.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[18px] font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-7 text-ink-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <Container className="py-12">
          <AdSlot label={ui.common.advertisement} />
        </Container>

        {/* ---- FAQ --------------------------------------------------------- */}
        <Container className="pb-20">
          <section aria-labelledby="home-faq-heading" className="max-w-3xl">
            <h2
              id="home-faq-heading"
              className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl"
            >
              {home.faq.heading}
            </h2>
            <div className="mt-8 grid gap-3">
              {home.faq.items.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-ink-200 bg-white p-6"
                >
                  <h3 className="text-[17px] font-semibold text-ink-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-7 text-ink-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
