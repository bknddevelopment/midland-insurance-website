import FairLawnPage from './FairLawnPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Fair Lawn, NJ | Midland Associates',
  description: 'Local insurance services for Fair Lawn, NJ. Personal, business, and construction insurance from trusted Bergen County agents.',
  keywords: 'fair lawn nj insurance, fair lawn insurance agency, bergen county insurance, fair lawn business insurance',
  openGraph: {
    title: 'Fair Lawn, NJ Insurance | Midland Associates',
    description: 'Comprehensive insurance coverage for Fair Lawn families and businesses. Local expertise, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/fair-lawn',
    images: [{
      url: '/og/fair-lawn-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Fair Lawn NJ Insurance Services'
    }],
  },
  alternates: {
    canonical: '/locations/fair-lawn'
  }
};

export default function Page() {
  return <FairLawnPage />;
}