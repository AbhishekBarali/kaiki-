import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KAIKI - AI Intelligence Lab',
  description: 'Building next-generation AI tools for personal growth and wellness.',
  keywords: ['AI', 'artificial intelligence', 'wellness', 'technology', 'KAIKI'],
  authors: [{ name: 'Abhishek Barali' }],
  openGraph: {
    title: 'KAIKI - AI Intelligence Lab',
    description: 'Building next-generation AI tools for personal growth and wellness.',
    url: 'https://kaiki.dev',
    siteName: 'KAIKI',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KAIKI - AI Intelligence Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAIKI - AI Intelligence Lab',
    description: 'Building next-generation AI tools for personal growth and wellness.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <SmoothScrollProvider>
          {/* Noise Overlay */}
          <div className="noise-overlay" aria-hidden="true" />

          {/* Decorative Lines */}
          <div className="fixed top-0 left-6 md:left-12 h-full w-[1px] bg-white/5 z-40 hidden md:block" aria-hidden="true" />
          <div className="fixed top-0 right-6 md:right-12 h-full w-[1px] bg-white/5 z-40 hidden md:block" aria-hidden="true" />

          <Header />
          <main className="relative w-full min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
