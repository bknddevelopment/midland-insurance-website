import NewarkPage from './NewarkPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Insurance Newark NJ | Cheap Car Insurance Newark | Midland',
  description: 'Get affordable auto insurance in Newark, NJ. Cheap car insurance Newark with coverage for urban drivers. Local agents understand Newark\'s unique insurance needs.',
  keywords: 'auto insurance newark nj, cheap car insurance newark, car insurance newark new jersey, newark auto insurance quotes, affordable insurance newark',
  openGraph: {
    title: 'Auto Insurance Newark NJ | Local Coverage & Savings',
    description: 'Newark auto insurance with local expertise. Get cheap car insurance in Newark, NJ with coverage designed for city drivers. Same-day quotes available.',
    url: 'https://midlandinsurance.biz/locations/newark',
    images: [{
      url: '/og/newark-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Auto Insurance Newark NJ'
    }]
  },
  alternates: {
    canonical: '/locations/newark'
  }
};

export default function Page() {
  return <NewarkPage />;
}