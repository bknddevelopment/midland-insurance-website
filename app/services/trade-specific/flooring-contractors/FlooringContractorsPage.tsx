'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  HomeIcon,
  SwatchIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function FlooringContractorsPage() {
  const trade = {
    name: 'Flooring Contractors',
    slug: 'flooring-contractors',
    description: 'Comprehensive insurance for flooring contractors in Bergen County. From hardwood and tile to carpet and vinyl, we protect against installation errors, material defects, and property damage.',
    heroImage: '/photos/flooring-installation.jpg',
  };

  const requirements = [
    'General Liability with flooring classification',
    'Workers Compensation for installers',
    'Commercial Auto for material transport',
    'Tools & Equipment coverage',
    'Installation coverage endorsement',
    'Products liability for materials',
    'Completed operations coverage',
    'Property damage liability',
  ];

  const commonRisks = [
    {
      risk: 'Subfloor Damage',
      description: 'Moisture damage or structural issues discovered during work',
    },
    {
      risk: 'Installation Defects',
      description: 'Improper installation causing gaps, buckling, or lifting',
    },
    {
      risk: 'Material Failures',
      description: 'Defective flooring products causing claims',
    },
    {
      risk: 'Water Damage',
      description: 'Leaks from improper sealing or installation',
    },
    {
      risk: 'Chemical Exposure',
      description: 'Adhesive fumes and dust health claims',
    },
    {
      risk: 'Trip Hazards',
      description: 'Uneven surfaces causing injuries',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Installation errors and property damage coverage',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Products Liability',
      description: 'Coverage for defective flooring materials',
      icon: SwatchIcon,
      href: '/business/products-liability',
    },
    {
      name: 'Tools & Equipment',
      description: 'Sanders, saws, and installation tool coverage',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Vehicle and material transport protection',
      icon: TruckIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Installation Floater',
      description: 'Coverage for materials awaiting installation',
      icon: HomeIcon,
      href: '/business/construction/installation-floater',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for installer injuries',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
  ];

  const industryStats = {
    averagePremium: '$2,000-$5,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '9%',
    averageClaimSize: '$22,000',
  };

  const faqs = [
    {
      question: 'What coverage do I need for moisture-related flooring claims?',
      answer: 'Moisture issues are common in flooring claims. Ensure your GL policy includes water damage coverage and consider adding mold liability. Document moisture testing before installation and use written contracts specifying moisture requirements to help defend against claims.',
    },
    {
      question: 'Am I liable for defective flooring materials I install?',
      answer: 'Yes, you can be held liable even if the manufacturer is at fault. Products liability coverage protects you from defective material claims. Always use reputable suppliers, keep material documentation, and consider requiring customers to approve specific products in writing.',
    },
    {
      question: 'Do I need special coverage for dustless sanding equipment?',
      answer: 'Expensive dustless sanders and other specialized equipment need inland marine or contractors equipment coverage. Your general liability won\'t cover equipment breakdown or theft. Consider equipment breakdown coverage for mechanical failures.',
    },
    {
      question: 'How can flooring contractors minimize insurance costs?',
      answer: 'Use moisture meters on every job, maintain NWFA certifications, implement dust control procedures, use detailed contracts with warranty limitations, and avoid high-risk installations like gymnasium floors. Photo documentation of subfloor conditions also helps.',
    },
  ];

  const localProjects = [
    'Bergen Performing Arts Center Stage Flooring',
    'Hackensack Court House Historic Floor Restoration',
    'Meadowlands Sports Complex Renovation',
    'Paramus Mall Retail Space Updates',
    'Fort Lee Luxury Condo Hardwood Installation',
    'Ridgewood School District Gym Floors',
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