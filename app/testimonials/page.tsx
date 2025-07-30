import TestimonialsPage from './TestimonialsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Testimonials | Bergen County Contractor Reviews',
  description: 'Read testimonials from Bergen County contractors about Midland Associates. See how we\'ve saved contractors money and improved their insurance coverage.',
  keywords: 'construction insurance testimonials, contractor reviews bergen county, midland associates reviews, construction insurance success stories',
  openGraph: {
    title: 'Client Testimonials | Midland Associates Construction Insurance',
    description: 'Real reviews from real contractors. See why Bergen County construction professionals trust us.',
    url: 'https://midlandinsurance.biz/testimonials',
    images: [{
      url: '/og/testimonials-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Construction Insurance Testimonials'
    }]
  },
  alternates: {
    canonical: '/testimonials'
  }
};

export default function Page() {
  return <TestimonialsPage />;
}