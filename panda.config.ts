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
    extend: {
      tokens: {
        spacing: { none: { value: '0px' } },
        fontSizes: { sm: { value: '12px' } },
        colors: {
          accentText: { value: '#6644ff' },
          mutedText: { value: '#45445f' },
          accentBg: { value: '#FA44ff' },
        },
        radii: { lg: { value: '12px' } },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
});
