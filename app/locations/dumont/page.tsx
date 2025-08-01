import DumontPage from './DumontPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumont Auto Insurance | Car Insurance Dumont NJ | Midland Associates',
  description: 'Affordable auto insurance in Dumont, NJ. Local agents serving Bergen County with competitive car insurance rates for families and safe neighborhood discounts.',
  keywords: 'dumont auto insurance, car insurance dumont nj, dumont car insurance, auto insurance 07628, dumont nj insurance, bergen county car insurance',
  openGraph: {
    title: 'Auto Insurance Dumont NJ | Local Car Insurance Agency',
    description: 'Trusted auto insurance agency serving Dumont, NJ. Safe neighborhood discounts, family coverage, and personalized service in Bergen County.',
    url: 'https://midlandinsurance.biz/locations/dumont',
    images: [{
      url: '/og/dumont-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Auto Insurance Dumont NJ'
    }],
  },
  alternates: {
    canonical: '/locations/dumont'
  }
};

export default function Page() {
  return <DumontPage />;
}