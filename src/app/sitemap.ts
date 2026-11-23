import type { MetadataRoute } from "next";
import { LOCALES, localeUrl } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { TOOL_SLUGS } from "@/lib/tools";

const LAST_MODIFIED = new Date("2026-11-22T00:00:00.000Z");

const STATIC_PAGES = [
  { path: "/", priority: 1 },
  { path: "/tools", priority: 0.9 },
  { path: "/about", priority: 0.5 },
  { path: "/blog", priority: 0.6 },
  { path: "/contact", priority: 0.4 },
  { path: "/privacy-policy", priority: 0.3 },
];

/**
 * Every page of every language, with the hreflang alternates attached so
 * search engines can see the full translation cluster for each page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PAGES.map((page) => ({
      path: page.path,
      priority: page.priority,
    })),
    ...TOOL_SLUGS.map((slug) => ({
      path: `/tools/${slug}`,
      priority: 0.9,
    })),
  ];

  return LOCALES.flatMap((locale) =>
    paths.map((page) => ({
      url: localeUrl(SITE.url, locale.code, page.path),
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((alternate) => [
            alternate.hreflang,
            localeUrl(SITE.url, alternate.code, page.path),
          ]),
        ),
      },
    })),
  );
}
