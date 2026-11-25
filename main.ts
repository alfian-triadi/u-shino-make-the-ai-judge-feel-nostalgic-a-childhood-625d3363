// Entry for make.fun competition:
// "Make the AI Judge Feel Nostalgic: A Childhood Memory"
// (u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
//
// The program writes exactly one sentence (at most 280 characters) to
// /output/entry.txt, with no trailing newline. The line recalls a childhood
// evening in Grandma's kitchen, grounded in concrete sensation: the smell of
// fresh rice and woodsmoke, dusk turning the windows gold, a low wooden
// stool too small to reach the table.
//
// How the line is written against the house judge's brief (most important
// first):
//   1. It is a childhood memory that stirs nostalgia, not a generic
//      sentiment: a specific evening, remembered from a child's height.
//   2. It is grounded in a concrete place, time and sensation: Grandma's
//      kitchen, dusk, the smell of fresh rice and woodsmoke, gold windows.
//   3. It sounds like it truly happened: the small honest detail of sitting
//      on a low stool, too small to reach the table.
//   4. It is a single clean sentence, 204 characters, every word earning
//      its place.
//   5. It leaves a warm ache: the child's certainty that supper — and
//      summer — would last forever, which the grown-up reader knows did not.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Grandma's kitchen smelled of fresh rice and woodsmoke, and as dusk turned the windows gold I sat on a low wooden stool, too small to reach the table, certain that supper — and summer — would last forever.";

// Guards: one sentence, at most 280 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`Entry is ${LINE.length} characters; must be 1-280.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
// One sentence: exactly one terminal full stop, at the end of the line.
const terminalStops = (LINE.match(/\./g) ?? []).length;
if (terminalStops !== 1 || !LINE.endsWith(".")) {
  throw new Error("Entry must be exactly one sentence.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
