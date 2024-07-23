import { css } from '../styled-system/css';
import { center, circle, hstack, stack } from '../styled-system/patterns';

function App() {
  return (
    <div
      className={center({
        bg: '#E5E5E5',
        minH: '100dvh',
        py: '80px',
        px: '6',
      })}
    >
      <div
        className={stack({
          gap: '5',
          p: '8',
          bg: 'gray.900',
          borderRadius: 'lg',
          w: '587px',
        })}
      >
        <h2
          className={css({
            fontSize: '3xl',
            color: 'white',
          })}
        >
          Create new components
        </h2>
        <div
          className={hstack({ gap: '4', fontSize: 'lg', fontWeight: 'medium' })}
        >
          <div
            className={css({
              borderRadius: 'lg',
              px: '2',
              py: '1',
              borderColor: 'gray.500/40',
              borderWidth: '1px',
              color: 'gray.300',
            })}
          >
            #LI-45
          </div>
          <div
            className={css({
              borderRadius: 'lg',
              px: '2',
              py: '1',
              bg: 'bg.faded-accent',
              color: 'cobalt.200',
            })}
          >
            #LI-90
          </div>
        </div>
        <div className={hstack({ gap: 3 })}>
          <img
            src='https://images.unsplash.com/photo-1611432579699-484f7990b127?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D'
            alt='Cassie'
            className={circle({
              size: '54px',
              objectFit: 'cover',
            })}
          />
          <img
            src='https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Kris'
            className={circle({
              size: '54px',
              objectFit: 'cover',
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
