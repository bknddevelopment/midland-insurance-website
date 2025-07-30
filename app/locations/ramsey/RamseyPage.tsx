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

export default function RamseyPage() {
  const location = {
    name: 'Ramsey',
    slug: 'ramsey',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07446',
    population: '14,915',
    description: 'Ramsey is a charming borough in northern Bergen County known for its excellent schools, historic Main Street, and strong sense of community.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.141106!3d41.057446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sRamsey%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Comprehensive protection for Ramsey homeowners',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Coverage for Main Street shops and local businesses',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'High Net Worth Insurance',
      description: 'Specialized coverage for valuable homes and assets',
      icon: ShieldCheckIcon,
      href: '/personal/high-net-worth',
    }
  ];

  const nearbyAreas = [
    { name: 'Mahwah', distance: '3 miles', href: '/locations/mahwah' },
    { name: 'Allendale', distance: '3 miles', href: '/locations/allendale' },
    { name: 'Upper Saddle River', distance: '4 miles', href: '/locations/upper-saddle-river' },
    { name: 'Waldwick', distance: '4 miles', href: '/locations/waldwick' },
    { name: 'Wyckoff', distance: '5 miles', href: '/locations/wyckoff' },
    { name: 'Franklin Lakes', distance: '6 miles', href: '/locations/franklin-lakes' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}