import ElectricalContractorsPage from './ElectricalContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical Contractor Insurance Bergen County NJ | Electrician Coverage',
  description: 'Specialized insurance for electrical contractors in Bergen County. Coverage for electrical fires, shock liability, tools, and commercial vehicles. Get protected today.',
  keywords: 'electrical contractor insurance nj, electrician insurance bergen county, electrical business insurance, electrician liability coverage',
  openGraph: {
    title: 'Electrical Contractor Insurance | Bergen County Electricians',
    description: 'Comprehensive insurance for electrical contractors. Fire and shock liability, professional coverage, tools protection. Local expertise, competitive rates.',
    url: 'https://midlandinsurance.biz/services/trade-specific/electrical-contractors',
    images: [{
      url: '/og/electrical-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Electrical Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/electrical-contractors'
  }
};

export default function Page() {
  return <ElectricalContractorsPage />;
}