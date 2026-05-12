import { TypeAnimation } from 'react-type-animation';
import { Container } from '../ui/Container';
import { useTranslation, Trans } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home">
      <Container className="relative flex flex-col items-start justify-start py-32 sm:py-48 text-left">
        <div className="mb-6 flex items-center gap-2 px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full dark:bg-blue-950 dark:text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {t('hero.badge')}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance max-w-4xl leading-[1.05]">
          <Trans
            i18nKey="hero.title"
            components={[
              <span key="0" />, // <0> - tekst zwykły
              <span key="1" className="text-[color:var(--color-accent)]" />, // <1> - solidne / robust
              <span key="2" />, // <2> - tekst zwykły
              <span key="3" className="text-[color:var(--color-text-muted)]" />, // <3> - UX
            ]}
          />
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-[color:var(--color-text-muted)] leading-relaxed">
          <Trans
            i18nKey="hero.description"
            components={[
              <span key="0" />,
              <strong key="1" className="text-[color:var(--color-foreground)] font-semibold" />,
            ]}
          />
        </p>

        <div className="h-8 mt-4 text-sm font-mono tracking-widest text-[color:var(--color-text-muted)]">
          <TypeAnimation
            key={t('hero.easter_egg.0')}
            sequence={[t('hero.easter_egg.0'), 3000, t('hero.easter_egg.1'), 3000]}
            repeat={Infinity}
            cursor={false}
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-[color:var(--color-accent)] text-[#f8fafc] dark:text-[#0f172a] hover:shadow-lg hover:shadow-[color:var(--color-accent)]/50 rounded-2xl font-bold transition-all cursor-pointer inline-block text-center"
          >
            {t('hero.cta_projects')}
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-600 dark:border-gray-800 text-foreground rounded-2xl font-bold hover:border-[color:var(--color-accent)] transition-all cursor-pointer inline-block text-center"
          >
            {t('hero.cta_talk')}
          </a>
        </div>
      </Container>
    </section>
  );
}
