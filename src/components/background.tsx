import React from 'react';

export default function Background() {
  return (
    // KLUCZOWE TŁO: fixed (przyklejone), inset-0 (pełny ekran),
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none bg-black ">
      {/* 2. Twoje animowane krople (Blobs) */}
      {/* Użyliśmy relative do samego root diva, aby animacje były względem okna przeglądarki */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}
