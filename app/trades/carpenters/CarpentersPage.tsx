'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  WrenchScrewdriverIcon,
  HomeIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  FireIcon,
  ScissorsIcon,
} from '@heroicons/react/24/outline';

export default function CarpentersPage() {
  const trade = {
    name: 'Carpenters',
    slug: 'carpenters',
    description: 'Specialized insurance for carpentry contractors in Bergen County. From framing to finish work, we protect carpenters with comprehensive coverage options.',
    heroImage: '/photos/carpenters-hero.jpg',
  };

  const requirements = [
    'General Liability with carpentry classification',
    'Workers Compensation for saw/tool injuries',
    'Commercial Auto for work trucks',
    'Tools & Equipment coverage essential',
    'Installation floater for materials',
    'Completed operations coverage',
  ];

  const commonRisks = [
    {
      risk: 'Saw Injuries',
      description: 'Cuts from power tools and equipment',
    },
    {
      risk: 'Structural Failures',
      description: 'Framing or load-bearing work issues',
    },
    {
      risk: 'Falls from Heights',
      description: 'Ladder and scaffolding accidents',
    },
    {
      risk: 'Fire from Tools',
      description: 'Sawdust fires or electrical tool issues',
    },
    {
      risk: 'Installation Damage',
      description: 'Damage to existing property during work',
    },
    {
      risk: 'Material Defects',
      description: 'Warping, splitting, or wood failure',
    },
  ];

  const coverageOptions = [
    {
      name: 'General Liability',
      description: 'Property damage and injury protection',
      icon: ShieldCheckIcon,
      href: '/business/construction/general-liability',
    },
    {
      name: 'Tools & Equipment',
      description: 'Expensive saws and woodworking tools',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Installation Floater',
      description: 'Cabinets and materials before install',
      icon: HomeIcon,
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Auto',
      description: 'Trucks, vans, and trailers',
      icon: CircleStackIcon,
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'Workers Compensation',
      description: 'Tool injuries and back strain coverage',
      icon: ScissorsIcon,
      href: '/business/construction/workers-comp',
    },
    {
      name: 'Business Property',
      description: 'Workshop and inventory protection',
      icon: FireIcon,
      href: '/business/property',
    },
  ];

  const industryStats = {
    averagePremium: '$3,000-$7,500',
    typicalLimits: '$1M/$2M GL',
    percentWithClaims: '16%',
    averageClaimSize: '$35,000',
  };

  const faqs = [
    {
      question: 'What\'s the difference between rough and finish carpentry insurance?',
      answer: 'Rough carpentry (framing) typically has higher rates due to structural risks and height exposure. Finish carpentry has lower rates but needs installation floater coverage for expensive materials like custom cabinets.',
    },
    {
      question: 'Do I need installation floater coverage?',
      answer: 'If you install items you\'ve purchased (cabinets, trim, doors), installation floater protects these materials until installed. It\'s essential for finish carpenters as GL doesn\'t cover materials you own.',
    },
    {
      question: 'How are carpentry tools covered?',
      answer: 'Basic GL includes minimal tool coverage. For valuable equipment like table saws, planers, or nail guns, you need inland marine coverage. This protects tools on job sites, in vehicles, or at your shop.',
    },
    {
      question: 'What about wood dust and fire risks?',
      answer: 'Proper dust collection, fire extinguishers, and hot work procedures reduce premiums. Some carriers offer discounts for shops with dust collection systems and proper electrical maintenance.',
    },
  ];

  const localProjects = [
    'Bergen County Custom Home Framing',
    'Paramus Mall Store Buildouts',
    'Hackensack School Renovations',
    'Fort Lee Luxury Condo Finishes',
    'Ridgewood Historic Millwork',
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