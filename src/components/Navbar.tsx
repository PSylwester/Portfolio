import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button color="inherit" component={Link} to="/" sx={{ ml: 2 }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="About" sx={{ ml: 2 }}>
          About
        </Button>
        <Button color="inherit" component={Link} to="Contact" sx={{ ml: 2 }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
