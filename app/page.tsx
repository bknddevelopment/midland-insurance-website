import HomePage from './HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Agency Bergen County NJ | Midland Associates Insurance',
  description: 'Bergen County\'s trusted insurance agency since 1990. Personal, commercial, and specialty insurance solutions. Get competitive quotes from 20+ top-rated carriers.',
  keywords: 'insurance bergen county, insurance agency nj, personal insurance, commercial insurance, home insurance, auto insurance, business insurance bergen county',
  openGraph: {
    title: 'Midland Associates Insurance | Your Trusted Insurance Partner',
    description: 'Protecting Bergen County families and businesses since 1990. Expert insurance solutions with competitive rates from 20+ carriers.',
    url: 'https://midlandinsurance.biz',
    siteName: 'Midland Associates Insurance Services',
    images: [{
      url: '/og/midland-insurance-bergen.jpg',
      width: 1200,
      height: 630,
      alt: 'Midland Associates Insurance Bergen County'
    }],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/'
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
  twitter: {
    card: 'summary_large_image',
    title: 'Midland Associates Insurance | Bergen County NJ',
    description: 'Expert insurance solutions for families and businesses. Quick quotes, claims support, competitive rates.',
    images: ['/og/midland-insurance-bergen.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  }
};

export default function Page() {
  return <HomePage />;
}