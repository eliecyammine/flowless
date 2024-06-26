import { default as TailwindIndicator } from '@/components/others/tailwind-indicator';
import { ThemeProvider } from '@/components/providers/theme-provider';

import '@flowless/tailwind-config/globals.css';
import { cn } from '@flowless/ui/cn';

import { fontLogo, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';

export { metadata } from './metadata';

export { viewport } from './viewport';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface RootLayoutProps {
  children: React.ReactNode;
}

/// ---------- || ROOT LAYOUT || ---------- ///

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn(
          fontLogo.variable,
          fontSans.variable,
          fontMono.variable,
          'font-sans antialiased',
        )}
      >
        <ThemeProvider>
          {children}

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
