import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_CODES } from "@/lib/i18n";

const LOCALES = LOCALE_CODES as readonly string[];

/**
 * Locale routing.
 *
 * English is served from the site root; every other language lives under its
 * own prefix. Unprefixed paths are rewritten to `/en`, and `/en/...` is
 * redirected back to the clean URL so each page has exactly one address.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0]?.toLowerCase();

  if (first && LOCALES.includes(first)) {
    if (first === DEFAULT_LOCALE) {
      const url = request.nextUrl.clone();
      url.pathname = `/${segments.slice(1).join("/")}`;
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon\\.ico|icon\\.svg|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
