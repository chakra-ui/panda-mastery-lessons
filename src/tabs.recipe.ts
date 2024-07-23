import { defineSlotRecipe } from '@pandacss/dev';

export const tabsRecipe = defineSlotRecipe({
  className: 'tabs',
  jsx: ['Tabs', 'DataTabs'],
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
