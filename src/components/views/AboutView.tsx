import Link from "next/link";
import type { LocaleContent } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

export function AboutView({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleContent;
}) {
  const { about, ui } = content;
  const heading = about.heading.replace("{brand}", SITE.name);

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
            <li className="text-ink-600">{heading}</li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {heading}
          </h1>
          <p className="mt-6 text-[18px] leading-8 text-ink-600">{about.lead}</p>
        </div>

        <div className="mt-14 max-w-3xl space-y-12">
          {about.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, index) => {
                const [before, after] = paragraph.split("{privacyPolicy}");
                const hasLink = before !== undefined && paragraph.includes("{privacyPolicy}");
                return (
                  <p
                    key={index}
                    className="mt-4 text-[16px] leading-8 text-ink-600"
                  >
                    {before}
                    {hasLink && (
                      <Link
                        href={localePath(locale, "/privacy-policy")}
                        className="font-medium text-brand-600 hover:text-brand-700"
                      >
                        {about.privacyLinkLabel}
                      </Link>
                    )}
                    {hasLink ? after : undefined}
                  </p>
                );
              })}
              {section.bullets && (
                <ul className="mt-5 grid gap-3">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-xl border border-ink-200 bg-white p-4 text-[15px] leading-7 text-ink-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
