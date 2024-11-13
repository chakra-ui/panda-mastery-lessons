import { css, cva } from '../styled-system/css';

const linkRecipe = cva({
  base: {
    bg: 'blue',
    border: '1px solid black',
  },
  variants: {
    size: {
      small: { fontSize: '14px' },
    },
  },
});

const navLinkRecipe = cva({
  base: {
    bg: 'green',
    border: '1px solid gray',
    borderRadius: '4px',
  },
  variants: {
    size: {
      small: { fontSize: '12px' },
      lg: { fontSize: '16px' },
    },
  },
});

const linkStyles = linkRecipe.raw({ size: 'small' });
const navLinkStyles = navLinkRecipe.raw({ size: 'lg' });

const className = css(linkStyles, navLinkStyles);

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
