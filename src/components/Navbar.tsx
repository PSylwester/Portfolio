import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import React, { useState } from 'react';

interface NavbarProps {
  logo?: string;
  logoText?: string;
  navItems?: Array<{
    label: string;
    link_to: string;
  }>;
}

export function Navbar({
  logo,
  logoText = 'Sylwester',
  navItems = [
    { label: 'Home', link_to: '/' },
    { label: 'About', link_to: '/about' },
    { label: 'Contact', link_to: '/contact' },
  ],
}: NavbarProps) {
  const [isDark, setIsDark] = useState(false);

  const toggle = () => setIsDark(!isDark);
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              {logo ? (
                <img src={logo} alt={logoText} className="h-8 w-8" />
              ) : (
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                  <span className="font-bold text-sm">{logoText.charAt(0)}</span>
                </div>
              )}
              <span className="font-bold text-lg">{logoText}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.link_to}
                className={({ isActive }) =>
                  `transition-colors hover:text-orange-300 ${
                    isActive ? 'text-orange-900 border-b-2 border-primary pb-1' : 'text-gray-700/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div
            className={`cursor-pointer w-20 h-10 drop-shadow-2xl flex items-center rounded-full transition-colors duration-1000 ease ${
              isDark ? 'bg-gray-900' : 'bg-gray-400'
            }`}
            onClick={toggle}
          >
            <div
              className={`w-7 h-7 rounded-full shadow-2xl transform transition-transform duration-1000 ${
                isDark ? 'translate-x-11 bg-white cień-light' : 'translate-x-2 bg-black cień-dark'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
