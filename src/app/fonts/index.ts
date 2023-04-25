import { Inter, Recursive, Sono } from 'next/font/google';

export const recursive = Recursive({
  subsets: ['latin'],
  axes: ['CASL', 'slnt'],
});

export const inter = Inter({
  subsets: ['latin'],
});

export const sono = Sono({
  subsets: ['latin'],
  axes: ['MONO'],
});

export * from './Redaction';
