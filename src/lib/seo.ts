import {
  LOCALES,
  localeUrl,
  type Locale,
} from "@/lib/i18n";
import { SITE } from "@/lib/site";

/**
 * hreflang map for one path, covering every language the site ships.
 *
 * `x-default` points at the English page, which is the fallback Google shows
 * to users whose language does not match any variant.
 */
export function languageAlternates(path = "/"): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of LOCALES) {
    map[locale.hreflang] = localeUrl(SITE.url, locale.code, path);
  }
  map["x-default"] = localeUrl(SITE.url, "en", path);
  return map;
}

/** Absolute, locale-aware URL of a path. */
export function pageUrl(locale: Locale, path = "/"): string {
  return localeUrl(SITE.url, locale, path);
}
