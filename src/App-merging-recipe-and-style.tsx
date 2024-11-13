import { css, cva } from '../styled-system/css';

const buttonRecipe = cva({
  base: {
    bg: 'blue',
    border: '1px solid black',
  },
  variants: {
    size: {
      small: { fontSize: '12px' },
    },
  },
});

const promoStyles = css.raw({
  bg: 'red',
  color: 'white',
});

const buttonStyles = buttonRecipe.raw({ size: 'small' });

const className = css(buttonStyles, promoStyles);

function App() {
  return (
    <div
      className={css({
        minHeight: '100dvh',
        padding: '48px',
      })}
    >
      <div className={className} />
    </div>
  );
}

export default App;
