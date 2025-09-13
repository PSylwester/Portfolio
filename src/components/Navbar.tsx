import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

interface NavbarProps {
  logo?: string;
  logoText?: string;
  navItems?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  showSearch?: boolean;
  showCart?: boolean;
  showProfile?: boolean;
  onSearch?: () => void;
  onCart?: () => void;
  onProfile?: () => void;
}

export function Navbar({
  logo,
  logoText = 'Brand',
  navItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  showSearch = true,
  showCart = true,
  showProfile = true,
  onSearch,
  onCart,
  onProfile,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
                  <span className="text-primary-foreground font-bold text-sm">
                    {logoText.charAt(0)}
                  </span>
                </div>
              )}
              <span className="font-bold text-lg text-foreground">{logoText}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`transition-colors hover:text-foreground/80 ${
                  item.active
                    ? 'text-foreground border-b-2 border-primary pb-1'
                    : 'text-foreground/60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            {showSearch && <span className="sr-only">Search</span>}
            {showCart && (
              <>
                <span className="sr-only">Cart</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  2
                </span>
              </>
            )}
            {showProfile && <span className="sr-only">Profile</span>}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <span className="sr-only">Toggle menu</span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    item.active
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/60 hover:text-foreground hover:bg-accent'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 flex items-center space-x-2 px-3"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
