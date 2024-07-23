import { cva } from '../styled-system/css';
import { styled } from '../styled-system/jsx';

const statusLabelRecipe = cva({
  base: {
    marginLeft: 'lg',
    whiteSpace: 'nowrap',
    maxWidth: '20rem',
    fontSize: 'sm',
    transition: `opacity 200ms ease-out 0s,
  clip 200ms ease-out 0s, min-width 200ms ease-out 0s,
  max-width 200ms ease-out 0s, padding 200ms ease-out 0s`,
    '--gradient-end': 'colors.accentBg',
    backgroundImage: `linear-gradient(90deg, var(--gradient-end), #fffd80)`,
  },

  variants: {
    isMinimized: {
      true: {
        opacity: 0,
        padding: 'none',
        margin: 'none',
        maxWidth: 0,
        minWidth: 0,
        border: 0,
      },
    },
    isPrompt: {
      true: {
        color: 'accentText',
        textTransform: 'none',
        borderRadius: 'md',
      },
      false: {
        color: 'mutedText',
        textTransform: 'uppercase',
      },
    },
  },
});

export const StyledStatusLabel = styled('div', statusLabelRecipe);
