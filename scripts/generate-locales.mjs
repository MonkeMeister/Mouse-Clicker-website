/**
 * Generates the per-locale content bundles.
 *
 * Every locale starts as a copy of the English bundle so the site always
 * builds and every URL resolves. Localised copy then replaces the English
 * text file by file.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.resolve(here, "..", "src", "content");
const enDir = path.join(contentDir, "en");
const localesDir = path.join(contentDir, "locales");

const LOCALES = ["de", "es", "hi", "ja", "pl", "pt-br", "tr"];

const INDEX_TEMPLATE = (code) => `import type { LocaleContent } from "../../types";
import { toolUi } from "./labels";
import { cpsTest } from "./cps-test";
import { keyboardTest } from "./keyboard-test";
import { mouseTest } from "./mouse-test";
import { pollingRateTest } from "./polling-rate-test";
import { scrollTest } from "./scroll-test";
import { about, blog, contact, home, privacy, toolsIndex } from "./site";
import { ui } from "./ui";

export const ${code}: LocaleContent = {
  locale: "${code}",
  ui,
  home,
  toolsIndex,
  about,
  contact,
  blog,
  privacy,
  toolPages: {
    "mouse-test": mouseTest,
    "scroll-test": scrollTest,
    "keyboard-test": keyboardTest,
    "cps-test": cpsTest,
    "polling-rate-test": pollingRateTest,
  },
  toolUi,
};
`;

fs.mkdirSync(localesDir, { recursive: true });

for (const code of LOCALES) {
  const dir = path.join(localesDir, code);
  fs.mkdirSync(dir, { recursive: true });
  for (const file of fs.readdirSync(enDir)) {
    fs.copyFileSync(path.join(enDir, file), path.join(dir, file));
  }
  fs.writeFileSync(path.join(dir, "index.ts"), INDEX_TEMPLATE(code), "utf8");
  console.log(`prepared locale bundle: ${code}`);
}

const registry = `import type { Locale } from "@/lib/i18n";
import type { LocaleContent } from "./types";
import { en } from "./en";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { hi } from "./locales/hi";
import { ja } from "./locales/ja";
import { pl } from "./locales/pl";
import { ptBr } from "./locales/pt-br";
import { tr } from "./locales/tr";

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
`;

fs.writeFileSync(path.join(contentDir, "registry.ts"), registry, "utf8");
console.log("wrote src/content/registry.ts");
