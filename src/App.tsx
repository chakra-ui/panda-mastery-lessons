import { css, cva } from '../styled-system/css';
import { styled } from '../styled-system/jsx';
import { flex, hstack, stack } from '../styled-system/patterns';

const buttonRecipe = cva({
  base: {
    borderRadius: 'md',
    cursor: 'pointer',
    fontSize: 'xl',
    fontWeight: 'semibold',
    height: '60px',
    px: '8',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'black',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: '#d1d5db',
        color: 'black',
      },
    },
  },
  defaultVariants: { variant: 'primary' },
});

const Button = styled('button', buttonRecipe);

function App() {
  return (
    <div
      className={flex({
        paddingX: '120px',
        paddingY: '140px',
        gap: '32px',
        justifyContent: 'space-between',
        alignItems: 'center',
      })}
    >
      <div className={stack({ gap: 6, maxW: '580px' })}>
        <h1
          className={css({
            fontSize: '48px',
            fontWeight: '800',
            lineHeight: '52px',
          })}
        >
          Get more customers with a seamless checkout
        </h1>
        <p
          className={css({
            fontSize: '24px',
            lineHeight: '38px',
          })}
        >
          A checkout that's simple, swift and friction-free creates the optimal
          conditions for higher conversion rates and increased revenues for your
          company.
        </p>
        <div className={hstack({ gap: 6 })}>
          <Button>Get started</Button>
          <Button variant='secondary'>Book demo</Button>
        </div>
      </div>
      <img
        src='https://images.unsplash.com/photo-1647427017067-8f33ccbae493?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNoZWNrb3V0fGVufDB8fDB8fHww'
        alt='checkout'
        className={css({
          borderRadius: 'xl',
          maxW: '600px',
          maxH: '380px',
          objectFit: 'cover',
        })}
      />
    </div>
  );
}

export default App;
