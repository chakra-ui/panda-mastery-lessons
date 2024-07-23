import { sva } from '../styled-system/css';
import { stack, hstack } from '../styled-system/patterns';

const alertRecipe = sva({
  slots: ['root', 'icon', 'title', 'description'],
  base: {
    root: {
      px: '16px',
      py: '12px',
    },
    icon: {
      width: '24px',
      height: '24px',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    description: {
      fontSize: '16px',
    },
  },
  variants: {
    status: {
      info: {
        root: {
          colorPalette: 'blue',
        },
      },
      error: {
        root: {
          colorPalette: 'red',
        },
      },
      warning: {
        root: {
          colorPalette: 'orange',
        },
      },
      success: {
        root: {
          colorPalette: 'green',
        },
      },
    },
    kind: {
      subtle: {
        root: {
          bg: 'colorPalette.100',
        },
        icon: {
          color: 'colorPalette.600',
        },
      },
      solid: {
        root: {
          bg: 'colorPalette.600',
          color: 'white',
        },
      },
    },
  },
  defaultVariants: {
    status: 'info',
    kind: 'subtle',
  },
});

function InfoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z' />
    </svg>
  );
}

function WarningIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <path d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z' />
    </svg>
  );
}

function SuccessIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <path d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z' />
    </svg>
  );
}

function App() {
  const info = alertRecipe();
  const warning = alertRecipe({ status: 'warning' });
  const success = alertRecipe({ status: 'success' });

  return (
    <div
      className={stack({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <div className={info.root}>
        <div className={hstack({ gap: '12px' })}>
          <InfoIcon className={info.icon} />
          <div className={stack({ gap: '0' })}>
            <div className={info.title}>Title</div>
            <div className={info.description}>This is a description</div>
          </div>
        </div>
      </div>

      <div className={warning.root}>
        <div className={hstack({ gap: '12px' })}>
          <WarningIcon className={warning.icon} />
          <div className={stack({ gap: '0' })}>
            <div className={warning.title}>Title</div>
            <div className={warning.description}>This is a description</div>
          </div>
        </div>
      </div>

      <div className={success.root}>
        <div className={hstack({ gap: '12px' })}>
          <SuccessIcon className={success.icon} />
          <div className={stack({ gap: '0' })}>
            <div className={success.title}>Title</div>
            <div className={success.description}>This is a description</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
