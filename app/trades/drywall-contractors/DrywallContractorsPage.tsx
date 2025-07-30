'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  HomeIcon,
  SparklesIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/outline';

export default function DrywallContractorsPage() {
  const trade = {
    name: 'Drywall Contractors',
    slug: 'drywall-contractors',
    description: 'Complete insurance coverage for drywall and acoustical contractors in Bergen County. From residential hanging to commercial metal stud framing, we protect your business.',
    heroImage: '/photos/drywall-contractors-hero.jpg',
  };

  const requirements = [
    'General Liability with drywall classification',
    'Workers Compensation for lifting injuries',
    'Commercial Auto for material delivery',
    'Tools & Equipment coverage',
    'Completed operations coverage',
    'Dust and debris liability protection',
  ];

  const commonRisks = [
    {
      risk: 'Dust Damage',
      description: 'Drywall dust damaging HVAC or electronics',
    },
    {
      risk: 'Water Damage',
      description: 'Moisture problems from improper installation',
    },
    {
      risk: 'Structural Issues',
      description: 'Improper framing causing wall failure',
    },
    {
      risk: 'Falls from Stilts',
      description: 'Worker injuries from stilts or scaffolds',
    },
    {
      risk: 'Fire Resistance',
      description: 'Improper fire-rated assembly installation',
    },
    {
      risk: 'Ceiling Collapse',
      description: 'Improper hanging causing ceiling failure',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Dust damage and installation errors',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Installation Coverage',
      description: 'Materials coverage until installed',
      icon: HomeIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Workers Compensation',
      description: 'Back injuries and repetitive strain',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Equipment Coverage',
      description: 'Stilts, lifts, and tools protection',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Trucks for sheetrock delivery',
      icon: ViewColumnsIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Professional Liability',
      description: 'Acoustical design coverage',
      icon: SparklesIcon,
      href: '/business/construction/professional-liability',
    },
  ];

  const industryStats = {
    averagePremium: '$3,500-$8,500',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '15%',
    averageClaimSize: '$32,000',
  };

  const faqs = [
    {
      question: 'Why is dust damage a major concern for drywall contractors?',
      answer: 'Drywall dust can destroy electronic equipment, clog HVAC systems, and trigger health complaints. Standard GL covers this, but proper containment procedures and dust control measures can significantly reduce claims and premiums.',
    },
    {
      question: 'Do I need special coverage for fire-rated assemblies?',
      answer: 'If you install fire-rated walls or ceilings, proper coverage is critical. Incorrect installation can lead to massive liability if a fire spreads. Document your work and ensure your GL includes completed operations.',
    },
    {
      question: 'What about coverage for metal stud framing?',
      answer: 'Metal stud framing is typically covered under drywall operations, but structural framing may need different classification. Load-bearing metal stud work often requires higher liability limits due to structural risks.',
    },
    {
      question: 'How can drywall contractors reduce insurance costs?',
      answer: 'Dust containment systems, avoiding structural work, proper moisture barriers, safety training for stilts/scaffolds, and limiting ceiling work all help reduce premiums. Written contracts with hold harmless agreements also help.',
    },
  ];

  const localProjects = [
    'Hackensack Medical Center Buildout',
    'Paramus Office Tower Interiors',
    'Bergen County School Renovations',
    'Fort Lee Residential Towers',
    'Ridgewood Retail Renovations',
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