/**
 * Internationalisation registry.
 *
 * English lives at the site root (no prefix) so the existing URLs keep their
 * equity. Every other locale lives under its own prefix, e.g. /de/tools/...
 * Each locale is a fully separate, indexable page set linked with hreflang.
 */

export type LocaleDefinition = {
  /** URL segment. Also the directory name for the content bundle. */
  code: string;
  /** Value used for the hreflang attribute and the <html lang> attribute. */
  hreflang: string;
  /** Name in English, for crawlers and for the switcher's aria labels. */
  englishName: string;
  /** Name written in the language itself, shown in the switcher. */
  nativeName: string;
  /** Text direction. */
  dir: "ltr" | "rtl";
  /** BCP 47 tag used for dates and numbers. */
  tag: string;
};

export const LOCALES = [
  {
    code: "en",
    hreflang: "en",
    englishName: "English",
    nativeName: "English",
    dir: "ltr",
    tag: "en-GB",
  },
  {
    code: "de",
    hreflang: "de",
    englishName: "German",
    nativeName: "Deutsch",
    dir: "ltr",
    tag: "de-DE",
  },
  {
    code: "es",
    hreflang: "es",
    englishName: "Spanish",
    nativeName: "Español",
    dir: "ltr",
    tag: "es-ES",
  },
  {
    code: "hi",
    hreflang: "hi-IN",
    englishName: "Hindi",
    nativeName: "हिन्दी",
    dir: "ltr",
    tag: "hi-IN",
  },
  {
    code: "ja",
    hreflang: "ja",
    englishName: "Japanese",
    nativeName: "日本語",
    dir: "ltr",
    tag: "ja-JP",
  },
  {
    code: "pl",
    hreflang: "pl",
    englishName: "Polish",
    nativeName: "Polski",
    dir: "ltr",
    tag: "pl-PL",
  },
  {
    code: "pt-br",
    hreflang: "pt-BR",
    englishName: "Portuguese (Brazil)",
    nativeName: "Português (Brasil)",
    dir: "ltr",
    tag: "pt-BR",
  },
  {
    code: "tr",
    hreflang: "tr",
    englishName: "Turkish",
    nativeName: "Türkçe",
    dir: "ltr",
    tag: "tr-TR",
  },
] as const satisfies readonly LocaleDefinition[];

export type Locale = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_CODES = LOCALES.map((locale) => locale.code);

export const LOCALE_BY_CODE: Record<Locale, LocaleDefinition> =
  Object.fromEntries(
    LOCALES.map((locale) => [locale.code, locale]),
  ) as Record<Locale, LocaleDefinition>;

export function isLocale(value: string): value is Locale {
  return (LOCALE_CODES as readonly string[]).includes(value);
}

/** URL prefix for a locale. English is served from the site root. */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/**
 * Builds a locale-aware path. `path` must start with a slash and must not
 * include a locale prefix.
 */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${localePrefix(locale)}${clean}` || "/";
}

/** Absolute URL for a locale-aware path. */
export function localeUrl(siteUrl: string, locale: Locale, path = "/"): string {
  const full = `${siteUrl}${localePath(locale, path)}`;
  // The site root is referenced without a trailing slash so every canonical,
  // hreflang and sitemap URL matches byte for byte.
  return full === `${siteUrl}/` ? siteUrl : full;
}

/**
 * Removes a locale prefix from a pathname, returning the bare path.
 * `/de/tools/mouse-test` becomes `/tools/mouse-test`.
 */
export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    segments.shift();
  }
  return segments.length > 0 ? `/${segments.join("/")}` : "/";
}

/**
 * Maps a pathname from one locale to another, keeping the rest of the path
 * intact. `/tools/mouse-test` in German becomes `/de/tools/mouse-test`.
 */
export function switchLocalePath(pathname: string, locale: Locale): string {
  return localePath(locale, stripLocalePrefix(pathname));
}

/** Every locale's URL for one path, used for hreflang and the sitemap. */
export function allLocaleUrls(
  siteUrl: string,
  path = "/",
): { hreflang: string; href: string }[] {
  return LOCALES.map((locale) => ({
    hreflang: locale.hreflang,
    href: localeUrl(siteUrl, locale.code, path),
  }));
}
