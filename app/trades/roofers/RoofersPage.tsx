'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  HomeModernIcon,
  ShieldExclamationIcon,
  CloudIcon,
  FireIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function RoofersPage() {
  const trade = {
    name: 'Roofers',
    slug: 'roofers',
    description: 'Expert insurance solutions for roofing contractors in Bergen County. We specialize in high-risk coverage with competitive rates through carriers who understand roofing.',
    heroImage: '/photos/roofers-hero.jpg',
  };

  const requirements = [
    'General Liability with roofing classification',
    'Workers Compensation (highest rates in construction)',
    'Commercial Auto with high limits',
    'Fall protection liability coverage',
    'Weather-related project extensions',
    'Completed operations essential',
  ];

  const commonRisks = [
    {
      risk: 'Fall Injuries',
      description: 'Worker or third-party falls from roofs',
    },
    {
      risk: 'Property Damage',
      description: 'Damage to building interior from roof work',
    },
    {
      risk: 'Wind Damage',
      description: 'Materials blown off roof causing damage',
    },
    {
      risk: 'Fire from Torches',
      description: 'Hot work causing fires during installation',
    },
    {
      risk: 'Water Infiltration',
      description: 'Leaks after completion causing damage',
    },
    {
      risk: 'Ice Dam Claims',
      description: 'Winter-related roof and gutter damage',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'High-limit coverage for roofing risks',
      icon: ShieldExclamationIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Workers Compensation',
      description: 'Essential coverage with safety programs',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Commercial Auto',
      description: 'Trucks, trailers, and equipment hauling',
      icon: HomeModernIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Umbrella Policy',
      description: 'Critical extra protection for severe claims',
      icon: CloudIcon,
      href: '/business/umbrella',
    },
    {
      name: 'Tools & Equipment',
      description: 'Ladders, compressors, and roofing tools',
      icon: FireIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Business Income',
      description: 'Lost income from weather delays',
      icon: ChartBarIcon,
      href: '/business/property',
    },
  ];

  const industryStats = {
    averagePremium: '$8,000-$20,000',
    typicalLimits: '$1M/$2M GL minimum',
    percentWithClaims: '25%',
    averageClaimSize: '$85,000',
  };

  const faqs = [
    {
      question: 'Why is roofing insurance so expensive?',
      answer: 'Roofing has one of the highest injury rates in construction. Workers comp can be 20-40% of payroll, and GL rates reflect the severe fall exposure. However, we work with specialized carriers who offer competitive rates for safety-conscious roofers.',
    },
    {
      question: 'Can I get insurance if I do torch-down roofing?',
      answer: 'Yes, but hot work increases premiums significantly. Some carriers exclude it entirely. Having hot work permits, fire extinguishers on site, and fire watch procedures helps secure coverage. We know which carriers accept this work.',
    },
    {
      question: 'What safety programs can reduce my roofing insurance costs?',
      answer: 'Fall protection programs, safety harness requirements, weekly toolbox talks, and drug testing can reduce premiums 10-25%. Some carriers offer significant discounts for certified safety programs and OSHA training.',
    },
    {
      question: 'Do I need special coverage for solar panel installation?',
      answer: 'Solar work requires additional coverage and often professional liability for system design. Electrical work may need separate classification. We can arrange comprehensive coverage for roofers expanding into solar.',
    },
  ];

  const localProjects = [
    'Bergen County Schools Roof Replacement',
    'Paramus Corporate Park Re-roofing',
    'Fort Lee Storm Damage Repairs',
    'Hackensack Hospital Roof Systems',
    'Ridgewood Historic District Restoration',
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