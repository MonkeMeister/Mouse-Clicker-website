import { getContent } from "@/content/registry";
import type { ToolContent } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";

/** Every tool page for one locale, in display order. */
export function getTools(locale: Locale): ToolContent[] {
  const { toolPages } = getContent(locale);
  return Object.values(toolPages);
}

export function getTool(locale: Locale, slug: string): ToolContent | undefined {
  return getTools(locale).find((tool) => tool.slug === slug);
}

/** Lightweight registry used by the nav and footer — no long-form copy. */
export function getToolNav(locale: Locale) {
  return getTools(locale).map((tool) => ({
    slug: tool.slug,
    name: tool.name,
    category: tool.category,
    href: localePath(locale, `/tools/${tool.slug}`),
  }));
}

export function getToolCategories(locale: Locale) {
  return Array.from(new Set(getTools(locale).map((tool) => tool.category)));
}

/** Slugs of every tool, independent of language. */
export const TOOL_SLUGS = [
  "mouse-test",
  "scroll-test",
  "keyboard-test",
  "cps-test",
  "polling-rate-test",
] as const;
