import React from 'react';
import { FunctionComponent } from 'react';
import { Container } from '../ui/Container';
interface SocialLink {
  platform: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: '#' },
  { platform: 'LinkedIn', url: '#' },
  { platform: 'Twitter', url: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="border-t border-gray-800 pt-8 relative overflow-hidden"></div>
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="footer-title text-xl mb-4">Portfolio</div>
            <div className=" leading-relaxed">
              A place where you can find my projects and information about myself, my hobbies, and
              other stuff.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-lg font-semibold mb-4">Quick Links</div>
            <ul className="space-y-3">
              {['#home', '#about', '#projects', '#contact'].map((href, index) => (
                <li key={index}>
                  <a href={href} className="footer-link block py-1">
                    {['Home', 'About', 'Projects', 'Contact'][index]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-lg font-semibold mb-4">Connect With Me</div>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.platform}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright text-center">
          <div className="text-gray-500">© {currentYear} Portfolio. All rights reserved.</div>
        </div>
      </Container>
    </>
  );
}
