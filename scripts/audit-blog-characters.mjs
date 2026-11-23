/**
 * Audits a locale's blog bundle for stray characters from another writing
 * system.
 *
 * The file-writing path can occasionally inject a Chinese or Korean token into
 * a Japanese or Hindi file. The structural verifier cannot catch that, because
 * the text is still valid TypeScript and the shape is unchanged.
 *
 * The check compares every non-ASCII codepoint in blog.ts against the codepoints
 * already present in the locale's other, known-good content files. Anything
 * that appears only in blog.ts is printed for review.
 *
 * Run: node audit-blog-characters.mjs [locale ...]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(here, "..", "src", "content");

const ALL = ["en", "de", "es", "hi", "ja", "pl", "pt-br", "tr"];
const requested = process.argv.slice(2);
const LOCALES = requested.length > 0 ? requested : ALL;

/* Ranges that reveal a character from the wrong writing system. */
const SUSPICIOUS = [
  { name: "Hangul", test: /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/u },
  { name: "Cyrillic", test: /[\u0400-\u04FF]/u },
  { name: "Greek", test: /[\u0370-\u03FF]/u },
  { name: "Hebrew", test: /[\u0590-\u05FF]/u },
  { name: "Arabic", test: /[\u0600-\u06FF]/u },
  { name: "Devanagari", test: /[\u0900-\u097F]/u },
  { name: "Thai", test: /[\u0E00-\u0E7F]/u },
];

function nonAscii(text) {
  return new Set([...text].filter((ch) => ch.codePointAt(0) > 127));
}

let problems = 0;

for (const locale of LOCALES) {
  const dir =
    locale === "en"
      ? path.join(contentDir, "en")
      : path.join(contentDir, "locales", locale);

  const blogPath = path.join(dir, "blog.ts");
  if (!fs.existsSync(blogPath)) {
    console.log(`SKIP  ${locale} — no blog.ts yet`);
    continue;
  }

  const blog = fs.readFileSync(blogPath, "utf8");

  /* Everything the locale already ships in its other files. */
  const known = new Set();
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".ts") || file === "blog.ts") continue;
    for (const ch of nonAscii(fs.readFileSync(path.join(dir, file), "utf8"))) {
      known.add(ch);
    }
  }

  const novel = [...nonAscii(blog)].filter((ch) => !known.has(ch));

  /* Group the novel characters so the output stays readable. */
  const groups = new Map();
  for (const ch of novel) {
    const key = ch.codePointAt(0).toString(16).padStart(4, "0");
    if (!groups.has(key)) groups.set(key, { char: ch, count: 0 });
    groups.get(key).count += 1;
  }

  const hits = [];
  for (const [key, { char, count }] of groups) {
    const script = SUSPICIOUS.find((rule) => rule.test.test(char));
    hits.push({ key, char, count, script: script?.name ?? null });
  }

  const suspicious = hits.filter((hit) => hit.script);

  if (suspicious.length > 0) {
    problems += suspicious.length;
    console.log(`FAIL  ${locale} — ${suspicious.length} character(s) from another writing system`);
    for (const hit of suspicious) {
      console.log(`      U+${hit.key} "${hit.char}" x${hit.count} — ${hit.script}`);
    }
  } else {
    console.log(
      `PASS  ${locale} — no foreign-script characters (${novel.length} new codepoints, all in-language)`,
    );
  }
}

process.exit(problems > 0 ? 1 : 0);
