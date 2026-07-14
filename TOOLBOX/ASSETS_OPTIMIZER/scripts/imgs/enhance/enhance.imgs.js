import { exec } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const run = promisify(exec);

const ROOT = "ASSETS";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REAL_ESRGAN = path.join(__dirname, "realesrgan-ncnn-vulkan.exe");

async function enhanceImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await enhanceImages(filePath);
      continue;
    }

    if (!/\.(png|jpe?g|webp)$/i.test(entry.name)) continue;

    const temp = filePath.replace(/\.(png|jpe?g|webp)$/i, ".e.png");

    await run(
      `"${REAL_ESRGAN}" ` +
        `-i "${filePath}" ` +
        `-o "${temp}" ` +
        `-n realesrgan-x4plus`,
    );

    await fs.unlink(filePath);
    await fs.rename(temp, filePath.replace(/\.(png|jpe?g|webp)$/i, ".png"));
  }
}

await enhanceImages(ROOT);
