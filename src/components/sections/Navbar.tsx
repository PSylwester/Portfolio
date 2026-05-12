import { useState, useEffect } from 'react';
import { DEFAULT_NAV_ITEMS } from '@/config/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import LanguageSelector from '../ui/LanguageSelector';
import i18n from '@/i18n';
interface NavbarProps {
  logo?: string;
  logoText?: string;
}

export function Navbar({ logo, logoText = 'Sylwester' }: NavbarProps) {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
          <a href="#home" onClick={closeMobileMenu} className="flex items-center gap-3 group">
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
            <span className="font-bold text-xl tracking-tighter text-foreground group-hover:text-blue-500 transition-colors">
              {logoText}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {DEFAULT_NAV_ITEMS.map((item, index) => (
              <a
                key={index}
                href={`#${item.label.toLowerCase()}`}
                className="text-sm font-medium text-text-muted hover:text-blue-500 transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 text-text-muted hover:text-[var(--color-foreground)] dark:hover:bg-white/10 hover:bg-black/10 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="md:hidden text-foreground cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 glass border border-white/10 rounded-2xl p-4 animate-in slide-in-from-top-4 duration-300 overflow-hidden shadow-2xl">
            <div className="flex flex-col gap-2">
              {/* Linki Nawigacyjne */}
              {DEFAULT_NAV_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.label.toLowerCase()}`}
                  onClick={closeMobileMenu}
                  className="text-[color:var(--color-text-muted)] hover:text-blue-500 font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  {/* Tu używamy t() jeśli klucze w DEFAULT_NAV_ITEMS odpowiadają tym w JSON */}
                  {item.label}
                </a>
              ))}

              {/* Linia oddzielająca (Separator) */}
              <div className="h-px bg-white/10 my-2 mx-2" />

              {/* Sekcja zmiany języka */}
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-[color:var(--color-text-muted)]">
                  {i18n.language === 'pl' ? 'Język' : 'Language'}
                </span>

                {/* Twój komponent */}
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
