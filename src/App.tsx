import { css, cva } from '../styled-system/css';
import { hstack } from '../styled-system/patterns';

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
        bg: '#718096',
      },
      info: {
        bg: '#3182CE',
      },
      success: {
        bg: '#38A169',
      },
      error: {
        bg: '#E53E3E',
      },
    },
    kind: {
      solid: {
        bg: '#718096',
      },
    },
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
        <div className={badgeRecipe({ status: 'neutral' })}>Badge</div>
        <div className={badgeRecipe({ status: 'info' })}>Badge</div>
        <div className={badgeRecipe({ status: 'success' })}>Badge</div>
        <div className={badgeRecipe({ status: 'error' })}>Badge</div>
      </div>
    </div>
  );
}

export default App;
