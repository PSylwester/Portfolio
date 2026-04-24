import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A cutting-edge web application built with modern technologies.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An innovative mobile app designed for seamless user experience.',
    technologies: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A sophisticated backend system optimized for performance and scalability.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
];

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="project-section py-16 bg-gray-50">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          component="h2"
          className="project-title text-center mb-12"
        >
          My Projects
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectShowcase;
