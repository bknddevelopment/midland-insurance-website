'use client';

import React from 'react';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';
import { 
  HomeIcon,
  TruckIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function WyckoffPage() {
  const location = {
    name: 'Wyckoff',
    slug: 'wyckoff',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07481',
    population: '16,585',
    description: 'Wyckoff is a thriving suburban township in Bergen County, known for its excellent schools, beautiful residential neighborhoods, and active business community.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.17533!3d40.998426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sWyckoff%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Home, auto, and umbrella coverage for Wyckoff families',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Coverage for local shops, offices, and professional services',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Protection for contractors and home improvement projects',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'Franklin Lakes', distance: '2 miles', href: '/locations/franklin-lakes' },
    { name: 'Oakland', distance: '3 miles', href: '/locations/oakland' },
    { name: 'Ridgewood', distance: '4 miles', href: '/locations/ridgewood' },
    { name: 'Allendale', distance: '5 miles', href: '/locations/allendale' },
    { name: 'Ramsey', distance: '5 miles', href: '/locations/ramsey' },
    { name: 'Mahwah', distance: '6 miles', href: '/locations/mahwah' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}