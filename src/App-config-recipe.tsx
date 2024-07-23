import { stack } from '../styled-system/patterns';
import { Tabs } from '@ark-ui/react';
import { RecipeVariant } from '../styled-system/css';
import { TabsRootProps } from '@ark-ui/react';
import { tabs } from '../styled-system/recipes';

type RecipeProps = RecipeVariant<typeof tabs>;

interface DataTabsProps extends TabsRootProps, RecipeProps {
  data: Array<{
    title: React.ReactNode;
    content: React.ReactNode;
    value: string;
  }>;
}

const DataTabs = (props: DataTabsProps) => {
  const [recipeProps, otherProps] = tabs.splitVariantProps(props);
  const { data, ...rest } = otherProps;
  const classes = tabs(recipeProps);

  return (
    <Tabs.Root className={classes.root} {...rest}>
      <Tabs.List className={classes.list}>
        {data.map((item) => (
          <Tabs.Trigger
            key={item.value}
            className={classes.tab}
            value={item.value}
          >
            {item.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {data.map((item) => (
        <Tabs.Content
          key={item.value}
          className={classes.content}
          value={item.value}
        >
          {item.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

function App() {
  return (
    <div
      className={stack({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <DataTabs
        kind='enclosed'
        defaultValue='general'
        data={[
          {
            value: 'general',
            title: 'General',
            content:
              'This tab provides a general overview and introduction to your SaaS platform',
          },
          {
            value: 'team',
            title: 'Team',
            content:
              'This tab provides a team overview and introduction to your SaaS platform',
          },
          {
            value: 'plan',
            title: 'Plan',
            content:
              'This tab provides a plan overview and introduction to your SaaS platform',
          },
          {
            value: 'billing',
            title: 'Billing',
            content:
              'This tab provides a billing overview and introduction to your SaaS platform',
          },
        ]}
      />
    </div>
  );
}

export default App;
