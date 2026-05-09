import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Container } from '../ui/Container';

export default function Hero() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <Container className="relative flex flex-col items-start justify-start py-32 sm:py-48 text-left">
      <div className="mb-6 flex items-center gap-2 px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full dark:bg-blue-950 dark:text-blue-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Available for new opportunities
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance max-w-4xl leading-[1.05]">
        Building <span className="text-blue-600">robust</span> web apps with a focus on
        <span className="text-gray-400 dark:text-gray-500"> user experience.</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
        Hi, I'm <strong className="text-gray-900 dark:text-white font-semibold">Sylwester</strong>.
        I specialize in React, TypeScript, and Tailwind CSS. I turn coffee into high-performance,
        accessible, and scalable frontend solutions.
      </p>

      {/* 'easter egg' */}
      <div className="h-8 mt-4 text-sm font-mono text-gray-400 tracking-widest">
        <TypeAnimation
          sequence={['"Pain doesn\'t go away..."', 3000, '"Hot diggity dog!"', 3000]}
          repeat={Infinity}
          cursor={false}
        />
      </div>

      <div className="flex flex-wrap gap-4 mt-12">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer">
          Explore Projects
        </button>
        <button className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 rounded-2xl font-bold hover:border-blue-500 transition-all cursor-pointer">
          Let's Talk
        </button>
      </div>
    </Container>
  );
}
