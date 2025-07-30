'use client';

import React from 'react';
import ConstructionServiceTemplate from '@/components/templates/ConstructionServiceTemplate';
import {
  ShieldCheckIcon,
  BuildingOfficeIcon,
  TruckIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';

export default function GeneralLiabilityPage() {
  const service = {
    name: 'General Liability Insurance',
    slug: 'general-liability',
    description: 'Essential liability protection for construction contractors in Bergen County. Coverage for third-party bodily injury, property damage, and completed operations.',
    shortDescription: 'Protect your construction business from lawsuits with comprehensive general liability coverage designed specifically for contractors.',
  };

  const overview = {
    title: 'Why General Liability is Essential for Contractors',
    content: 'General liability insurance is the foundation of your construction business protection. It covers claims from third parties for bodily injury and property damage that occur during your operations. In New Jersey, most contracts require minimum GL coverage, and without it, a single accident could bankrupt your business.',
    highlights: [
      'Coverage starts from day one of your policy',
      'Protection extends to completed operations',
      'Legal defense costs included',
      'Additional insured endorsements available',
      'Aggregate limits reset annually',
    ],
  };

  const coverage = {
    title: 'What General Liability Covers',
    items: [
      {
        name: 'Bodily Injury',
        description: 'Medical expenses and legal costs when someone is injured on your job site',
        included: true,
      },
      {
        name: 'Property Damage',
        description: 'Repairs or replacement when you damage client property',
        included: true,
      },
      {
        name: 'Completed Operations',
        description: 'Claims arising from your work after project completion',
        included: true,
      },
      {
        name: 'Products Liability',
        description: 'Claims from materials or products you install',
        included: true,
      },
      {
        name: 'Personal & Advertising Injury',
        description: 'Libel, slander, and copyright infringement claims',
        included: true,
      },
      {
        name: 'Medical Payments',
        description: 'Minor medical expenses regardless of fault',
        included: true,
      },
      {
        name: 'Employee Injuries',
        description: 'Injuries to your employees (requires Workers Comp)',
        included: false,
      },
      {
        name: 'Professional Errors',
        description: 'Mistakes in design or planning (requires E&O)',
        included: false,
      },
    ],
  };

  const whoNeeds = {
    title: 'Who Needs General Liability Insurance?',
    subtitle: 'Every construction professional in New Jersey needs GL coverage',
    items: [
      {
        type: 'General Contractors',
        description: 'Required for all commercial projects and most residential work',
        icon: BuildingOfficeIcon,
      },
      {
        type: 'Subcontractors',
        description: 'GCs require subs to carry GL with additional insured status',
        icon: WrenchScrewdriverIcon,
      },
      {
        type: 'Home Improvement Contractors',
        description: 'NJ requires GL for HIC license registration',
        icon: HomeModernIcon,
      },
      {
        type: 'Trade Specialists',
        description: 'Electricians, plumbers, HVAC techs all need trade-specific GL',
        icon: UsersIcon,
      },
      {
        type: 'Equipment Operators',
        description: 'Heavy equipment increases property damage exposure',
        icon: TruckIcon,
      },
      {
        type: 'New Construction',
        description: 'Builders risk often requires underlying GL coverage',
        icon: ShieldCheckIcon,
      },
    ],
  };

  const benefits = {
    title: 'Benefits of Our GL Coverage',
    items: [
      {
        benefit: 'Legal Defense Coverage',
        description: 'We cover attorney fees and court costs even if claims are groundless',
      },
      {
        benefit: 'Nationwide Coverage',
        description: 'Protection follows you to job sites throughout the United States',
      },
      {
        benefit: 'Additional Insured Options',
        description: 'Easy to add property owners, GCs, and municipalities as required',
      },
      {
        benefit: 'No Deductibles',
        description: 'Most GL policies have zero deductible - we pay from dollar one',
      },
      {
        benefit: 'Flexible Payment Plans',
        description: 'Monthly payment options available with no interest charges',
      },
      {
        benefit: 'Claims Support 24/7',
        description: 'Report claims anytime with dedicated construction claims adjusters',
      },
    ],
  };

  const costFactors = {
    title: 'What Affects Your GL Premium?',
    factors: [
      'Type of construction work performed',
      'Annual gross receipts/revenue',
      'Payroll costs (if applicable)',
      'Years in business and claims history',
      'Coverage limits selected',
      'Territory where work is performed',
      'Use of subcontractors',
      'Safety programs and certifications',
    ],
  };

  const claims = {
    title: 'Real GL Claims We\'ve Handled',
    examples: [
      {
        scenario: 'Ladder Falls on Homeowner\'s Car',
        coverage: 'Property damage coverage paid for vehicle repairs',
        outcome: '$8,500 claim paid, no lawsuit',
      },
      {
        scenario: 'Water Damage from Plumbing Work',
        coverage: 'Completed operations covered flooring replacement',
        outcome: '$45,000 claim resolved',
      },
      {
        scenario: 'Pedestrian Trips on Materials',
        coverage: 'Bodily injury paid medical bills and settlement',
        outcome: '$125,000 total claim',
      },
    ],
  };

  const faqs = [
    {
      question: 'What GL limits do I need for construction work in NJ?',
      answer: 'Most contracts require minimum limits of $1 million per occurrence and $2 million aggregate. Larger projects may require $2/$4 million or higher. We recommend discussing your typical contracts with our agents to ensure adequate coverage.',
    },
    {
      question: 'Does general liability cover my tools and equipment?',
      answer: 'No, GL covers damage you cause to others\' property, not your own. You need inland marine or contractors equipment coverage for your tools. We can bundle these coverages for comprehensive protection.',
    },
    {
      question: 'What is "completed operations" and why is it important?',
      answer: 'Completed operations covers claims arising from your work after you\'ve left the job site. For example, if faulty wiring causes a fire months later. This coverage is crucial as most construction claims happen after project completion.',
    },
    {
      question: 'Can I get GL insurance with past claims?',
      answer: 'Yes, we work with contractors who have claims history. While claims may increase premiums, our access to 20+ carriers means we can find coverage for most contractors. We\'ll help you implement safety measures to prevent future claims.',
    },
    {
      question: 'What\'s an additional insured endorsement?',
      answer: 'It extends your GL coverage to other parties like property owners or general contractors. Most construction contracts require you to add the hiring party as additional insured. We can add these endorsements quickly, often same-day.',
    },
  ];

  const relatedServices = [
    {
      name: 'Workers\' Compensation',
      description: 'Required coverage for employee injuries',
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Commercial Auto',
      description: 'Vehicle coverage for your business fleet',
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Tools & Equipment',
      description: 'Protect your valuable tools and machinery',
      href: '/business/construction/tools-equipment',
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