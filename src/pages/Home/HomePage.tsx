// src/pages/home/index.tsx

import About from '@/components/sections/About';
import Project from '@/components/sections/Project'; // <<< IMPORTOWANIE NOWEJ SEKCJI
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/sections/Navbar'; // Upewnij się, że to jest tuż w treści
import Hero from '@/components/sections/Hero';
import Footer from '@/components/sections/Footer';
import Background from '@/components/background';
import logo from '@/assets/SP_Signature_Logo.png';

export default function HomePage() {
  return (
    <>
      {/* TWÓJE STATYCZNE TŁO - fixed inset-0 */}
      <Background />

      {/* KONTENER NA TREŚĆ - overflow-y-auto scroll-smooth */}
      <main className="relative min-h-screen flex flex-col overflow-y-auto scroll-smooth">
        <Navbar logo={logo} />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
