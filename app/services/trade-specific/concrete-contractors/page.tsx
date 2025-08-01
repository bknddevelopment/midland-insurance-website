import ConcreteContractorsPage from './ConcreteContractorsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Concrete Contractor Insurance Bergen County NJ | Foundation Coverage',
  description: 'Specialized insurance for concrete contractors in Bergen County. Foundation liability, equipment breakdown, structural defect coverage. Get protected today.',
  keywords: 'concrete contractor insurance nj, foundation contractor insurance bergen county, concrete liability coverage, concrete business insurance',
  openGraph: {
    title: 'Concrete Contractor Insurance | Bergen County Foundation Specialists',
    description: 'Complete insurance for concrete and foundation contractors. Heavy equipment coverage, structural liability protection. Local NJ expertise.',
    url: 'https://midlandinsurance.biz/services/trade-specific/concrete-contractors',
    images: [{
      url: '/og/concrete-contractor-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Concrete Contractor Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/trade-specific/concrete-contractors'
  }
};

export default function Page() {
  return <ConcreteContractorsPage />;
}