import SpecialtyConstructionPage from './SpecialtyConstructionPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Specialty Construction Insurance Bergen County NJ | Medical & Technical Facilities',
  description: 'Insurance for specialty construction projects in Bergen County. Medical facilities, laboratories, data centers, clean rooms. Technical expertise required.',
  keywords: 'specialty construction insurance nj, medical facility construction bergen county, laboratory construction insurance, data center builder coverage',
  openGraph: {
    title: 'Specialty Construction Insurance Bergen County NJ',
    description: 'Specialized coverage for technical construction projects. Medical, laboratory, data center facilities. Professional liability included.',
    url: 'https://midlandinsurance.biz/services/construction-types/specialty-construction',
    images: [{
      url: '/og/specialty-construction-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Specialty Construction Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types/specialty-construction'
  }
};

export default function Page() {
  return <SpecialtyConstructionPage />;
}