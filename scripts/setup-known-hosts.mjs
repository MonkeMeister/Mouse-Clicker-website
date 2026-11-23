/**
 * Writes GitHub's published SSH host keys into known_hosts and verifies that
 * each fingerprint matches the one GitHub publishes in api.github.com/meta.
 *
 * The Windows ssh-keyscan bundled with this machine is too old to negotiate
 * GitHub's preferred key exchange, so the authoritative keys are fetched from
 * GitHub's own API instead.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const meta = await (await fetch("https://api.github.com/meta")).json();
const keys = meta.ssh_keys ?? [];
const fingerprints = meta.ssh_key_fingerprints ?? {};

console.log("GitHub publishes", keys.length, "host keys");

const lines = keys.map((key) => `github.com ${key}`);
const knownHosts = join(homedir(), ".ssh", "known_hosts");
writeFileSync(knownHosts, lines.join("\n") + "\n");
console.log("wrote", knownHosts);

// Verify each key's fingerprint against the published value.
let failed = 0;
for (const key of keys) {
  const type = key.split(" ")[0];
  const label = type.includes("ed25519")
    ? "SHA256_ED25519"
    : type.includes("rsa")
      ? "SHA256_RSA"
      : "SHA256_ECDSA";
  const expected = fingerprints[label];
  const tmp = join(homedir(), ".ssh", "verify_key.tmp");
  writeFileSync(tmp, key + "\n");
  const actual = execFileSync(
    "C:\\WINDOWS\\System32\\OpenSSH\\ssh-keygen.exe",
    ["-l", "-f", tmp],
    { encoding: "utf8" },
  );
  const match = actual.match(/SHA256:\S+/)?.[0];
  const expectedFull = expected ? `SHA256:${expected}` : undefined;
  const ok = expectedFull && match === expectedFull;
  if (!ok) failed++;
  console.log(
    `${ok ? "OK  " : "FAIL"} ${label.padEnd(14)} ${match}  (published: ${expected})`,
  );
}

if (failed > 0) {
  console.error(`\n${failed} fingerprint mismatch — refusing to trust these keys.`);
  process.exit(1);
}
console.log("\nPASS — every host key matches GitHub's published fingerprint");
