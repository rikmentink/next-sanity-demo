import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity';
import { SanityLive } from '@/lib/sanity/live';

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Revision Digital',
  description: 'We develop business software that adapts to you.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary flex min-h-screen flex-col font-[family-name:var(--font-default)]">
        <Header />
        <main className="flex-grow">
          {children}
          <SanityLive />
          {(await draftMode()).isEnabled && <VisualEditing />}
        </main>
        <Footer />
      </body>
    </html>
  );
}
