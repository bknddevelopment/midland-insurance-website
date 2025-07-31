import PersonalUmbrellaPage from './PersonalUmbrellaPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Umbrella Insurance NJ | Extra Liability Protection',
  description: 'Get $1-5 million in personal umbrella insurance coverage. Protect your assets with affordable extra liability protection. Bergen County specialists.',
  keywords: 'personal umbrella insurance, excess liability coverage, umbrella policy nj, asset protection insurance, bergen county umbrella insurance',
  openGraph: {
    title: 'Personal Umbrella Insurance | Midland Associates',
    description: 'Protect your assets with $1-5 million in extra liability coverage. Affordable umbrella insurance for New Jersey residents.',
    url: 'https://midlandinsurance.biz/personal/umbrella',
    images: [{
      url: '/og/umbrella-insurance.jpg',
      width: 1200,
      height: 630,
      alt: 'Personal Umbrella Insurance Protection'
    }]
  },
  alternates: {
    canonical: '/personal/umbrella'
  }
};

export default function Page() {
  return <PersonalUmbrellaPage />;
}