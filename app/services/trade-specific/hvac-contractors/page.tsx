import HVACContractorsPage from './HVACContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Contractor Insurance Bergen County NJ | Heating & Cooling Coverage',
  description: 'Specialized insurance for HVAC contractors in Bergen County. Coverage for refrigerant liability, equipment installation, carbon monoxide risks. Get protected.',
  keywords: 'hvac contractor insurance nj, heating cooling insurance bergen county, hvac liability coverage, air conditioning contractor insurance',
  openGraph: {
    title: 'HVAC Contractor Insurance | Bergen County Heating & Cooling',
    description: 'Complete insurance for HVAC contractors. Refrigerant liability, installation coverage, equipment protection. Expert local service since 1980.',
    url: 'https://midlandinsurance.biz/services/trade-specific/hvac-contractors',
    images: [{
      url: '/og/hvac-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'HVAC Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/hvac-contractors'
  }
};

export default function Page() {
  return <HVACContractorsPage />;
}