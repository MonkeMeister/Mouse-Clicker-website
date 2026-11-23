/**
 * Repairs malformed content files.
 *
 * A worker occasionally emits long strings wrapped across several lines and
 * omits the separating commas. This normalises those files back into valid
 * TypeScript without touching the prose itself.
 *
 * Usage: node scripts/repair-content.mjs <file> [<file> ...]
 */
import fs from "node:fs";
import ts from "typescript";

const CJK = /^[\u3000-\u30FF\u4E00-\u9FFF\uFF00-\uFFEF]{4,}/;

/** Counts quote characters that are not escaped. */
function unescapedQuotes(line) {
  let count = 0;
  for (let i = 0; i < line.length; i += 1) {
    if (line[i] === "\\") {
      i += 1;
      continue;
    }
    if (line[i] === '"') count += 1;
  }
  return count;
}

/** Index of the closing quote of a string that opened on an earlier line. */
function closingQuoteIndex(line) {
  for (let i = 0; i < line.length; i += 1) {
    if (line[i] === "\\") {
      i += 1;
      continue;
    }
    if (line[i] === '"') return i;
  }
  return -1;
}

/** Index of the last unescaped quote in a line, or -1. */
function lastQuoteIndex(line) {
  let last = -1;
  for (let i = 0; i < line.length; i += 1) {
    if (line[i] === "\\") {
      i += 1;
      continue;
    }
    if (line[i] === '"') last = i;
  }
  return last;
}

function repair(text, joinWith) {
  const lines = text.split(/\r?\n/);
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // A string that opens on this line and closes further down.
    if (unescapedQuotes(line) % 2 === 1) {
      const open = lastQuoteIndex(line);
      const prefix = line.slice(0, open);
      let buffer = line.slice(open + 1);
      let j = i + 1;
      let suffix = "";
      let closed = false;

      while (j < lines.length) {
        const next = lines[j];
        const close = closingQuoteIndex(next);
        if (close >= 0) {
          buffer += `\n${next.slice(0, close)}`;
          suffix = next.slice(close + 1);
          closed = true;
          break;
        }
        buffer += `\n${next}`;
        j += 1;
      }

      const joined = buffer
        .split(/\r?\n/)
        .map((part) => part.trim())
        .filter(Boolean)
        .join(joinWith);

      out.push(`${prefix}"${joined}"${suffix}`);
      i = closed ? j + 1 : j;
      continue;
    }

    // Bare text sitting where a string literal belongs.
    if (CJK.test(trimmed) && !trimmed.startsWith('"') && !trimmed.startsWith("//")) {
      out.push(line.replace(trimmed, `"${trimmed}"`));
      i += 1;
      continue;
    }

    out.push(line);
    i += 1;
  }

  // Restore the commas between array elements.
  const fixed = [];
  for (let index = 0; index < out.length; index += 1) {
    const line = out[index];
    const trimmed = line.trim();
    const endsWithString = trimmed.endsWith('"') && !trimmed.endsWith('\\"');

    if (endsWithString) {
      let next = index + 1;
      while (next < out.length && out[next].trim() === "") next += 1;
      const nextTrimmed = next < out.length ? out[next].trim() : "";
      const needsComma =
        nextTrimmed !== "" &&
        !nextTrimmed.startsWith(",") &&
        !nextTrimmed.startsWith(")") &&
        !nextTrimmed.startsWith("]") &&
        !nextTrimmed.startsWith("}") &&
        !nextTrimmed.startsWith("//");

      if (needsComma) {
        fixed.push(line + ",");
        continue;
      }
    }

    fixed.push(line);
  }

  return fixed.join("\n");
}

function parseErrors(file, text) {
  const source = ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS,
  );
  return source.parseDiagnostics ?? [];
}

let failures = 0;

for (const file of process.argv.slice(2)) {
  const original = fs.readFileSync(file, "utf8");
  const before = parseErrors(file, original);

  // Japanese does not use spaces between words; other languages do.
  const joinWith = /[぀-ヿ一-鿿]/.test(original) ? "" : " ";
  const repaired = repair(original, joinWith);
  const after = parseErrors(file, repaired);

  if (after.length === 0 && before.length > 0) {
    fs.writeFileSync(file, repaired, "utf8");
    console.log(
      `FIXED ${file} — ${before.length} parse error(s) → 0`,
    );
  } else if (after.length === 0) {
    console.log(`OK    ${file} — already valid`);
  } else {
    failures += 1;
    console.log(`FAIL  ${file} — ${after.length} parse error(s) remain`);
    for (const diagnostic of after.slice(0, 5)) {
      const { line, character } = ts.getLineAndCharacterOfPosition(
        ts.createSourceFile(file, repaired, ts.ScriptTarget.ESNext, true),
        diagnostic.start ?? 0,
      );
      console.log(`      ${line + 1}:${character + 1} ${diagnostic.messageText}`);
    }
  }
}

process.exit(failures > 0 ? 1 : 0);
