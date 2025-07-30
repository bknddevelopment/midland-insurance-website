import UpperSaddleRiverPage from './UpperSaddleRiverPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Upper Saddle River NJ | Midland Associates Headquarters',
  description: 'Visit Midland Associates headquarters in Upper Saddle River, NJ. Local insurance agency serving Bergen County with auto, home, business, and construction insurance since 1974.',
  keywords: 'upper saddle river insurance, insurance agency upper saddle river nj, midland associates headquarters, bergen county insurance office',
  openGraph: {
    title: 'Upper Saddle River Insurance | Midland Associates Headquarters',
    description: 'Local insurance agency headquarters in Upper Saddle River, NJ. Serving Bergen County with personalized insurance solutions.',
    url: 'https://midlandinsurance.biz/locations/upper-saddle-river',
    images: [{
      url: '/og/upper-saddle-river.jpg',
      width: 1200,
      height: 630,
      alt: 'Midland Associates Upper Saddle River Office'
    }]
  },
  alternates: {
    canonical: '/locations/upper-saddle-river'
  }
};

export default function Page() {
  return <UpperSaddleRiverPage />;
}