import ConstructionInsuranceGuide from './ConstructionInsuranceGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Guide to Construction Insurance in Bergen County NJ 2024',
  description: 'Everything contractors need to know about construction insurance in Bergen County. Coverage types, costs, requirements, and expert tips. 30+ years experience.',
  keywords: 'construction insurance guide, bergen county contractor insurance, nj construction insurance requirements, contractor insurance costs',
  openGraph: {
    title: 'The Complete Guide to Construction Insurance in Bergen County',
    description: 'Comprehensive guide covering all aspects of construction insurance for NJ contractors. Expert insights from 30+ years serving Bergen County.',
    url: 'https://midlandinsurance.biz/resources/construction-insurance-guide',
    images: [{
      url: '/og/construction-insurance-guide.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Guide Bergen County'
    }]
  },
  alternates: {
    canonical: '/resources/construction-insurance-guide'
  }
};

export default function Page() {
  return <ConstructionInsuranceGuide />;
}