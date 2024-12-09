import animate from 'tailwindcss-animate';
import type { Config } from 'tailwindcss';

export const config: Config = {
  darkMode: ['class'],
  content: [
    './node_modules/@repo/ui/components/**/*.{ts,tsx}',
    './node_modules/@repo/ui/lib/**/*.{ts,tsx}',
    './node_modules/@repo/ui/index.tsx',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [animate],
};
