import CaseStudiesPage from './CaseStudiesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Case Studies | Bergen County Success Stories',
  description: 'Real case studies showing how Midland Associates solved insurance challenges for Bergen County contractors. See proven results and cost savings.',
  keywords: 'construction insurance case studies, contractor success stories, insurance cost reduction, bergen county case studies, claims advocacy examples',
  openGraph: {
    title: 'Case Studies | Construction Insurance Success Stories',
    description: 'See how we\'ve helped Bergen County contractors save money, resolve claims, and grow their businesses.',
    url: 'https://midlandinsurance.biz/case-studies',
    images: [{
      url: '/og/case-studies-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Case Studies'
    }]
  },
  alternates: {
    canonical: '/case-studies'
  }
};

export default function Page() {
  return <CaseStudiesPage />;
}