import { css } from '../styled-system/css';
import { grid } from '../styled-system/patterns';
import { ProfileCard } from './ProfileCard';
import { profileData } from './profile-data';

// Add dark mode styles and colormode toggle button to app
function App() {
  return (
    <div
      className={css({
        minHeight: '100dvh',
        bg: '#F5F5F5',
        pt: '120px',
        color: '#262626',
      })}
    >
      <div
        className={css({
          maxW: { md: '768px', lg: '1244px' },
          mx: 'auto',
          display: 'flex',
          flexDir: { base: 'column', lg: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '64px',
          p: '24px',
        })}
      >
        <div
          className={css({
            maxW: '407px',
            textAlign: { base: 'start', md: 'center', lg: 'start' },
            mx: { base: 'unset', md: 'auto', lg: 'unset' },
          })}
        >
          <div
            className={css({
              fontSize: { base: '32px', lg: '48px' },
              fontWeight: 'semibold',
            })}
          >
            Hire Talents
          </div>
          <div
            className={css({
              color: '#525252',
              fontSize: { base: '16px', lg: '20px' },
              pt: '16px',
            })}
          >
            Connect with professionals around the world to get your projects
            done easily
          </div>
          <a
            href='#'
            className={css({
              fontSize: '20px',
              pt: '32px',
              fontWeight: 'semibold',
              display: 'inline-block',
            })}
          >
            View more
          </a>
        </div>

        <div
          className={grid({
            columns: { base: 1, sm: 2 },
            gap: { base: '16px', md: '32px' },
          })}
        >
          {profileData.map((item, index) => (
            <ProfileCard
              key={index}
              name={item.name}
              bio={item.bio}
              image={item.image}
              title={item.title}
              rating={item.rating}
              price={item.price}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
