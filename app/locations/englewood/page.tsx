import EnglewoodPage from './EnglewoodPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Englewood, NJ | Midland Associates',
  description: 'Trusted insurance agency serving Englewood, NJ. Personal, business, and construction insurance from local Bergen County experts.',
  keywords: 'englewood nj insurance, englewood insurance agency, bergen county insurance, englewood business insurance',
  openGraph: {
    title: 'Englewood, NJ Insurance | Midland Associates',
    description: 'Comprehensive insurance solutions for Englewood residents and businesses. Local service, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/englewood',
    images: [{
      url: '/og/englewood-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Englewood NJ Insurance Services'
    }],
  },
  alternates: {
    canonical: '/locations/englewood'
  }
};

export default function Page() {
  return <EnglewoodPage />;
}