// src/router/router.tsx
import { FunctionComponent } from 'react';
import Home from '@/pages/Home/HomePage'; // <- Importujemy stronę główną z Home

export const Router: FunctionComponent = () => {
  return (
    <>
      <Home /> {/* Renderujemy cały plik HomePage, który zawiera sekcje */}
    </>
  );
};
