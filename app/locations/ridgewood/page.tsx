import RidgewoodPage from './RidgewoodPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Ridgewood NJ | Historic Village Coverage',
  description: 'Construction insurance in Ridgewood, NJ. Coverage for historic renovations, custom homes, downtown development. Local expertise since 1990.',
  keywords: 'ridgewood construction insurance, contractor insurance ridgewood nj, historic renovation insurance, custom home builder insurance',
  openGraph: {
    title: 'Construction Insurance Ridgewood NJ | Historic & Custom Homes',
    description: 'Specialized construction insurance for Ridgewood\'s historic district and custom home market. Expert coverage for high-end residential projects.',
    url: 'https://midlandinsurance.biz/locations/ridgewood',
    images: [{
      url: '/og/ridgewood-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Ridgewood NJ'
    }]
  },
  alternates: {
    canonical: '/locations/ridgewood'
  }
};

export default function Page() {
  return <RidgewoodPage />;
}