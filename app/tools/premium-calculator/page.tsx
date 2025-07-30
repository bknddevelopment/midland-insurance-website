import PremiumCalculator from './PremiumCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Premium Calculator | Estimate Your Costs',
  description: 'Calculate your construction insurance premiums instantly. Get accurate estimates for general liability, workers comp, and more based on your trade and revenue.',
  keywords: 'construction insurance calculator, contractor insurance cost estimator, bergen county insurance calculator, construction premium calculator',
  openGraph: {
    title: 'Construction Insurance Premium Calculator',
    description: 'Estimate your construction insurance costs instantly with our free calculator.',
    url: 'https://midlandinsurance.biz/tools/premium-calculator',
    images: [{
      url: '/og/premium-calculator.jpg',
      width: 1200,
      height: 630,
      alt: 'Insurance Premium Calculator'
    }]
  },
  alternates: {
    canonical: '/tools/premium-calculator'
  }
};

export default function Page() {
  return <PremiumCalculator />;
}