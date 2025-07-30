import LandscapersPage from './LandscapersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscaper Insurance Bergen County NJ | Landscaping Contractor Coverage',
  description: 'Insurance for landscapers and lawn care contractors in Bergen County. Coverage for equipment, pesticide application, tree work. Get competitive quotes.',
  keywords: 'landscaper insurance nj, landscaping contractor insurance bergen county, lawn care insurance, tree service coverage',
  openGraph: {
    title: 'Landscaper Insurance Bergen County NJ | Landscaping Contractors',
    description: 'Complete insurance coverage for landscaping professionals. Protect against property damage, chemical liability, and equipment loss.',
    url: 'https://midlandinsurance.biz/trades/landscapers',
    images: [{
      url: '/og/landscapers-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Landscaper Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/landscapers'
  }
};

export default function Page() {
  return <LandscapersPage />;
}