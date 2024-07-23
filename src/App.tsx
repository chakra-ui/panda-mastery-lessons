import { hstack, stack } from '../styled-system/patterns';
import { alert } from '../styled-system/recipes';

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

function App() {
  const warning = alert({ status: 'warning', kind: 'subtle' });

  return (
    <div
      className={stack({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <div className={warning.root}>
        <div className={hstack({ gap: '12px' })}>
          <InfoIcon className={warning.icon} />
          <div className={stack({ gap: '0' })}>
            <div className={warning.title}>Title</div>
            <div className={warning.description}>This is a description</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
