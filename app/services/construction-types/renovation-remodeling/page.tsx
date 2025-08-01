import RenovationRemodelingPage from './RenovationRemodelingPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renovation & Remodeling Insurance Bergen County NJ | Home Improvement Coverage',
  description: 'Insurance for renovation and remodeling contractors in Bergen County. Kitchen, bath, whole-house renovations. Protect against property damage claims.',
  keywords: 'renovation insurance nj, remodeling contractor insurance bergen county, home improvement insurance, kitchen bath contractor coverage',
  openGraph: {
    title: 'Renovation & Remodeling Insurance Bergen County NJ',
    description: 'Specialized coverage for renovation contractors. Existing structure protection, mold coverage, care custody control. Local NJ expertise.',
    url: 'https://midlandinsurance.biz/services/construction-types/renovation-remodeling',
    images: [{
      url: '/og/renovation-remodeling-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Renovation & Remodeling Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types/renovation-remodeling'
  }
};

export default function Page() {
  return <RenovationRemodelingPage />;
}