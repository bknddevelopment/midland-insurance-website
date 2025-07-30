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

export default function GarfieldPage() {
  const location = {
    name: 'Garfield',
    slug: 'garfield',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07026',
    population: '32,655',
    description: 'Garfield is a diverse city in Bergen County with a rich industrial heritage and growing residential communities.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.11533!3d40.881426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sGarfield%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Auto, home, and personal protection for Garfield residents',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Coverage for local businesses and commercial properties',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Protection for contractors and construction projects',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'Lodi', distance: '2 miles', href: '/locations/lodi' },
    { name: 'Saddle Brook', distance: '3 miles', href: '/locations/saddle-brook' },
    { name: 'Wallington', distance: '3 miles', href: '/locations/wallington' },
    { name: 'Passaic', distance: '3 miles', href: '/locations/passaic' },
    { name: 'Clifton', distance: '4 miles', href: '/locations/clifton' },
    { name: 'Elmwood Park', distance: '4 miles', href: '/locations/elmwood-park' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}