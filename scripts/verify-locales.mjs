/**
 * Structural verification for the localised content bundles.
 *
 * Every locale must ship the same shape as English: the same pages, the same
 * number of sections and FAQ entries, and the same interpolation placeholders.
 *
 * The bundles are parsed with the TypeScript compiler API rather than
 * imported, so the check works without a bundler and without disturbing the
 * import style used inside the content files.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const here = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.resolve(here, "..", "src", "content");

const FILES = [
  "ui.ts",
  "site.ts",
  "blog.ts",
  "labels.ts",
  "mouse-test.ts",
  "scroll-test.ts",
  "keyboard-test.ts",
  "cps-test.ts",
  "polling-rate-test.ts",
];

/**
 * Every locale, or just one when a name is passed on the command line.
 *
 * Checking a single locale keeps the signal clean while the other bundles are
 * still being written.
 */
const ALL_LOCALES = ["en", "de", "es", "hi", "ja", "pl", "pt-br", "tr"];
const only = process.argv[2];
const LOCALES = only ? ALL_LOCALES.filter((code) => code === only) : ALL_LOCALES;

if (LOCALES.length === 0) {
  console.log(`FAIL — unknown locale "${only}"`);
  process.exit(1);
}

const PLACEHOLDER = /\{[a-zA-Z]+\}/g;

const problems = [];

function fail(locale, where, message) {
  problems.push({ locale, where, message });
}

function parseFile(file) {
  const source = fs.readFileSync(file, "utf8");
  return ts.createSourceFile(file, source, ts.ScriptTarget.ESNext, true);
}

/** Collect every exported variable and the shape of its value. */
function shapeOfFile(file) {
  const sourceFile = parseFile(file);
  const exports = [];
  const entries = [];

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    const isExported = statement.modifiers?.some(
      (modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
    );
    if (!isExported) continue;

    for (const declaration of statement.declarationList.declarations) {
      const name = declaration.name.getText(sourceFile);
      exports.push(name);
      walk(declaration.initializer, name, entries, sourceFile);
    }
  }

  return { exports, entries };
}

function walk(node, currentPath, entries, sourceFile) {
  if (!node) return;

  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    entries.push({ path: currentPath, kind: "string", value: node.text });
    return;
  }

  if (ts.isNumericLiteral(node)) {
    entries.push({ path: currentPath, kind: "number", value: node.text });
    return;
  }

  if (node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword) {
    entries.push({ path: currentPath, kind: "boolean", value: node.getText() });
    return;
  }

  if (ts.isObjectLiteralExpression(node)) {
    for (const property of node.properties) {
      if (!ts.isPropertyAssignment(property)) {
        entries.push({ path: `${currentPath}.?`, kind: "other", value: "" });
        continue;
      }
      const key = property.name.getText(sourceFile).replace(/^["']|["']$/g, "");
      walk(property.initializer, `${currentPath}.${key}`, entries, sourceFile);
    }
    return;
  }

  if (ts.isArrayLiteralExpression(node)) {
    entries.push({ path: `${currentPath}.length`, kind: "number", value: String(node.elements.length) });
    node.elements.forEach((element, index) => {
      walk(element, `${currentPath}[${index}]`, entries, sourceFile);
    });
    return;
  }

  entries.push({ path: currentPath, kind: "other", value: "" });
}

/* ---- Build the English reference shape ------------------------------ */
const reference = new Map();
for (const file of FILES) {
  reference.set(file, shapeOfFile(path.join(contentDir, "en", file)));
}

/* ---- Compare every locale against it -------------------------------- */
for (const locale of LOCALES) {
  if (locale === "en") continue;

  for (const file of FILES) {
    const fullPath = path.join(contentDir, "locales", locale, file);
    if (!fs.existsSync(fullPath)) {
      fail(locale, file, "file missing");
      continue;
    }

    const expected = reference.get(file);
    const actual = shapeOfFile(fullPath);

    if (expected.exports.join(",") !== actual.exports.join(",")) {
      fail(
        locale,
        file,
        `exported names differ: [${actual.exports.join(",")}] vs English [${expected.exports.join(",")}]`,
      );
      continue;
    }

    if (expected.entries.length !== actual.entries.length) {
      fail(
        locale,
        file,
        `value count differs: ${actual.entries.length} vs English ${expected.entries.length}`,
      );
      continue;
    }

    for (let i = 0; i < expected.entries.length; i += 1) {
      const want = expected.entries[i];
      const got = actual.entries[i];

      if (want.path !== got.path) {
        fail(locale, `${file}:${got.path}`, `structure drift, expected ${want.path}`);
        continue;
      }

      if (want.kind !== got.kind) {
        fail(locale, `${file}:${got.path}`, `value type changed from ${want.kind} to ${got.kind}`);
        continue;
      }

      if (want.kind === "number" && want.value !== got.value) {
        fail(locale, `${file}:${got.path}`, `number changed from ${want.value} to ${got.value}`);
        continue;
      }

      if (want.kind === "string") {
        // An empty English string is intentional; an empty translation is not.
        if (!got.value.trim() && want.value.trim()) {
          fail(locale, `${file}:${got.path}`, "empty string");
          continue;
        }
        const wantMarks = (want.value.match(PLACEHOLDER) ?? []).sort().join(",");
        const gotMarks = (got.value.match(PLACEHOLDER) ?? []).sort().join(",");
        if (wantMarks !== gotMarks) {
          fail(
            locale,
            `${file}:${got.path}`,
            `placeholder mismatch: expected [${wantMarks}], got [${gotMarks}]`,
          );
        }
      }
    }
  }

  /* ---- The blog copy must be written in the target language ------------ */
  const blogPath = path.join(contentDir, "locales", locale, "blog.ts");
  if (fs.existsSync(blogPath)) {
    const englishText = new Set(
      reference
        .get("blog.ts")
        .entries.filter((entry) => entry.kind === "string")
        .map((entry) => entry.value),
    );

    for (const entry of shapeOfFile(blogPath).entries) {
      if (entry.kind !== "string") continue;
      /* Short values are slugs and identifiers, which are deliberately shared. */
      if (entry.value.trim().length < 60) continue;
      if (englishText.has(entry.value)) {
        fail(locale, `blog.ts:${entry.path}`, "paragraph copied from the English text");
      }
    }
  }
}

/* ---- Report ---------------------------------------------------------- */
const byLocale = new Map();
for (const problem of problems) {
  const list = byLocale.get(problem.locale) ?? [];
  list.push(problem);
  byLocale.set(problem.locale, list);
}

for (const locale of LOCALES) {
  const list = byLocale.get(locale) ?? [];
  if (list.length === 0) {
    console.log(`PASS  ${locale} — bundle matches the English structure`);
  } else {
    console.log(`FAIL  ${locale} — ${list.length} problem(s)`);
    for (const problem of list.slice(0, 15)) {
      console.log(`      ${problem.where}: ${problem.message}`);
    }
    if (list.length > 15) console.log(`      ... and ${list.length - 15} more`);
  }
}

console.log(`\n${problems.length} problem(s) across ${LOCALES.length} locales`);
process.exit(problems.length > 0 ? 1 : 0);
