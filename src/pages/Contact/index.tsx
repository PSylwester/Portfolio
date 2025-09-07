import { FunctionComponent } from 'react';

export const Contact: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-8 text-center">
        Feel free to reach out to me via email or follow me on social media!
      </p>
    </div>
  );
};
