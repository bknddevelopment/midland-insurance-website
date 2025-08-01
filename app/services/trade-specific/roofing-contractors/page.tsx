import RoofingContractorsPage from './RoofingContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Contractor Insurance Bergen County NJ | Roofer Coverage',
  description: 'Comprehensive insurance for roofing contractors in Bergen County. Height work coverage, weather damage protection, warranty liability. Get a quote today.',
  keywords: 'roofing contractor insurance nj, roofer insurance bergen county, roofing liability coverage, roofing business insurance',
  openGraph: {
    title: 'Roofing Contractor Insurance | Bergen County Roofers',
    description: 'Specialized insurance for roofing contractors. Fall protection, storm damage coverage, equipment protection. Local expertise for NJ roofers.',
    url: 'https://midlandinsurance.biz/services/trade-specific/roofing-contractors',
    images: [{
      url: '/og/roofing-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Roofing Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/roofing-contractors'
  }
};

export default function Page() {
  return <RoofingContractorsPage />;
}