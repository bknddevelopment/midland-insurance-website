import PlumbersPage from './PlumbersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumber Insurance Bergen County NJ | Plumbing Contractor Coverage',
  description: 'Insurance for plumbers and plumbing contractors in Bergen County. Water damage coverage, liability protection, tools insurance. Get competitive quotes.',
  keywords: 'plumber insurance nj, plumbing contractor insurance bergen county, plumber liability coverage, water damage insurance plumbers',
  openGraph: {
    title: 'Plumber Insurance Bergen County NJ | Plumbing Contractors',
    description: 'Specialized insurance for plumbing professionals. Protection against water damage claims, pipe bursts, and liability. Local expertise, multiple carriers.',
    url: 'https://midlandinsurance.biz/trades/plumbers',
    images: [{
      url: '/og/plumbers-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Plumber Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/plumbers'
  }
};

export default function Page() {
  return <PlumbersPage />;
}