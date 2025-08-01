import CliftonPage from './CliftonPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clifton Auto Insurance | Car Insurance Clifton NJ | Midland Associates',
  description: 'Affordable auto insurance in Clifton, NJ. Local agents serving Passaic County with competitive car insurance rates, personalized service, and quick quotes.',
  keywords: 'clifton auto insurance, car insurance clifton nj, clifton car insurance, auto insurance 07011, clifton nj insurance, passaic county auto insurance',
  openGraph: {
    title: 'Auto Insurance Clifton NJ | Local Car Insurance Agency',
    description: 'Trusted auto insurance agency serving Clifton, NJ. Get competitive rates on car insurance from local agents who understand Passaic County drivers.',
    url: 'https://midlandinsurance.biz/locations/clifton',
    images: [{
      url: '/og/clifton-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Auto Insurance Clifton NJ'
    }],
  },
  alternates: {
    canonical: '/locations/clifton'
  }
};

export default function Page() {
  return <CliftonPage />;
}