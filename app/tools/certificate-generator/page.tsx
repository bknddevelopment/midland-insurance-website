import CertificateGenerator from './CertificateGenerator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificate of Insurance Generator | Create Professional COIs',
  description: 'Generate professional certificates of insurance for your clients. Members-only tool for Midland Associates clients.',
  keywords: 'certificate of insurance generator, COI creator, insurance certificate tool, bergen county COI',
  openGraph: {
    title: 'Certificate of Insurance Generator',
    description: 'Create professional certificates of insurance for your construction projects.',
    url: 'https://midlandinsurance.biz/tools/certificate-generator',
    images: [{
      url: '/og/certificate-generator.jpg',
      width: 1200,
      height: 630,
      alt: 'COI Generator'
    }]
  },
  alternates: {
    canonical: '/tools/certificate-generator'
  }
};

export default function Page() {
  return <CertificateGenerator />;
}