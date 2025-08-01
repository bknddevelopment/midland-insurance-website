import GreenBuildingPage from './GreenBuildingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green Building Insurance Bergen County NJ | Sustainable Construction Coverage',
  description: 'Insurance for green building and sustainable construction in Bergen County. LEED projects, solar installations, energy-efficient buildings. Specialized coverage.',
  keywords: 'green building insurance nj, sustainable construction insurance bergen county, LEED project coverage, solar installation insurance',
  openGraph: {
    title: 'Green Building Insurance Bergen County NJ',
    description: 'Specialized insurance for sustainable construction. LEED certification, solar systems, green materials. Protect your eco-friendly projects.',
    url: 'https://midlandinsurance.biz/services/construction-types/green-building',
    images: [{
      url: '/og/green-building-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Green Building Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types/green-building'
  }
};

export default function Page() {
  return <GreenBuildingPage />;
}