import bgImage from '@/assets/bg.jpg';

export default function Background() {
  return (
    // KLUCZOWE TŁO: fixed (przyklejone), inset-0 (pełny ekran),
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none transition-colors duration-500">
      {/* Background image with blur */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-3xl transition-opacity duration-500 opacity-10 dark:opacity-80"
      />
      {/* animowane krople (Blobs) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="var(--blob-opacity) var(--blob-blend) absolute top-20 left-2 w-72 h-72 rounded-full filter blur-3xl animate-blob-1 bg-gradient-to-r from-green-500 to-[var(--blob-gradient-black)]"></div>
        <div className="var(--blob-opacity) var(--blob-blend) absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-[var(--blob-gradient-black)] to-green-600 rounded-full filter blur-3xl animate-blob-2 animation-delay-2000"></div>
        <div className="var(--blob-opacity) var(--blob-blend) absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-[var(--blob-gradient-black)] to-green-500 rounded-full filter blur-3xl animate-blob-3 animation-delay-4000"></div>
        <div className="var(--blob-opacity) var(--blob-blend) absolute -bottom-50 right-[-100px] w-[500px] h-[500px] bg-gradient-to-r from-green-600 to-[var(--blob-gradient-black)] rounded-full filter blur-3xl animate-blob-4 animation-delay-6000"></div>
      </div>
    </div>
  );
}
