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

export default function LodiPage() {
  const location = {
    name: 'Lodi',
    slug: 'lodi',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07644',
    population: '24,389',
    description: 'Lodi is a borough in Bergen County known for its residential neighborhoods, local businesses, and convenient location.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.08533!3d40.876426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sLodi%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Comprehensive coverage for Lodi families',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Protection for Lodi businesses',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Coverage for contractors and builders',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'Garfield', distance: '2 miles', href: '/locations/garfield' },
    { name: 'Hasbrouck Heights', distance: '2 miles', href: '/locations/hasbrouck-heights' },
    { name: 'Wood-Ridge', distance: '3 miles', href: '/locations/wood-ridge' },
    { name: 'Hackensack', distance: '4 miles', href: '/locations/hackensack' },
    { name: 'Saddle Brook', distance: '4 miles', href: '/locations/saddle-brook' },
    { name: 'Maywood', distance: '3 miles', href: '/locations/maywood' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}