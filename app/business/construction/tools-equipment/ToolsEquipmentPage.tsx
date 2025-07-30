'use client';

import React from 'react';
import ConstructionServiceTemplate from '@/components/templates/ConstructionServiceTemplate';
import {
  WrenchScrewdriverIcon,
  TruckIcon,
  CubeIcon,
  ShieldExclamationIcon,
  CogIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

export default function ToolsEquipmentPage() {
  const service = {
    name: 'Tools & Equipment Insurance',
    slug: 'tools-equipment',
    description: 'Inland marine coverage for contractors\' tools and equipment. Protect your valuable construction equipment from theft, damage, and mysterious disappearance.',
    shortDescription: 'Comprehensive protection for tools and equipment whether at the job site, in transit, or in storage. Essential coverage for Bergen County contractors.',
  };

  const overview = {
    title: 'Protect Your Most Important Assets',
    content: 'Your tools and equipment are essential to your livelihood. Inland marine insurance (also called contractors equipment coverage) protects these valuable assets wherever they go. Unlike property insurance that covers items at fixed locations, inland marine follows your equipment from job site to job site, providing the mobile coverage contractors need.',
    highlights: [
      'Coverage anywhere in the coverage territory',
      'Protection in transit and on job sites',
      'Mysterious disappearance included',
      'Rented and leased equipment options',
      'Replacement cost coverage available',
    ],
  };

  const coverage = {
    title: 'What\'s Covered by Inland Marine',
    items: [
      {
        name: 'Theft',
        description: 'Stolen tools from job sites, vehicles, or storage',
        included: true,
      },
      {
        name: 'Direct Physical Damage',
        description: 'Damage from accidents, drops, or mishaps',
        included: true,
      },
      {
        name: 'Mysterious Disappearance',
        description: 'Items that go missing with no explanation',
        included: true,
      },
      {
        name: 'Fire and Weather',
        description: 'Damage from fire, wind, hail, and lightning',
        included: true,
      },
      {
        name: 'Vandalism',
        description: 'Malicious damage to equipment',
        included: true,
      },
      {
        name: 'Transit Coverage',
        description: 'Protection while moving between locations',
        included: true,
      },
      {
        name: 'Wear and Tear',
        description: 'Gradual deterioration from use',
        included: false,
      },
      {
        name: 'Mechanical Breakdown',
        description: 'Internal mechanical or electrical failure',
        included: false,
      },
    ],
  };

  const whoNeeds = {
    title: 'Every Contractor Needs Equipment Coverage',
    subtitle: 'Protect the tools that keep you working',
    items: [
      {
        type: 'Trade Contractors',
        description: 'Hand tools, power tools, and testing equipment',
        icon: WrenchScrewdriverIcon,
      },
      {
        type: 'Heavy Equipment Operators',
        description: 'Excavators, loaders, and heavy machinery',
        icon: TruckIcon,
      },
      {
        type: 'Specialty Contractors',
        description: 'Specialized equipment for specific trades',
        icon: CogIcon,
      },
      {
        type: 'General Contractors',
        description: 'Job site equipment and temporary structures',
        icon: CubeIcon,
      },
      {
        type: 'Equipment Rental Users',
        description: 'Coverage for rented and leased items',
        icon: CircleStackIcon,
      },
      {
        type: 'Mobile Operations',
        description: 'Tools stored in vehicles and trailers',
        icon: ShieldExclamationIcon,
      },
    ],
  };

  const benefits = {
    title: 'Advantages of Our Equipment Coverage',
    items: [
      {
        benefit: 'Blanket Coverage Available',
        description: 'Cover all tools up to a limit without scheduling each item',
      },
      {
        benefit: 'Low Deductibles',
        description: 'Options starting at $250 for smaller claims',
      },
      {
        benefit: 'Replacement Cost',
        description: 'New equipment value, not depreciated amount',
      },
      {
        benefit: 'Worldwide Territory',
        description: 'Coverage throughout US and sometimes internationally',
      },
      {
        benefit: 'Newly Acquired Coverage',
        description: 'Automatic coverage for new purchases (limits apply)',
      },
      {
        benefit: 'Rental Reimbursement',
        description: 'Rent replacement equipment while yours is repaired',
      },
    ],
  };

  const costFactors = {
    title: 'Equipment Insurance Premium Factors',
    factors: [
      'Total value of equipment',
      'Types of tools and equipment',
      'Deductible selected',
      'Loss history',
      'Security measures',
      'Storage locations',
      'Coverage territory',
      'Scheduled vs blanket coverage',
    ],
  };

  const claims = {
    title: 'Common Equipment Claims We Handle',
    examples: [
      {
        scenario: 'Power Tools Stolen from Van',
        coverage: 'Theft coverage replaced all tools',
        outcome: '$12,000 in tools replaced',
      },
      {
        scenario: 'Excavator Falls Off Trailer',
        coverage: 'Direct damage paid for repairs',
        outcome: '$45,000 repair covered',
      },
      {
        scenario: 'Generator Disappears from Site',
        coverage: 'Mysterious disappearance coverage applied',
        outcome: '$8,000 replacement paid',
      },
    ],
  };

  const faqs = [
    {
      question: 'Should I schedule each tool or get blanket coverage?',
      answer: 'For expensive items over $5,000, scheduling provides broader coverage with agreed values. Blanket coverage works well for hand tools and smaller equipment, covering everything up to a per-item limit without listing each tool.',
    },
    {
      question: 'Is equipment covered in my locked vehicle?',
      answer: 'Yes, inland marine covers tools in vehicles, but insurers may limit theft coverage from unattended vehicles. Installing additional security like tool boxes, alarms, or GPS tracking can improve coverage and reduce premiums.',
    },
    {
      question: 'How does this differ from commercial property coverage?',
      answer: 'Commercial property covers items at your business location. Inland marine covers mobile equipment wherever it goes - job sites, vehicles, or temporary storage. Contractors need inland marine because their tools rarely stay in one place.',
    },
    {
      question: 'What about rented equipment?',
      answer: 'Inland marine can cover rented or leased equipment, protecting you from rental company damage claims. This is often cheaper than rental company insurance and provides broader coverage. Always verify coverage before declining rental insurance.',
    },
    {
      question: 'How do I document my tools for insurance?',
      answer: 'Keep an updated inventory with photos, receipts, and serial numbers. Many insurers provide apps for easy documentation. Good records speed claims and ensure proper coverage. We provide inventory templates to all clients.',
    },
  ];

  const relatedServices = [
    {
      name: 'Commercial Auto',
      description: 'Vehicle coverage for equipment transport',
      href: '/business/construction/commercial-auto',
    },
    {
      name: 'General Liability',
      description: 'Third-party injury from equipment',
      href: '/business/construction/general-liability',
    },
    {
      name: 'Builder\'s Risk',
      description: 'Job site materials coverage',
      href: '/business/construction/builders-risk',
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