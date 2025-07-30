import RamseyPage from './RamseyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Ramsey, NJ | Midland Associates',
  description: 'Trusted insurance agency serving Ramsey, NJ with home, auto, business, and high net worth insurance. Local expertise for Bergen County families.',
  keywords: 'ramsey nj insurance, ramsey insurance agency, bergen county insurance, ramsey home insurance, ramsey business insurance',
  openGraph: {
    title: 'Insurance Agency in Ramsey, NJ | Midland Associates',
    description: 'Local insurance experts serving Ramsey residents and businesses. Comprehensive coverage, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/ramsey',
    images: [{
      url: '/og/ramsey-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Midland Associates Insurance - Serving Ramsey, NJ'
    }],
  },
  alternates: {
    canonical: '/locations/ramsey'
  }
};

export default function Page() {
  return <RamseyPage />;
}