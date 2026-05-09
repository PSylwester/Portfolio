import { useState, useEffect } from 'react';
import { DEFAULT_NAV_ITEMS } from '@/config/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  logo?: string;
  logoText?: string;
}

export function Navbar({ logo, logoText = 'Sylwester' }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`
          relative flex items-center justify-between px-6 py-2
          transition-all duration-500 rounded-2xl border
          ${
            scrolled
              ? 'glass border-white/10 shadow-2xl shadow-blue-500/10'
              : 'bg-transparent border-transparent'
          }
        `}
        >
          {/* Logo/Brand Section - Przywrócone Twoje logo */}
          <a href="#home" className="flex items-center gap-3 group">
            {logo ? (
              <img
                src={logo}
                alt={logoText}
                className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="font-bold text-white text-lg">{logoText.charAt(0)}</span>
              </div>
            )}
            <span className="font-bold text-xl tracking-tighter text-white group-hover:text-blue-400 transition-colors">
              {logoText}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {DEFAULT_NAV_ITEMS.map((item, index) => (
              <a
                key={index}
                href={`#${item.label.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="md:hidden text-white cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass border border-white/10 rounded-2xl p-4 animate-in slide-in-from-top-4 duration-300 overflow-hidden">
            <div className="flex flex-col gap-2">
              {DEFAULT_NAV_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.label.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
