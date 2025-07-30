import WorkersCompPage from './WorkersCompPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Workers' Compensation Insurance NJ | Bergen County Workers Comp",
  description: "Workers' compensation insurance for New Jersey businesses. Protect employees, comply with state law, and get competitive rates. Expert guidance for Bergen County employers.",
  keywords: "workers compensation insurance nj, workers comp bergen county, new jersey workers compensation, employee injury insurance, workplace accident coverage",
  openGraph: {
    title: "Workers' Compensation Insurance | New Jersey Coverage",
    description: "Complete workers' comp coverage for NJ businesses. Medical expenses, lost wages, disability benefits. Get a quote today.",
    url: 'https://midlandinsurance.biz/business/workers-comp',
    images: [{
      url: '/og/workers-comp.jpg',
      width: 1200,
      height: 630,
      alt: "Workers' Compensation Insurance New Jersey"
    }]
  },
  alternates: {
    canonical: '/business/workers-comp'
  }
};

export default function Page() {
  return <WorkersCompPage />;
}