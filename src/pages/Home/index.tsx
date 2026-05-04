import Button from '@mui/material/Button';
import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import ProjectShowcase from '../../components/ProjectShowcase';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export const Home: FunctionComponent = () => {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <main className="relative h-screen w-full overflow-hidden contact-section">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          src="/videos/sunset_boat_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="pt-16 relative z-1 flex h-full items-center justify-center bg-black/50">
          <Container maxWidth="md" className="text-center text-white">
            <Typography
              variant="h3"
              className="landing_title"
              sx={{
                fontWeight: 'bold',
                fontFamily: 'Georgia, serif',
                fontSize: {
                  xs: '3rem',
                  sm: '4rem',
                  md: '5rem',
                  lg: '7rem',
                },
              }}
            >
              Welcome to My Portfolio
            </Typography>

            <Typography
              variant="h6"
              className="pt-8 pb-4 text-spanish_orange-900/80"
              sx={{
                fontSize: {
                  xs: '1rem',
                  sm: '1.25rem',
                },
              }}
            >
              A place where you can find my projects and informations about myself, my hobbies and
              other stuff.
            </Typography>
            <div className="my-6 text-xl font-light text-white-400">
              <TypeAnimation
                sequence={[
                  '"Pain doesn\'t go away... You just make room for it"',
                  3000,
                  '"Hot diggity dog! This place is magnificent!"',
                  3000,
                  '"Can\'t sacrifice anyone for the greater good because WE ARE greater good"',
                  3000,
                  '"We will see you again my friend"',
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </Container>
        </div>
      </main>

      {/* Projects Section */}
      <ProjectShowcase />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};
