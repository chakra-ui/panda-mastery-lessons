import { defineSlotRecipe } from '@pandacss/dev';

export const alertRecipe = defineSlotRecipe({
  className: 'alert',
  slots: ['root', 'icon', 'title', 'description'],
  base: {
    root: {
      px: '16px',
      py: '12px',
    },
    icon: {
      width: '24px',
      height: '24px',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    description: {
      fontSize: '16px',
    },
  },
  variants: {
    status: {
      info: {
        root: {
          colorPalette: 'blue',
        },
      },
      error: {
        root: {
          colorPalette: 'red',
        },
      },
      warning: {
        root: {
          colorPalette: 'orange',
        },
      },
      success: {
        root: {
          colorPalette: 'green',
        },
      },
    },
    kind: {
      subtle: {
        root: {
          bg: 'colorPalette.100',
        },
        icon: {
          color: 'colorPalette.600',
        },
      },
      solid: {
        root: {
          bg: 'colorPalette.600',
          color: 'white',
        },
      },
    },
  },
  defaultVariants: {
    status: 'info',
    kind: 'subtle',
  },
});
