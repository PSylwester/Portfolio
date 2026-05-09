import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Container } from '../ui/Container';

export default function Hero() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <Container className="flex flex-col items-center justify-center relative py-50 sm:py-60 lg:py-68">
      <div className="landing_title text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mx-auto ">
        Welcome to My Portfolio
      </div>

      <div className="pt-8 pb-4 xs:text-lg sm:text-xl">
        A place where you can find my projects and informations about myself, my hobbies and other
        stuff.
      </div>
      <div className="my-6 text-xl font-light">
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
  );
}
