import './styles/index.css';

import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/router';

import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from '@/components/Navbar';

import { useState } from 'react';
import Hamburger from '@/components/Hamburger/Hamburger';
const App: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Hamburger
        className="md:hidden flex items-center"
        icons="black"
        open={menuOpen}
        onToggle={() => setMenuOpen((prev) => !prev)}
      />
      <Router />
    </BrowserRouter>
  );
};

export default App;
