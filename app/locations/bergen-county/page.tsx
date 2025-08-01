import BergenCountyPage from './BergenCountyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bergen County Auto Insurance | Car Insurance Bergen County NJ | Midland',
  description: 'Affordable auto insurance throughout Bergen County, NJ. Serving all 70 municipalities including Hackensack, Fort Lee, Paramus, and Ridgewood. Get quotes today.',
  keywords: 'bergen county auto insurance, car insurance bergen county nj, bergen county car insurance, auto insurance bergen county, cheap car insurance bergen county',
  openGraph: {
    title: 'Auto Insurance Bergen County NJ | 70 Towns Covered',
    description: 'Trusted auto insurance agency serving all of Bergen County. Local expertise, competitive rates, and personalized service since 1989.',
    url: 'https://midlandinsurance.biz/locations/bergen-county',
    images: [{
      url: '/og/bergen-county-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Auto Insurance Bergen County NJ'
    }]
  },
  alternates: {
    canonical: '/locations/bergen-county'
  }
};

export default function Page() {
  return <BergenCountyPage />;
}