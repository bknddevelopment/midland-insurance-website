import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Midland Associates Insurance Services | Auto, Home & Business Insurance in NJ',
  description: 'Midland Associates Insurance Services provides comprehensive auto, home, and business insurance coverage in New Jersey. Get personalized quotes and expert service since 1990.',
  keywords: 'insurance, auto insurance, home insurance, business insurance, New Jersey, NJ, Upper Saddle River, Midland Associates',
  authors: [{ name: 'Midland Associates Insurance Services' }],
  creator: 'Midland Associates Insurance Services',
  publisher: 'Midland Associates Insurance Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.midlandinsurance.biz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Midland Associates Insurance Services | Auto, Home & Business Insurance in NJ',
    description: 'Midland Associates Insurance Services provides comprehensive auto, home, and business insurance coverage in New Jersey. Get personalized quotes and expert service since 1990.',
    url: 'https://www.midlandinsurance.biz',
    siteName: 'Midland Associates Insurance Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Midland Associates Insurance Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midland Associates Insurance Services | Auto, Home & Business Insurance in NJ',
    description: 'Midland Associates Insurance Services provides comprehensive auto, home, and business insurance coverage in New Jersey. Get personalized quotes and expert service since 1990.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/avif" href="/logo.avif" />
        <link rel="apple-touch-icon" href="/logo.avif" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* SEO Schema Markup */}
        <InsuranceAgencySchema />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 