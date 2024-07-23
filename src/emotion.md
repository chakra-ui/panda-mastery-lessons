```tsx
interface StyledStatusLabelProps {
  isPrompt?: boolean;
  isMinized?: boolean;
}

const minimizedStyles = (theme: EmotionTheme): CSSObject => ({
  opacity: 0,
  padding: theme.spacing.none,
  margin: theme.spacing.none,
  maxWidth: 0,
  minWidth: 0,
  border: 0,
});

export const StyledStatusLabel = styled.label<StyledStatusLabelProps>(
  ({ isPrompt, isMinimized, theme }) => ({
    fontSize: theme.fontSizes.sm,
    color: isPrompt ? theme.colors.accentText : theme.colors.mutedText,
    textTransform: isPrompt ? 'none' : 'uppercase',
    margin: `0 0 0 ${theme.spacing.lg}`,
    whiteSpace: 'nowrap',
    maxWidth: '20rem',
    backgroundImage: `linear-gradient(90deg, ${theme.colors.accentBg}, #fffd80)`,
    borderRadius: isPrompt ? theme.radii.md : undefined,
    transition: `opacity 200ms ease-out 0s,
  clip 200ms ease-out 0s, min-width 200ms ease-out 0s,
  max-width 200ms ease-out 0s, padding 200ms ease-out 0s`, // Hide at end of the transition
    ...(isMinimized ? minimizedStyles(theme) : {}),
  })
);
```

```ts
const theme = {
  spacing: { none: '0px' },
  fontSizes: { sm: '12px' },
  colors: { accentText: '#6644ff', mutedText: '#45445f', accentBg: '#FA44ff' },
  radii: { lg: '12px' },
};
```
