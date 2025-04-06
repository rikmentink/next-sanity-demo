import type { Metadata } from 'next';

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Revision Digital',
  description: 'We develop business software that adapts to you.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary flex min-h-screen flex-col font-[family-name:var(--font-default)]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
