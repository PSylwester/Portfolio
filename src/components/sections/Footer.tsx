import { Container } from '../ui/Container';
import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'; // Ikony dla profesjonalnego sznytu

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { platform: 'GitHub', url: '#', icon: <Github size={18} /> },
    { platform: 'LinkedIn', url: '#', icon: <Linkedin size={18} /> },
    { platform: 'Twitter', url: '#', icon: <Twitter size={18} /> },
  ];

  return (
    <footer className="relative mt-24">
      {/* Subtelna linia z gradientem zamiast zwykłego border-t */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo / Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="text-2xl font-bold tracking-tighter text-white">
              Port<span className="text-blue-500">folio</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Crafting digital experiences with precision and passion. Based in Poland, working
              worldwide.
            </p>
          </div>

          {/* Quick Links - z efektem hover */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Ikony + Text */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Status */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 font-medium">
            © {currentYear} Portfolio. Built with <span className="text-blue-500">React</span> &{' '}
            <span className="text-blue-400">Tailwind v4</span>.
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-tighter font-semibold">
              All systems operational
            </span>
          </div>
        </div>
      </Container>

      {/* Dekoracyjne światło w tle stopy */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10 rounded-full" />
    </footer>
  );
}
