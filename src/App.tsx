import { cva } from '../styled-system/css';
import { styled } from '../styled-system/jsx';

const toolbarRecipe = cva({
  base: {
    position: 'absolute',
    top: 'sm',
    right: 'twoXS',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'borderBold',
  },
});

export const StyledHeaderToolbar = styled('div', toolbarRecipe);
