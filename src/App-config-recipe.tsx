import { css } from '../styled-system/css';
import { styled } from '../styled-system/jsx';
import { hstack } from '../styled-system/patterns';
import { badge } from '../styled-system/recipes';

const Badge = styled('div', badge);

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
        <Badge bg='purple.500' status='neutral' kind='solid'>
          Badge
        </Badge>
        <Badge status='info' kind='solid'>
          Badge
        </Badge>
        <Badge status='success'>Badge</Badge>
        <Badge status='error'>Badge</Badge>
      </div>
    </div>
  );
}

export default App;
