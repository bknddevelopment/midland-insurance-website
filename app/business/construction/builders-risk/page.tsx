import BuildersRiskPage from './BuildersRiskPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Builder\'s Risk Insurance Bergen County NJ | Course of Construction | Midland',
  description: 'Builder\'s risk insurance for new construction and renovations in Bergen County. Protect buildings, materials, and equipment during construction. Free quotes.',
  keywords: 'builders risk insurance nj, course of construction coverage, construction all risk bergen county, builders risk insurance cost',
  openGraph: {
    title: 'Builder\'s Risk Insurance Bergen County NJ | Construction Coverage',
    description: 'Comprehensive builder\'s risk coverage for construction projects. Protect structures, materials, and equipment from theft, weather, and damage.',
    url: 'https://midlandinsurance.biz/business/construction/builders-risk',
    images: [{
      url: '/og/builders-risk-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Builder\'s Risk Insurance Coverage'
    }]
  },
  alternates: {
    canonical: '/business/construction/builders-risk'
  }
};

export default function Page() {
  return <BuildersRiskPage />;
}