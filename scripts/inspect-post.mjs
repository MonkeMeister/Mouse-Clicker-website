/**
 * Inspects a rendered blog article: metadata, schema, links and the absence of
 * the old placeholder copy.
 *
 * Run: node scripts/inspect-post.mjs <url>
 */
const url = process.argv[2] ?? "http://localhost:8787/blog/how-a-browser-sees-your-mouse";

const response = await fetch(url);
const html = await response.text();

const pick = (pattern) => html.match(pattern)?.[1] ?? "";
const strip = (s) => s.replace(/<[^>]+>/g, "").trim();

const checks = [
  ["status", String(response.status)],
  ["title", strip(pick(/<title>(.*?)<\/title>/s))],
  ["h1", strip(pick(/<h1[^>]*>(.*?)<\/h1>/s))],
  ["canonical", pick(/<link rel="canonical" href="([^"]+)"/)],
  ["hreflang entries", String([...html.matchAll(/rel="alternate" hrefLang=/g)].length)],
  ["h2 count", String([...html.matchAll(/<h2/g)].length)],
  ["published date", strip(pick(/<span>([^<]*20\d\d[^<]*)<\/span>/))],
  ["read time", strip(pick(/<span>(\d+[^<]*<span)/))],
  ["Article schema", html.includes('"@type":"Article"') ? "yes" : "NO"],
  ["FAQPage schema", html.includes('"@type":"FAQPage"') ? "yes" : "NO"],
  ["Breadcrumb schema", html.includes('"@type":"BreadcrumbList"') ? "yes" : "NO"],
  ["BlogPosting refs", String([...html.matchAll(/"@type":"BlogPosting"/g)].length)],
  ["links to blog index", /href="[^"]*\/blog"/.test(html) ? "yes" : "NO"],
  ["links to mouse test", /href="[^"]*\/tools\/mouse-test"/.test(html) ? "yes" : "NO"],
  ["links to second post", html.includes("double-click-chatter-explained") ? "yes" : "NO"],
  ["language switcher hrefs", String([...html.matchAll(/hrefLang="/g)].length)],
];

console.log(`\n${url}\n`);
for (const [label, value] of checks) {
  console.log(`  ${label.padEnd(24)} ${value}`);
}

/* The old placeholder copy must be gone. */
const stale = ["Not published yet", "In production", "not published"];
const found = stale.filter((text) => html.includes(text));
console.log(`\n  stale placeholder copy   ${found.length === 0 ? "none (good)" : found.join(", ")}`);
