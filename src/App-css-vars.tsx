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
        '--color': '#718096',
      },
      info: {
        '--color': '#3182CE',
      },
      success: {
        '--color': '#38A169',
      },
      error: {
        '--color': '#E53E3E',
      },
    },
    kind: {
      solid: {
        bg: 'var(--color)',
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'var(--color)',
        color: 'var(--color)',
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
        <div className={badgeRecipe({ status: 'neutral', kind: 'solid' })}>
          Badge
        </div>
        <div className={badgeRecipe({ status: 'info', kind: 'solid' })}>
          Badge
        </div>
        <div className={badgeRecipe({ status: 'success', kind: 'outline' })}>
          Badge
        </div>
        <div className={badgeRecipe({ status: 'error', kind: 'outline' })}>
          Badge
        </div>
      </div>
    </div>
  );
}

export default App;
