import ResidentialConstructionPage from './ResidentialConstructionPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Construction Insurance Bergen County NJ | Home Builders Coverage',
  description: 'Insurance for residential construction and home builders in Bergen County. Custom homes, renovations, multi-family projects. Protect your building business.',
  keywords: 'residential construction insurance nj, home builder insurance bergen county, residential contractor coverage, new home construction insurance',
  openGraph: {
    title: 'Residential Construction Insurance Bergen County NJ',
    description: 'Comprehensive insurance for home builders and residential contractors. Custom homes, renovations, spec homes. Local Bergen County expertise.',
    url: 'https://midlandinsurance.biz/services/construction-types/residential-construction',
    images: [{
      url: '/og/residential-construction-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Residential Construction Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/services/construction-types/residential-construction'
  }
};

export default function Page() {
  return <ResidentialConstructionPage />;
}