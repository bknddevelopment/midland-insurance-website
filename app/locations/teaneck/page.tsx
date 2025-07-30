import TeaneckPage from './TeaneckPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Teaneck, NJ | Midland Associates',
  description: 'Local insurance services for Teaneck, NJ. Personal, business, and construction insurance from trusted Bergen County agents.',
  keywords: 'teaneck nj insurance, teaneck insurance agency, bergen county insurance, teaneck business insurance',
  openGraph: {
    title: 'Teaneck, NJ Insurance | Midland Associates',
    description: 'Comprehensive insurance coverage for Teaneck families and businesses. Local expertise, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/teaneck',
    images: [{
      url: '/og/teaneck-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Teaneck NJ Insurance Services'
    }],
  },
  alternates: {
    canonical: '/locations/teaneck'
  }
};

export default function Page() {
  return <TeaneckPage />;
}