import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';

import { ThemeProvider, useTheme } from '@mui/material';

const App: FunctionComponent = () => {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
