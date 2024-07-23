import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ['@pandacss/preset-panda', '@mono/preset'],

  // The output directory for your css system
  outdir: "dist",
  jsxFramework: "react"
});
