import fs from "node:fs/promises";
import path from "node:path";
import ttf2woff2 from "ttf2woff2";

const ROOT = "ASSETS";

async function convertFonts(dir) {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertFonts(filePath);
      continue;
    }

    if (path.extname(filePath).toLowerCase() !== ".ttf") continue;

    const output = filePath.replace(/\.(ttf)$/i, ".woff2");

    const input = await fs.readFile(filePath);

    const converted = ttf2woff2(input);

    await fs.writeFile(output, converted);

    await fs.unlink(filePath);
  }
}

await convertFonts(ROOT);
