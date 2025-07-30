import ParamusPage from './ParamusPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Paramus NJ | Contractor Coverage | Midland',
  description: 'Local construction insurance in Paramus, NJ. Serving contractors at Garden State Plaza, Paramus Park, and throughout the retail capital. Fast quotes.',
  keywords: 'paramus construction insurance, contractor insurance paramus nj, paramus builders insurance, commercial construction paramus',
  openGraph: {
    title: 'Construction Insurance Paramus NJ | Local Contractor Coverage',
    description: 'Trusted construction insurance agency serving Paramus contractors. Retail construction specialists, competitive rates, local expertise.',
    url: 'https://midlandinsurance.biz/locations/paramus',
    images: [{
      url: '/og/paramus-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Paramus NJ'
    }]
  },
  alternates: {
    canonical: '/locations/paramus'
  }
};

export default function Page() {
  return <ParamusPage />;
}