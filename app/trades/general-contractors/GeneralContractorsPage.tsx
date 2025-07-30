'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  ShieldCheckIcon,
  BuildingOfficeIcon,
  UsersIcon,
  TruckIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export default function GeneralContractorsPage() {
  const trade = {
    name: 'General Contractors',
    slug: 'general-contractors',
    description: 'Complete insurance solutions for general contractors in Bergen County, NJ. From residential renovations to commercial construction, we protect GCs of all sizes.',
    heroImage: '/photos/general-contractors-hero.jpg',
  };

  const requirements = [
    'General Liability with $1M/$2M minimum limits',
    'Workers Compensation for all W-2 employees',
    'Commercial Auto for business vehicles',
    'Builder\'s Risk for active projects',
    'Subcontractor default insurance for larger GCs',
    'Professional liability for design-build work',
  ];

  const commonRisks = [
    {
      risk: 'Subcontractor Injuries',
      description: 'Liability for injuries to sub\'s employees on your sites',
    },
    {
      risk: 'Property Damage Claims',
      description: 'Damage to existing structures during renovation work',
    },
    {
      risk: 'Completed Operations',
      description: 'Claims arising after project completion',
    },
    {
      risk: 'Construction Defects',
      description: 'Faulty workmanship leading to damage or injury',
    },
    {
      risk: 'Contract Disputes',
      description: 'Delays, change orders, and scope disagreements',
    },
    {
      risk: 'Weather Delays',
      description: 'Project delays due to weather causing financial loss',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Essential coverage for third-party injuries and property damage',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Builder\'s Risk',
      description: 'Protect projects under construction from damage and theft',
      icon: BuildingOfficeIcon,
      href: '/business/construction/builders-risk',
    },
    {
      name: 'Workers\' Compensation',
      description: 'Required coverage for employee injuries',
      icon: UsersIcon,
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Commercial Auto',
      description: 'Coverage for trucks, vans, and equipment transport',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Contractor Bonds',
      description: 'Performance and payment bonds for projects',
      icon: DocumentTextIcon,
      href: '/business/construction/bonds',
    },
    {
      name: 'Umbrella Policy',
      description: 'Extra liability protection over primary policies',
      icon: CurrencyDollarIcon,
      href: '/business/umbrella',
    },
  ];

  const industryStats = {
    averagePremium: '$5,000-$25,000',
    typicalLimits: '$2M/$4M GL',
    percentWithClaims: '15%',
    averageClaimSize: '$75,000',
  };

  const faqs = [
    {
      question: 'What insurance do I need as a new general contractor in NJ?',
      answer: 'At minimum, you need General Liability and Workers Compensation (if you have employees). Most contracts also require Commercial Auto and often Builder\'s Risk. We recommend starting with a Business Owner\'s Policy (BOP) that bundles coverages for better rates.',
    },
    {
      question: 'How much does general contractor insurance cost?',
      answer: 'Costs vary based on revenue, number of employees, types of projects, and claims history. Small residential GCs might pay $3,000-$8,000 annually, while larger commercial GCs can pay $50,000+. We shop multiple carriers to find the best rates.',
    },
    {
      question: 'Do I need insurance for my subcontractors?',
      answer: 'Subcontractors should carry their own insurance, but you can be held liable for uninsured subs. Always require certificates of insurance naming you as additional insured. Consider subcontractor default insurance for added protection.',
    },
    {
      question: 'What\'s the difference between per project and annual policies?',
      answer: 'Annual policies cover all your work for the year and are usually more cost-effective. Per-project policies work for one-off jobs or when required by contract. Most GCs benefit from annual coverage with the ability to add project-specific endorsements.',
    },
  ];

  const localProjects = [
    'Hackensack High School Renovation',
    'Paramus Park Mall Expansion',
    'Bergen Town Center Development',
    'Ridgewood Downtown Revitalization',
    'Fort Lee High-Rise Construction',
  ];

  return (
    <TradePageTemplate
      trade={trade}
      requirements={requirements}
      commonRisks={commonRisks}
      coverageOptions={coverageOptions}
      industryStats={industryStats}
      faqs={faqs}
      localProjects={localProjects}
    />
  );
}