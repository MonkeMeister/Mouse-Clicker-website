import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ToolPage } from "@/components/ToolPage";
import { CpsTester } from "@/components/tools/CpsTester";
import { KeyboardTester } from "@/components/tools/KeyboardTester";
import { MouseTester } from "@/components/tools/MouseTester";
import { PollingRateTester } from "@/components/tools/PollingRateTester";
import { ScrollTester } from "@/components/tools/ScrollTester";
import { getContent } from "@/content/registry";
import type { LocaleContent } from "@/content/types";
import { isLocale, localePath } from "@/lib/i18n";
import { languageAlternates } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { TOOL_SLUGS } from "@/lib/tools";

export function generateStaticParams() {
  return TOOL_SLUGS.map((slug) => ({ slug }));
}

/**
 * Every tool page is known at build time, so this route blocks on `params`
 * rather than streaming a shell. Keeps the whole page prerendered as static
 * HTML instead of partial-prerendered.
 */
export const instant = false;

function buildPanels(content: LocaleContent): Record<string, ReactNode> {
  return {
    "mouse-test": <MouseTester labels={content.toolUi["mouse-test"]} />,
    "scroll-test": <ScrollTester labels={content.toolUi["scroll-test"]} />,
    "keyboard-test": <KeyboardTester labels={content.toolUi["keyboard-test"]} />,
    "cps-test": <CpsTester labels={content.toolUi["cps-test"]} />,
    "polling-rate-test": (
      <PollingRateTester labels={content.toolUi["polling-rate-test"]} />
    ),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;
  const content = getContent(locale);
  const tool = content.toolPages[slug as keyof typeof content.toolPages];
  if (!tool) return {};

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: {
      canonical: localePath(locale, `/tools/${tool.slug}`),
      languages: languageAlternates(`/tools/${tool.slug}`),
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `${SITE.url}${localePath(locale, `/tools/${tool.slug}`)}`,
    },
  };
}

export default async function ToolRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  const content = getContent(locale);
  const tool = content.toolPages[slug as keyof typeof content.toolPages];
  if (!tool) notFound();

  const panels = buildPanels(content);

  return (
    <ToolPage
      locale={locale}
      content={content}
      tool={tool}
      toolPanel={panels[tool.slug] ?? null}
    />
  );
}
