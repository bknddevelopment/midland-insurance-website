import CommercialConstructionPage from './CommercialConstructionPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Construction Insurance Bergen County NJ | Office & Retail Projects',
  description: 'Specialized insurance for commercial construction projects in Bergen County. Builders risk, general liability, equipment coverage. Protect your commercial development.',
  keywords: 'commercial construction insurance nj, bergen county builders risk, commercial contractor insurance, office building insurance',
  openGraph: {
    title: 'Commercial Construction Insurance Bergen County NJ',
    description: 'Complete insurance coverage for commercial construction projects. Office buildings, retail centers, mixed-use developments. Local NJ expertise.',
    url: 'https://midlandinsurance.biz/services/construction-types/commercial-construction',
    images: [{
      url: '/og/commercial-construction-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Commercial Construction Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types/commercial-construction'
  }
};

export default function Page() {
  return <CommercialConstructionPage />;
}