import { SnackbarProvider } from 'notistack';
import React from 'react';
import Router from './components/Router/Router';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <Auth>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </Auth>
  );
}

export default App;
