import HVACContractorsPage from './HVACContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Contractor Insurance Bergen County NJ | Heating & Cooling Coverage',
  description: 'Insurance for HVAC contractors in Bergen County. Coverage for installation errors, refrigerant liability, equipment damage. Competitive quotes available.',
  keywords: 'hvac contractor insurance nj, hvac insurance bergen county, heating cooling contractor coverage, air conditioning insurance',
  openGraph: {
    title: 'HVAC Contractor Insurance Bergen County NJ | Complete Coverage',
    description: 'Specialized insurance for heating and cooling contractors. Protect against equipment damage, refrigerant leaks, and installation errors.',
    url: 'https://midlandinsurance.biz/trades/hvac-contractors',
    images: [{
      url: '/og/hvac-contractors-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'HVAC Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/hvac-contractors'
  }
};

export default function Page() {
  return <HVACContractorsPage />;
}