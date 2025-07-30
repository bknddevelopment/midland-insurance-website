'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  SparklesIcon,
  TruckIcon,
  BeakerIcon,
  ShieldCheckIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';

export default function LandscapersPage() {
  const trade = {
    name: 'Landscapers',
    slug: 'landscapers',
    description: 'Comprehensive insurance for landscaping contractors in Bergen County. From lawn maintenance to hardscaping, we protect green industry professionals.',
    heroImage: '/photos/landscapers-hero.jpg',
  };

  const requirements = [
    'General Liability with landscaping class',
    'Commercial Auto for trucks and trailers',
    'Equipment coverage for mowers and tools',
    'Pesticide/herbicide liability',
    'Workers Compensation for crews',
    'Snow removal coverage (seasonal)',
  ];

  const commonRisks = [
    {
      risk: 'Property Damage',
      description: 'Mower throwing rocks at cars or windows',
    },
    {
      risk: 'Chemical Overspray',
      description: 'Herbicide drift damaging neighbor plants',
    },
    {
      risk: 'Tree Damage',
      description: 'Falling branches during tree work',
    },
    {
      risk: 'Underground Utilities',
      description: 'Hitting pipes or cables while digging',
    },
    {
      risk: 'Slip and Falls',
      description: 'Wet grass or landscaping materials',
    },
    {
      risk: 'Equipment Theft',
      description: 'Expensive mowers stolen from sites',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Property damage and completed operations',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Pesticide Liability',
      description: 'Chemical application coverage',
      icon: BeakerIcon,
      href: '/business/environmental',
    },
    {
      name: 'Equipment Coverage',
      description: 'Mowers, trucks, and trailers',
      icon: TruckIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Trucks with equipment transport',
      icon: SparklesIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Snow Removal',
      description: 'Winter service liability',
      icon: CloudIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Tree Service',
      description: 'Specialized arborist coverage',
      icon: SparklesIcon,
      href: '/business/construction/general-liability',
    },
  ];

  const industryStats = {
    averagePremium: '$2,500-$8,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '17%',
    averageClaimSize: '$30,000',
  };

  const faqs = [
    {
      question: 'Do I need special coverage for pesticide application?',
      answer: 'Yes, standard GL often excludes or limits pesticide/herbicide claims. You need pesticide applicator liability, especially if you\'re licensed for restricted-use chemicals. This covers drift, overspray, and plant damage.',
    },
    {
      question: 'What about snow removal insurance?',
      answer: 'Snow removal significantly increases risk due to slip/fall claims and auto accidents. It requires separate coverage or endorsement. Some landscapers buy separate policies just for winter operations.',
    },
    {
      question: 'How is tree work covered?',
      answer: 'Basic tree trimming may be covered under landscaping GL, but tree removal, work above 15 feet, or near power lines often needs specialized coverage. Certified arborists may get better rates.',
    },
    {
      question: 'What reduces landscaping insurance costs?',
      answer: 'Avoiding tree work over 15 feet, limiting pesticide use, proper equipment maintenance, contracts limiting liability, and separating snow removal operations all help reduce premiums. Safety programs specific to landscaping also help.',
    },
  ];

  const localProjects = [
    'Bergen County Parks Maintenance',
    'Paramus Corporate Campus Landscaping',
    'Hackensack Green Infrastructure',
    'Fort Lee Residential Communities',
    'Ridgewood Street Tree Program',
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