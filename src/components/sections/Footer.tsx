import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { platform: 'GitHub', url: '#', icon: <Github size={18} /> },
    { platform: 'LinkedIn', url: '#', icon: <Linkedin size={18} /> },
    { platform: 'Twitter', url: '#', icon: <Twitter size={18} /> },
  ];

  const navItems = [
    { name: t('footer.nav.home'), href: '#home' },
    { name: t('footer.nav.about'), href: '#about' },
    { name: t('footer.nav.projects'), href: '#projects' },
    { name: t('footer.nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="relative mt-24">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="text-2xl font-bold tracking-tighter text-[color:var(--color-foreground)]">
              Port<span className="text-[color:var(--color-accent)]">folio</span>
            </div>
            <p className="text-[color:var(--color-text-muted)] max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[color:var(--color-foreground)] mb-6">
              {t('footer.nav_title')}
            </h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[color:var(--color-foreground)] mb-6">
              {t('footer.connect_title')}
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="flex items-center gap-3 text-[color:var(--color-text-muted)] hover:text-[color:var(--color-foreground)] transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 group-hover:text-[color:var(--color-accent)] transition-all">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[color:var(--color-text-muted)] font-medium">
            {t('footer.built_with', { year: currentYear })}{' '}
            <span className="text-[color:var(--color-accent)]">React</span> &{' '}
            <span className="text-[color:var(--color-accent)]">Tailwind v4</span>.
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-[color:var(--color-text-muted)] uppercase tracking-tighter font-semibold">
              {t('footer.status')}
            </span>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10 rounded-full" />
    </footer>
  );
}
