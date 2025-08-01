import LandscapingContractorsPage from './LandscapingContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscaping Contractor Insurance Bergen County NJ | Lawn Care Coverage',
  description: 'Complete insurance for landscaping contractors in Bergen County. Pesticide liability, tree work coverage, equipment protection, snow removal insurance.',
  keywords: 'landscaping contractor insurance nj, lawn care insurance bergen county, landscaping business insurance, snow removal insurance nj',
  openGraph: {
    title: 'Landscaping Contractor Insurance | Bergen County Landscapers',
    description: 'Specialized insurance for landscaping contractors. Pesticide coverage, tree damage protection, equipment insurance. Get protected today.',
    url: 'https://midlandinsurance.biz/services/trade-specific/landscaping-contractors',
    images: [{
      url: '/og/landscaping-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Landscaping Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/landscaping-contractors'
  }
};

export default function Page() {
  return <LandscapingContractorsPage />;
}