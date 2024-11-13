import { css } from '../styled-system/css';

// css variables basics
const buttonStyles = css({
  '--button-color': 'colors.red.400',
  background: 'var(--button-color)',
  border: '2px solid var(--button-color)',
});

// reference colors and spacing
const buttonStyles2 = css({
  '--button-color': 'colors.red.400',
  '--button-padding': 'spacing.4',
  background: 'var(--button-color)',
  border: '2px solid var(--button-color)',
  padding: 'var(--button-padding)',
});

// reference colors with opacity modifier
const bgStyle = css({
  '--background-color': '{colors.red.200/40}',
  bg: 'red.200/40',
});

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        bg: '#F8FAFC',
        pt: '48px',
        px: '24px',
      })}
    >
      <div className={bgStyle}>Hello from App</div>
    </div>
  );
}

export default App;
