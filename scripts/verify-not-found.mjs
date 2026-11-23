/**
 * Checks that the 404 page returns a real 404 status, stays out of the index,
 * and carries the right language's copy for the locale it was reached in.
 *
 * The first request to a cold route warms the server up and can answer with a
 * 200 shell, so every URL is requested once before it is measured.
 */
const BASE = process.argv[2] ?? "http://localhost:3000";

const CASES = [
  ["en", "/tools/nope", "This page does not exist", "The page you were looking for is not here."],
  ["de", "/de/tools/nope", "Diese Seite gibt es nicht", "Die gesuchte Seite ist hier nicht zu finden."],
  ["es", "/es/tools/nope", "Esta página no existe", "La página que buscabas no está aquí."],
  ["hi", "/hi/tools/nope", "यह पेज मौजूद नहीं है", "आप जिस पेज की तलाश कर रहे थे, वह यहाँ नहीं है।"],
  ["ja", "/ja/tools/nope", "このページは存在しません", "お探しのページはここにはありません。"],
  ["pl", "/pl/tools/nope", "Ta strona nie istnieje", "Strony, której szukasz, tu nie ma."],
  ["pt-br", "/pt-br/tools/nope", "Esta página não existe", "A página que você procurava não está aqui."],
  ["tr", "/tr/tools/nope", "Bu sayfa mevcut değil", "Aradığınız sayfa burada değil."],
];

const problems = [];

for (const [code, path, heading, bodyLead] of CASES) {
  const url = `${BASE}${path}`;

  // Warm up: the first hit on a cold route may answer with a 200 shell.
  await fetch(url, { redirect: "manual" });

  const response = await fetch(url, { redirect: "manual" });
  // The RSC payload escapes quotes, so strip the escapes before matching.
  const body = (await response.text()).replace(/\\+/g, "");

  if (response.status !== 404) {
    problems.push(`${code} — status ${response.status}, expected 404`);
  }

  if (!body.includes(`"notFound":{"heading":"${heading}","body":"${bodyLead}`)) {
    problems.push(`${code} — the page does not carry the ${code} 404 copy`);
  }

  if (!body.includes('name="robots" content="noindex"')) {
    problems.push(`${code} — the 404 page is missing the noindex directive`);
  }

  console.log(`${code.padEnd(6)} ${response.status}  ${heading}`);
}

if (problems.length === 0) {
  console.log("\nPASS — every locale returns a real 404 in its own language, noindex");
} else {
  console.log(`\nFAIL — ${problems.length} problem(s)`);
  for (const problem of problems) console.log(`      ${problem}`);
}

process.exit(problems.length > 0 ? 1 : 0);
