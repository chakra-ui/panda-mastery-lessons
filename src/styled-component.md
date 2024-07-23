```tsx
export const StyledHeaderToolbar = styled.div(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing.sm,
  right: theme.spacing.twoXS,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderColor: theme.colors.borderBold,
}));
```

```ts
const theme = {
  spacing: {
    sm: '8px',
    twoXS: '4px',
  },
  colors: {
    borderBold: 'black',
  },
};
```
