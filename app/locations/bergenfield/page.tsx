import BergenfieldPage from './BergenfieldPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bergenfield Auto Insurance | Car Insurance Bergenfield NJ | Midland Associates',
  description: 'Get affordable auto insurance in Bergenfield, NJ. Local agents serving Bergen County with competitive car insurance rates and personalized service for families.',
  keywords: 'bergenfield auto insurance, car insurance bergenfield nj, bergenfield car insurance, auto insurance 07621, bergenfield nj insurance, bergen county auto insurance',
  openGraph: {
    title: 'Auto Insurance Bergenfield NJ | Local Car Insurance Agency',
    description: 'Trusted auto insurance agency serving Bergenfield, NJ. Family-friendly coverage, competitive rates, and local expertise in Bergen County.',
    url: 'https://midlandinsurance.biz/locations/bergenfield',
    images: [{
      url: '/og/bergenfield-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Auto Insurance Bergenfield NJ'
    }],
  },
  alternates: {
    canonical: '/locations/bergenfield'
  }
};

export default function Page() {
  return <BergenfieldPage />;
}