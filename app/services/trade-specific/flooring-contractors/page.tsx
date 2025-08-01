import FlooringContractorsPage from './FlooringContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flooring Contractor Insurance Bergen County NJ | Floor Installer Coverage',
  description: 'Specialized insurance for flooring contractors in Bergen County. Installation error coverage, material defect protection, subfloor damage liability. Get protected.',
  keywords: 'flooring contractor insurance nj, floor installer insurance bergen county, flooring business insurance, tile carpet hardwood insurance',
  openGraph: {
    title: 'Flooring Contractor Insurance | Bergen County Floor Installers',
    description: 'Complete insurance for flooring contractors. Installation coverage, equipment protection, material defect liability. Expert local service.',
    url: 'https://midlandinsurance.biz/services/trade-specific/flooring-contractors',
    images: [{
      url: '/og/flooring-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Flooring Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/flooring-contractors'
  }
};

export default function Page() {
  return <FlooringContractorsPage />;
}