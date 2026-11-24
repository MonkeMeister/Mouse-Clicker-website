import { NextResponse, type NextRequest } from "next/server";
import { POST_SLUGS, TOOL_SLUGS } from "@/content/types";
import { DEFAULT_LOCALE, LOCALE_CODES } from "@/lib/i18n";

const LOCALES = LOCALE_CODES as readonly string[];

/** Every valid tool slug, as a set, so the proxy can check one cheaply. */
const TOOL_SLUG_SET: ReadonlySet<string> = new Set(TOOL_SLUGS);

/** Every valid blog post slug, as a set. */
const POST_SLUG_SET: ReadonlySet<string> = new Set(POST_SLUGS);

/**
 * Path the unknown-tool-slug request is rewritten to.
 *
 * It has to be a path that the `[locale]/tools/[slug]` route cannot match, so
 * that the request reaches the `[locale]/[...rest]` catch-all instead. That
 * catch-all is not prerendered, so its `notFound()` still lands before the
 * response starts streaming and the status is a real 404.
 */
const NOT_FOUND_PATH = "_not-found";

/**
 * True when the path addresses a tool page or a blog post that does not exist.
 */
function isUnknownSlug(segments: string[]): boolean {
  if (segments.length !== 2) return false;
  if (segments[0] === "tools") return !TOOL_SLUG_SET.has(segments[1]);
  if (segments[0] === "blog") return !POST_SLUG_SET.has(segments[1]);
  return false;
}

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

  /* A localised path, e.g. /de/tools/mouse-test. */
  if (first && LOCALES.includes(first) && first !== DEFAULT_LOCALE) {
    const rest = segments.slice(1);

    /*
     * Unknown tool and post slugs have to be answered here.
     *
     * The tool and blog routes are prerendered, so with Cache Components their
     * static shell — and the 200 status line that arrives with it — is already
     * on the wire before the page component runs. A `notFound()` raised that
     * late can no longer change the status, and the URL answers 200 with a
     * not-found page: a soft 404 that search engines treat as a valid page.
     *
     * Rewriting to the catch-all makes the 404 happen at routing level,
     * before anything is streamed, so the response is a real 404 with the
     * not-found UI in the visitor's language.
     */
    if (isUnknownSlug(rest)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${first}/${NOT_FOUND_PATH}`;
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

  /* /en/... redirects to the clean URL. */
  if (first === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${segments.slice(1).join("/")}`;
    return NextResponse.redirect(url, 308);
  }

  /* An unprefixed path is English, served from the root. */
  if (isUnknownSlug(segments)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}/${NOT_FOUND_PATH}`;
    return NextResponse.rewrite(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  /*
   * Only the routes that have to reach Next untouched are excluded.
   *
   * Everything else goes through the proxy, including paths that contain a
   * dot and paths under `/api`. Those paths used to be excluded, which left
   * them to the Next.js router at runtime: an unknown path such as
   * `/.env` or `/favicon.ico` has no prerendered entry, so the router had to
   * render a response on the fly, and that render never settles on the
   * Workers runtime. Cloudflare gave up on the request and answered with
   * error 1101 ("Worker threw exception") instead of a 404.
   *
   * Routing them through the proxy fixes that: the path is rewritten to a
   * locale-prefixed URL, which the prerendered catch-all answers with a real
   * 404. `/favicon.ico` is the one that mattered most, because every browser
   * asks for it on every page view.
   *
   * The excluded paths are the ones Next serves itself:
   *   - `robots.txt` and `sitemap.xml` are route handlers;
   *   - `icon.svg` and `favicon.ico` are the app's icon metadata routes.
   *
   * Files under `public/` (ads.txt, the fonts, the other icons) and the
   * framework's own `/_next/` files are answered by the static asset binding
   * before the Worker is reached, so they never reach the proxy at all.
   */
  matcher: ["/((?!favicon\\.ico|icon\\.svg|robots\\.txt|sitemap\\.xml).*)"],
};
