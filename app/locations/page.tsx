import LocationsIndex from './LocationsIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Insurance Bergen County NJ | All Service Areas',
  description: 'Professional construction insurance serving all of Bergen County NJ. From Fort Lee to Mahwah, Midland Associates provides comprehensive contractor coverage.',
  keywords: 'bergen county construction insurance, contractor insurance nj locations, construction insurance fort lee, paramus contractor coverage, hackensack construction insurance',
  openGraph: {
    title: 'Bergen County Construction Insurance | All Service Areas',
    description: 'Serving contractors throughout Bergen County with specialized insurance. Find coverage in Fort Lee, Hackensack, Paramus, Ridgewood, and more.',
    url: 'https://midlandinsurance.biz/locations',
    images: [{
      url: '/og/bergen-county-map.jpg',
      width: 1200,
      height: 630,
      alt: 'Bergen County Service Areas'
    }]
  },
  alternates: {
    canonical: '/locations'
  }
};

export default function Page() {
  return <LocationsIndex />;
}