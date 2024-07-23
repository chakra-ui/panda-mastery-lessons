import { css } from '../styled-system/css';
import { vstack, hstack, circle } from '../styled-system/patterns';

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        bg: 'black',
        pt: '180px',
        px: '6',
        color: 'white',
      })}
    >
      <div
        className={vstack({
          maxW: '640px',
          mx: 'auto',
          gap: '14',
        })}
      >
        <div className={vstack({ gap: '6' })}>
          <h1
            className={css({
              fontSize: '6xl',
              fontWeight: '500px',
              lineHeight: '1.1',
              letterSpacing: '-1.2px',
              textAlign: 'center',
            })}
          >
            Own your audience.
            <br />
            <span className={css({ color: 'rose.500' })}>
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
            <p className={css({ fontSize: '2xl' })}>
              Turn your audience into email and text message subscribers
            </p>
          </div>
        </div>
        <div className={vstack({ gap: '8' })}>
          <div
            className={hstack({
              gap: '6',
              fontSize: 'lg',
              fontWeight: 'medium',
            })}
          >
            <a
              href='#'
              className={css({
                bg: 'white',
                color: 'black',
                px: '10',
                py: '4',
                borderRadius: 'lg',
              })}
            >
              Get started Now
            </a>
            <a
              href='#'
              className={css({
                bg: '#1D1D1D',
                color: 'white',
                px: '10',
                py: '4',
                borderRadius: 'lg',
              })}
            >
              View a demo
            </a>
          </div>
          <div className={hstack({ gap: '3' })}>
            <div className={circle({ size: '3', bg: '#19BF57' })} />
            <span className={css({ color: 'white' })}>
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
