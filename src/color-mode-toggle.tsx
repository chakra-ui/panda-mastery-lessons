import { useTheme } from 'next-themes';
import { css } from '../styled-system/css';

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button
      onClick={toggleTheme}
      className={css({
        minH: '40px',
        borderWidth: '1px',
        px: '16px',
        rounded: '4px',
      })}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
