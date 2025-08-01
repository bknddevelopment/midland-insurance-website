import AffordableAutoInsurancePage from './AffordableAutoInsurancePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cheap Car Insurance NJ | Affordable Auto Insurance New Jersey | Midland',
  description: 'Find cheap car insurance in NJ with comprehensive coverage. Affordable auto insurance New Jersey with discounts for safe drivers. Low cost auto insurance NJ quotes online.',
  keywords: 'cheap car insurance nj, affordable auto insurance nj, low cost auto insurance nj, discount auto insurance new jersey, cheap nj car insurance, affordable car insurance new jersey',
  openGraph: {
    title: 'Cheap Car Insurance NJ | Save on Auto Insurance',
    description: 'Get affordable auto insurance in New Jersey without sacrificing coverage. Multiple discounts available. Find cheap car insurance NJ with local agents.',
    url: 'https://midlandinsurance.biz/affordable-auto-insurance-nj',
    images: [{
      url: '/og/affordable-auto-insurance-nj.jpg',
      width: 1200,
      height: 630,
      alt: 'Affordable Auto Insurance NJ'
    }]
  },
  alternates: {
    canonical: '/affordable-auto-insurance-nj'
  }
};

export default function Page() {
  return <AffordableAutoInsurancePage />;
}