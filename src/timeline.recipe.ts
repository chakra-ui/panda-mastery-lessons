import { defineSlotRecipe } from '@pandacss/dev';

export const timelineRecipe = defineSlotRecipe({
  className: 'timeline',
  slots: [
    'root',
    'item',
    'indicator',
    'separator',
    'title',
    'description',
    'content',
    'indicatorContainer',
  ],
  base: {
    root: {
      display: 'flex',
      flexDir: 'column',
      gap: '2px',
    },
    item: {
      display: 'flex',
      _last: {
        '& .timeline__separator': {
          display: 'none',
        },
      },
    },
    indicator: {
      borderRadius: 'full',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      borderStartWidth: '2px',
      borderColor: '#D9D9D9',
      flex: '1',
    },
    title: {
      fontWeight: '500',
    },
    description: {
      color: '#949494',
    },
    content: {
      display: 'flex',
      flexDir: 'column',
      flex: '1',
    },
    indicatorContainer: {
      display: 'flex',
      flexDir: 'column',
      alignItems: 'center',
      gap: '2px',
    },
  },
  variants: {
    size: {
      medium: {
        item: {
          gap: '16px',
        },
        content: {
          pb: '24px',
        },
        indicator: {
          w: '24px',
          h: '24px',
        },
        title: {
          fontSize: '16px',
        },
        description: {
          fontSize: '14px',
        },
      },
      small: {
        item: {
          gap: '10px',
        },
        content: {
          pb: '16px',
        },
        indicator: {
          w: '16px',
          h: '16px',
          '& svg': {
            w: '10px',
            h: '10px',
          },
        },
        title: {
          fontSize: '14px',
        },
        description: {
          fontSize: '12px',
        },
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
