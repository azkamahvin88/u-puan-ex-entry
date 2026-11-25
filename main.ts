// Describe Your Ex in One Word — make.fun entry (program/v1, Node 22+).
// Writes exactly one word to /output/entry.txt. Deterministic, no network,
// no model calls. The word is a fixed constant chosen by the author.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: "Recalled".
//
// The verdict, in one word: the ex was a defective product, pulled from
// the shelves by the manufacturer. "Recalled" carries the whole story —
// a fault was found, the item was taken back, and no refund of the time
// spent is coming. It also bites twice: recalled as in remembered, because
// of course they still are, and recalled as in a product recall, because
// that is what they deserved. A product verdict, not another "toxic" or
// "ghosted": crafty, surprising, and instantly recognisable to anyone who
// has ever had a faulty ex returned to sender.
const ENTRY = "Recalled";

// Gate guard: the sealed scorer only accepts exactly one word
// (at most 111 characters for this bounty).
// Fail loudly here rather than writing an invalid entry.
if (!/^[A-Za-z]+$/.test(ENTRY) || ENTRY.length > 111) {
  throw new Error(
    `ENTRY must be exactly one word of at most 111 characters, got ${JSON.stringify(ENTRY)}`,
  );
}

// Output contract: one word plus a trailing newline, nothing else.
// The judge reads the file verbatim, so no extra words may sneak in.
const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outFile}`);
