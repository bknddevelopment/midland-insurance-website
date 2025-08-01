import JerseyCityPage from './JerseyCityPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Insurance Jersey City | Auto Insurance Jersey City NJ | Midland',
  description: 'Get affordable car insurance in Jersey City, NJ. Auto insurance Jersey City with coverage for urban drivers. Local agents, competitive rates, same-day coverage.',
  keywords: 'car insurance jersey city, auto insurance jersey city nj, jersey city car insurance, cheap auto insurance jersey city, jersey city insurance agents',
  openGraph: {
    title: 'Car Insurance Jersey City | Local Coverage & Savings',
    description: 'Jersey City car insurance with local expertise. Get affordable auto insurance designed for Hudson County drivers. Multiple carriers, best rates.',
    url: 'https://midlandinsurance.biz/locations/jersey-city',
    images: [{
      url: '/og/jersey-city-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Car Insurance Jersey City NJ'
    }]
  },
  alternates: {
    canonical: '/locations/jersey-city'
  }
};

export default function Page() {
  return <JerseyCityPage />;
}