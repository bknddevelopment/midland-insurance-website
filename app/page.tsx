import HomePage from './HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Bergen County NJ | Contractor Coverage Specialists',
  description: 'Bergen County\'s trusted construction insurance agency. Get competitive quotes for general liability, workers comp, equipment coverage. 30+ years protecting NJ contractors.',
  keywords: 'construction insurance bergen county, contractor insurance nj, general liability contractors, workers comp construction, bergen county builder insurance',
  openGraph: {
    title: 'Construction Insurance Specialists | Midland Associates',
    description: 'Protecting Bergen County contractors since 1990. Expert construction insurance with competitive rates from 20+ carriers.',
    url: 'https://midlandinsurance.biz',
    siteName: 'Midland Associates Insurance Services',
    images: [{
      url: '/og/construction-insurance-bergen.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Bergen County'
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
    title: 'Construction Insurance Bergen County | Midland Associates',
    description: 'Expert construction insurance for NJ contractors. Quick quotes, claims support, competitive rates.',
    images: ['/og/construction-insurance-bergen.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  }
};

export default function Page() {
  return <HomePage />;
}