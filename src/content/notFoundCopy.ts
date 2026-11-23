import { ui as en } from "./en/ui";
import { ui as de } from "./locales/de/ui";
import { ui as es } from "./locales/es/ui";
import { ui as hi } from "./locales/hi/ui";
import { ui as ja } from "./locales/ja/ui";
import { ui as pl } from "./locales/pl/ui";
import { ui as ptBr } from "./locales/pt-br/ui";
import { ui as tr } from "./locales/tr/ui";
import type { Locale } from "@/lib/i18n";

/**
 * The few strings the 404 page needs, in every language.
 *
 * The 404 page is a client component so that it can read the locale from the
 * route without turning the whole not-found boundary into a dynamic render —
 * a dynamic boundary would flush the response before the 404 status is known,
 * turning a real 404 into a soft 404. Pulling the strings out of the full
 * content bundles keeps the client payload to a few kilobytes.
 */
export type NotFoundCopy = {
  heading: string;
  body: string;
  allTools: string;
  home: string;
};

function copy(ui: {
  notFound: { heading: string; body: string };
  nav: { allTools: string; home: string };
}): NotFoundCopy {
  return {
    heading: ui.notFound.heading,
    body: ui.notFound.body,
    allTools: ui.nav.allTools,
    home: ui.nav.home,
  };
}

export const NOT_FOUND_COPY: Record<Locale, NotFoundCopy> = {
  en: copy(en),
  de: copy(de),
  es: copy(es),
  hi: copy(hi),
  ja: copy(ja),
  pl: copy(pl),
  "pt-br": copy(ptBr),
  tr: copy(tr),
};
