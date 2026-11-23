import Link from "next/link";
import type { LocaleContent } from "@/content/types";
import { localePath, type Locale } from "@/lib/i18n";
import { Container } from "@/components/Container";

export function ContactView({
  locale,
  content,
}: {
  locale: Locale;
  content: LocaleContent;
}) {
  const { contact, ui } = content;

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
            <li className="text-ink-600">{contact.heading}</li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {contact.heading}
          </h1>
          <p className="mt-6 text-[18px] leading-8 text-ink-600">
            {contact.lead}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contact.cards.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-ink-200 bg-white p-6"
            >
              <h2 className="text-[17px] font-semibold text-ink-900">
                {item.title}
              </h2>
              <p className="mt-2.5 text-[15px] leading-7 text-ink-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl rounded-2xl border border-ink-200 bg-white p-7">
          <h2 className="text-[19px] font-semibold text-ink-900">
            {contact.messageHeading}
          </h2>
          <p className="mt-2 text-[15px] leading-7 text-ink-600">
            {contact.messageBody.split("{email}")[0]}
            <a
              href="mailto:hello@mouselab.io"
              className="ml-1 font-semibold text-brand-600 hover:text-brand-700"
            >
              hello@mouselab.io
            </a>
            {contact.messageBody.split("{email}")[1]}
          </p>
          <p className="mt-4 text-[14px] leading-6 text-ink-400">
            {contact.messageNote}
          </p>
        </div>
      </Container>
    </main>
  );
}
