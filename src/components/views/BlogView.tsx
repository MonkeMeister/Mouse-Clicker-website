import Link from "next/link";
import type { LocaleContent } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";
import { Container } from "@/components/Container";

export function BlogView({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleContent;
}) {
  const { blog, ui } = content;

  return (
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
            <li
              key={post.slug}
              className="flex flex-col rounded-2xl border border-ink-200 bg-white p-7"
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
              <p className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink-400">
                {ui.common.inProduction}
                <span aria-hidden="true">→</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-[15px] leading-7 text-ink-500">
          {blog.noteBefore}{" "}
          <Link
            href={localePath(locale, "/about")}
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            {blog.noteLinkLabel}
          </Link>{" "}
          {blog.noteAfter}
        </p>
      </Container>
    </main>
  );
}
