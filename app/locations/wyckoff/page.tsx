import WyckoffPage from './WyckoffPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Wyckoff, NJ | Midland Associates',
  description: 'Trusted insurance agency serving Wyckoff, NJ. Personal, business, and construction insurance from local Bergen County experts.',
  keywords: 'wyckoff nj insurance, wyckoff insurance agency, bergen county insurance, wyckoff business insurance',
  openGraph: {
    title: 'Wyckoff, NJ Insurance | Midland Associates',
    description: 'Comprehensive insurance solutions for Wyckoff residents and businesses. Local service, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/wyckoff',
    images: [{
      url: '/og/wyckoff-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Wyckoff NJ Insurance Services'
    }],
  },
  alternates: {
    canonical: '/locations/wyckoff'
  }
};

export default function Page() {
  return <WyckoffPage />;
}