import Link from "next/link";
import type { BlogContent, LocaleContent } from "@/content/types";
import { LOCALE_BY_CODE, localePath, type Locale } from "@/lib/i18n";
import { POST_PUBLISHED_AT } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";

function buildSchema(blog: BlogContent, locale: Locale, url: string) {
  const language = LOCALE_BY_CODE[locale].hreflang;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${url}#blog`,
        name: blog.heading,
        description: blog.metaDescription,
        url,
        inLanguage: language,
        isPartOf: { "@id": `${SITE.url}/#website` },
        blogPost: blog.posts.map((post) => {
          const postUrl = `${SITE.url}${localePath(locale, `/blog/${post.slug}`)}`;
          return {
            "@type": "BlogPosting",
            "@id": `${postUrl}#article`,
            headline: post.title,
            description: post.metaDescription,
            url: postUrl,
            datePublished: POST_PUBLISHED_AT,
            inLanguage: language,
          };
        }),
      },
    ],
  };
}

export function BlogView({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleContent;
}) {
  const { blog, ui } = content;
  const url = `${SITE.url}${localePath(locale, "/blog")}`;

  return (
    <>
      <JsonLd data={buildSchema(blog, locale, url)} />

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
            <li className="text-ink-600">{blog.heading}</li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {blog.heading}
          </h1>
          <p className="mt-6 text-[18px] leading-8 text-ink-600">{blog.lead}</p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {blog.posts.map((post) => (
            <li key={post.slug} className="flex">
              <Link
                href={localePath(locale, `/blog/${post.slug}`)}
                className="flex w-full flex-col rounded-2xl border border-ink-200 bg-white p-7 transition-colors hover:border-brand-300"
              >
                <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.1em] text-ink-400">
                  <span>{post.dateLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-[21px] font-semibold text-ink-900">
                  {post.title}
                </h2>
                <p className="mt-2.5 flex-1 text-[15px] leading-7 text-ink-600">
                  {post.excerpt}
                </p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">
                  {ui.common.readMore}
                  <span aria-hidden="true">→</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
    </>
  );
}
