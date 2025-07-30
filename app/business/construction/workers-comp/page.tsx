import WorkersCompPage from './WorkersCompPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workers Compensation Insurance Construction NJ | Workers Comp Bergen County',
  description: 'Workers compensation insurance for NJ construction contractors. State-required coverage for employee injuries. Competitive rates, payment plans. Get quotes now.',
  keywords: 'workers comp construction nj, workers compensation insurance contractors, bergen county workers comp, nj workers compensation rates construction',
  openGraph: {
    title: 'Workers Compensation Insurance for NJ Construction | Bergen County',
    description: 'Required workers comp coverage for construction businesses. Protect employees, meet state requirements, win more contracts. Multiple carrier options.',
    url: 'https://midlandinsurance.biz/business/construction/workers-comp',
    images: [{
      url: '/og/workers-comp-construction.jpg',
      width: 1200,
      height: 630,
      alt: 'Workers Compensation Insurance Construction'
    }]
  },
  alternates: {
    canonical: '/business/construction/workers-comp'
  }
};

export default function Page() {
  return <WorkersCompPage />;
}