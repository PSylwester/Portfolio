import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ExternalLink, Github, Folder } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce solution featuring a responsive frontend with React and TypeScript. Includes product catalog, shopping cart, user authentication, and seamless checkout experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    link: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'A dynamic personal portfolio showcasing projects and professional experience. Built with modern web technologies featuring smooth animations and responsive design.',
    technologies: ['React', 'TypeScript', 'Vite', 'Material-UI'],
    link: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description:
      'A productivity-focused web application for managing tasks and projects. Features drag-and-drop functionality, real-time updates, and intuitive user interface.',
    technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <Container className="relative py-24 min-h-screen">
        {/* Nagłówek spójny z resztą strony */}
        <header className="mb-16 text-left">
          <h2 className=" text-4xl md:text-6xl font-bold mb-6">
            Selected <span className="text-[color:var(--color-accent)]">Works</span>
          </h2>
          <p className="text-xl text-[color:var(--color-text-muted)] max-w-2xl leading-relaxed">
            A collection of projects where I've combined design thinking with technical
            implementation to solve real-world problems.
          </p>
        </header>

        {/* Grid projektów - zwiększony odstęp gap-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass group flex flex-col rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] cursor-pointer"
            >
              {/* Opcjonalnie: Miejsce na obrazek projektu */}
              <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                  <Folder size={80} className="text-white" />
                </div>
                {/* Overlay przy hoverze */}
                {/* <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div> */}
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-[color:var(--color-text-muted)] text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologie jako tagi */}
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

                {/* Przycisk akcji - teraz bardziej subtelny i elegancki */}
                {project.link && (
                  <Link
                    to={project.link}
                    className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-[color:var(--color-accent)] text-[#f8fafc] dark:text-[#0f172a] hover:shadow-lg hover:shadow-[color:var(--color-accent)]/50 rounded-xl font-bold transition-all duration-300"
                  >
                    View Case Study
                    <ExternalLink size={16} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tło dekoracyjne */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] -z-10 rounded-full" />
      </Container>
    </section>
  );
}
