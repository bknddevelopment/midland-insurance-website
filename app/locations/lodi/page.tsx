import LodiPage from './LodiPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Lodi, NJ | Midland Associates',
  description: 'Local insurance agency serving Lodi, NJ with auto, home, business, and construction insurance. Expert agents, competitive rates, personalized service.',
  keywords: 'lodi nj insurance, lodi insurance agency, bergen county insurance, lodi auto insurance, lodi business insurance',
  openGraph: {
    title: 'Insurance Agency in Lodi, NJ | Midland Associates',
    description: 'Trusted insurance coverage for Lodi residents and businesses. Auto, home, business, and contractor insurance.',
    url: 'https://midlandinsurance.biz/locations/lodi',
    images: [{
      url: '/og/lodi-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Midland Associates Insurance - Serving Lodi, NJ'
    }],
  },
  alternates: {
    canonical: '/locations/lodi'
  }
};

export default function Page() {
  return <LodiPage />;
}