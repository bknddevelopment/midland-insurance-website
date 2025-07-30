import MahwahPage from './MahwahPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Mahwah NJ | Commercial Contractor Coverage',
  description: 'Construction insurance in Mahwah, NJ. Coverage for commercial development, corporate campus projects, Route 17 corridor. Get competitive quotes.',
  keywords: 'mahwah construction insurance, contractor insurance mahwah nj, commercial construction insurance, corporate campus insurance',
  openGraph: {
    title: 'Construction Insurance Mahwah NJ | Commercial Development',
    description: 'Expert construction insurance for Mahwah\'s corporate corridor. Coverage for office parks, commercial projects, and infrastructure development.',
    url: 'https://midlandinsurance.biz/locations/mahwah',
    images: [{
      url: '/og/mahwah-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Mahwah NJ'
    }]
  },
  alternates: {
    canonical: '/locations/mahwah'
  }
};

export default function Page() {
  return <MahwahPage />;
}