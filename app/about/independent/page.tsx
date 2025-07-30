import IndependentPage from './IndependentPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Independent Insurance Agency | Midland Associates',
  description: 'Learn the advantages of working with an independent insurance agency. Multiple carriers, unbiased advice, and better coverage options.',
  keywords: 'independent insurance agency, bergen county independent agent, multiple insurance carriers, unbiased insurance advice',
  openGraph: {
    title: 'We\'re Independent - Your Insurance Advantage',
    description: 'Discover why working with an independent agency means better coverage and competitive rates.',
    url: 'https://midlandinsurance.biz/about/independent',
    images: [{
      url: '/og/independent-agency.jpg',
      width: 1200,
      height: 630,
      alt: 'Independent Insurance Agency Benefits'
    }],
  },
  alternates: {
    canonical: '/about/independent'
  }
};

export default function Page() {
  return <IndependentPage />;
}