import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Maximilian Kniely - Fullstack Developer Portfolio',
  description: 'Showcasing the projects and skills of Maximilian Kniely, a fullstack developer specializing in web development.',
  keywords: 'Maximilian Kniely, fullstack developer, frontend developer, backend developer, web development, portfolio, projects, software engineer',
  metadataBase: new URL('https://maximilian-kniely.at'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Maximilian Kniely - Fullstack Developer',
    description: 'Showcasing the projects and skills of Maximilian Kniely, a fullstack developer specializing in web development.',
    url: 'https://maximilian-kniely.at',
    siteName: 'Maximilian Kniely Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maximilian Kniely - Fullstack Developer',
    description: 'Showcasing the projects and skills of Maximilian Kniely, a fullstack developer specializing in web development.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </body>
    </html>
  );
}