import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ExternalLink, Folder } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

interface Project {
  id: number;
  titleKey: string;
  descKey: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: 'projects.items.ecommerce.title',
    descKey: 'projects.items.ecommerce.description',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    titleKey: 'projects.items.portfolio.title',
    descKey: 'projects.items.portfolio.description',
    technologies: ['React', 'TypeScript', 'Vite', 'Material-UI'],
    link: '#',
  },
  {
    id: 3,
    titleKey: 'projects.items.task_manager.title',
    descKey: 'projects.items.task_manager.description',
    technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
    link: '#',
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <Container className="relative py-24 min-h-screen">
        <header className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <Trans
              i18nKey="projects.title"
              components={[
                <span key="0" />,
                <span key="1" className="text-[color:var(--color-accent)]" />,
              ]}
            />
          </h2>
          <p className="text-xl text-[color:var(--color-text-muted)] max-w-2xl leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass group flex flex-col rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] cursor-pointer"
            >
              <div className="h-48 w-full bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 from-[color:var(--color-accent)]/50 to-gray-800/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <Folder size={80} className="text-white" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] transition-colors">
                    {t(project.titleKey)}
                  </h3>
                </div>

                <p className="text-[color:var(--color-text-muted)] text-sm leading-relaxed mb-6 flex-grow">
                  {t(project.descKey)}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-[color:var(--glass-bg)] text-[color:var(--color-text-muted)] border dark:border-white/10 border-black/20 group-hover:border-[color:var(--color-accent)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <Link
                    to={project.link}
                    className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-[color:var(--color-accent)] text-[#f8fafc] dark:text-[#0f172a] hover:shadow-lg hover:shadow-[color:var(--color-accent)]/50 rounded-xl font-bold transition-all duration-300"
                  >
                    {t('projects.view_case')}
                    <ExternalLink size={16} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] -z-10 rounded-full" />
      </Container>
    </section>
  );
}
