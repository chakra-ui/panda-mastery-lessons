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
      scrollable: {
        properties: {
          size: { type: 'token', value: 'sizes' },
          thumbColor: { type: 'token', value: 'colors' },
          trackColor: { type: 'token', value: 'colors' },
        },
        transform(properties) {
          const { size, thumbColor, trackColor, ...rest } = properties;

          return {
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: size,
              height: size,
            },
            '&::-webkit-scrollbar:window-inactive': {
              opacity: '0',
            },
            '&::-webkit-scrollbar-thumb': {
              background: thumbColor,
            },
            '&::-webkit-scrollbar-track': {
              background: trackColor,
            },
            ...rest,
          };
        },
      },
    },
  },
  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
});
