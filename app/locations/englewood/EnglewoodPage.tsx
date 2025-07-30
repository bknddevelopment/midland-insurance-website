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

export default function EnglewoodPage() {
  const location = {
    name: 'Englewood',
    slug: 'englewood',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07631',
    population: '29,308',
    description: 'Englewood is a vibrant city in Bergen County, known for its diverse community, historic downtown, and proximity to New York City.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24076.524583977!2d-73.97533!3d40.892426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e6b8f2e7f8f8f%3A0x5e9b8c7f2e7f8f8f!2sEnglewood%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Home, auto, and umbrella coverage for Englewood residents',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Protection for downtown businesses and professional offices',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Coverage for renovations and development projects',
      icon: TruckIcon,
      href: '/business/construction',
    }
  ];

  const nearbyAreas = [
    { name: 'Teaneck', distance: '3 miles', href: '/locations/teaneck' },
    { name: 'Englewood Cliffs', distance: '2 miles', href: '/locations/englewood-cliffs' },
    { name: 'Tenafly', distance: '3 miles', href: '/locations/tenafly' },
    { name: 'Fort Lee', distance: '4 miles', href: '/locations/fort-lee' },
    { name: 'Hackensack', distance: '5 miles', href: '/locations/hackensack' },
    { name: 'Leonia', distance: '4 miles', href: '/locations/leonia' }
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}