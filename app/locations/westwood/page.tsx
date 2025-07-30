import WestwoodPage from './WestwoodPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Westwood, NJ | Midland Associates',
  description: 'Local insurance agency serving Westwood, NJ with personal, business, and contractor insurance. Protecting Bergen County families and businesses.',
  keywords: 'westwood nj insurance, westwood insurance agency, bergen county insurance, westwood business insurance, westwood home insurance',
  openGraph: {
    title: 'Insurance Agency in Westwood, NJ | Midland Associates',
    description: 'Expert insurance coverage for Westwood residents and downtown businesses. Local agents, personalized service.',
    url: 'https://midlandinsurance.biz/locations/westwood',
    images: [{
      url: '/og/westwood-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Midland Associates Insurance - Serving Westwood, NJ'
    }],
  },
  alternates: {
    canonical: '/locations/westwood'
  }
};

export default function Page() {
  return <WestwoodPage />;
}