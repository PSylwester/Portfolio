import { FunctionComponent } from 'react';

export const About: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-8 text-center">
        I'm a passionate developer with experience in building web applications using modern
        technologies like React, TypeScript, and Tailwind CSS. I love creating beautiful and
        functional user interfaces!
      </p>
    </div>
  );
};
