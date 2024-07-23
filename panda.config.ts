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
      textStyles: {
        display: {
          large: {
            value: {
              fontSize: '56px',
              lineHeight: '1.2',
            },
          },
          medium: {
            value: {
              fontSize: '44px',
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
            },
          },
          small: {
            value: {
              fontSize: '36px',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            },
          },
        },
        body: {
          XLarge: {
            value: {
              fontSize: '32px',
              lineHeight: '1.25',
              letterSpacing: '-0.02em',
            },
          },
          large: {
            value: {
              fontSize: '24px',
              lineHeight: '1.25',
              letterSpacing: '-0.02em',
            },
          },
          medium: {
            value: {
              fontSize: '18px',
              lineHeight: '1.4',
              letterSpacing: '-0.03em',
            },
          },
          small: {
            value: {
              fontSize: '16px',
              lineHeight: '1.5',
              letterSpacing: '-0.03em',
            },
          },
        },
      },
      layerStyles: {
        surface: {
          outline: {
            value: {
              borderColor: 'gray.200',
              borderWidth: '3px',
            },
          },
          raised: {
            value: {
              boxShadow: '0px 12px 25px 0px rgba(0, 0, 0, 0.17)',
              border: '1px solid',
              borderColor: 'neutral.100',
            },
          },
          subtle: {
            value: {
              background: 'neutral.100',
            },
          },
        },
        control: {
          selected: {
            value: {
              background: 'blue.100',
              borderWidth: '4px',
              borderColor: 'blue.500',
            },
          },
          disabled: {
            value: {
              background: 'gray.300',
            },
          },
          solid: {
            value: {
              background: 'blue.600',
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
