import ConstructionHubPage from './ConstructionHubPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Bergen County NJ | Contractor Coverage | Midland Associates',
  description: 'Comprehensive construction insurance for Bergen County contractors. General liability, workers comp, builders risk, bonds. Get quotes from 20+ carriers. Call (201) 812-2184.',
  keywords: 'construction insurance bergen county, contractor insurance nj, builders risk insurance, general liability contractors, workers comp construction',
  openGraph: {
    title: 'Construction Insurance Bergen County NJ | Contractor Coverage',
    description: 'Protect your Bergen County construction business with comprehensive insurance. Multiple carriers, competitive rates, local expertise since 1990.',
    url: 'https://midlandinsurance.biz/business/construction',
    images: [{
      url: '/og/construction-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/business/construction'
  }
};

export default function Page() {
  return <ConstructionHubPage />;
}