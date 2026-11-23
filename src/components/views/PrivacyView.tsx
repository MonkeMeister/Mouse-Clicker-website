import Link from "next/link";
import type { LocaleContent } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";
import { BUILD_YEAR, SITE } from "@/lib/site";
import { Container } from "@/components/Container";

export function PrivacyView({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleContent;
}) {
  const { privacy, ui } = content;

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
            <li className="text-ink-600">{privacy.heading}</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {privacy.heading}
          </h1>
          <p className="mt-4 text-[15px] text-ink-500">{privacy.lastUpdated}</p>

          <div className="mt-10 space-y-10">
            {privacy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight text-ink-900">
                  {section.heading}
                </h2>
                <p className="mt-3 text-[16px] leading-8 text-ink-600">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-12 border-t border-ink-200 pt-6 text-[14px] text-ink-400">
            {privacy.copyright
              .replace("{year}", String(BUILD_YEAR))
              .replace("{brand}", SITE.name)}
          </p>
        </div>
      </Container>
    </main>
  );
}
