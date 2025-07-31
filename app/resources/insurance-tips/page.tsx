import InsuranceTipsPage from './InsuranceTipsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Tips & Resources | Expert Guidance | Midland Associates',
  description: 'Free insurance tips, guides, and resources to help you make smart coverage decisions. Learn from Bergen County\'s trusted insurance experts.',
  keywords: 'insurance tips, insurance advice, coverage guides, insurance resources, insurance help, bergen county insurance tips',
  openGraph: {
    title: 'Insurance Tips & Resources | Midland Associates',
    description: 'Expert insurance guidance and money-saving tips from Bergen County\'s trusted insurance agency.',
    url: 'https://midlandinsurance.biz/resources/insurance-tips',
    images: [{
      url: '/og/insurance-tips.jpg',
      width: 1200,
      height: 630,
      alt: 'Insurance Tips and Resources'
    }]
  },
  alternates: {
    canonical: '/resources/insurance-tips'
  }
};

export default function Page() {
  return <InsuranceTipsPage />;
}