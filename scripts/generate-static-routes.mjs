/**
 * Generates the static page routes under `src/app/[locale]`.
 *
 * Each route is the same shape: locale-aware metadata with hreflang, and a
 * view component fed by the locale's content bundle.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(here, "..", "src", "app", "[locale]");

const PAGES = [
  { dir: "about", view: "AboutView", key: "about", path: "/about", fn: "AboutRoute" },
  { dir: "blog", view: "BlogView", key: "blog", path: "/blog", fn: "BlogRoute" },
  { dir: "contact", view: "ContactView", key: "contact", path: "/contact", fn: "ContactRoute" },
  {
    dir: "privacy-policy",
    view: "PrivacyView",
    key: "privacy",
    path: "/privacy-policy",
    fn: "PrivacyPolicyRoute",
  },
];

const TEMPLATE = ({ view, key, path: routePath, fn }) => `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ${view} } from "@/components/views/${view}";
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
  const { ${key} } = getContent(locale);

  return {
    title: ${key}.metaTitle,
    description: ${key}.metaDescription,
    alternates: {
      canonical: localePath(locale, "${routePath}"),
      languages: languageAlternates("${routePath}"),
    },
    openGraph: {
      title: ${key}.metaTitle,
      description: ${key}.metaDescription,
      url: \`\${SITE.url}\${localePath(locale, "${routePath}")}\`,
    },
  };
}

export default async function ${fn}({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return <${view} locale={raw} content={getContent(raw)} />;
}
`;

for (const page of PAGES) {
  const dir = path.join(appDir, page.dir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), TEMPLATE(page), "utf8");
  console.log(`wrote route: ${page.dir}`);
}
