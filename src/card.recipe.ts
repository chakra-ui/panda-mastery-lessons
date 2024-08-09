import { defineRecipe } from '@pandacss/dev';

export const cardRecipe = defineRecipe({
  className: 'card',
  base: {
    borderRadius: '12px',
    py: '24px',
    px: '20px',
  },
  variants: {
    kind: {
      outline: {
        borderWidth: '1px',
        borderColor: '#DBDBDB',
        bg: 'white',
      },
      elevated: {
        borderWidth: '1px',
        borderColor: '#F2F2F2',
        boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.13);',
        bg: 'white',
      },
      filled: {
        bg: '#F1F1F1',
      },
    },
  },
});
