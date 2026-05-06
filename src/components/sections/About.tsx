import { FunctionComponent } from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

interface Skill {
  name: string;
  level: number; // 1-5
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
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
    role: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description:
      'Building modern web applications with React and TypeScript. Leading frontend architecture decisions.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Creative Studio',
    period: '2021 - 2023',
    description:
      'Developed responsive websites and interactive user interfaces using modern web technologies.',
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen py-16">
      {/* Header Section */}
      <section className="text-center mb-16 flex flex-col items-center justify-center">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          className="landing_title text-4xl md:text-5xl font-bold mb-6 mx-auto pt-16"
        >
          About Me
        </Typography>
        <Typography
          variant="h6"
          className="text-xl md:text-2xl mx-auto text-gray-300 max-w-3xl text-center px-4"
        >
          Passionate developer crafting beautiful and functional digital experiences with modern
          technologies.
        </Typography>
      </section>

      {/* Profile Card */}
      <Box className="max-w-4xl mx-auto mb-16">
        <div className="about-card bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-8 md:p-12 ">
            <div className="flex flex-col items-center justify-center">
              <Typography variant="h4" component="h2" gutterBottom className="landing_title mb-8 ">
                Who I Am
              </Typography>

              <Typography variant="body1" className=" text-gray-300 max-w-2xl text-center pb-4">
                I'm a dedicated software developer with a passion for creating intuitive and
                visually stunning web applications. With expertise in modern frontend technologies,
                I transform complex problems into elegant solutions. When I'm not coding, you can
                find me exploring new technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </Typography>
            </div>
            {/* Skills Section */}
            <Box className="mb-8">
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                className="text-lg font-semibold mb-4 text-gray-100"
              >
                Technical Skills
              </Typography>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.name}
                    variant="outlined"
                    className="tech-badge"
                    sx={{
                      ...(skill.level === 5 && {
                        border: '1px solid #3b82f6',
                        color: '#3b82f6',
                      }),
                    }}
                  />
                ))}
              </div>
            </Box>

            {/* Experience Section */}
            <Box>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                className="text-lg font-semibold mb-4 text-gray-100"
              >
                Work Experience
              </Typography>
              <div className="space-y-4 max-w-xl mx-auto">
                {experiences.map((exp, index) => (
                  <Box
                    key={index}
                    className="border-l-4 border-gradient-to-r from-blue-500 to-purple-500 pl-4 py-2 bg-gray-700/30 rounded-r-lg"
                  >
                    <Typography
                      variant="subtitle1"
                      component="h4"
                      className="font-semibold text-gray-100"
                    >
                      {exp.role}
                    </Typography>
                    <Typography variant="body2" className="text-blue-400 mb-1">
                      {exp.company} • {exp.period}
                    </Typography>
                    <Typography variant="body2" className="text-gray-300">
                      {exp.description}
                    </Typography>
                  </Box>
                ))}
              </div>
            </Box>
          </div>
        </div>
      </Box>

      {/* CTA Section */}
      <section className="text-center mt-12">
        <Link to="/contact">
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
      </section>
    </main>
  );
}
