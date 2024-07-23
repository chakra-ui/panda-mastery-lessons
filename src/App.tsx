import { css, cva } from '../styled-system/css';
import { hstack } from '../styled-system/patterns';
import { badge } from '../styled-system/recipes';

const badgeRecipe = cva({
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

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <div className={hstack({ gap: '32px', maxW: '490px', mx: 'auto' })}>
        <div className={badgeRecipe({ status: 'neutral', kind: 'solid' })}>
          Badge
        </div>
        <div className={badgeRecipe({ status: 'info', kind: 'solid' })}>
          Badge
        </div>
        <div className={badgeRecipe({ status: 'success' })}>Badge</div>
        <div className={badgeRecipe({ status: 'error' })}>Badge</div>
      </div>

      <div className={hstack({ gap: '32px', maxW: '490px', mx: 'auto' })}>
        <div className={badge({ status: 'neutral', kind: 'solid' })}>Badge</div>
        <div className={badge({ status: 'info', kind: 'solid' })}>Badge</div>
        <div className={badge({ status: 'success' })}>Badge</div>
        <div className={badge({ status: 'error' })}>Badge</div>
      </div>
    </div>
  );
}

export default App;
