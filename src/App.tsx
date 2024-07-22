import { css } from '../styled-system/css';

function App() {
  return (
    <div
      className={css({
        minHeight: '100dvh',
        backgroundColor: '#F8FAFC',
        paddingTop: '48px',
      })}
    >
      <div className={css({ maxWidth: '480px', marginInline: 'auto' })}>
        <svg
          className={css({ marginInline: 'auto' })}
          width='120'
          height='36'
          viewBox='0 0 120 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23 6H7C6.447 6 6 6.447 6 7V23H3C1.346 23 0 24.346 0 26V30H14V26.417C14 25.609 14.645 25 15.5 25C16.223 25 17 25.47 17 26.5C17 28.43 18.57 30 20.5 30C22.43 30 24 28.43 24 26.5V7C24 6.447 23.553 6 23 6ZM12 26.417V28H2V26C2 25.448 2.448 25 3 25H12.304C12.108 25.43 12 25.909 12 26.417ZM20 19H10V17H20V19ZM20 13H10V11H20V13Z'
            fill='black'
          />
          <path
            d='M36.4347 25H45.9517V22.7912H39.0696V18.821H45.4048V16.6122H39.0696V12.6634H45.8949V10.4545H36.4347V25ZM50.4405 18.608C50.4405 17.0312 51.3922 16.1222 52.7487 16.1222C54.0768 16.1222 54.8723 16.9957 54.8723 18.4517V25H57.4433V18.054C57.4504 15.4403 55.9589 13.9489 53.7075 13.9489C52.074 13.9489 50.9518 14.7301 50.4547 15.9446H50.3268V14.0909H47.8695V25H50.4405V18.608ZM68.8107 14.0909H66.0763L63.5621 22.1946H63.4484L60.9413 14.0909H58.1999L62.0848 25H64.9257L68.8107 14.0909ZM74.4482 25.2131C76.9908 25.2131 78.738 23.9702 79.1925 22.0739L76.792 21.804C76.444 22.7273 75.5917 23.2102 74.4837 23.2102C72.8218 23.2102 71.721 22.1165 71.6996 20.2486H79.2991V19.4602C79.2991 15.6321 76.9979 13.9489 74.3133 13.9489C71.1883 13.9489 69.1499 16.2429 69.1499 19.6094C69.1499 23.0327 71.1599 25.2131 74.4482 25.2131ZM71.7067 18.5156C71.7849 17.1236 72.8147 15.9517 74.3488 15.9517C75.8261 15.9517 76.8204 17.0312 76.8346 18.5156H71.7067ZM83.4452 10.4545H80.8741V25H83.4452V10.4545ZM90.2475 25.2131C93.4435 25.2131 95.4748 22.9616 95.4748 19.5881C95.4748 16.2074 93.4435 13.9489 90.2475 13.9489C87.0515 13.9489 85.0202 16.2074 85.0202 19.5881C85.0202 22.9616 87.0515 25.2131 90.2475 25.2131ZM90.2617 23.1534C88.4933 23.1534 87.6268 21.5767 87.6268 19.581C87.6268 17.5852 88.4933 15.9872 90.2617 15.9872C92.0018 15.9872 92.8683 17.5852 92.8683 19.581C92.8683 21.5767 92.0018 23.1534 90.2617 23.1534ZM97.057 29.0909H99.628V23.2812H99.7345C100.139 24.0767 100.985 25.1918 102.86 25.1918C105.431 25.1918 107.355 23.1534 107.355 19.5597C107.355 15.9233 105.374 13.9489 102.852 13.9489C100.928 13.9489 100.125 15.1065 99.7345 15.8949H99.5854V14.0909H97.057V29.0909ZM99.5783 19.5455C99.5783 17.429 100.487 16.0582 102.142 16.0582C103.854 16.0582 104.735 17.5142 104.735 19.5455C104.735 21.5909 103.84 23.0824 102.142 23.0824C100.502 23.0824 99.5783 21.6619 99.5783 19.5455ZM113.787 25.2131C116.329 25.2131 118.076 23.9702 118.531 22.0739L116.13 21.804C115.782 22.7273 114.93 23.2102 113.822 23.2102C112.16 23.2102 111.059 22.1165 111.038 20.2486H118.637V19.4602C118.637 15.6321 116.336 13.9489 113.652 13.9489C110.527 13.9489 108.488 16.2429 108.488 19.6094C108.488 23.0327 110.498 25.2131 113.787 25.2131ZM111.045 18.5156C111.123 17.1236 112.153 15.9517 113.687 15.9517C115.164 15.9517 116.159 17.0312 116.173 18.5156H111.045Z'
            fill='#111111'
          />
        </svg>

        <div
          className={css({
            textAlign: 'center',
            marginTop: '100px',
          })}
        >
          <h1
            className={css({
              fontSize: '30px',
              fontWeight: '800',
              marginBottom: '12px',
            })}
          >
            Sign in to your account
          </h1>
          <div>
            <span className={css({ color: '#636363', marginInlineEnd: '8px' })}>
              Don't have an account?
            </span>
            <a href='#'>Sign up</a>
          </div>
        </div>

        <form
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '40px',
            backgroundColor: 'white',
            borderWidth: '1px',
            borderColor: '#EFEFEF',
            borderRadius: '8px',
            padding: '32px',
          })}
        >
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            })}
          >
            <label htmlFor='email' className={css({ fontWeight: '500' })}>
              Email
            </label>
            <input
              id='email'
              type='email'
              className={css({
                height: '48px',
                borderWidth: '1px',
                borderColor: '#EAEAEA',
                borderRadius: '4px',
              })}
            />
          </div>

          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            })}
          >
            <label htmlFor='password' className={css({ fontWeight: '500' })}>
              Password
            </label>
            <input
              id='password'
              type='password'
              className={css({
                height: '48px',
                borderWidth: '1px',
                borderColor: '#EAEAEA',
                borderRadius: '4px',
              })}
            />
          </div>

          <button
            type='submit'
            className={css({
              backgroundColor: 'black',
              color: 'white',
              fontWeight: '600',
              minHeight: '48px',
              borderRadius: '4px',
            })}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
