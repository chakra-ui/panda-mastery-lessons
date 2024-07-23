import { definePreset } from '@pandacss/dev';
import { alertRecipe } from './alert';

const preset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          cobalt: {
            50: {
              value: '#EBEDF9',
            },
            100: {
              value: '#D3D7EE',
            },
            200: {
              value: '#959CDE',
            },
            300: {
              value: '#5460C8',
            },
            400: {
              value: '#1020B9',
            },
          },
        },
      },
      slotRecipes: {
        alert: alertRecipe
      }
    },
  },
});

export default preset;
