import { FunctionComponent } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact } from '@/pages';
import { ScrollToTop } from './ScrollToTop';

export const Router: FunctionComponent = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </>
  );
};
