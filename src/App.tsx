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
          borderRadius: '3xl',
          borderColor: 'gray.400',
          border: '1px solid',
          px: '10',
          py: '14',
          gap: '10',
        })}
      >
        <div
          className={stack({
            gap: '4',
          })}
        >
          <div
            className={css({
              textStyle: 'display.medium',
              fontWeight: 'semibold',
            })}
          >
            What’s happening
          </div>
          <div
            className={css({
              textStyle: 'body.large',
              color: 'gray.500',
            })}
          >
            Catch up on the latest news about Panda CSS
          </div>
        </div>
        <div className={stack()}>
          <div
            className={css({
              color: 'gray.500',
              textStyle: 'body.medium',
            })}
          >
            Open Source - Trending
          </div>
          <div
            className={css({
              textStyle: 'body.large',
              fontWeight: 'semibold',
            })}
          >
            Park UI has been upgraded
          </div>
          <div
            className={css({
              color: 'gray.500',
              textStyle: 'body.medium',
            })}
          >
            12.3k views
          </div>
        </div>
        <div className={stack()}>
          <div
            className={css({
              color: 'gray.500',
              textStyle: 'body.medium',
            })}
          >
            Funding - Trending
          </div>
          <div
            className={css({
              textStyle: 'body.large',
              fontWeight: 'semibold',
            })}
          >
            Chakra just raised 1.3M
          </div>
          <div
            className={css({
              color: 'gray.500',
              textStyle: 'body.medium',
            })}
          >
            452.3k views
          </div>
        </div>
        <a
          href='#'
          className={css({
            color: 'blue.500',
            textStyle: 'body.medium',
          })}
        >
          Show more
        </a>
      </div>
    </div>
  );
}

export default App;
