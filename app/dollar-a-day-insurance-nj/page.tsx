import DollarADayPage from './DollarADayPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dollar a Day Insurance NJ | Affordable Car Insurance New Jersey | Midland',
  description: 'Looking for dollar a day insurance in NJ? Get affordable auto insurance starting at $30/month. Minimum coverage, maximum savings for New Jersey drivers.',
  keywords: 'dollar a day insurance nj, dollar a day insurance, cheap car insurance nj, $30 car insurance nj, minimum coverage nj, affordable auto insurance new jersey',
  openGraph: {
    title: 'Dollar a Day Insurance NJ | Affordable Coverage Starting at $30/Month',
    description: 'Get the most affordable car insurance in New Jersey. Dollar a day coverage with state minimum requirements. Quick quotes, instant proof of insurance.',
    url: 'https://midlandinsurance.biz/dollar-a-day-insurance-nj',
    images: [{
      url: '/og/dollar-a-day-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Dollar a Day Insurance New Jersey'
    }],
  },
  alternates: {
    canonical: '/dollar-a-day-insurance-nj'
  }
};

export default function Page() {
  return <DollarADayPage />;
}