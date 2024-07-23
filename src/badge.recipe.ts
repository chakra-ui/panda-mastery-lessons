import { defineRecipe } from '@pandacss/dev';

export const badgeRecipe = defineRecipe({
  className: 'badge',
  base: {
    color: 'white',
    fontSize: '21px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '4px',
    lineHeight: '1.33',
    px: '8px',
  },
  variants: {
    status: {
      neutral: {
        colorPalette: 'gray',
      },
      info: {
        colorPalette: 'blue',
      },
      success: {
        colorPalette: 'green',
      },
      error: {
        colorPalette: 'red',
      },
    },
    kind: {
      solid: {
        bg: 'colorPalette.500',
      },
      outline: {
        borderWidth: '2px',
        borderColor: 'colorPalette.400',
        color: 'colorPalette.500',
      },
    },
  },
  defaultVariants: {
    status: 'info',
    kind: 'outline',
  },
});
