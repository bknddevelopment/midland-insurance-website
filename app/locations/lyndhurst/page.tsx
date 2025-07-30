import LyndhurstPage from './LyndhurstPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Lyndhurst, NJ | Midland Associates',
  description: 'Local insurance agency serving Lyndhurst Township with auto, home, business, and construction insurance. Trusted coverage for Bergen County residents.',
  keywords: 'lyndhurst nj insurance, lyndhurst insurance agency, bergen county insurance, lyndhurst auto insurance, lyndhurst home insurance',
  openGraph: {
    title: 'Insurance Agency in Lyndhurst, NJ | Midland Associates',
    description: 'Comprehensive insurance solutions for Lyndhurst residents and businesses. Expert agents, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/lyndhurst',
    images: [{
      url: '/og/lyndhurst-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Midland Associates Insurance - Serving Lyndhurst, NJ'
    }],
  },
  alternates: {
    canonical: '/locations/lyndhurst'
  }
};

export default function Page() {
  return <LyndhurstPage />;
}