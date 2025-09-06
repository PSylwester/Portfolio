import './styles/index.css';

import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/router';

import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from '@/components/Navbar';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
