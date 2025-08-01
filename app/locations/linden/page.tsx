import LindenPage from './LindenPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Linden NJ | Auto Insurance Linden | Midland Insurance',
  description: 'Get affordable insurance in Linden, NJ. Auto, home, and business insurance Linden with local agents. Protecting Union County families and businesses since 1990.',
  keywords: 'insurance linden, linden insurance, auto insurance linden nj, car insurance linden, linden nj insurance agents, insurance companies linden nj',
  openGraph: {
    title: 'Insurance Linden NJ | Local Coverage & Expert Service',
    description: 'Linden insurance solutions for auto, home, and business. Local agents serving Union County with personalized coverage and competitive rates.',
    url: 'https://midlandinsurance.biz/locations/linden',
    images: [{
      url: '/og/linden-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Insurance Linden NJ'
    }]
  },
  alternates: {
    canonical: '/locations/linden'
  }
};

export default function Page() {
  return <LindenPage />;
}