import { definePreset } from '@pandacss/dev';

export const pandaPreset = definePreset({
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
              fontSize: '20px',
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
});
