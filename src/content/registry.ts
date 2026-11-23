import type { Locale } from "@/lib/i18n";
import type { LocaleContent } from "./types";
import { en } from "./en/index";
import { de } from "./locales/de/index";
import { es } from "./locales/es/index";
import { hi } from "./locales/hi/index";
import { ja } from "./locales/ja/index";
import { pl } from "./locales/pl/index";
import { ptBr } from "./locales/pt-br/index";
import { tr } from "./locales/tr/index";

/** Every locale ships its own complete page set. */
export const CONTENT: Record<Locale, LocaleContent> = {
  en,
  de,
  es,
  hi,
  ja,
  pl,
  "pt-br": ptBr,
  tr,
};

export function getContent(locale: Locale): LocaleContent {
  return CONTENT[locale] ?? CONTENT.en;
}
