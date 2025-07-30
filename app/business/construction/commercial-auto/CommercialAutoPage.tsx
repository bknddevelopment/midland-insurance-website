'use client';

import React from 'react';
import ConstructionServiceTemplate from '@/components/templates/ConstructionServiceTemplate';
import {
  TruckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  MapPinIcon,
  CubeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function CommercialAutoPage() {
  const service = {
    name: 'Commercial Auto Insurance',
    slug: 'commercial-auto',
    description: 'Comprehensive vehicle coverage for construction businesses in Bergen County. Protect your trucks, vans, trailers, and mobile equipment with flexible commercial auto insurance.',
    shortDescription: 'Essential coverage for all vehicles used in your construction business, from pickup trucks to heavy equipment haulers.',
  };

  const overview = {
    title: 'Protect Your Construction Fleet',
    content: 'Commercial auto insurance covers vehicles used for construction business purposes. Whether you have one pickup truck or a fleet of dump trucks, proper commercial coverage protects against accidents, theft, and liability claims. Personal auto policies exclude business use, making commercial coverage essential for contractors.',
    highlights: [
      'Coverage for owned, leased, and hired vehicles',
      'Higher liability limits than personal auto',
      'Protection for tools and equipment in vehicles',
      'Rental reimbursement available',
      'Fleet discounts for multiple vehicles',
    ],
  };

  const coverage = {
    title: 'Commercial Auto Coverage Options',
    items: [
      {
        name: 'Liability Coverage',
        description: 'Bodily injury and property damage to others',
        included: true,
      },
      {
        name: 'Collision Coverage',
        description: 'Damage to your vehicle from accidents',
        included: true,
      },
      {
        name: 'Comprehensive Coverage',
        description: 'Theft, vandalism, weather damage, and glass',
        included: true,
      },
      {
        name: 'Uninsured Motorist',
        description: 'Protection from uninsured drivers',
        included: true,
      },
      {
        name: 'Medical Payments',
        description: 'Medical expenses for vehicle occupants',
        included: true,
      },
      {
        name: 'Hired/Non-Owned Auto',
        description: 'Coverage for rented or employee vehicles',
        included: true,
      },
      {
        name: 'Personal Vehicle Use',
        description: 'Using commercial vehicles for personal errands',
        included: false,
      },
      {
        name: 'Mechanical Breakdown',
        description: 'Engine or transmission failure (maintenance)',
        included: false,
      },
    ],
  };

  const whoNeeds = {
    title: 'Which Contractors Need Commercial Auto?',
    subtitle: 'Any vehicle used for business requires commercial coverage',
    items: [
      {
        type: 'General Contractors',
        description: 'Pickups for job site visits and material transport',
        icon: TruckIcon,
      },
      {
        type: 'Trade Contractors',
        description: 'Service vans with tools and equipment',
        icon: WrenchScrewdriverIcon,
      },
      {
        type: 'Material Haulers',
        description: 'Dump trucks, flatbeds, and delivery vehicles',
        icon: CubeIcon,
      },
      {
        type: 'Equipment Transport',
        description: 'Trucks and trailers hauling machinery',
        icon: MapPinIcon,
      },
      {
        type: 'Crew Transport',
        description: 'Vans and trucks carrying workers to sites',
        icon: UserGroupIcon,
      },
      {
        type: 'Mobile Operations',
        description: 'Vehicles with mounted equipment or tools',
        icon: ShieldCheckIcon,
      },
    ],
  };

  const benefits = {
    title: 'Our Commercial Auto Advantages',
    items: [
      {
        benefit: 'Fleet Discounts',
        description: 'Save money when insuring multiple vehicles together',
      },
      {
        benefit: 'Flexible Coverage',
        description: 'Adjust coverage by vehicle based on use and value',
      },
      {
        benefit: 'Additional Equipment',
        description: 'Cover permanently attached equipment and modifications',
      },
      {
        benefit: 'Downtime Coverage',
        description: 'Rental reimbursement keeps your business moving',
      },
      {
        benefit: 'Nationwide Coverage',
        description: 'Protection follows your vehicles across state lines',
      },
      {
        benefit: 'Quick Claims Service',
        description: 'Priority handling to get vehicles back on the road fast',
      },
    ],
  };

  const costFactors = {
    title: 'Commercial Auto Premium Factors',
    factors: [
      'Types of vehicles (year, make, model)',
      'Vehicle use and annual mileage',
      'Driver records and experience',
      'Coverage limits and deductibles',
      'Radius of operations',
      'Fleet size and safety programs',
      'Garaging location',
      'Loss history',
    ],
  };

  const claims = {
    title: 'Real Commercial Auto Claims',
    examples: [
      {
        scenario: 'Rear-End Collision with Loaded Truck',
        coverage: 'Liability paid other driver\'s injuries and vehicle damage',
        outcome: '$95,000 claim resolved',
      },
      {
        scenario: 'Tool Theft from Locked Van',
        coverage: 'Comprehensive covered stolen tools and van damage',
        outcome: '$15,000 equipment replaced',
      },
      {
        scenario: 'Dump Truck Rollover',
        coverage: 'Collision coverage paid for truck repairs',
        outcome: '$65,000 repair completed',
      },
    ],
  };

  const faqs = [
    {
      question: 'Do I need commercial auto if I have personal auto insurance?',
      answer: 'Yes, personal auto policies exclude business use. Using a personal policy for business can result in claim denials and policy cancellation. Even occasional business use like hauling tools or materials requires commercial coverage.',
    },
    {
      question: 'What\'s the difference between commercial and personal auto insurance?',
      answer: 'Commercial auto offers higher liability limits, covers business-specific risks, includes hired/non-owned coverage, and protects permanently attached equipment. It also covers employees driving your vehicles, which personal policies don\'t.',
    },
    {
      question: 'Are tools and equipment in my vehicle covered?',
      answer: 'Commercial auto includes limited coverage for tools and equipment, typically $1,000-$2,500. For contractors with valuable tools, we recommend adding inland marine coverage for full protection of mobile equipment.',
    },
    {
      question: 'Can employees drive my commercial vehicles?',
      answer: 'Yes, commercial policies cover permissive use by employees. However, drivers with poor records may increase premiums or need exclusion. We run MVR checks to identify issues before they become problems.',
    },
    {
      question: 'What about my personal use of the company truck?',
      answer: 'Limited personal use is typically allowed, but the vehicle must be primarily for business. Extensive personal use may require a different policy structure. We\'ll help determine the right coverage based on actual use.',
    },
  ];

  const relatedServices = [
    {
      name: 'General Liability',
      description: 'Loading/unloading and premises coverage',
      href: '/business/construction/general-liability',
    },
    {
      name: 'Tools & Equipment',
      description: 'Protection for tools in vehicles',
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Umbrella Policy',
      description: 'Extra liability over auto limits',
      href: '/business/umbrella',
    },
  ];

  return (
    <ConstructionServiceTemplate
      service={service}
      overview={overview}
      coverage={coverage}
      whoNeeds={whoNeeds}
      benefits={benefits}
      costFactors={costFactors}
      claims={claims}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}