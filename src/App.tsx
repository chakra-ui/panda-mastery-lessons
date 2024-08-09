import { stack } from '../styled-system/patterns';

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
