import GeneralContractorsPage from './GeneralContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Contractor Insurance Bergen County NJ | GC Insurance Quotes',
  description: 'Comprehensive insurance for general contractors in Bergen County. General liability, builders risk, bonds, workers comp. 20+ carriers, competitive rates.',
  keywords: 'general contractor insurance nj, gc insurance bergen county, general contractor liability insurance, commercial general contractor insurance',
  openGraph: {
    title: 'General Contractor Insurance Bergen County NJ | Complete Coverage',
    description: 'Specialized insurance solutions for general contractors. Bundle GL, workers comp, commercial auto, and bonds. Local expertise since 1990.',
    url: 'https://midlandinsurance.biz/trades/general-contractors',
    images: [{
      url: '/og/general-contractors-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'General Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/general-contractors'
  }
};

export default function Page() {
  return <GeneralContractorsPage />;
}