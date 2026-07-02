import tailwindcss from "@tailwindcss/vite";
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
    tailwindcss(),

    simpleHtmlPlugin({
      minify: true,
    }),
  ],
});
