import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

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

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="project-section py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          component="h2"
          className="project-title text-center mb-12"
        >
          My Projects
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="p-6 relative">
                <Typography variant="h5" gutterBottom className="project-title-text">
                  {project.title}
                </Typography>
                <Typography variant="body1" className="project-description">
                  {project.description}
                </Typography>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <Link to={project.link} className="block mt-4 text-center">
                    <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectShowcase;
