import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  // Patterns here
  patterns: {
    extend: {
      autoflex: {
        transform() {
          return {
            display: 'flex',
            flexDirection: { base: 'column', lg: 'row' },
            alignItems: 'center',
            gap: '48px',
          };
        },
      },
    },
  },
  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
});
