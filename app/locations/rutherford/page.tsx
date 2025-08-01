import RutherfordPage from './RutherfordPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rutherford Auto Insurance | Car Insurance Rutherford NJ | Midland Associates',
  description: 'Get affordable auto insurance in Rutherford, NJ. Local agents serving Rutherford residents with car insurance, competitive rates, and personalized service.',
  keywords: 'rutherford auto insurance, car insurance rutherford nj, rutherford car insurance, auto insurance 07070, rutherford nj insurance',
  openGraph: {
    title: 'Auto Insurance Rutherford NJ | Local Car Insurance Agency',
    description: 'Trusted auto insurance agency serving Rutherford, NJ. Get competitive rates on car insurance from local agents who understand Bergen County drivers.',
    url: 'https://midlandinsurance.biz/locations/rutherford',
    images: [{
      url: '/og/rutherford-auto-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Auto Insurance Rutherford NJ'
    }],
  },
  alternates: {
    canonical: '/locations/rutherford'
  }
};

export default function Page() {
  return <RutherfordPage />;
}