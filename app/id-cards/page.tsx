import IDCardsPage from './IDCardsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance ID Cards | Digital & Physical | Midland Associates',
  description: 'Get instant access to your insurance ID cards and certificates. Digital auto ID cards accepted in NJ. Business certificates available.',
  keywords: 'insurance id cards, digital insurance cards, nj auto id card, insurance certificate, proof of insurance',
  openGraph: {
    title: 'Insurance ID Cards & Certificates | Midland Associates',
    description: 'Quick access to digital and physical insurance ID cards. Auto insurance cards and business certificates.',
    url: 'https://midlandinsurance.biz/id-cards',
    images: [{
      url: '/og/id-cards.jpg',
      width: 1200,
      height: 630,
      alt: 'Insurance ID Cards'
    }],
  },
  alternates: {
    canonical: '/id-cards'
  }
};

export default function Page() {
  return <IDCardsPage />;
}