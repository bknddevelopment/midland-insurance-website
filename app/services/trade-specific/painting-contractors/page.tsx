import PaintingContractorsPage from './PaintingContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painting Contractor Insurance Bergen County NJ | Painter Coverage',
  description: 'Complete insurance for painting contractors in Bergen County. Overspray coverage, lead paint liability, surface damage protection. Get a quote today.',
  keywords: 'painting contractor insurance nj, painter insurance bergen county, painting business insurance, overspray coverage nj',
  openGraph: {
    title: 'Painting Contractor Insurance | Bergen County Painters',
    description: 'Specialized insurance for painting contractors. Overspray protection, lead paint coverage, equipment protection. Local expertise since 1980.',
    url: 'https://midlandinsurance.biz/services/trade-specific/painting-contractors',
    images: [{
      url: '/og/painting-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Painting Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/painting-contractors'
  }
};

export default function Page() {
  return <PaintingContractorsPage />;
}