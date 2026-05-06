import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Container({
  children,
  className,
  as: Tag = 'div', // domyślny tag to 'div'
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'header' | 'footer'; // jeśli potrzeba, można dodać więcej tagów
}) {
  return (
    <Tag className={cn('w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8', className)}>{children}</Tag> // standardowe paddingi i max-width, można dostosować do potrzeb
  );
}
