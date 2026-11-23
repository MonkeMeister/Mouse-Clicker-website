import Link from "next/link";
import type { LocaleContent } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";

export function RelatedTools({
  locale,
  content,
  slugs,
}: {
  locale: Locale;
  content: LocaleContent;
  slugs: string[];
}) {
  const tools = slugs
    .map((slug) => content.toolPages[slug as keyof typeof content.toolPages])
    .filter(Boolean);
  if (tools.length === 0) return null;

  const { ui } = content;

  return (
    <section aria-labelledby="related-tools-heading">
      <h2
        id="related-tools-heading"
        className="text-2xl font-semibold tracking-tight text-ink-900"
      >
        {ui.toolPage.relatedHeading}
      </h2>
      <p className="mt-2 text-[15px] text-ink-500">{ui.toolPage.relatedIntro}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <Link
              href={localePath(locale, `/tools/${tool.slug}`)}
              className="group flex h-full flex-col rounded-xl border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/40"
            >
              <span className="text-[17px] font-semibold text-ink-900 group-hover:text-brand-700">
                {tool.name}
              </span>
              <span className="mt-1.5 text-[14px] leading-6 text-ink-500">
                {tool.metaDescription.split(".")[0]}.
              </span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">
                {ui.toolPage.openTest}
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
  );
}
