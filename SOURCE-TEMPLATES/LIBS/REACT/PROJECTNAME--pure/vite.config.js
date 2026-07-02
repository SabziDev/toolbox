import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import simpleHtmlPlugin from "vite-plugin-simple-html";

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ["pc-abolfazl"],
  },

  resolve: {
    alias: {
      "@": `${import.meta.dirname}/src`,
      "@public": `${import.meta.dirname}/public`,
    },
  },

  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),

    tailwindcss(),

    simpleHtmlPlugin({
      minify: true,
    }),
  ],
});
