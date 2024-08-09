import { stack } from '../styled-system/patterns';

// Icon needed for exercise
const CheckIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.6667 3.5L5.25004 9.91667L2.33337 7'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

// Create slots recipe here

function App() {
  return (
    <div
      className={stack({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    ></div>
  );
}

export default App;
