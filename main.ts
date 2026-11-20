// Entry for make.fun bounty "Clip GTA 6 for the most YouTube views"
// (gta6-clipper-01). Node 22, standard library only.
//
// The entry itself is the video: the clip is uploaded to YouTube as a
// public Short, and VIDEO.json at the repository root names its address.
// All this program has to do is copy VIDEO.json to the output directory,
// where the gate reads it.
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no wall clock, no files outside the repository. The
// output directory itself is never deleted — only created if missing.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${message}`);
  process.exit(1);
}
