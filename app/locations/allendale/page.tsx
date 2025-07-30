import AllendalePage from './AllendalePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance in Allendale, NJ | Midland Associates',
  description: 'Local insurance agency serving Allendale, NJ. Get personal, business, and construction insurance from trusted Bergen County experts.',
  keywords: 'allendale nj insurance, allendale insurance agency, bergen county insurance, allendale business insurance',
  openGraph: {
    title: 'Allendale, NJ Insurance | Midland Associates',
    description: 'Trusted insurance services for Allendale residents and businesses. Local expertise, competitive rates.',
    url: 'https://midlandinsurance.biz/locations/allendale',
    images: [{
      url: '/og/allendale-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Allendale NJ Insurance Services'
    }],
  },
  alternates: {
    canonical: '/locations/allendale'
  }
};

export default function Page() {
  return <AllendalePage />;
}