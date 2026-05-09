import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Code2, Briefcase, User } from 'lucide-react';
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
    <Container className="relative py-24">
      {/* Nagłówek sekcji - wyrównany do lewej dla spójności */}
      <header className="mb-16">
        <h2 className="landing_title text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Passionate developer crafting beautiful and functional digital experiences with modern
          technologies.
        </p>
      </header>

      {/* Główny Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lewa kolumna: Who I Am (Szklana karta) */}
        <div className="lg:col-span-7 glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group">
          {/* Subtelny blask w rogu karty po najechaniu */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-colors duration-500" />

          <div className="flex items-center gap-3 mb-6 text-blue-400">
            <User size={24} />
            <h3 className="text-2xl font-bold text-white">Who I Am</h3>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg">
            I'm a dedicated software developer with a passion for creating intuitive and visually
            stunning web applications. I transform complex problems into elegant solutions.
          </p>
          <p className="mt-4 text-gray-400 italic">
            "When I'm not coding, I'm usually exploring new tech or sharing knowledge."
          </p>
        </div>

        {/* Prawa kolumna: Skills */}
        <div className="lg:col-span-5 glass p-8 rounded-3xl border border-white/10">
          <div className="flex items-center gap-3 mb-8 text-purple-400">
            <Code2 size={24} />
            <h3 className="text-xl font-bold text-white">Technical Skills</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${
                    skill.level === 5
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : 'bg-white/5 text-gray-400 border border-white/10'
                  } hover:scale-105 hover:bg-white/10`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Dolny wiersz: Experience (Szeroka szklana karta) */}
        <div className="lg:col-span-12 glass p-8 md:p-10 rounded-3xl border border-white/10">
          <div className="flex items-center gap-3 mb-8 text-pink-400">
            <Briefcase size={24} />
            <h3 className="text-xl font-bold text-white">Work Experience</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-6 border-l-2 border-white/10 hover:border-blue-500 transition-colors"
              >
                <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-white/20 group-hover:bg-blue-500 transition-colors" />
                <h4 className="font-bold text-gray-100">{exp.role}</h4>
                <div className="text-sm text-blue-400 mb-2">
                  {exp.company} • {exp.period}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Akcent dekoracyjny w tle sekcji */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </Container>
  );
}
