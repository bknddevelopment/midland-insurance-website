import FortLeePage from './FortLeePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Fort Lee NJ | High-Rise Contractor Coverage',
  description: 'Construction insurance in Fort Lee, NJ. Specialized coverage for high-rise construction, luxury residential projects, GWB area development. Get quotes.',
  keywords: 'fort lee construction insurance, high rise contractor insurance nj, fort lee builders insurance, luxury construction insurance',
  openGraph: {
    title: 'Construction Insurance Fort Lee NJ | High-Rise Specialists',
    description: 'Expert construction insurance for Fort Lee\'s booming high-rise market. Luxury residential, mixed-use projects, NYC skyline developments.',
    url: 'https://midlandinsurance.biz/locations/fort-lee',
    images: [{
      url: '/og/fort-lee-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Fort Lee NJ'
    }]
  },
  alternates: {
    canonical: '/locations/fort-lee'
  }
};

export default function Page() {
  return <FortLeePage />;
}