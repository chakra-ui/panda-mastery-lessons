import { defineConfig } from '@pandacss/dev';
import { cardRecipe } from './src/card.recipe';
import { timelineRecipe } from './src/timeline.recipe';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        card: cardRecipe,
        timeline: timelineRecipe,
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
});
