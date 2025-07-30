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

export default function UpperSaddleRiverPage() {
  const location = {
    name: 'Upper Saddle River',
    slug: 'upper-saddle-river',
    county: 'Bergen County',
    state: 'New Jersey',
    zip: '07458',
    population: '8,400',
    description: 'Upper Saddle River is an affluent borough in northern Bergen County, known for its large residential properties, excellent schools, and proximity to major highways. Our headquarters is located right here on Route 17.',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24128.524583977!2d-74.11533!3d41.058426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e5a42e9e0d8f%3A0x5e9b8c7f2e7f8f8f!2sUpper%20Saddle%20River%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890'
  };

  const services = [
    {
      name: 'Personal Insurance',
      description: 'Home, auto, umbrella, and high net worth coverage for residents',
      icon: HomeIcon,
      href: '/personal',
    },
    {
      name: 'Business Insurance',
      description: 'Commercial coverage for local businesses and professionals',
      icon: BuildingOfficeIcon,
      href: '/business',
    },
    {
      name: 'Construction Insurance',
      description: 'Specialized coverage for contractors and builders',
      icon: TruckIcon,
      href: '/business/construction',
    },
    {
      name: '24/7 Claims Support',
      description: 'Round-the-clock assistance when you need it most',
      icon: ClockIcon,
      href: '/claims',
    },
  ];

  const nearbyAreas = [
    { name: 'Saddle River', distance: '2 miles', href: '/locations/saddle-river' },
    { name: 'Allendale', distance: '3 miles', href: '/locations/allendale' },
    { name: 'Mahwah', distance: '4 miles', href: '/locations/mahwah' },
    { name: 'Ramsey', distance: '5 miles', href: '/locations/ramsey' },
    { name: 'Ho-Ho-Kus', distance: '6 miles', href: '/locations/ho-ho-kus' },
    { name: 'Ridgewood', distance: '7 miles', href: '/locations/ridgewood' },
  ];

  const localFeatures = [
    'Headquarters location at 345 RT 17 STE 22',
    'Serving Upper Saddle River since 1974',
    'Average response time: 15 minutes',
    'Local agents who live in the community',
    'Preferred by Upper Saddle River School District',
    'Member of Upper Saddle River Chamber of Commerce',
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      location: 'Upper Saddle River Resident',
      text: 'As a long-time resident, I appreciate having Midland\'s headquarters right here in town. Their local knowledge and personal service are unmatched.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      location: 'Local Business Owner',
      text: 'The convenience of having their office on Route 17 makes it easy to stop by. They\'ve been protecting my business and home for over 10 years.',
      rating: 5,
    },
    {
      name: 'Robert Williams',
      location: 'Construction Company',
      text: 'Being based in Upper Saddle River means they understand our local construction market. They got me better coverage at a lower price.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What are your office hours in Upper Saddle River?',
      answer: 'Our Upper Saddle River headquarters is open Monday-Friday 8:30 AM - 5:00 PM, and Saturday by appointment. We also offer 24/7 phone support for emergencies.'
    },
    {
      question: 'Do you offer in-person consultations at your Upper Saddle River office?',
      answer: 'Yes! We encourage clients to visit our office at 345 RT 17 STE 22 for personalized consultations. You can also schedule virtual meetings if preferred.'
    },
    {
      question: 'What makes Midland different from other agencies in Upper Saddle River?',
      answer: 'We\'ve been part of the Upper Saddle River community since 1974. As an independent agency, we can shop multiple carriers to find you the best coverage at competitive rates. Our local expertise and personal service set us apart.'
    },
    {
      question: 'Do you serve areas outside of Upper Saddle River?',
      answer: 'Absolutely! While our headquarters is in Upper Saddle River, we proudly serve all of Bergen County and surrounding areas. We have clients throughout Northern New Jersey.'
    },
  ];

  return (
    <LocationPageTemplate
      location={location}
      services={services}
      nearbyAreas={nearbyAreas}
    />
  );
}