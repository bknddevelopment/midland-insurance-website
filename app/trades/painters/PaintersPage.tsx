'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  PaintBrushIcon,
  CloudIcon,
  ShieldExclamationIcon,
  BeakerIcon,
  HomeIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function PaintersPage() {
  const trade = {
    name: 'Painters',
    slug: 'painters',
    description: 'Tailored insurance solutions for painting contractors in Bergen County. From residential repaints to commercial coatings, we cover all painting professionals.',
    heroImage: '/photos/painters-hero.jpg',
  };

  const requirements = [
    'General Liability with painting classification',
    'Workers Compensation for ladder work',
    'Commercial Auto for work vehicles',
    'Lead-safe certification coverage',
    'Overspray and drift protection',
    'Care, custody, and control coverage',
  ];

  const commonRisks = [
    {
      risk: 'Paint Overspray',
      description: 'Wind carrying paint to cars or adjacent property',
    },
    {
      risk: 'Lead Paint Liability',
      description: 'RRP rule violations and lead exposure claims',
    },
    {
      risk: 'Falls from Heights',
      description: 'Ladder and scaffolding accidents',
    },
    {
      risk: 'Property Damage',
      description: 'Paint spills on carpets, floors, or furniture',
    },
    {
      risk: 'Fume Exposure',
      description: 'Health claims from paint fumes or chemicals',
    },
    {
      risk: 'Surface Preparation',
      description: 'Damage from pressure washing or sanding',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Overspray and property damage coverage',
      icon: ShieldExclamationIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Lead Liability',
      description: 'RRP compliance and lead paint coverage',
      icon: BeakerIcon,
      href: '/business/environmental',
    },
    {
      name: 'Commercial Auto',
      description: 'Vans, trucks, and equipment transport',
      icon: PaintBrushIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Tools & Equipment',
      description: 'Sprayers, lifts, and ladder coverage',
      icon: CloudIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for falls and repetitive injuries',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Property in Care',
      description: 'Customer property while painting',
      icon: HomeIcon,
      href: '/business/construction/general-liability',
    },
  ];

  const industryStats = {
    averagePremium: '$2,500-$6,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '14%',
    averageClaimSize: '$25,000',
  };

  const faqs = [
    {
      question: 'Does standard GL cover paint overspray?',
      answer: 'Most GL policies cover overspray, but limits may apply. Spray painting operations need careful underwriting. Using overspray shields, checking weather conditions, and proper masking reduces claims and can lower premiums.',
    },
    {
      question: 'What about lead paint certification and insurance?',
      answer: 'EPA RRP certification is required for pre-1978 homes. Lead liability coverage is essential as standard GL may exclude it. We offer specialized lead-safe coverage for certified firms following proper procedures.',
    },
    {
      question: 'How can painters reduce insurance costs?',
      answer: 'Limiting spray work, avoiding oil-based paints when possible, proper ventilation procedures, drop cloth usage, and formal safety programs all help. Interior-only painters typically pay less than those doing exterior work.',
    },
    {
      question: 'Do I need special coverage for commercial painting?',
      answer: 'Commercial work often requires higher limits and additional insured endorsements. Working in occupied buildings, using lifts, or industrial coatings may need specialized coverage. We match coverage to your actual work.',
    },
  ];

  const localProjects = [
    'Bergen County Schools Repainting Program',
    'Paramus Office Building Renovations',
    'Hackensack Downtown Beautification',
    'Fort Lee Apartment Complex Repaints',
    'Ridgewood Victorian Home Restorations',
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