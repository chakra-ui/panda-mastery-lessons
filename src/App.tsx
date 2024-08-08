import { css } from '../styled-system/css';

// Here's the data required for the component
const data = {
  name: 'Judith Samuels',
  role: 'Frontend Developer',
  bio: 'Creative developer with a passion for crafting responsive web applications',
  price: 40,
  status: 'Top Rated',
  rating: 4.2,
  image:
    'https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=400&auto=format&fit=crop',
};

// Icons you need for the component
export const RatingIcon = () => (
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
);

export const MessageIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M13 9C13 9.35362 12.8595 9.69276 12.6095 9.94281C12.3594 10.1929 12.0203 10.3333 11.6667 10.3333H3.66667L1 13V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H11.6667C12.0203 1 12.3594 1.14048 12.6095 1.39052C12.8595 1.64057 13 1.97971 13 2.33333V9Z'
      stroke='#282828'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const HeartIcon = () => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.0833 8.16667C11.9525 7.315 12.8333 6.29417 12.8333 4.95833C12.8333 4.10743 12.4953 3.29138 11.8936 2.6897C11.2919 2.08802 10.4759 1.75 9.62496 1.75C8.59829 1.75 7.87496 2.04167 6.99996 2.91667C6.12496 2.04167 5.40163 1.75 4.37496 1.75C3.52406 1.75 2.708 2.08802 2.10633 2.6897C1.50465 3.29138 1.16663 4.10743 1.16663 4.95833C1.16663 6.3 2.04163 7.32083 2.91663 8.16667L6.99996 12.25L11.0833 8.16667Z'
      stroke='black'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

// Define the props for the component
interface ProfileCardProps {}

// Implement the profile card component
export function ProfileCard(props: ProfileCardProps) {
  return <div />;
}

function App() {
  return (
    <div
      className={css({
        minHeight: '100dvh',
      })}
    >
      <ProfileCard />
    </div>
  );
}

export default App;
