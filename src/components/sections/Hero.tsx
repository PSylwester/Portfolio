import { TypeAnimation } from 'react-type-animation';
import { Container } from '../ui/Container';

export default function Hero() {
  return (
    <section id="home">
      <Container className="relative flex flex-col items-start justify-start py-32 sm:py-48 text-left">
        <div className="mb-6 flex items-center gap-2 px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full dark:bg-blue-950 dark:text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance max-w-4xl leading-[1.05]">
          Building <span className="text-[color:var(--color-accent)]">robust</span> web apps with a
          focus on
          <span className="text-[color:var(--color-text-muted)]"> user experience.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-[color:var(--color-text-muted)] leading-relaxed">
          Hi, I'm{' '}
          <strong className="text-[color:var(--color-foreground)] font-semibold">Sylwester</strong>.
          I specialize in React, TypeScript, and Tailwind CSS. I turn coffee into high-performance,
          accessible, and scalable frontend solutions.
        </p>

        {/* 'easter egg' */}
        <div className="h-8 mt-4 text-sm font-mono  tracking-widest">
          <TypeAnimation
            sequence={['"Pain doesn\'t go away..."', 3000, '"Hot diggity dog!"', 3000]}
            repeat={Infinity}
            cursor={false}
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-12">
          {/* Przycisk do sekcji Projects */}
          <a
            href="#projects"
            className="px-8 py-4 bg-[color:var(--color-accent)] text-[#f8fafc] dark:text-[#0f172a] hover:shadow-lg hover:shadow-[color:var(--color-accent)]/50 rounded-2xl font-bold transition-all cursor-pointer inline-block text-center"
          >
            Explore Projects
          </a>

          {/* Przycisk do sekcji About (Let's Talk) */}
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-600 dark:border-gray-800 text-foreground rounded-2xl font-bold hover:border-[color:var(--color-accent)]  transition-all cursor-pointer inline-block text-center"
          >
            Let's Talk
          </a>
        </div>
      </Container>
    </section>
  );
}
