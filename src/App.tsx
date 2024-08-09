import { css } from '../styled-system/css';
import { flex, hstack, stack } from '../styled-system/patterns';

// Icons needed for this exercise
const SunIcon = () => (
  <svg
    width='68'
    height='68'
    viewBox='0 0 68 68'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M34 5.66669V11.3334'
      stroke='black'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M13.9683 13.9683L17.9633 17.9633'
      stroke='black'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M56.6667 34H62.3333'
      stroke='black'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M54.0317 13.9683L50.0367 17.9633'
      stroke='black'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M45.1832 35.8417C45.5319 33.7294 45.2752 31.5616 44.4428 29.5892C43.6104 27.6168 42.2364 25.9205 40.4799 24.6967C38.7233 23.4729 36.656 22.7716 34.5174 22.6741C32.3788 22.5766 30.2563 23.0868 28.3957 24.1457'
      stroke='black'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M36.8333 62.3333H19.8333C17.1529 62.3328 14.5277 61.5718 12.2625 60.1388C9.99725 58.7058 8.18507 56.6596 7.03638 54.2378C5.88769 51.816 5.44964 49.118 5.77309 46.4571C6.09654 43.7963 7.16823 41.2818 8.86369 39.2058C10.5591 37.1297 12.8088 35.5772 15.3513 34.7287C17.8939 33.8801 20.625 33.7702 23.2275 34.4119C25.83 35.0535 28.197 36.4204 30.0537 38.3536C31.9104 40.2868 33.1806 42.7071 33.7167 45.3333H36.8333C39.0877 45.3333 41.2497 46.2289 42.8437 47.8229C44.4378 49.417 45.3333 51.579 45.3333 53.8333C45.3333 56.0877 44.4378 58.2497 42.8437 59.8437C41.2497 61.4378 39.0877 62.3333 36.8333 62.3333Z'
      stroke='#6B7280'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

const PrecipitationIcon = () => (
  <svg
    width='14'
    height='15'
    viewBox='0 0 14 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_495_276)'>
      <path
        d='M9.33334 8.08331V12.75'
        stroke='#6B7280'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4.66666 8.08331V12.75'
        stroke='#6B7280'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M7 9.25V13.9167'
        stroke='#6B7280'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M11.6667 10.1717C12.2799 9.90309 12.7821 9.43174 13.0889 8.83673C13.3957 8.24172 13.4885 7.55927 13.3517 6.90394C13.2149 6.24861 12.8568 5.66029 12.3375 5.23773C11.8183 4.81518 11.1695 4.58412 10.5 4.58333H9.765C9.58009 3.8673 9.22766 3.20547 8.73676 2.65238C8.24586 2.09929 7.63055 1.67079 6.94153 1.40219C6.25251 1.13359 5.50953 1.03259 4.77381 1.1075C4.0381 1.18242 3.33072 1.43111 2.70999 1.83308C2.08925 2.23504 1.57294 2.77878 1.20359 3.41946C0.83425 4.06014 0.622458 4.77943 0.585673 5.51803C0.548887 6.25664 0.688162 6.99341 0.992018 7.66762C1.29587 8.34183 1.75561 8.93417 2.33333 9.39583'
        stroke='#6B7280'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_495_276'>
        <rect
          width='14'
          height='14'
          fill='white'
          transform='translate(0 0.5)'
        />
      </clipPath>
    </defs>
  </svg>
);

const WindIcon = () => (
  <svg
    width='14'
    height='15'
    viewBox='0 0 14 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M5.59416 3.17753C5.72967 3.04121 5.89676 2.94049 6.08058 2.88431C6.2644 2.82814 6.45926 2.81825 6.64782 2.85553C6.83638 2.8928 7.01281 2.97609 7.16143 3.09799C7.31005 3.21989 7.42624 3.37662 7.49969 3.55424C7.57314 3.73187 7.60156 3.92489 7.58243 4.11615C7.5633 4.30741 7.49721 4.49098 7.39004 4.65054C7.28287 4.8101 7.13793 4.94071 6.96812 5.03076C6.7983 5.12081 6.60887 5.1675 6.41666 5.1667H1.16666M7.34416 11.8225C7.47967 11.9588 7.64676 12.0596 7.83058 12.1157C8.0144 12.1719 8.20926 12.1818 8.39782 12.1445C8.58638 12.1073 8.76281 12.024 8.91143 11.9021C9.06005 11.7802 9.17624 11.6234 9.24969 11.4458C9.32314 11.2682 9.35156 11.0752 9.33243 10.8839C9.3133 10.6927 9.24721 10.5091 9.14004 10.3495C9.03287 10.19 8.88793 10.0593 8.71812 9.9693C8.5483 9.87925 8.35887 9.83256 8.16666 9.83336H1.16666M10.3425 5.0092C10.5122 4.83996 10.7209 4.71515 10.9503 4.64579C11.1797 4.57643 11.4226 4.56466 11.6576 4.61153C11.8926 4.6584 12.1125 4.76246 12.2977 4.9145C12.4829 5.06655 12.6278 5.2619 12.7196 5.48327C12.8113 5.70464 12.8471 5.94521 12.8238 6.18371C12.8004 6.4222 12.7187 6.65128 12.5858 6.85066C12.4528 7.05005 12.2728 7.21361 12.0616 7.32687C11.8505 7.44013 11.6146 7.4996 11.375 7.50003H1.16666'
      stroke='#6B7280'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

// Create card recipe here

// Card structure
function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <div className={hstack({ gap: '32px', maxW: '400px', mx: 'auto' })}>
        <div>
          <div className={stack({ gap: '12px' })}>
            <div>
              <div className={css({ fontWeight: '600' })}>United Kingdom</div>
              <div className={css({ color: '#6B7280' })}>Tue, 12:30 PM</div>
            </div>

            <div className={hstack({ gap: '46px' })}>
              <div className={flex()}>
                <span className={css({ fontSize: '64px', lineHeight: '1em' })}>
                  40
                </span>
                <span className={css({ fontSize: '18px', fontWeight: '500' })}>
                  <sup>o</sup>C
                </span>
              </div>
              <SunIcon />
            </div>

            <div className={hstack({ gap: '24px' })}>
              <div className={hstack({ gap: '8px' })}>
                <PrecipitationIcon />
                <div className={css({ fontSize: '14px' })}>
                  4% precipitation
                </div>
              </div>
              <div className={hstack({ gap: '8px' })}>
                <WindIcon />
                <div className={css({ fontSize: '14px' })}>23 km/h Winds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
