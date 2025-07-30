import LodiPage from './LodiPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Lodi, NJ | Midland Associates',
  description: 'Trusted insurance services for Lodi, NJ. Personal, business, and construction insurance from local Bergen County experts.',
  keywords: 'lodi nj insurance, lodi insurance agency, bergen county insurance, lodi business insurance',
  openGraph: {
    title: 'Lodi, NJ Insurance | Midland Associates',
    description: 'Complete insurance solutions for Lodi residents and businesses. Local service, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/lodi',
    images: [{
      url: '/og/lodi-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Lodi NJ Insurance Services'
    }],
  },
  alternates: {
    canonical: '/locations/lodi'
  }
};

export default function Page() {
  return <LodiPage />;
}