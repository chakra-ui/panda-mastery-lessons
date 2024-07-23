import { stack } from '../styled-system/patterns';
import { Tabs } from '@ark-ui/react';
import { sva, RecipeVariant } from '../styled-system/css';
import { TabsRootProps } from '@ark-ui/react';

const tabsRecipe = sva({
  slots: ['root', 'tab', 'list', 'content'],
  base: {
    root: {
      fontSize: '16px',
    },
    tab: {
      px: '16px',
      py: '10px',
    },

    list: {
      display: 'flex',
    },
    content: {
      py: '24px',
    },
  },
  variants: {
    kind: {
      line: {
        tab: {
          _selected: {
            borderBottomWidth: '2px',
            borderColor: 'black',
          },
        },
        list: {
          boxShadow: '0 -1px 0 0 #E0E0E0 inset',
        },
        content: {
          px: '10px',
        },
      },
      subtle: {
        tab: {
          _selected: {
            bg: '#F0F0F2',
            borderRadius: '6px',
          },
        },
      },
      enclosed: {
        tab: {
          _selected: {
            bg: 'white',
            borderRadius: '6px',
            boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
          },
        },
        list: {
          bg: '#F0F0F2',
          borderRadius: '8px',
          p: '4px',
        },
      },
    },
  },
  defaultVariants: {
    kind: 'line',
  },
});

type RecipeProps = RecipeVariant<typeof tabsRecipe>;

interface DataTabsProps extends TabsRootProps, RecipeProps {
  data: Array<{
    title: React.ReactNode;
    content: React.ReactNode;
    value: string;
  }>;
}

const DataTabs = (props: DataTabsProps) => {
  const [recipeProps, otherProps] = tabsRecipe.splitVariantProps(props);
  const { data, ...rest } = otherProps;
  const classes = tabsRecipe(recipeProps);

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
