import { css } from '../styled-system/css';
import { center, hstack, stack, vstack } from '../styled-system/patterns';

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
        className={vstack({
          gap: '8',
        })}
      >
        <button
          className={css({
            px: '7',
            py: '4',
            fontWeight: 'semibold',
            borderRadius: 'xl',
            textStyle: 'body.large',
          })}
        >
          Button
        </button>
        <div
          className={stack({
            p: '10',
            borderRadius: '2xl',
            gap: '6',
            width: '420px',
          })}
        >
          <div
            className={css({
              textStyle: 'body.large',
              fontWeight: 'medium',
            })}
          >
            Select from available days
          </div>
          <div
            className={hstack({
              gap: '6',
            })}
          >
            <div
              className={css({
                px: '8',
                py: '6',
                borderRadius: '2xl',
                textStyle: 'body.large',
                flex: '1',
                textAlign: 'center',
                fontWeight: 'medium',
              })}
            >
              Mon
            </div>
            <div
              className={css({
                px: '8',
                py: '6',
                borderRadius: '2xl',
                color: 'gray.400',
                flex: '1',
                textAlign: 'center',
                textStyle: 'body.large',
                fontWeight: 'medium',
              })}
            >
              Tue
            </div>
          </div>
          <div
            className={hstack({
              gap: '6',
            })}
          >
            <div
              className={css({
                px: '8',
                py: '6',
                borderRadius: '2xl',
                textStyle: 'body.large',
                flex: '1',
                textAlign: 'center',
                fontWeight: 'medium',
              })}
            >
              Wed
            </div>
            <div
              className={css({
                px: '8',
                py: '6',
                borderRadius: '2xl',
                flex: '1',
                textAlign: 'center',
                textStyle: 'body.large',
                fontWeight: 'medium',
              })}
            >
              Thur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
