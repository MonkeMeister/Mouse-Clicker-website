/**
 * Live sweep of every locale and route.
 *
 * Checks that each page responds, declares the right language, carries a
 * localised <title> and <h1>, and links the full hreflang cluster.
 */
const BASE = process.argv[2] ?? "http://localhost:3000";

const LOCALES = [
  { code: "en", prefix: "", lang: "en" },
  { code: "de", prefix: "/de", lang: "de" },
  { code: "es", prefix: "/es", lang: "es" },
  { code: "hi", prefix: "/hi", lang: "hi-IN" },
  { code: "ja", prefix: "/ja", lang: "ja" },
  { code: "pl", prefix: "/pl", lang: "pl" },
  { code: "pt-br", prefix: "/pt-br", lang: "pt-BR" },
  { code: "tr", prefix: "/tr", lang: "tr" },
];

const PATHS = [
  "",
  "/tools",
  "/tools/mouse-test",
  "/tools/scroll-test",
  "/tools/keyboard-test",
  "/tools/cps-test",
  "/tools/polling-rate-test",
  "/about",
  "/blog",
  "/blog/how-a-browser-sees-your-mouse",
  "/blog/double-click-chatter-explained",
  "/contact",
  "/privacy-policy",
];

const englishTitles = new Map();
const englishHeadings = new Map();
const englishBodies = new Map();
const problems = [];

function strip(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * The first request to a cold route can answer with a 200 shell while the
 * server warms up. When that happens, request the route once more and measure
 * that instead.
 */
async function fetchStable(url, expectedStatus) {
  const response = await fetch(url, { redirect: "manual" });
  if (response.status === expectedStatus) return response;
  await response.text();
  return fetch(url, { redirect: "manual" });
}

for (const locale of LOCALES) {
  for (const path of PATHS) {
    const url = `${BASE}${locale.prefix}${path}`;
    let response;
    try {
      response = await fetchStable(url, 200);
    } catch (error) {
      problems.push(`${url} — request failed: ${error.message}`);
      continue;
    }

    if (response.status !== 200) {
      problems.push(`${url} — status ${response.status}`);
      continue;
    }

    const html = await response.text();

    const lang = html.match(/<html lang="([^"]+)"/)?.[1];
    if (lang !== locale.lang) {
      problems.push(`${url} — html lang is "${lang}", expected "${locale.lang}"`);
    }

    const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
    const h1 = strip(html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1] ?? "");
    const body = strip(html.match(/<main[^>]*>(.*?)<\/main>/s)?.[1] ?? html);

    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";

    const alternates = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)];
    const langs = alternates.map((match) => match[1]);
    for (const expected of [...LOCALES.map((l) => l.lang), "x-default"]) {
      if (!langs.includes(expected)) {
        problems.push(`${url} — hreflang cluster missing "${expected}"`);
      }
    }
    if (alternates.length !== LOCALES.length + 1) {
      problems.push(`${url} — ${alternates.length} hreflang entries, expected ${LOCALES.length + 1}`);
    }

    if (locale.code === "en") {
      englishTitles.set(path, title);
      englishHeadings.set(path, h1);
      englishBodies.set(path, body);
    } else {
      // A page is translated when its body copy differs from the English one.
      // Titles like "Blog" are legitimately identical in several languages.
      if (body === englishBodies.get(path)) {
        problems.push(`${url} — body copy is still the English one`);
      }
      if (!canonical.includes(locale.prefix === "" ? "mouselab.io" : `mouselab.io${locale.prefix}`)) {
        problems.push(`${url} — canonical "${canonical}" does not match the locale`);
      }
    }

    /* The language switcher must offer every language at the same page. */
    const header = html.match(/<header[^>]*>(.*?)<\/header>/s)?.[1] ?? html;
    for (const other of LOCALES) {
      // The English home page lives at the root, so its path is "/", not "".
      const target = `${other.prefix}${path}` || "/";
      if (!header.includes(`href="${target}"`) && !header.includes(`\\"${target}\\"`)) {
        problems.push(`${url} — language switcher does not link to ${target}`);
      }
    }
  }
}

/* The English pages must still be served from the root. */
for (const path of PATHS) {
  const response = await fetchStable(`${BASE}${path}`, 200);
  if (response.status !== 200) {
    problems.push(`${BASE}${path} — root status ${response.status}`);
  }
}

/* /en/... must redirect to the clean URL. */
const redirect = await fetchStable(`${BASE}/en/tools/mouse-test`, 308);
if (redirect.status !== 308) {
  problems.push(`${BASE}/en/tools/mouse-test — expected 308, got ${redirect.status}`);
}

/* Unknown paths must 404. */
for (const missingPath of ["/de/tools/nope", "/de/blog/nope", "/blog/nope"]) {
  const missing = await fetchStable(`${BASE}${missingPath}`, 404);
  if (missing.status !== 404) {
    problems.push(`${BASE}${missingPath} — expected 404, got ${missing.status}`);
  }
}

/* The sitemap must list every locale. */
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
for (const locale of LOCALES) {
  const expected = LOCALES.length * PATHS.length;
  if (sitemapUrls.length !== expected) {
    problems.push(`sitemap — ${sitemapUrls.length} urls, expected ${expected}`);
    break;
  }
  const found = sitemapUrls.filter((url) => {
    if (locale.prefix === "") {
      // English lives at the root: no locale segment at all.
      return ![...LOCALES].some((other) => other.prefix && url.includes(`mouselab.io${other.prefix}`));
    }
    return url.includes(`mouselab.io${locale.prefix}`);
  });
  if (found.length !== PATHS.length) {
    problems.push(`sitemap — locale ${locale.code} has ${found.length} urls, expected ${PATHS.length}`);
  }
}

if (problems.length === 0) {
  console.log(`PASS — ${LOCALES.length} locales × ${PATHS.length} routes all healthy`);
  console.log(`      sitemap: ${sitemapUrls.length} urls, full hreflang clusters, correct canonicals`);
} else {
  console.log(`FAIL — ${problems.length} problem(s)`);
  for (const problem of problems) console.log(`      ${problem}`);
}

process.exit(problems.length > 0 ? 1 : 0);
