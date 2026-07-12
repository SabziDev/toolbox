import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const convertImages = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertImages(filePath);
      continue;
    }

    if (!/\.(png|jpe?g|webp)$/i.test(entry.name)) continue;

    const output = filePath.replace(/\.(png|jpe?g|webp)$/i, ".o.webp");

    await sharp(filePath).webp({ quality: 80 }).toFile(output);

    sharp.cache(false);

    await fs.unlink(filePath);
    await fs.rename(output, filePath.replace(/\.\w+$/, ".webp"));
  }
};

await convertImages("ASSETS");
