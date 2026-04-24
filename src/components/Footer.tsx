import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { FunctionComponent } from 'react';

interface SocialLink {
  platform: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: '#' },
  { platform: 'LinkedIn', url: '#' },
  { platform: 'Twitter', url: '#' },
];

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section bg-gray-900 text-white py-12">
      <Container maxWidth="lg" className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <Typography variant="h6" gutterBottom className="footer-title text-xl mb-4">
              Portfolio
            </Typography>
            <Typography variant="body2" className="text-gray-400 leading-relaxed">
              A place where you can find my projects and information about myself, my hobbies, and
              other stuff.
            </Typography>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h6" gutterBottom className="text-lg font-semibold mb-4">
              Quick Links
            </Typography>
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
            <Typography variant="h6" gutterBottom className="text-lg font-semibold mb-4">
              Connect With Me
            </Typography>
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
          <Typography variant="body2" className="text-gray-500">
            © {currentYear} Portfolio. All rights reserved.
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
