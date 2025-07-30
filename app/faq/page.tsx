import FAQPage from './FAQPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance FAQ | Common Questions Answered',
  description: 'Get answers to frequently asked questions about construction insurance, general liability, workers comp, bonds, and more. Bergen County expert guidance.',
  keywords: 'construction insurance faq, contractor insurance questions, general liability faq, workers comp questions, construction bonds faq',
  openGraph: {
    title: 'Construction Insurance FAQ | Midland Associates',
    description: 'Find answers to common construction insurance questions. Expert guidance on coverage, claims, and requirements.',
    url: 'https://midlandinsurance.biz/faq',
    images: [{
      url: '/og/faq-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance FAQ'
    }]
  },
  alternates: {
    canonical: '/faq'
  }
};

export default function Page() {
  return <FAQPage />;
}