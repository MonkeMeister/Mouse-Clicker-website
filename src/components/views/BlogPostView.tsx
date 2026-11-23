import Link from "next/link";
import type { BlogPost, LocaleContent } from "@/content/types";
import { LOCALE_BY_CODE, localePath, type Locale } from "@/lib/i18n";
import { POST_PUBLISHED_AT } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";

function buildSchema(
  post: BlogPost,
  url: string,
  locale: Locale,
  blogUrl: string,
) {
  const language = LOCALE_BY_CODE[locale].hreflang;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        inLanguage: language,
        datePublished: POST_PUBLISHED_AT,
        dateModified: POST_PUBLISHED_AT,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", name: SITE.name, url: SITE.url },
        publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: language,
        mainEntity: post.faqs.map((faq) => ({
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
          { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export function BlogPostView({
  locale,
  content,
  post,
}: {
  locale: Locale;
  content: LocaleContent;
  post: BlogPost;
}) {
  const { ui } = content;
  const url = `${SITE.url}${localePath(locale, `/blog/${post.slug}`)}`;
  const blogUrl = `${SITE.url}${localePath(locale, "/blog")}`;
  const tool = content.toolPages[post.toolSlug];

  return (
    <>
      <JsonLd data={buildSchema(post, url, locale, blogUrl)} />

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
                  href={localePath(locale, "/blog")}
                  className="transition-colors hover:text-brand-600"
                >
                  {content.blog.heading}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-600">{post.title}</li>
            </ol>
          </nav>

          <article className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.1em] text-ink-400">
              <span>{post.dateLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>

            <p className="mt-6 text-[18px] leading-8 text-ink-600">{post.lead}</p>
          </article>
        </Container>

        {/* ---- Article body ------------------------------------------------- */}
        <Container className="mt-12">
          <div className="max-w-3xl space-y-12">
            {post.sections.map((section) => (
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
                      <li
                        key={bullet}
                        className="flex gap-3 text-[16px] leading-7 text-ink-600"
                      >
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

        {/* ---- The tool this article is about ------------------------------- */}
        {tool && (
          <Container className="mt-14">
            <aside className="max-w-3xl rounded-2xl border border-brand-200 bg-brand-50 p-7">
              <h2 className="text-[20px] font-semibold text-ink-900">
                {tool.h1}
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-ink-600">
                {tool.metaDescription}
              </p>
              <Link
                href={localePath(locale, `/tools/${tool.slug}`)}
                className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-700"
              >
                {ui.common.openTest}
                <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </Container>
        )}

        {/* ---- FAQ ---------------------------------------------------------- */}
        <Container className="mt-16">
          <section aria-labelledby="post-faq-heading" className="max-w-3xl">
            <h2
              id="post-faq-heading"
              className="text-2xl font-semibold tracking-tight text-ink-900"
            >
              {ui.toolPage.faqHeadingSuffix}
            </h2>
            <p className="mt-2 text-[15px] text-ink-500">{ui.toolPage.faqIntro}</p>
            <div className="mt-6 grid gap-3">
              {post.faqs.map((faq) => (
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

        {/* ---- Ad slot: after the article, never above it ------------------- */}
        <Container className="mt-14">
          <AdSlot
            variant="rectangle"
            className="mx-auto max-w-[728px]"
            label={ui.common.advertisement}
          />
        </Container>

        {/* ---- Back to the index -------------------------------------------- */}
        <Container className="mt-10">
          <Link
            href={localePath(locale, "/blog")}
            className="text-[15px] font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            ← {content.blog.heading}
          </Link>
        </Container>
      </main>
    </>
  );
}
