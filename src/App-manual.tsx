import { RecipeVariant, css, cva } from '../styled-system/css';
import { stack } from '../styled-system/patterns';

const inputRecipe = cva({
  base: {
    _placeholder: {
      color: '#8B95A1',
    },
    borderColor: '#E2E8F0',
  },
  variants: {
    kind: {
      outline: {
        borderWidth: '1px',
      },
      flushed: {
        borderBottomWidth: '1px',
      },
    },
    size: {
      small: {
        borderRadius: '2px',
        _placeholder: {
          fontSize: '12px',
        },
        px: '8px',
        h: '24px',
      },
      medium: {
        borderRadius: '2px',
        _placeholder: {
          fontSize: '14px',
        },
        px: '12px',
        h: '32px',
      },
      large: {
        borderRadius: '4px',
        _placeholder: {
          fontSize: '16px',
        },
        px: '16px',
        h: '40px',
      },
    },
  },
  compoundVariants: [{ kind: 'flushed', css: { px: '0' } }],
});

type InputRecipeProps = RecipeVariant<typeof inputRecipe>;

type Merge<A, B> = B & Omit<A, keyof B>;
type InputProps = Merge<React.ComponentProps<'input'>, InputRecipeProps>;

const Input = (props: InputProps) => {
  const [recipeProps, rest] = inputRecipe.splitVariantProps(props);
  return <input className={inputRecipe(recipeProps)} {...rest} />;
};

function App() {
  return (
    <div
      className={css({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <div className={stack({ gap: '32px', maxW: '490px', mx: 'auto' })}>
        <Input kind='outline' size='small' placeholder='Placeholder' />
        <Input kind='outline' size='medium' placeholder='Placeholder' />
        <Input kind='outline' size='large' placeholder='Placeholder' />
        <Input kind='flushed' size='small' placeholder='Placeholder' />
        <Input kind='flushed' size='medium' placeholder='Placeholder' />
        <Input kind='flushed' size='large' placeholder='Placeholder' />
      </div>
    </div>
  );
}

export default App;
