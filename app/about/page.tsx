import AboutPage from './AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Midland Associates | Bergen County Construction Insurance Experts',
  description: '30 years of protecting Bergen County contractors. Learn about our team, values, and commitment to construction insurance excellence.',
  keywords: 'about midland associates, bergen county insurance agency, construction insurance experts, contractor insurance specialists nj',
  openGraph: {
    title: 'About Midland Associates | Your Construction Insurance Partner',
    description: 'Since 1994, we\'ve been Bergen County\'s trusted construction insurance agency. Meet our certified team and learn our story.',
    url: 'https://midlandinsurance.biz/about',
    images: [{
      url: '/og/about-midland.jpg',
      width: 1200,
      height: 630,
      alt: 'Midland Associates Team'
    }]
  },
  alternates: {
    canonical: '/about'
  }
};

export default function Page() {
  return <AboutPage />;
} 