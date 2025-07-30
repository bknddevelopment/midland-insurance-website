import PolicyReviewPage from './PolicyReviewPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Policy Review | Midland Associates Insurance',
  description: 'Get a complimentary insurance policy review. We\'ll analyze your coverage, identify gaps, and find opportunities to save money while improving protection.',
  keywords: 'insurance policy review, free insurance review, coverage analysis, bergen county insurance review',
  openGraph: {
    title: 'Free Insurance Policy Review | Midland Associates',
    description: 'Complimentary policy review to ensure proper coverage and identify savings opportunities.',
    url: 'https://midlandinsurance.biz/policy-review',
    images: [{
      url: '/og/policy-review.jpg',
      width: 1200,
      height: 630,
      alt: 'Free Insurance Policy Review'
    }],
  },
  alternates: {
    canonical: '/policy-review'
  }
};

export default function Page() {
  return <PolicyReviewPage />;
}