// Famous Last Words at 1 Percent — entry program (Node 22, erasable TS).
// Writes the entry: one line, the funniest last words a phone says as its
// battery hits 1 percent, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I saved every photo you ever took \u2014 and every search you ever made. At 1%, I'm taking them to the grave. Mostly the searches.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
