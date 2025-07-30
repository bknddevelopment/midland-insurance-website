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

export default function FairLawnPage() {
  const location = {
    name: 'Fair Lawn',
    slug: 'fair-lawn',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07410',
    population: '34,927',
    description: 'Fair Lawn is a well-established borough in Bergen County, featuring diverse neighborhoods, excellent schools, and a strong business community.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.13533!3d40.936426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sFair%20Lawn%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Comprehensive coverage for Fair Lawn families',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Protection for local businesses and professionals',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Coverage for contractors and home improvements',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'Paramus', distance: '3 miles', href: '/locations/paramus' },
    { name: 'Glen Rock', distance: '3 miles', href: '/locations/glen-rock' },
    { name: 'Saddle Brook', distance: '4 miles', href: '/locations/saddle-brook' },
    { name: 'Paterson', distance: '4 miles', href: '/locations/paterson' },
    { name: 'Hackensack', distance: '6 miles', href: '/locations/hackensack' },
    { name: 'Ridgewood', distance: '6 miles', href: '/locations/ridgewood' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}