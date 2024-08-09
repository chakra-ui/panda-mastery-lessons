import { css } from '../styled-system/css';
import { circle, hstack, stack } from '../styled-system/patterns';

interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  rating: number;
  bio: string;
  price: number;
  status: string;
}

export function ProfileCard(props: ProfileCardProps) {
  const { image, name, title, rating, bio, price, status } = props;
  return (
    <div
      className={stack({
        borderRadius: '8px',
        bg: { base: 'white', _dark: '#272727' },
        color: { base: '#262626', _dark: '#FFFFFF' },
        p: '24px',
        gap: '16px',
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <div className={hstack({ gap: '16px' })}>
          <img
            src={image}
            alt={name}
            className={circle({
              size: '40px',
              objectFit: 'cover',
            })}
          />
          <div>
            <div className={css({ fontWeight: 'semibold' })}>{name}</div>
            <div className={css({ fontWeight: 'medium', fontSize: '14px' })}>
              {title}
            </div>
          </div>
        </div>
        <div className={hstack({ gap: '4px' })}>
          <div className={css({ fontWeight: 'semibold' })}>{rating}</div>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.00004 1.33334L10.06 5.50668L14.6667 6.18001L11.3334 9.42668L12.12 14.0133L8.00004 11.8467L3.88004 14.0133L4.66671 9.42668L1.33337 6.18001L5.94004 5.50668L8.00004 1.33334Z'
              stroke='#262626'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>

      <div className={css({ color: { base: '#525252', _dark: '#F5F5F5' } })}>
        {bio}
      </div>

      <div className={hstack({ justifyContent: 'space-between' })}>
        <div
          className={hstack({
            fontWeight: 'semibold',
            fontSize: '14px',
            gap: '24px',
          })}
        >
          <div>${price}/hr</div>
          <div>{status}</div>
        </div>

        <div className={hstack({ gap: '12px' })}>
          <button
            className={css({
              borderColor: { base: '#EDEDED', _dark: '#424242' },
              borderWidth: '1px',
              borderRadius: '4px',
              p: '10px',
            })}
          >
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13 9C13 9.35362 12.8595 9.69276 12.6095 9.94281C12.3594 10.1929 12.0203 10.3333 11.6667 10.3333H3.66667L1 13V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H11.6667C12.0203 1 12.3594 1.14048 12.6095 1.39052C12.8595 1.64057 13 1.97971 13 2.33333V9Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button
            className={css({
              borderColor: { base: '#EDEDED', _dark: '#424242' },
              borderWidth: '1px',
              borderRadius: '4px',
              p: '10px',
            })}
          >
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.0833 8.16667C11.9525 7.315 12.8333 6.29417 12.8333 4.95833C12.8333 4.10743 12.4953 3.29138 11.8936 2.6897C11.2919 2.08802 10.4759 1.75 9.62496 1.75C8.59829 1.75 7.87496 2.04167 6.99996 2.91667C6.12496 2.04167 5.40163 1.75 4.37496 1.75C3.52406 1.75 2.708 2.08802 2.10633 2.6897C1.50465 3.29138 1.16663 4.10743 1.16663 4.95833C1.16663 6.3 2.04163 7.32083 2.91663 8.16667L6.99996 12.25L11.0833 8.16667Z'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
