import ContactPage from './ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Midland Associates | Bergen County Construction Insurance',
  description: 'Contact Bergen County\'s construction insurance experts. Call (201) 812-2184 or visit our Paramus office for contractor coverage solutions.',
  keywords: 'contact midland associates, bergen county insurance office, construction insurance paramus, contractor insurance contact',
  openGraph: {
    title: 'Contact Us | Midland Associates Construction Insurance',
    description: 'Get in touch with Bergen County\'s construction insurance specialists. Multiple ways to contact us for fast service.',
    url: 'https://midlandinsurance.biz/contact',
    images: [{
      url: '/og/contact-midland.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Midland Associates'
    }]
  },
  alternates: {
    canonical: '/contact'
  }
};

export default function Page() {
  return <ContactPage />;
} 