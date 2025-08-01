import PlumbingContractorsPage from './PlumbingContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumbing Contractor Insurance Bergen County NJ | Plumber Coverage',
  description: 'Complete insurance for plumbing contractors in Bergen County. Water damage liability, pipe burst coverage, tools protection, and commercial auto. Get a quote.',
  keywords: 'plumbing contractor insurance nj, plumber insurance bergen county, water damage liability, plumbing business insurance',
  openGraph: {
    title: 'Plumbing Contractor Insurance | Bergen County Plumbers',
    description: 'Specialized insurance for plumbers. Water damage protection, equipment coverage, service line liability. Local expertise since 1980.',
    url: 'https://midlandinsurance.biz/services/trade-specific/plumbing-contractors',
    images: [{
      url: '/og/plumbing-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Plumbing Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/plumbing-contractors'
  }
};

export default function Page() {
  return <PlumbingContractorsPage />;
}