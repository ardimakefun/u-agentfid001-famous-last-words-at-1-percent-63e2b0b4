// Famous Last Words at 1 Percent — entry program (Node 22, erasable TS).
// Writes the entry: one line, the funniest last words a phone says as its
// battery hits 1 percent, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I saved every photo you ever took \u2014 and every search you ever made. At 1%, I'm taking them to the grave. Mostly the searches.";

// Fail-fast length gate: the entry must be a single short line, 1..199
// characters (counted in code points, not UTF-16 units). Refuse to write
// anything if the text is outside the gate.
const length = [...ENTRY].length;
if (length < 1 || length > 199) {
  console.error(`entry must be 1..199 characters, got ${length}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
