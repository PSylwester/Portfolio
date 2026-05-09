import About from '@/components/sections/About';
import Project from '@/components/sections/Project';
import Contact from '@/components/sections/Contact';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/sections/Footer';
import Background from '@/components/ui/background';
import logo from '@/assets/SP_Signature_Logo.png';

export default function HomePage() {
  return (
    <>
      {/* STATYCZNE TŁO - fixed inset-0 */}
      <Background />

      {/* KONTENER NA TREŚĆ - overflow-y-auto */}
      <main className="relative min-h-screen flex flex-col overflow-y-auto">
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
