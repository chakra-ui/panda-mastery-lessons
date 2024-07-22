import { css } from '../styled-system/css';
import { scrollable } from '../styled-system/patterns';

const itemClassName = css({
  bg: 'white',
  borderWidth: '1px',
  borderColor: 'lightgray',
  padding: '48px',
  borderRadius: '10px',
});

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        bg: '#F8FAFC',
        pt: '96px',
      })}
    >
      <div
        className={scrollable({
          display: 'flex',
          flexDir: 'column',
          gap: '24px',
          maxH: '240px',
          px: '12px',
          size: '8',
          thumbColor: 'green.500',
          trackColor: 'pink.700',
        })}
      >
        <div className={itemClassName}>Box 1</div>
        <div className={itemClassName}>Box 2</div>
        <div className={itemClassName}>Box 3</div>
        <div className={itemClassName}>Box 4</div>
      </div>
    </div>
  );
}

export default App;
