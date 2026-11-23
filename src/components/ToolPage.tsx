import Link from "next/link";
import type { ReactNode } from "react";
import type { LocaleContent, ToolContent } from "@/content/types";
import { LOCALE_BY_CODE, localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { AdSlot } from "./AdSlot";
import { Container } from "./Container";
import { JsonLd } from "./JsonLd";
import { RelatedTools } from "./RelatedTools";

function buildSchema(
  tool: ToolContent,
  url: string,
  locale: Locale,
) {
  const language = LOCALE_BY_CODE[locale].hreflang;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: tool.metaTitle,
        description: tool.metaDescription,
        inLanguage: language,
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${url}#app` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#app`,
        name: `${tool.name} — ${SITE.name}`,
        url,
        description: tool.metaDescription,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        isAccessibleForFree: true,
        inLanguage: language,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: language,
        mainEntity: tool.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE.url}/tools` },
          {
            "@type": "ListItem",
            position: 3,
            name: tool.name,
            item: url,
          },
        ],
      },
    ],
  };
}

export function ToolPage({
  locale,
  content,
  tool,
  toolPanel,
}: {
  locale: Locale;
  content: LocaleContent;
  tool: ToolContent;
  toolPanel: ReactNode;
}) {
  const { ui } = content;
  const url = `${SITE.url}${localePath(locale, `/tools/${tool.slug}`)}`;

  return (
    <>
      <JsonLd data={buildSchema(tool, url, locale)} />

      <main>
        {/* ---- Header block ------------------------------------------------ */}
        <Container className="pt-10 sm:pt-14">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-400">
              <li>
                <Link
                  href={localePath(locale, "/")}
                  className="transition-colors hover:text-brand-600"
                >
                  {ui.common.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={localePath(locale, "/tools")}
                  className="transition-colors hover:text-brand-600"
                >
                  {ui.common.breadcrumbTools}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-600">{tool.name}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-brand-700">
              {tool.category}
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              {tool.h1}
            </h1>
            <div className="mt-5 space-y-4 text-[17px] leading-8 text-ink-600">
              {tool.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>

        {/* ---- The tool comes first, before any advertising ---------------- */}
        <Container className="mt-10">
          {toolPanel}
        </Container>

        {/* ---- Ad slot: placed after the result, never above the tool ------- */}
        <Container className="mt-10">
          <AdSlot label={ui.common.advertisement} />
        </Container>

        {/* ---- How to use -------------------------------------------------- */}
        <Container className="mt-16">
          <section aria-labelledby="how-to-use-heading">
            <h2
              id="how-to-use-heading"
              className="text-2xl font-semibold tracking-tight text-ink-900"
            >
              {ui.toolPage.howToUseHeading.replace("{tool}", tool.name)}
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {tool.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-ink-200 bg-white p-5"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-[13px] font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-3.5 text-[17px] font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-ink-600">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </Container>

        {/* ---- Long-form content ------------------------------------------- */}
        <Container className="mt-16">
          <div className="max-w-3xl space-y-12">
            {tool.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-[16px] leading-8 text-ink-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 grid gap-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[16px] leading-7 text-ink-600">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </Container>

        {/* ---- Mid-content ad ---------------------------------------------- */}
        <Container className="mt-14">
          <AdSlot
            variant="rectangle"
            className="mx-auto max-w-[728px]"
            label={ui.common.advertisement}
          />
        </Container>

        {/* ---- FAQ --------------------------------------------------------- */}
        <Container className="mt-16">
          <section aria-labelledby="faq-heading" className="max-w-3xl">
            <h2
              id="faq-heading"
              className="text-2xl font-semibold tracking-tight text-ink-900"
            >
              {tool.name} {ui.toolPage.faqHeadingSuffix}
            </h2>
            <p className="mt-2 text-[15px] text-ink-500">
              {ui.toolPage.faqIntro}
            </p>
            <div className="mt-6 grid gap-3">
              {tool.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-ink-200 bg-white p-5"
                >
                  <h3 className="text-[17px] font-semibold text-ink-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-[15px] leading-7 text-ink-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Container>

        {/* ---- Related tools ----------------------------------------------- */}
        <Container className="mt-16">
          <RelatedTools locale={locale} content={content} slugs={tool.related} />
        </Container>
      </main>
    </>
  );
}
