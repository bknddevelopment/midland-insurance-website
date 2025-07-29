import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "Midland Associates Insurance Services LLC",
              "image": "https://www.midlandinsurance.biz/logo.png",
              "url": "https://www.midlandinsurance.biz",
              "telephone": "(201) 812-2184",
              "email": "Service@midlandinsurance.biz",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "345 RT 17 STE 22",
                "addressLocality": "Upper Saddle River",
                "addressRegion": "NJ",
                "postalCode": "07458",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.0584,
                "longitude": -74.1048
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/MidlandInsurance",
                "https://www.linkedin.com/company/midland-associates-insurance"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 