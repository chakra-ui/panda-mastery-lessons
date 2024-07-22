import { css, cx } from '../styled-system/css';
import { cq, grid, gridItem, stack } from '../styled-system/patterns';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div
      className={stack({
        gap: '24px',
        direction: { base: 'row', '@/md': 'column' },
      })}
    >
      {icon}
      <div className={stack()}>
        <div
          className={css({
            fontSize: '20px',
            fontWeight: '600',
          })}
        >
          {title}
        </div>
        <div className={css({ fontSize: '18px', color: '#2D3748' })}>
          {description}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        bg: '#F8FAFC',
        pt: '96px',
        px: '24px',
      })}
    >
      <div
        className={grid({
          maxW: '1167px',
          mx: 'auto',
          columns: { sm: 8 },
        })}
      >
        <div className={cx(gridItem({ colSpan: 4 }), cq())}>
          <div className={stack({ gap: '72px', maxW: '484px' })}>
            <div className={stack({ gap: '24px' })}>
              <h1
                className={css({
                  fontSize: '64px',
                  fontWeight: '700',
                  lineHeight: '1.22',
                  letterSpacing: '-1.28px',
                })}
              >
                Manage <br />
                Everything
              </h1>
              <p className={css({ fontSize: '24px', color: '#4A5568' })}>
                One mission control for your business, wherever you go.
              </p>
            </div>
            <div
              className={grid({
                columns: { base: 1, '@/md': 2 },
                columnGap: '72px',
                rowGap: '56px',
              })}
            >
              <Feature
                title='Orders and fulfilment'
                description='Fufill orders quickly and accurately'
                icon={
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.9344 6.66667H31.2011L23.6011 0.266667C23.3344 0.133333 22.9344 0 22.6677 0H18.4011L20.9344 6.66667Z'
                      fill='#F43F5E'
                    />
                    <path
                      d='M21.3333 9.33337V18.6667H10.6667V9.33337H0V30.6667C0 31.4667 0.533333 32 1.33333 32H30.6667C31.4667 32 32 31.4667 32 30.6667V9.33337H21.3333Z'
                      fill='#F43F5E'
                    />
                    <path
                      d='M11.0662 6.66667L13.5995 0H9.33283C9.06617 0 8.66617 0.133333 8.53283 0.266667L0.7995 6.66667H11.0662Z'
                      fill='#F43F5E'
                    />
                  </svg>
                }
              />

              <Feature
                title='Shopify Payments'
                description='Accept any payment, and get paid quickly'
                icon={
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M29.3333 0H8V5.33333H29.3333V0Z' fill='#F43F5E' />
                    <path
                      d='M30.6667 7.99996H4C3.26533 7.99996 2.66667 7.40129 2.66667 6.66663C2.66667 5.93196 3.26533 5.33329 4 5.33329H5.33333V2.66663H4C1.79067 2.66663 0 4.45729 0 6.66663V26.6666C0 29.612 2.388 32 5.33333 32H30.6667C31.4027 32 32 31.4026 32 30.6666V9.33329C32 8.59729 31.4027 7.99996 30.6667 7.99996ZM24 22.6666C22.5267 22.6666 21.3333 21.4733 21.3333 20C21.3333 18.5266 22.5267 17.3333 24 17.3333C25.4733 17.3333 26.6667 18.5266 26.6667 20C26.6667 21.4733 25.4733 22.6666 24 22.6666Z'
                      fill='#F43F5E'
                    />
                  </svg>
                }
              />

              <Feature
                title='Insights'
                description='Level up your business with built-in tools'
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                  >
                    <path
                      d='M16 0C7.168 0 0 7.168 0 16C0 24.832 7.168 32 16 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 16 0ZM17.6 24H14.4V14.4H17.6V24ZM17.6 11.2H14.4V8H17.6V11.2Z'
                      fill='#F43F5E'
                    />
                  </svg>
                }
              />

              <Feature
                title='Dashboard'
                description='Manage your business from anywhere'
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                  >
                    <path
                      d='M32 7.27273V1.45455C32 1.06878 31.8468 0.698807 31.574 0.426026C31.3012 0.153246 30.9312 0 30.5455 0H1.45455C1.06878 0 0.698807 0.153246 0.426026 0.426026C0.153246 0.698807 0 1.06878 0 1.45455V7.27273H32Z'
                      fill='#F43F5E'
                    />
                    <path
                      d='M0 10.1818V30.5454C0 30.9312 0.153246 31.3011 0.426026 31.5739C0.698807 31.8467 1.06878 31.9999 1.45455 31.9999H8.72727V10.1818H0Z'
                      fill='#F43F5E'
                    />
                    <path
                      d='M11.6364 31.9999H30.5454C30.9312 31.9999 31.3012 31.8467 31.574 31.5739C31.8467 31.3011 32 30.9312 32 30.5454V10.1818H11.6364V31.9999Z'
                      fill='#F43F5E'
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
        <div
          className={gridItem({
            colSpan: 4,
            hideBelow: 'sm',
          })}
        >
          <img
            src='https://images.unsplash.com/photo-1573878737226-4f9572c22b69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='manage everything'
            className={css({
              width: 'full',
              height: 'full',
              borderRadius: '16px',
              maxH: '684px',
              objectFit: 'cover',
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
