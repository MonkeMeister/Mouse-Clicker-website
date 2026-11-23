"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { NOT_FOUND_COPY } from "@/content/notFoundCopy";
import { DEFAULT_LOCALE, isLocale, localePath, type Locale } from "@/lib/i18n";

/**
 * The 404 page.
 *
 * A not-found file receives no route params, so the locale is taken from the
 * router instead. That keeps the error page in the language the visitor was
 * browsing in, with links that stay inside that language.
 *
 * It is a client component on purpose. A server component would have to read
 * the locale from a request header, and reading headers opts the boundary
 * into dynamic rendering — the response is then flushed before the 404 status
 * is known, which turns a real 404 into a soft 404.
 */
export default function NotFound() {
  const params = useParams();
  const pathname = usePathname();

  const fromParams = params?.locale;
  const firstSegment = pathname?.split("/").filter(Boolean)[0];

  const candidates = [
    typeof fromParams === "string" ? fromParams : undefined,
    Array.isArray(fromParams) ? fromParams[0] : undefined,
    firstSegment,
  ];

  let locale: Locale = DEFAULT_LOCALE;
  for (const candidate of candidates) {
    if (typeof candidate !== "string") continue;
    const normalised = candidate.toLowerCase();
    if (isLocale(normalised)) {
      locale = normalised;
      break;
    }
  }

  const copy = NOT_FOUND_COPY[locale];

  return (
    <main>
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-600">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            {copy.heading}
          </h1>
          <p className="mt-5 text-[17px] leading-8 text-ink-600">{copy.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={localePath(locale, "/tools")}
              className="rounded-lg bg-brand-600 px-5 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              {copy.allTools}
            </Link>
            <Link
              href={localePath(locale, "/")}
              className="rounded-lg border border-ink-200 bg-white px-5 py-3 text-[15px] font-semibold text-ink-700 transition-colors hover:bg-ink-50"
            >
              {copy.home}
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
