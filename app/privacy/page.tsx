import PrivacyPage from './PrivacyPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Midland Associates Insurance Services',
  description: 'Learn how Midland Associates protects your personal information. Our privacy policy explains data collection, use, and security practices.',
  keywords: 'privacy policy, data protection, insurance privacy, midland associates privacy',
  openGraph: {
    title: 'Privacy Policy | Midland Associates',
    description: 'Your privacy matters. Learn how we collect, use, and protect your information.',
    url: 'https://midlandinsurance.biz/privacy',
    images: [{
      url: '/og/privacy-policy.jpg',
      width: 1200,
      height: 630,
      alt: 'Privacy Policy'
    }]
  },
  alternates: {
    canonical: '/privacy'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <PrivacyPage />;
}