import type {Metadata} from 'next';
import {Roboto, Merriweather} from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'Personal Blog',
  description: 'A personal blog built with Next.js',
  metadataBase: new URL('https://your-blog-url.com'),
  themeColor: '#FFFFFF',
  openGraph: {
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${merriweather.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
