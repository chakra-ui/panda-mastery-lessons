import { Tabs } from '@ark-ui/react';
import { sva } from '../styled-system/css';
import { stack } from '../styled-system/patterns';

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

function App() {
  const classes = tabsRecipe();

  return (
    <div
      className={stack({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <Tabs.Root defaultValue='general' className={classes.root}>
        <Tabs.List className={classes.list}>
          <Tabs.Trigger className={classes.tab} value='general'>
            General
          </Tabs.Trigger>
          <Tabs.Trigger className={classes.tab} value='team'>
            Team
          </Tabs.Trigger>
          <Tabs.Trigger className={classes.tab} value='plan'>
            Plan
          </Tabs.Trigger>
          <Tabs.Trigger className={classes.tab} value='billing'>
            Billing
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className={classes.content} value='general'>
          This tab provides a general overview and introduction to your SaaS
          platform
        </Tabs.Content>
        <Tabs.Content className={classes.content} value='team'>
          This tab provides a team overview and introduction to your SaaS
          platform
        </Tabs.Content>
        <Tabs.Content className={classes.content} value='plan'>
          This tab provides a plan overview and introduction to your SaaS
          platform
        </Tabs.Content>
        <Tabs.Content className={classes.content} value='billing'>
          This tab provides a billing overview and introduction to your SaaS
          platform
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

export default App;
