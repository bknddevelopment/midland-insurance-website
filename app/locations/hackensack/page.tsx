import HackensackPage from './HackensackPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Hackensack NJ | Contractor Coverage | Midland',
  description: 'Construction insurance in Hackensack, NJ - Bergen County seat. Coverage for downtown development, medical facilities, government projects. Get quotes.',
  keywords: 'hackensack construction insurance, contractor insurance hackensack nj, hackensack builders insurance, commercial construction hackensack',
  openGraph: {
    title: 'Construction Insurance Hackensack NJ | County Seat Coverage',
    description: 'Local construction insurance for Hackensack contractors. Downtown development, medical construction, government projects. Expert coverage since 1990.',
    url: 'https://midlandinsurance.biz/locations/hackensack',
    images: [{
      url: '/og/hackensack-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Hackensack NJ'
    }]
  },
  alternates: {
    canonical: '/locations/hackensack'
  }
};

export default function Page() {
  return <HackensackPage />;
}