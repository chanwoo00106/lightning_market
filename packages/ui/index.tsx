import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider } from 'next-themes';

type DesignSystemProviderProperties = ThemeProviderProps;

export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    {...properties}
  >
    {children}
  </ThemeProvider>
);
