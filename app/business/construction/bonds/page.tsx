import BondsPage from './BondsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractor Bonds NJ | License Bonds | Performance Bonds Bergen County',
  description: 'Contractor license bonds, performance bonds, and payment bonds for New Jersey construction. Fast approval, competitive rates. Required for permits and contracts.',
  keywords: 'contractor bonds nj, license bonds bergen county, performance bonds construction, payment bonds contractors, bid bonds new jersey',
  openGraph: {
    title: 'Contractor Bonds NJ | License, Performance & Payment Bonds',
    description: 'Get contractor bonds required for NJ licenses, permits, and construction contracts. Same-day approval available. Competitive rates for all bond types.',
    url: 'https://midlandinsurance.biz/business/construction/bonds',
    images: [{
      url: '/og/contractor-bonds.jpg',
      width: 1200,
      height: 630,
      alt: 'Contractor Bonds New Jersey'
    }]
  },
  alternates: {
    canonical: '/business/construction/bonds'
  }
};

export default function Page() {
  return <BondsPage />;
}