import DrywallContractorsPage from './DrywallContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drywall Contractor Insurance Bergen County NJ | Sheetrock Coverage',
  description: 'Insurance for drywall and sheetrock contractors in Bergen County. Coverage for installation errors, dust damage, scaffolding risks. Get quotes now.',
  keywords: 'drywall contractor insurance nj, sheetrock insurance bergen county, drywall installer coverage, gypsum contractor insurance',
  openGraph: {
    title: 'Drywall Contractor Insurance Bergen County NJ | Complete Coverage',
    description: 'Specialized insurance for drywall professionals. Protect against installation damage, dust claims, and workplace accidents.',
    url: 'https://midlandinsurance.biz/trades/drywall-contractors',
    images: [{
      url: '/og/drywall-contractors-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Drywall Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/drywall-contractors'
  }
};

export default function Page() {
  return <DrywallContractorsPage />;
}