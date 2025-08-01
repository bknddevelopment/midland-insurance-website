'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  HomeIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export default function ResidentialConstructionPage() {
  const trade = {
    name: 'Residential Construction',
    slug: 'residential-construction',
    description: 'Tailored insurance coverage for residential builders and remodelers in Bergen County. From custom homes to multi-family developments, we protect your residential construction business.',
    heroImage: '/photos/residential-construction-hero.jpg',
  };

  const requirements = [
    'General Liability with residential classification',
    'Course of Construction coverage',
    'Workers Compensation for all employees',
    'Commercial Auto for work vehicles',
    'New Jersey Home Improvement License bond',
    'Completed operations coverage',
  ];

  const commonRisks = [
    {
      risk: 'Water Damage Claims',
      description: 'Roofing, plumbing, or window installation issues',
    },
    {
      risk: 'Foundation Problems',
      description: 'Settlement, cracks, or structural failures',
    },
    {
      risk: 'Homeowner Disputes',
      description: 'Quality complaints or contract disagreements',
    },
    {
      risk: 'Material Defects',
      description: 'Issues with supplied materials or finishes',
    },
    {
      risk: 'Subcontractor Errors',
      description: 'Poor workmanship by hired subcontractors',
    },
    {
      risk: 'Weather Delays',
      description: 'Project delays due to weather conditions',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Protection for property damage and injuries',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Course of Construction',
      description: 'Coverage for homes being built or renovated',
      icon: HomeIcon,
      href: '/business/construction/builders-risk',
    },
    {
      name: 'Warranty Insurance',
      description: 'Protection against construction defect claims',
      icon: DocumentTextIcon,
      href: '/business/construction/warranty',
    },
    {
      name: 'Tools & Equipment',
      description: 'Coverage for construction tools and machinery',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Trucks, vans, and equipment trailers',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for employee injuries on the job',
      icon: UserGroupIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$8,000-$25,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '15%',
    averageClaimSize: '$65,000',
  };

  const faqs = [
    {
      question: 'What insurance is required for residential construction in NJ?',
      answer: 'New Jersey requires General Liability and Workers Compensation for residential contractors. Most homeowners and lenders also require Course of Construction coverage. Bergen County municipalities may have additional bond requirements for home improvement contractors.',
    },
    {
      question: 'How long does completed operations coverage last?',
      answer: 'Completed operations coverage typically extends for several years after project completion to cover defects that appear later. In New Jersey, the statute of limitations for construction defects is 6 years, so we recommend maintaining coverage accordingly.',
    },
    {
      question: 'Do I need separate coverage for spec homes?',
      answer: 'Yes, spec homes require special consideration. While under construction, they need Course of Construction coverage. Once completed, they need vacant property coverage until sold. We can package these coverages for builders who regularly build spec homes.',
    },
    {
      question: 'What about coverage for green building and energy-efficient homes?',
      answer: 'Green building requires specialized coverage for solar installations, energy-efficient materials, and LEED certification processes. We offer endorsements for sustainable construction methods and can cover the additional costs of green rebuilding.',
    },
  ];

  const localProjects = [
    'Alpine Custom Home Development',
    'Ridgewood Historic Home Renovations',
    'Tenafly Luxury Townhomes',
    'Englewood Cliffs Estate Construction',
    'Fair Lawn Multi-Family Housing',
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