import { center } from '../styled-system/patterns';
import { ColorModeToggle } from './color-mode-toggle';

function App() {
  return (
    <div
      className={center({
        minH: '100dvh',
        bg: '#F8FAFC',
        color: 'black',
      })}
    >
      <ColorModeToggle />
    </div>
  );
}

export default App;
