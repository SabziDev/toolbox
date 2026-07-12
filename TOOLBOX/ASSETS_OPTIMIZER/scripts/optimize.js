import { execSync } from "node:child_process";

const commands = [
  {
    title: "✨ AI Image Enhancement",
    command: "npm run enhance:imgs",
  },
  {
    title: "🖼️ Image Optimization",
    command: "npm run optimize:imgs",
  },
  {
    title: "🎬 Video Optimization",
    command: "npm run optimize:videos",
  },
  {
    title: "🎵 Audio Optimization",
    command: "npm run optimize:audios",
  },
  {
    title: "🔤 Font Optimization",
    command: "npm run optimize:fonts",
  },
  {
    title: "🧩 SVG Optimization",
    command: "npm run optimize:svgs",
  },
];

const line =
  "========================================================================";
const section =
  "------------------------------------------------------------------------";

console.log();
console.log(line);
console.log("🚀 STARTING ASSETS OPTIMIZATION PIPELINE");
console.log(line);

const startedAt = Date.now();

for (let i = 0; i < commands.length; i++) {
  const step = commands[i];

  console.log();
  console.log(section);
  console.log(`STEP ${i + 1}/${commands.length}`);
  console.log(step.title);
  console.log(section);

  try {
    execSync(step.command, {
      stdio: "inherit",
    });

    console.log(`✅ Finished`);
  } catch (error) {
    console.log();
    console.log(line);
    console.log("❌ PIPELINE FAILED");
    console.log(line);
    console.log(`Failed Step : ${step.title}`);
    console.log(`Command     : ${step.command}`);
    console.log();
    console.log("⛔ Remaining steps have been cancelled.");
    console.log(line);

    process.exit(1);
  }
}

const seconds = ((Date.now() - startedAt) / 1000).toFixed(2);

console.log();
console.log(line);
console.log("🎉 ALL TASKS COMPLETED SUCCESSFULLY");
console.log(`⏱️ Total Time : ${seconds}s`);
console.log(line);
