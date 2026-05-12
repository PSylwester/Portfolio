import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative flex items-center bg-black/10 dark:bg-white/10 p-1 rounded-xl border border-white/5 backdrop-blur-md">
      <div
        className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-blue-600 dark:bg-accent rounded-lg shadow-sm transition-all duration-300 ease-out ${
          i18n.language === 'en' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      <button
        onClick={() => changeLanguage('pl')}
        className={`relative z-10 px-4 py-1.5 text-xs font-bold transition-colors duration-300 w-12 ${
          i18n.language === 'pl'
            ? 'text-white dark:text-[#0f172a]'
            : 'text-[color:var(--color-text-muted)] hover:text-[color:var(--color-foreground)]'
        }`}
      >
        PL
      </button>

      <button
        onClick={() => changeLanguage('en')}
        className={`relative z-10 px-4 py-1.5 text-xs font-bold transition-colors duration-300 w-12 ${
          i18n.language === 'en'
            ? 'text-white dark:text-[#0f172a]'
            : 'text-[color:var(--color-text-muted)] hover:text-[color:var(--color-foreground)]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
