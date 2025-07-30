import GarfieldPage from './GarfieldPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Garfield, NJ | Midland Associates',
  description: 'Local insurance services for Garfield, NJ. Personal, business, and construction insurance from trusted Bergen County agents.',
  keywords: 'garfield nj insurance, garfield insurance agency, bergen county insurance, garfield business insurance',
  openGraph: {
    title: 'Garfield, NJ Insurance | Midland Associates',
    description: 'Comprehensive insurance coverage for Garfield families and businesses. Local expertise, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/garfield',
    images: [{
      url: '/og/garfield-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Garfield NJ Insurance Services'
    }],
  },
  alternates: {
    canonical: '/locations/garfield'
  }
};

export default function Page() {
  return <GarfieldPage />;
}