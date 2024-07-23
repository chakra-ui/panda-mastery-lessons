import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "../ui/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  jsxFramework: "react", 
  presets: ['@pandacss/preset-panda', '@mono/preset'],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          heading: { value: 'var(--ubuntu), sans-serif' },
        },
        colors: {
          conf: {
            primary: {
              value: '#fbbc04',
            },
            secondary: {
              value: '#34a853',
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
