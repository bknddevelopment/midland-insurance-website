import ExcavationContractorsPage from './ExcavationContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excavation Contractor Insurance Bergen County NJ | Excavating Coverage',
  description: 'Specialized insurance for excavation contractors in Bergen County. Underground utility protection, earth movement coverage, heavy equipment insurance.',
  keywords: 'excavation contractor insurance nj, excavating insurance bergen county, utility damage coverage, earth movement insurance',
  openGraph: {
    title: 'Excavation Contractor Insurance | Bergen County Excavators',
    description: 'Complete insurance for excavation contractors. Utility damage protection, subsidence coverage, heavy equipment insurance. Local expertise.',
    url: 'https://midlandinsurance.biz/services/trade-specific/excavation-contractors',
    images: [{
      url: '/og/excavation-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Excavation Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/excavation-contractors'
  }
};

export default function Page() {
  return <ExcavationContractorsPage />;
}