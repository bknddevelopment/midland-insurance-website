import GeneralContractorGuidePost from './GeneralContractorGuidePost';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Complete Guide to General Contractor Insurance in NJ | Midland',
  description: 'Everything Bergen County general contractors need to know about insurance requirements, coverage options, and cost-saving strategies in New Jersey.',
  keywords: 'general contractor insurance nj, gc insurance guide, bergen county contractor coverage, general contractor requirements',
  openGraph: {
    title: 'The Complete Guide to General Contractor Insurance in NJ',
    description: 'Comprehensive guide for general contractors on insurance requirements, coverage types, and strategies specific to New Jersey.',
    url: 'https://midlandinsurance.biz/blog/general-contractor-insurance-guide',
    images: [{
      url: '/og/general-contractor-insurance-guide.jpg',
      width: 1200,
      height: 630,
      alt: 'General Contractor Insurance Guide'
    }],
    type: 'article',

    publishedTime: '2024-03-10',
    authors: ['Midland Associates'],
    tags: ['general contractor', 'insurance guide', 'new jersey', 'bergen county'],
  },
  alternates: {
    canonical: '/blog/general-contractor-insurance-guide'
  }
};

export default function Page() {
  return <GeneralContractorGuidePost />;
}