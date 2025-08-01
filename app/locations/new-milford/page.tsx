import NewMilfordPage from './NewMilfordPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Milford Auto Insurance | Car Insurance New Milford NJ | Midland Associates',
  description: 'Affordable auto insurance in New Milford, NJ. Local agents serving Bergen County with competitive car insurance rates for small town drivers and families.',
  keywords: 'new milford auto insurance, car insurance new milford nj, new milford car insurance, auto insurance 07646, new milford nj insurance, bergen county auto insurance',
  openGraph: {
    title: 'Auto Insurance New Milford NJ | Local Car Insurance Agency',
    description: 'Trusted auto insurance agency serving New Milford, NJ. Small town service, competitive rates, and personalized coverage for Bergen County drivers.',
    url: 'https://midlandinsurance.biz/locations/new-milford',
    images: [{
      url: '/og/new-milford-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Auto Insurance New Milford NJ'
    }],
  },
  alternates: {
    canonical: '/locations/new-milford'
  }
};

export default function Page() {
  return <NewMilfordPage />;
}