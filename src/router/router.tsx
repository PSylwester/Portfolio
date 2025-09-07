import { FunctionComponent } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact } from '@/pages';

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  );
};
