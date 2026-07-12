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

    if (!/\.(mp4|mov|avi|mkv|webm)$/i.test(entry.name)) continue;

    const output = filePath.replace(/\.\w+$/, ".o.webm");

    await run(
      `ffmpeg -y -i "${filePath}" ` +
        `-map 0:v:0 -map 0:a? ` +
        `-c:v libsvtav1 ` +
        `-crf 35 ` +
        `-preset 6 ` +
        `-pix_fmt yuv420p ` +
        `-g 240 ` +
        `-row-mt 1 ` +
        `-c:a libopus ` +
        `-b:a 96k ` +
        `"${output}"`,
    );

    await fs.unlink(filePath);
    await fs.rename(output, filePath.replace(/\.\w+$/, ".webm"));
  }
}

await optimize(ROOT);
