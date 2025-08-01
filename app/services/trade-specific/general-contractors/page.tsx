import GeneralContractorsPage from './GeneralContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Contractor Insurance Bergen County NJ | GC Coverage & Bonds',
  description: 'Comprehensive insurance for general contractors in Bergen County. Project liability, builders risk, subcontractor coverage, and performance bonds. Get a quote today.',
  keywords: 'general contractor insurance nj, gc insurance bergen county, builders risk insurance, contractor liability insurance, performance bonds nj',
  openGraph: {
    title: 'General Contractor Insurance Bergen County | Complete GC Coverage',
    description: 'Protect your construction business with comprehensive general contractor insurance. Coverage for projects, subs, equipment, and more. Local NJ expertise.',
    url: 'https://midlandinsurance.biz/services/trade-specific/general-contractors',
    images: [{
      url: '/og/general-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'General Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/general-contractors'
  }
};

export default function Page() {
  return <GeneralContractorsPage />;
}