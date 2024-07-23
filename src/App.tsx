import { css, cva } from '../styled-system/css';
import { hstack } from '../styled-system/patterns';

const buttonRecipe = cva({
  base: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'semibold',
    borderRadius: '6px',
    height: '48px',
    px: '24px',
  },
  variants: {
    kind: {
      primary: {
        bg: '#3182CE',
      },
      secondary: {
        bg: '#38A169',
      },
      neutral: {
        bg: '#EDF2F7',
        color: 'black',
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
      <div className={hstack({ gap: '32px', maxW: '400px', mx: 'auto' })}>
        <button className={buttonRecipe({ kind: 'primary' })}>Button</button>
        <button className={buttonRecipe({ kind: 'secondary' })}>Button</button>
        <button className={buttonRecipe({ kind: 'neutral' })}>Button</button>
      </div>
    </div>
  );
}

export default App;
