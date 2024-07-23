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
        colors: {
          cobalt: {
            50: {
              value: '#EBEDF9',
            },
            100: {
              value: '#D3D7EE',
            },
            200: {
              value: '#959CDE',
            },
            300: {
              value: '#5460C8',
            },
            400: {
              value: '#1020B9',
            },
            500: {
              value: '#0C1893',
            },
            600: {
              value: '#09136B',
            },
          },
        },
        radii: {
          100: {
            value: '2px',
          },
          200: {
            value: '4px',
          },
          300: {
            value: '8px',
          },
          400: {
            value: '16px',
          },
          500: {
            value: '24px',
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: {
              value: {
                base: 'white',
                _dark: '{colors.gray.900}',
              },
            },
            secondary: {
              value: {
                base: '{colors.gray.100}',
                _dark: '{colors.gray.800}',
              },
            },
            tertiary: {
              value: {
                base: '{colors.gray.200}',
                _dark: '{colors.gray.700}',
              },
            },
            accent: {
              value: {
                base: '{colors.cobalt.400}',
                _dark: '{colors.cobalt.300}',
              },
            },
            'faded-accent': {
              value: '{colors.cobalt.300/16}',
            },
          },
          text: {
            DEFAULT: {
              value: {
                base: '{colors.gray.900}',
                _dark: '{colors.gray.100}',
              },
            },
            secondary: {
              value: {
                base: '{colors.gray.700}',
                _dark: '{colors.gray.300}',
              },
            },
            tertiary: {
              value: {
                base: '{colors.gray.500}',
                _dark: '{colors.gray.400}',
              },
            },
            accent: {
              value: {
                base: '{colors.cobalt.300}',
                _dark: '{colors.cobalt.200}',
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
