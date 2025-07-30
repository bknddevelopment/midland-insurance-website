import BergenCountyPage from './BergenCountyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Bergen County NJ | Contractor Coverage | Midland',
  description: 'Local construction insurance throughout Bergen County, NJ. Serving Hackensack, Fort Lee, Paramus, Ridgewood, and all 70 municipalities. Get quotes today.',
  keywords: 'bergen county construction insurance, contractor insurance bergen county nj, bergen county builders insurance, commercial construction insurance bergen',
  openGraph: {
    title: 'Construction Insurance Bergen County NJ | Local Coverage',
    description: 'Trusted construction insurance agency serving all of Bergen County since 1990. Local expertise, competitive rates, same-day certificates.',
    url: 'https://midlandinsurance.biz/locations/bergen-county',
    images: [{
      url: '/og/bergen-county-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/locations/bergen-county'
  }
};

export default function Page() {
  return <BergenCountyPage />;
}