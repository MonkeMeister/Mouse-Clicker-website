/**
 * Inspects the rendered blog index: schema, post links and the absence of the
 * old "not published" placeholder copy.
 *
 * Run: node scripts/inspect-blog-index.mjs <url>
 */
const url = process.argv[2] ?? "http://localhost:8787/blog";

const response = await fetch(url);
const html = await response.text();

const postLinks = [
  ...new Set([...html.matchAll(/href="([^"]*\/blog\/[a-z0-9-]+)"/g)].map((m) => m[1])),
].filter((href) => !href.includes("double-click") || true);

console.log(`\n${url}\n`);
console.log(`  status                    ${response.status}`);
console.log(
  `  Blog schema               ${html.includes('"@type":"Blog"') ? "yes" : "NO"}`,
);
console.log(
  `  BlogPosting entries       ${[...html.matchAll(/"@type":"BlogPosting"/g)].length}`,
);
console.log(`  distinct post links       ${postLinks.length}`);
for (const link of postLinks) console.log(`      ${link}`);

const stale = ["Not published yet", "In production", "not published"].filter((text) =>
  html.includes(text),
);
console.log(`\n  stale placeholder copy    ${stale.length === 0 ? "none (good)" : stale.join(", ")}`);
