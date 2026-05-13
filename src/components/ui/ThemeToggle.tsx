import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // Inicjalizacja motywu przy starcie
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Jeśli użytkownik już coś wybrał, użyj tego, jeśli nie - sprawdź system
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 text-[color:var(--color-text-muted)] hover:text-[color:var(--color-foreground)] dark:hover:bg-white/10 hover:bg-black/10 transition-all cursor-pointer"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={18} className="transition-transform hover:rotate-45" />
      ) : (
        <Moon size={18} className="transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
