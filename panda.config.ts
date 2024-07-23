import { defineConfig } from '@pandacss/dev';
import { pandaPreset } from './panda-preset';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],
  presets: ['@pandacss/preset-panda', pandaPreset],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        fonts: {
          cardTitle: { value: 'Inter' },
        },
        colors: {
          cardBg: { value: 'white' },
          cardAccent: { value: 'black' },
        },
      },
    },
  },

  themes: {
    kent: {
      semanticTokens: {
        fonts: {
          cardTitle: { value: 'Domine' },
        },
        colors: {
          cardBgr: { value: 'white' },
          cardAccent: { value: '{colors.red.500}' },
        },
      },
    },
    oxford: {
      semanticTokens: {
        fonts: {
          cardTitle: { value: 'Paytone One' },
        },
        colors: {
          cardBg: { value: '{colors.green.50}' },
          cardAccent: { value: '{colors.green.600}' },
        },
      },
    },
  },

  staticCss: {
    themes: ['*'],
  },

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
});
