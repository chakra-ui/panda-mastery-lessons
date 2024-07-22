import { css } from '../styled-system/css';
import { stack, autoflex } from '../styled-system/patterns';

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        bg: '#F8FAFC',
        pt: '96px',
        px: { base: '24px', lg: '48px' },
      })}
    >
      <div className={autoflex()}>
        <div className={stack({ maxW: { lg: '600px' }, mx: 'auto' })}>
          <h1
            className={css({
              fontSize: '36px',
              fontWeight: '800',
            })}
          >
            Simplified Payments and Invoice Tracking Management
          </h1>
          <p
            className={css({
              fontSize: '21px',
            })}
          >
            Centralize bill payments and invoice management to help you gain
            better control over your finances, ensure payments are made on time,
            and have a clear overview of your financial obligations.
          </p>
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D'
            alt='simplified payments and invoices'
            className={css({
              width: 'full',
              height: 'full',
              borderRadius: '12px',
              objectFit: 'cover',
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
