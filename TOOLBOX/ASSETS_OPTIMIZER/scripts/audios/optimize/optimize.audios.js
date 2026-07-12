import { exec } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";

const run = promisify(exec);

const ROOT = "ASSETS";

async function optimize(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await optimize(filePath);
      continue;
    }

    if (!/\.(mp3|wav|flac|aac|m4a|ogg|opus)$/i.test(entry.name)) continue;

    const output = filePath.replace(/\.\w+$/, ".o.opus");

    await run(
      `ffmpeg -y -i "${filePath}" ` +
        `-c:a libopus ` +
        `-b:a 96k ` +
        `-vbr on ` +
        `-compression_level 10 ` +
        `"${output}"`,
    );

    await fs.unlink(filePath);
    await fs.rename(output, filePath.replace(/\.\w+$/, ".opus"));
  }
}

await optimize(ROOT);
