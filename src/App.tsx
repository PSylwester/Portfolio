import './styles/index.css';

import { FunctionComponent, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/router';

import { CssBaseline, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import Navbar from '@/components/Navbar';

import { useState } from 'react';

import Hamburger from '@/components/Hamburger/Hamburger';
import MobileMenu from '@/components/MobileMenu/MobileMenu';

const App: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up(768));

  useEffect(() => {
    if (isDesktop) {
      setMenuOpen(false);
    }
  }, [isDesktop]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Hamburger
          className="md:hidden flex items-center"
          icons="black"
          open={menuOpen}
          onToggle={() => setMenuOpen((prev) => !prev)}
        />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
