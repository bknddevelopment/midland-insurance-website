import PaintersPage from './PaintersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painter Insurance Bergen County NJ | Painting Contractor Coverage',
  description: 'Insurance for painters and painting contractors in Bergen County. Coverage for overspray, lead paint, falls from ladders. Competitive quotes available.',
  keywords: 'painter insurance nj, painting contractor insurance bergen county, commercial painter coverage, paint overspray insurance',
  openGraph: {
    title: 'Painter Insurance Bergen County NJ | Painting Contractors',
    description: 'Comprehensive insurance for painting professionals. Protect against overspray damage, lead paint liability, and workplace accidents.',
    url: 'https://midlandinsurance.biz/trades/painters',
    images: [{
      url: '/og/painters-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Painter Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/painters'
  }
};

export default function Page() {
  return <PaintersPage />;
}