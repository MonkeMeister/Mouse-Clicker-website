/**
 * Counts the words in each locale's article body.
 *
 * Body = the opening lead plus every section heading, paragraph and bullet.
 * The FAQ is counted separately, since it is a different kind of content.
 *
 * Japanese and Hindi do not separate words with spaces, so they are counted
 * per character against the usual expansion factor instead.
 *
 * Run: node scripts/count-blog-words.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const here = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(here, "..", "src", "content");
const LOCALES = ["en", "de", "es", "hi", "ja", "pl", "pt-br", "tr"];

/** Languages written without spaces between words. */
const NO_SPACES = new Set(["ja"]);

function parse(file) {
  const source = fs.readFileSync(file, "utf8");
  return ts.createSourceFile(file, source, ts.ScriptTarget.ESNext, true);
}

/** Every string literal inside a node, including inside nested arrays. */
function collectStrings(node, out) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    out.push(node.text);
    return;
  }
  if (ts.isArrayLiteralExpression(node)) {
    for (const element of node.elements) collectStrings(element, out);
    return;
  }
  if (ts.isObjectLiteralExpression(node)) {
    for (const property of node.properties) {
      if (ts.isPropertyAssignment(property)) collectStrings(property.initializer, out);
    }
  }
}

/** The body text and the FAQ text of one post object. */
function readPost(postNode, sourceFile) {
  const body = [];
  const faq = [];

  const walk = (node) => {
    if (ts.isPropertyAssignment(node)) {
      const key = node.name.getText(sourceFile).replace(/^["']|["']$/g, "");
      if (key === "lead" || key === "heading" || key === "paragraphs" || key === "bullets") {
        collectStrings(node.initializer, body);
      } else if (key === "question" || key === "answer") {
        collectStrings(node.initializer, faq);
      }
    }
    ts.forEachChild(node, walk);
  };

  ts.forEachChild(postNode, walk);
  return { body, faq };
}

function extract(file) {
  const sourceFile = parse(file);
  const posts = [];

  const findPosts = (node) => {
    if (ts.isPropertyAssignment(node)) {
      const key = node.name.getText(sourceFile).replace(/^["']|["']$/g, "");
      if (key === "posts" && ts.isArrayLiteralExpression(node.initializer)) {
        for (const element of node.initializer.elements) {
          posts.push(readPost(element, sourceFile));
        }
        return;
      }
    }
    ts.forEachChild(node, findPosts);
  };

  ts.forEachChild(sourceFile, findPosts);
  return posts;
}

/**
 * Counts words. Languages written without spaces are counted per character
 * against the standard expansion factor, which is how they are normally
 * compared for length.
 */
function count(texts, locale) {
  const joined = texts.join(" ");
  if (NO_SPACES.has(locale)) {
    return Math.round([...joined.replace(/\s+/g, "")].length / 2.5);
  }
  return joined.split(/\s+/).filter((word) => /[\p{L}\p{N}]/u.test(word)).length;
}

console.log(`\n  locale   post 1 body   post 2 body   FAQ      total`);
console.log(`  -------  ------------  ------------  -------  -------`);

let grand = 0;

for (const locale of LOCALES) {
  const file =
    locale === "en"
      ? path.join(contentDir, "en", "blog.ts")
      : path.join(contentDir, "locales", locale, "blog.ts");

  const posts = extract(file);
  const post1 = count(posts[0].body, locale);
  const post2 = count(posts[1].body, locale);
  const faq = count(posts[0].faq.concat(posts[1].faq), locale);
  const total = post1 + post2 + faq;
  grand += total;

  console.log(
    `  ${locale.padEnd(8)} ${String(post1).padStart(11)}  ${String(post2).padStart(12)}  ${String(faq).padStart(7)}  ${String(total).padStart(7)}`,
  );
}

console.log(`\n  ${String(grand).padStart(7)} words across all eight languages\n`);
