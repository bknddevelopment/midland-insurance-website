import { Metadata } from 'next';
import ConstructionTypesIndex from './ConstructionTypesIndex';

export const metadata: Metadata = {
  title: 'Construction Types Insurance Bergen County NJ | Commercial, Residential & More',
  description: 'Specialized insurance for all construction types in Bergen County. Commercial, residential, industrial, infrastructure, renovation, green building, and emergency restoration.',
  keywords: 'construction insurance bergen county, construction types coverage nj, commercial construction insurance, residential builder insurance',
  openGraph: {
    title: 'Construction Types Insurance Bergen County NJ',
    description: 'Complete insurance solutions for every type of construction project. From commercial buildings to emergency restoration. Local expertise.',
    url: 'https://midlandinsurance.biz/services/construction-types',
    images: [{
      url: '/og/construction-types-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Types Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types'
  }
};

export default function Page() {
  return <ConstructionTypesIndex />;
}