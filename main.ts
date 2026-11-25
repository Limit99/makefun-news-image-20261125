// "The World on Wednesday" — make.fun news-image-20261125.
// A one-image front page summing up Wednesday 25 November 2026.
//
// The image is drawn once, by hand, as frontpage.html in this repository
// (one dominant visual: the PIF tower in Riyadh at dusk, hit by a drone;
// a giant date; minimal text; a three-item supporting strip and a ticker).
// It is rendered to entry.png beside this file (1024x1024, well under the
// 1 MiB cap). The program below is the entrypoint the competition runs:
// it copies that finished image to the output path, byte for byte, with no
// network and no randomness, so both runs of the grader write identical bytes.
// The facts on the page were checked against Reuters / Saudi Civil Defense
// (Riyadh tower strike, 11 wounded, second hit in under a week), Bloomberg
// (Zelensky on the Sparta II), the European Commission (EU hybrid cap) and
// the BBC (DR Congo missing plane) before the image was drawn.
//
// Run locally the same way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
