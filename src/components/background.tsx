import React from 'react';
import bgImage from '../assets/bg.jpg';
import './background.css';

export default function Background() {
  return (
    // KLUCZOWE TŁO: fixed (przyklejone), inset-0 (pełny ekran),
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none bg-black">
      {/* Background image with blur */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50 blur-3xl"
      />
      {/* animowane krople (Blobs) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-20 left-2 w-72 h-72 bg-gradient-to-r from-green-500 to-black rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob-1"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-black to-green-600 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob-2 animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-black to-green-800 rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob-3 animation-delay-4000"></div>
        <div className="absolute -bottom-50 right-[-100px] w-[500px] h-[500px] bg-gradient-to-r from-green-600 to-black rounded-full mix-blend-screen filter blur-3xl opacity-80 animate-blob-4 animation-delay-6000"></div>
      </div>
    </div>
  );
}
