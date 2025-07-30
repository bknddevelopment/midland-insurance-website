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

export default function WestwoodPage() {
  const location = {
    name: 'Westwood',
    slug: 'westwood',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07675',
    population: '11,282',
    description: 'Westwood is a vibrant borough in Bergen County known for its walkable downtown, diverse dining scene, and strong community spirit.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.032757!3d40.991025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sWestwood%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Home and auto coverage for Westwood families',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Protection for downtown shops and restaurants',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Coverage for local contractors and builders',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'Hillsdale', distance: '2 miles', href: '/locations/hillsdale' },
    { name: 'River Vale', distance: '3 miles', href: '/locations/river-vale' },
    { name: 'Emerson', distance: '3 miles', href: '/locations/emerson' },
    { name: 'Washington Township', distance: '4 miles', href: '/locations/washington-township' },
    { name: 'Park Ridge', distance: '4 miles', href: '/locations/park-ridge' },
    { name: 'Old Tappan', distance: '5 miles', href: '/locations/old-tappan' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}