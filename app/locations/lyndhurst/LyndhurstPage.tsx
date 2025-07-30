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

export default function LyndhurstPage() {
  const location = {
    name: 'Lyndhurst',
    slug: 'lyndhurst',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07071',
    population: '22,519',
    description: 'Lyndhurst is a township in Bergen County known for its diverse community, historic landmarks, and strategic location between Newark and the Meadowlands.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.124175!3d40.812093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sLyndhurst%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Protecting Lyndhurst families and their assets',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Coverage for Lyndhurst\'s thriving businesses',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Specialized coverage for contractors',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'North Arlington', distance: '1 mile', href: '/locations/north-arlington' },
    { name: 'Rutherford', distance: '2 miles', href: '/locations/rutherford' },
    { name: 'Kearny', distance: '3 miles', href: '/locations/kearny' },
    { name: 'Nutley', distance: '3 miles', href: '/locations/nutley' },
    { name: 'Carlstadt', distance: '4 miles', href: '/locations/carlstadt' },
    { name: 'East Rutherford', distance: '4 miles', href: '/locations/east-rutherford' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}