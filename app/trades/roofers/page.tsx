import RoofersPage from './RoofersPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofer Insurance Bergen County NJ | Roofing Contractor Coverage',
  description: 'Specialized insurance for roofing contractors in Bergen County. High-risk coverage, workers comp, fall protection. Competitive rates for roofers.',
  keywords: 'roofer insurance nj, roofing contractor insurance bergen county, roofer liability coverage, roofing workers compensation',
  openGraph: {
    title: 'Roofer Insurance Bergen County NJ | Roofing Contractors',
    description: 'Complete insurance coverage for roofing professionals. Protection for falls, property damage, and weather claims. Expert high-risk coverage.',
    url: 'https://midlandinsurance.biz/trades/roofers',
    images: [{
      url: '/og/roofers-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Roofer Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/roofers'
  }
};

export default function Page() {
  return <RoofersPage />;
}