import { HStack, Stack } from '@mono/styled-system/jsx';
import { alert } from '@mono/styled-system/recipes';
import { RecipeVariantProps } from '@mono/styled-system/types';

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

type AlertVariantProps = RecipeVariantProps<typeof alert>;

export type AlertProps = AlertVariantProps & {
  title: string;
  description: string;
};

export function Alert(props: AlertProps) {
  const [recipeProps, restProps] = alert.splitVariantProps(props);
  const classes = alert(recipeProps);
  const { title, description } = restProps;
  return (
    <div className={classes.root}>
      <HStack gap='3'>
        <InfoIcon className={classes.icon} />
        <Stack gap='0'>
          <div className={classes.title}>{title}</div>
          <div className={classes.description}>{description}</div>
        </Stack>
      </HStack>
    </div>
  );
}
