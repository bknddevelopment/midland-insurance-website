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

export default function AllendalePage() {
  const location = {
    name: 'Allendale',
    slug: 'allendale',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07401',
    population: '6,849',
    description: 'Allendale is an affluent residential borough in northern Bergen County, known for its excellent schools, charming downtown, and strong sense of community.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.13533!3d41.031426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sAllendale%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Home, auto, and umbrella coverage for Allendale residents',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Protection for local businesses and professional offices',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Coverage for home renovations and local contractors',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'Saddle River', distance: '2 miles', href: '/locations/saddle-river' },
    { name: 'Upper Saddle River', distance: '3 miles', href: '/locations/upper-saddle-river' },
    { name: 'Ramsey', distance: '3 miles', href: '/locations/ramsey' },
    { name: 'Mahwah', distance: '4 miles', href: '/locations/mahwah' },
    { name: 'Waldwick', distance: '4 miles', href: '/locations/waldwick' },
    { name: 'Wyckoff', distance: '5 miles', href: '/locations/wyckoff' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}