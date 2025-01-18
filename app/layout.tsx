import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'My Tailwind Project',
  description: 'My Tailwind Project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${roboto.className} flex h-full min-h-screen flex-col antialiased`}
      >
        <header>
          <Header />
        </header>
        <main className="h-full flex-1">{children}</main>
      </body>
    </html>
  );
}
