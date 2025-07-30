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

export default function TeaneckPage() {
  const location = {
    name: 'Teaneck',
    slug: 'teaneck',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07666',
    population: '41,246',
    description: 'Teaneck is a diverse township in Bergen County, featuring a mix of residential neighborhoods, commercial districts, and significant development projects.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-74.01533!3d40.888426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sTeaneck%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Comprehensive home and auto coverage for Teaneck residents',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Protection for Teaneck businesses and commercial properties',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Coverage for local contractors and development projects',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'Hackensack', distance: '2 miles', href: '/locations/hackensack' },
    { name: 'Englewood', distance: '3 miles', href: '/locations/englewood' },
    { name: 'Bergenfield', distance: '3 miles', href: '/locations/bergenfield' },
    { name: 'Bogota', distance: '3 miles', href: '/locations/bogota' },
    { name: 'Ridgefield Park', distance: '4 miles', href: '/locations/ridgefield-park' },
    { name: 'Fort Lee', distance: '6 miles', href: '/locations/fort-lee' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}