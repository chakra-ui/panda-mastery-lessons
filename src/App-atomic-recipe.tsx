import { RecipeVariantProps, css, sva } from '../styled-system/css';
import { HStack, Stack } from '../styled-system/jsx';
import { JsxStyleProps } from '../styled-system/types';

const alertRecipe = sva({
  slots: ['root', 'icon', 'title', 'description'],
  base: {
    root: {
      px: '16px',
      py: '12px',
    },
    icon: {
      width: '24px',
      height: '24px',
    },
    title: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    description: {
      fontSize: '16px',
    },
  },
  variants: {
    status: {
      info: {
        root: {
          colorPalette: 'blue',
        },
      },
      error: {
        root: {
          colorPalette: 'red',
        },
      },
      warning: {
        root: {
          colorPalette: 'orange',
        },
      },
      success: {
        root: {
          colorPalette: 'green',
        },
      },
    },
    kind: {
      subtle: {
        root: {
          bg: 'colorPalette.100',
        },
        icon: {
          color: 'colorPalette.600',
        },
      },
      solid: {
        root: {
          bg: 'colorPalette.600',
          color: 'white',
        },
      },
    },
  },
  defaultVariants: {
    status: 'info',
    kind: 'subtle',
  },
});

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

type AlertVariantProps = RecipeVariantProps<typeof alertRecipe>;

type AlertProps = AlertVariantProps &
  JsxStyleProps & {
    title: string;
    description: string;
  };

function Alert(props: AlertProps) {
  const [recipeProps, restProps] = alertRecipe.splitVariantProps(props);
  const styles = alertRecipe.raw(recipeProps);
  const { title, description, ...otherProps } = restProps;
  return (
    <div className={css(styles.root, otherProps)}>
      <HStack gap='3'>
        <InfoIcon className={css(styles.icon)} />
        <Stack gap='0'>
          <div className={css(styles.title)}>{title}</div>
          <div className={css(styles.description)}>{description}</div>
        </Stack>
      </HStack>
    </div>
  );
}

function App() {
  return (
    <Stack minH='100dvh' pt='14' px='6'>
      <Alert
        bg='orange'
        status='info'
        kind='subtle'
        title='Title'
        description='This is a description'
      />
    </Stack>
  );
}

export default App;
