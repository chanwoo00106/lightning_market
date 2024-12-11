import type { Metadata } from 'next';
import '@repo/tailwind-config/global.css';
import { DesignSystemProvider } from '@repo/ui';
import { Pretendard } from './fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={Pretendard.className}>
        <DesignSystemProvider>{children}</DesignSystemProvider>
      </body>
    </html>
  );
}
