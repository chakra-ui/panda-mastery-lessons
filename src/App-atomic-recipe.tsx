import { css, cva } from '../styled-system/css';
import { hstack } from '../styled-system/patterns';
import { styled } from '../styled-system/jsx';

export const badgeRecipe = cva({
  base: {
    color: 'white',
    fontSize: 'xl',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'sm',
    lineHeight: '1.33',
    px: '2',
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
        borderWidth: '0.5',
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

const Badge = styled('div', badgeRecipe);

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        pt: '24',
        px: '6',
      })}
    >
      <div className={hstack({ gap: '8', maxW: '490px', mx: 'auto' })}>
        <Badge bg='orange.500' status='neutral' kind='solid'>
          Badge
        </Badge>
        <Badge status='info' kind='solid'>
          Badge
        </Badge>
        <Badge status='success'>Badge</Badge>
        <Badge status='error'>Badge</Badge>
      </div>
    </div>
  );
}

export default App;
