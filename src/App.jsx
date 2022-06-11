import { SnackbarProvider } from 'notistack';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import Router from './components/Router/Router';
import Auth from './components/Auth/Auth';
import theme from './components/Theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Auth>
        <SnackbarProvider>
          <Router />
        </SnackbarProvider>
      </Auth>
    </ThemeProvider>
  );
}

export default App;
