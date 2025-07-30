import MasonsPage from './MasonsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mason Insurance Bergen County NJ | Masonry Contractor Coverage',
  description: 'Insurance for masons and masonry contractors in Bergen County. Coverage for structural work, scaffolding risks, stone installation. Get competitive quotes.',
  keywords: 'mason insurance nj, masonry contractor insurance bergen county, bricklayer insurance, concrete contractor coverage',
  openGraph: {
    title: 'Mason Insurance Bergen County NJ | Masonry Contractors',
    description: 'Specialized insurance for masonry professionals. Protect against structural failures, falling objects, and completed operations claims.',
    url: 'https://midlandinsurance.biz/trades/masons',
    images: [{
      url: '/og/masons-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Mason Insurance Bergen County'
    }]
  },
  alternates: {
    canonical: '/trades/masons'
  }
};

export default function Page() {
  return <MasonsPage />;
}