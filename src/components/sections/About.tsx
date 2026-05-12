import { useTranslation, Trans } from 'react-i18next';
import { Container } from '../ui/Container';
import { Code2, Briefcase, User } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 1-5
}

interface Experience {
  company: string;
  period: string;
  roleKey: string;
  descKey: string;
}

const skills: Skill[] = [
  { name: 'React', level: 5 },
  { name: 'TypeScript', level: 4 },
  { name: 'Tailwind CSS', level: 4 },
  { name: 'Node.js', level: 4 },
  { name: 'JavaScript', level: 5 },
  { name: 'HTML/CSS', level: 5 },
  { name: 'Python', level: 4 },
  { name: 'Git', level: 3 },
];

const experiences: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    roleKey: 'about.exp.tech_solutions.role',
    descKey: 'about.exp.tech_solutions.description',
  },
  {
    company: 'Creative Studio',
    period: '2021 - 2023',
    roleKey: 'about.exp.creative_studio.role',
    descKey: 'about.exp.creative_studio.description',
  },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <Container className="relative py-24">
        <header className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <Trans
              i18nKey="about.title"
              components={[
                <span key="0" />,
                <span key="1" className="text-[color:var(--color-accent)]" />,
              ]}
            />
          </h2>
          <p className="text-xl text-[color:var(--color-text-muted)] max-w-2xl leading-relaxed">
            {t('about.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-colors duration-500 pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 text-blue-400">
              <User size={24} />
              <h3 className="text-2xl font-bold text-[color:var(--color-foreground)]">
                {t('about.who_am_i')}
              </h3>
            </div>

            <p className="text-[color:var(--color-foreground)] leading-relaxed text-lg">
              {t('about.description')}
            </p>
            <p className="mt-4 text-[color:var(--color-text-muted)] italic">{t('about.quote')}</p>
          </div>

          <div className="lg:col-span-5 glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[60px] group-hover:bg-purple-500/20 transition-colors duration-500 pointer-events-none" />

            <div className="flex items-center gap-3 mb-8 text-purple-400">
              <Code2 size={24} />
              <h3 className="text-xl font-bold text-[color:var(--color-foreground)]">
                {t('about.skills_title')}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${
                    skill.level === 5
                      ? 'dark:bg-blue-500/10 text-[color:var(--color-accent)] border border-blue-500/80 dark:border-blue-500/30'
                      : 'bg-white/5 text-gray-400 border dark:border-white/10 border-black/20'
                  } hover:scale-105 dark:hover:bg-accent/20 hover:bg-accent/20`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-12 glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/10 blur-[80px] group-hover:bg-pink-500/20 transition-colors duration-500 pointer-events-none" />

            <div className="flex items-center gap-3 mb-8 text-pink-400">
              <Briefcase size={24} />
              <h3 className="text-xl font-bold text-[color:var(--color-foreground)]">
                {t('about.experience_title')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative pl-6 border-l-2 border-[color:var(--color-text-muted)] hover:border-[color:var(--color-accent)] transition-colors"
                >
                  <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-[color:var(--color-text-muted)] group-hover:bg-[color:var(--color-accent)] transition-colors" />
                  <h4 className="font-bold text-[color:var(--color-foreground)]">
                    {t(exp.roleKey)}
                  </h4>
                  <div className="text-sm text-blue-500 dark:text-[color:var(--color-accent)] mb-2">
                    {exp.company} • {exp.period}
                  </div>
                  <p className="text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                    {t(exp.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent dark:via-white/10 via-black/40 to-transparent" />
      </Container>
    </section>
  );
}
