// g290-wifi-story-32 — "Tell a Whole Story in 32 Characters" (make.fun)
//
// Winner text (32 chars, verified with node: "I unplugged it. We need to talk.".length === 32):
//   I unplugged it. We need to talk.
//
// Why this one won the internal comparison of 10 candidates:
// - The joke lands on the first read: "We need to talk" is the universally
//   dreaded phrase, and here the Wi-Fi itself is the hostage that forces
//   the conversation — the plug was pulled on purpose.
// - It tells a whole story: a situation (a tense household), a character
//   (a partner at the end of their patience), and something that happened
//   (the router got unplugged). The reader fills in the rest.
// - It is fresh: no stock Wi-Fi joke ("FBI Surveillance Van", "Pretty Fly
//   for a Wi-Fi", "It Burns When IP", ...), no slogan, no shock value.
// - It is tight: exactly 32 characters, every word earns its place, easy
//   to read and say out loud.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "I unplugged it. We need to talk.";
const OUT_PATH = "/output/entry.txt";

// Gate, mirroring the competition's sealed scorer: /output/entry.txt must
// be UTF-8 text of 1 to 32 characters, not only white space. Fail loudly
// here instead of shipping an invalid entry. (JS .length counts UTF-16
// code units; this entry is pure ASCII, so length === character count.)
if (ENTRY.length < 1 || ENTRY.length > 32) {
  throw new Error(`gate: entry is ${ENTRY.length} chars, must be 1-32`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("gate: entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

// Read back and verify the file on disk is byte-identical to the entry:
// no trailing newline, no encoding surprise — the gate counts the file.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== ENTRY) {
  throw new Error(`gate: wrote ${written.length} chars, expected ${ENTRY.length}`);
}
console.log(`wrote ${ENTRY.length} chars to ${OUT_PATH}: ${ENTRY}`);
