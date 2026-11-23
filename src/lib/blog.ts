import { getContent } from "@/content/registry";
import type { BlogPost } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * Slugs of every blog post, independent of language.
 *
 * Re-exported from the content contract rather than declared here, so the
 * proxy can check a slug without pulling the whole content registry into the
 * middleware bundle.
 */
export { POST_SLUGS } from "@/content/types";

/**
 * Publication date of the articles, as an ISO 8601 date.
 *
 * It is a constant rather than a `new Date()` call during render, so the
 * structured data stays identical between builds and the pages stay
 * prerenderable.
 */
export const POST_PUBLISHED_AT = "2026-11-23";

/** Every blog post for one locale, in display order. */
export function getPosts(locale: Locale): BlogPost[] {
  return getContent(locale).blog.posts;
}

export function getPost(locale: Locale, slug: string): BlogPost | undefined {
  return getPosts(locale).find((post) => post.slug === slug);
}

/** Lightweight registry used by the blog index. */
export function getPostNav(locale: Locale) {
  return getPosts(locale).map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    readTime: post.readTime,
    dateLabel: post.dateLabel,
    href: localePath(locale, `/blog/${post.slug}`),
  }));
}
