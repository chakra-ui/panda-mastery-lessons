import { Box, HStack, Stack } from '../styled-system/jsx';
import { AlertVariantProps, alert } from '../styled-system/recipes';
import { JsxStyleProps } from '../styled-system/types';

interface AlertProps extends AlertVariantProps, JsxStyleProps {
  title: string;
  description: string;
}

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

function Alert(props: AlertProps) {
  const [recipeProps, restProps] = alert.splitVariantProps(props);
  const classes = alert(recipeProps);
  const { title, description, ...otherProps } = restProps;
  return (
    <Box className={classes.root} {...otherProps}>
      <HStack gap='3'>
        <InfoIcon className={classes.icon} />
        <Stack gap='0'>
          <div className={classes.title}>{title}</div>
          <div className={classes.description}>{description}</div>
        </Stack>
      </HStack>
    </Box>
  );
}

function App() {
  return (
    <Stack minH='100dvh' pt='14' px='6'>
      <Alert
        bg='orange.200'
        status='info'
        kind='subtle'
        title='Title'
        description='This is a description'
      />
    </Stack>
  );
}

export default App;
