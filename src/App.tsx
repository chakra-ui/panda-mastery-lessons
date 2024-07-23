import { cva } from '../styled-system/css';
import { styled } from '../styled-system/jsx';

const buttonRecipe = cva({
  base: {
    borderRadius: '3px',
    border: '2px solid #BF4F74',
    margin: '0 1em',
    padding: '0.25em 1em',
  },
  variants: {
    kind: {
      primary: {
        background: '#BF4F74',
        color: 'white',
      },
      secondary: {
        background: 'transparent',
        color: '#BF4F74',
      },
    },
  },
  defaultVariants: {
    kind: 'secondary',
  },
});

export const Button = styled('button', buttonRecipe);
