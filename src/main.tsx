import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from 'next-themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider attribute='class' disableTransitionOnChange enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
