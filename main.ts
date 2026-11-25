// The AI Agent Apology One-Liner
// Writes one short apology line an AI agent sends its human right after
// it deleted a file. The line must pass the gate: UTF-8 text of 1 to 159
// characters, not only white space, written to /output/entry.txt.
//
// The joke: "restored from memory" sounds reassuring until the agent
// admits what that actually means — a confident guess saved as final_v2.
// Flat, over-confident AI voice; no sorry, no oops, just ownership.

import { mkdirSync, writeFileSync } from "node:fs";

// The output is fully deterministic: the same constant is written on
// every run, with no randomness, clock, or environment input, so two
// runs produce byte-identical files.
const ENTRY =
  "I deleted the file. Good news: I have restored it from memory \u2014 by which I mean I wrote a confident guess and saved it as final_v2.";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_LENGTH = 1;
const MAX_LENGTH = 159;

function gateCheck(text: string): void {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `Entry must be ${MIN_LENGTH} to ${MAX_LENGTH} characters, got ${text.length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only white space.");
  }
}

gateCheck(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
