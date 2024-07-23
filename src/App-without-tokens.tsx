import { css } from '../styled-system/css';
import { center, stack } from '../styled-system/patterns';

function App() {
  return (
    <div
      className={center({
        minH: '100dvh',
        py: '80px',
        px: '6',
      })}
    >
      <div
        className={stack({
          bg: 'gray.100',
          borderRadius: '24px',
          p: '8',
          gap: '8',
          maxW: '528px',
          fontSize: '3xl',
        })}
      >
        <img
          src='https://images.unsplash.com/photo-1715558666340-f47008461cf3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D'
          alt='card'
          className={css({
            maxW: '462px',
            objectFit: 'cover',
            borderRadius: '16px',
          })}
        />
        <h2
          className={css({
            color: 'gray.900',
            fontWeight: 'semibold',
          })}
        >
          Heading
        </h2>
        <p
          className={css({
            color: 'gray.700',
          })}
        >
          This is a short description of the card’s content
        </p>
        <button
          className={css({
            bg: '#1020B9',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'medium',
            px: '18px',
            py: '28px',
          })}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default App;
