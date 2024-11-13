import { css } from '../styled-system/css';

const style1 = css.raw({
  bg: 'red',
  color: 'white',
});

const style2 = css.raw({
  bg: 'blue',
});

const className = css(style1, style2);

// => 'text_white bg_blue'

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
