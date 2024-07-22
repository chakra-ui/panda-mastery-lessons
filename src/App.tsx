import { css } from '../styled-system/css';
import { vstack, hstack, circle } from '../styled-system/patterns';

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        bg: '#000',
        pt: '180px',
        px: '24px',
        color: '#FFF',
      })}
    >
      <div
        className={vstack({
          maxW: '640px',
          mx: 'auto',
          gap: '56px',
        })}
      >
        <div className={vstack({ gap: '24px' })}>
          <h1
            className={css({
              fontSize: '60px',
              fontWeight: '500px',
              lineHeight: '1.1',
              letterSpacing: '-1.2px',
              textAlign: 'center',
            })}
          >
            Own your audience.
            <br />
            <span className={css({ color: '#F43F5E' })}>
              So you don't lose them.
            </span>
          </h1>
          <div
            className={css({
              maxW: '420px',
              mx: 'auto',
              textAlign: 'center',
            })}
          >
            <p className={css({ fontSize: '24px' })}>
              Turn your audience into email and text message subscribers
            </p>
          </div>
        </div>
        <div className={vstack({ gap: '32px' })}>
          <div
            className={hstack({
              gap: '24px',
              fontSize: '18px',
              fontWeight: '500',
            })}
          >
            <a
              href='#'
              className={css({
                bg: '#FFF',
                color: '#000',
                px: '40px',
                py: '16px',
                borderRadius: '8px',
              })}
            >
              Get started Now
            </a>
            <a
              href='#'
              className={css({
                bg: '#1D1D1D',
                color: '#FFF',
                px: '40px',
                py: '16px',
                borderRadius: '8px',
              })}
            >
              View a demo
            </a>
          </div>
          <div className={hstack({ gap: '12px' })}>
            <div className={circle({ size: '12px', bg: '#19BF57' })} />
            <span className={css({ color: '#FFF' })}>
              1000+{' '}
              <span className={css({ color: '#A0AEC0' })}>
                creators have already started
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
