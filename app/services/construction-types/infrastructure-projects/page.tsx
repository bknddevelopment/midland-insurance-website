import InfrastructureProjectsPage from './InfrastructureProjectsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infrastructure Construction Insurance Bergen County NJ | Public Works Coverage',
  description: 'Insurance for infrastructure and public works projects in Bergen County. Roads, bridges, utilities, municipal construction. Bonds and specialized coverage.',
  keywords: 'infrastructure construction insurance nj, public works insurance bergen county, municipal construction coverage, infrastructure project bonds',
  openGraph: {
    title: 'Infrastructure Construction Insurance Bergen County NJ',
    description: 'Specialized coverage for infrastructure projects. Performance bonds, environmental liability, public entity requirements. Local expertise.',
    url: 'https://midlandinsurance.biz/services/construction-types/infrastructure-projects',
    images: [{
      url: '/og/infrastructure-construction-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Infrastructure Construction Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types/infrastructure-projects'
  }
};

export default function Page() {
  return <InfrastructureProjectsPage />;
}