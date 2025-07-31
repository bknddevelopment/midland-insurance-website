import ContractorsInsurancePage from './ContractorsInsurancePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractors Insurance NJ | General Liability & Workers Comp',
  description: 'Complete contractors insurance packages for New Jersey construction businesses. General liability, workers comp, tools coverage, and more. Get a quote today.',
  keywords: 'contractors insurance, construction insurance nj, general liability contractors, workers comp construction, bergen county contractors insurance',
  openGraph: {
    title: 'Contractors Insurance | Midland Associates',
    description: 'Specialized insurance packages for contractors. Complete coverage for construction businesses in Bergen County and throughout New Jersey.',
    url: 'https://midlandinsurance.biz/business/contractors',
    images: [{
      url: '/og/contractors-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Contractors Insurance Coverage'
    }]
  },
  alternates: {
    canonical: '/business/contractors'
  }
};

export default function Page() {
  return <ContractorsInsurancePage />;
}