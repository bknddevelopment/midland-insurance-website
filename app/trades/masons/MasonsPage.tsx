'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  CubeIcon,
  HomeModernIcon,
  ShieldExclamationIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';

export default function MasonsPage() {
  const trade = {
    name: 'Masons',
    slug: 'masons',
    description: 'Complete insurance coverage for masonry contractors in Bergen County. From bricklaying to stone veneer, we protect masons with specialized coverage.',
    heroImage: '/photos/masons-hero.jpg',
  };

  const requirements = [
    'General Liability with masonry classification',
    'Workers Compensation for heavy lifting risks',
    'Commercial Auto for material transport',
    'Equipment coverage for mixers and saws',
    'Completed operations coverage critical',
    'Structural work liability limits',
  ];

  const commonRisks = [
    {
      risk: 'Structural Failure',
      description: 'Wall collapse or foundation settling issues',
    },
    {
      risk: 'Falling Objects',
      description: 'Bricks or tools falling from scaffolding',
    },
    {
      risk: 'Water Infiltration',
      description: 'Improper sealing causing water damage',
    },
    {
      risk: 'Tuckpointing Damage',
      description: 'Damage to existing structure during repair',
    },
    {
      risk: 'Material Defects',
      description: 'Mortar failure or brick deterioration',
    },
    {
      risk: 'Scaffolding Accidents',
      description: 'Falls from or collapse of scaffolding',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'High limits for structural work risks',
      icon: ShieldExclamationIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Completed Operations',
      description: 'Long-tail coverage for masonry work',
      icon: BuildingLibraryIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Equipment Coverage',
      description: 'Mixers, saws, and scaffolding protection',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Heavy trucks for material delivery',
      icon: CubeIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Workers Compensation',
      description: 'Coverage for back injuries and falls',
      icon: ExclamationTriangleIcon,
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Umbrella Policy',
      description: 'Extra protection for severe claims',
      icon: HomeModernIcon,
      href: '/business/umbrella',
    },
  ];

  const industryStats = {
    averagePremium: '$5,000-$12,000',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '20%',
    averageClaimSize: '$65,000',
  };

  const faqs = [
    {
      question: 'Why do masons need high liability limits?',
      answer: 'Masonry work is structural and permanent. A wall collapse or foundation failure can cause catastrophic damage. Claims often emerge years after completion, making robust completed operations coverage essential for long-term protection.',
    },
    {
      question: 'What about coverage for historic restoration work?',
      answer: 'Historic restoration requires specialized coverage due to unique materials and techniques. Some carriers offer endorsements for restoration work. The higher value of historic properties also necessitates increased liability limits.',
    },
    {
      question: 'How does winter weather affect mason insurance?',
      answer: 'Freeze-thaw cycles can cause masonry failures, leading to spring claims. Proper cold weather procedures and mortar additives are important. Some policies exclude work below certain temperatures without proper precautions.',
    },
    {
      question: 'Do I need professional liability for masonry?',
      answer: 'If you provide design services, structural calculations, or engineering recommendations, professional liability is important. This is especially true for retaining walls, foundations, or load-bearing structures.',
    },
  ];

  const localProjects = [
    'Bergen County Historic Courthouse Restoration',
    'Paramus Stone Veneer Installations',
    'Hackensack Retaining Wall Projects',
    'Fort Lee High-Rise Facade Work',
    'Ridgewood Downtown Brick Restoration',
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