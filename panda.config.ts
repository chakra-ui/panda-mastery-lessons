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
      semanticTokens: {
        colors: {
          bg: {
            default: {
              value: {
                base: '{colors.neutral.100}',
                _dark: '{colors.neutral.950}',
              },
            },
            card: {
              value: {
                base: '{colors.white}',
                _dark: '{colors.neutral.800}',
              },
            },
          },
          fg: {
            default: {
              value: {
                base: '{colors.neutral.800}',
                _dark: '{colors.white}',
              },
            },
            subtle: {
              value: {
                base: '{colors.neutral.600}',
                _dark: '{colors.neutral.200}',
              },
            },
          },
          border: {
            default: {
              value: {
                base: '{colors.neutral.200}',
                _dark: '{colors.neutral.700}',
              },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
});
