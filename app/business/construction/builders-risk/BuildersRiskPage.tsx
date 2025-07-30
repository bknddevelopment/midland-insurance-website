'use client';

import React from 'react';
import ConstructionServiceTemplate from '@/components/templates/ConstructionServiceTemplate';
import {
  BuildingOfficeIcon,
  FireIcon,
  CloudArrowUpIcon,
  ShieldExclamationIcon,
  BanknotesIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';

export default function BuildersRiskPage() {
  const service = {
    name: 'Builder\'s Risk Insurance',
    slug: 'builders-risk',
    description: 'Comprehensive property coverage for buildings under construction. Protect your Bergen County construction projects from theft, weather damage, and vandalism.',
    shortDescription: 'Essential coverage for structures, materials, and equipment during construction or renovation projects throughout New Jersey.',
  };

  const overview = {
    title: 'Complete Protection During Construction',
    content: 'Builder\'s risk insurance (also called Course of Construction) protects buildings under construction, materials, supplies, and equipment from direct physical loss. This coverage is essential for new construction, renovations, and ground-up projects in Bergen County\'s active construction market.',
    highlights: [
      'Coverage begins when materials arrive on site',
      'Protection through project completion',
      'Covers structure, materials, and supplies',
      'Soft costs coverage available',
      'Monthly reporting or completed value options',
    ],
  };

  const coverage = {
    title: 'What Builder\'s Risk Insurance Covers',
    items: [
      {
        name: 'Fire and Lightning',
        description: 'Damage from fire, lightning strikes, and resulting smoke',
        included: true,
      },
      {
        name: 'Theft and Vandalism',
        description: 'Stolen materials and malicious damage to the project',
        included: true,
      },
      {
        name: 'Wind and Hail',
        description: 'Storm damage to structure and materials',
        included: true,
      },
      {
        name: 'Water Damage',
        description: 'Burst pipes, rain damage through openings',
        included: true,
      },
      {
        name: 'Materials in Transit',
        description: 'Coverage while materials are being delivered',
        included: true,
      },
      {
        name: 'Debris Removal',
        description: 'Costs to remove damaged materials',
        included: true,
      },
      {
        name: 'Earthquake',
        description: 'Seismic damage (available as add-on)',
        included: false,
      },
      {
        name: 'Flood',
        description: 'Rising water damage (separate policy needed)',
        included: false,
      },
    ],
  };

  const whoNeeds = {
    title: 'Who Needs Builder\'s Risk Coverage?',
    subtitle: 'Required for most construction projects in New Jersey',
    items: [
      {
        type: 'General Contractors',
        description: 'Primary responsibility for securing coverage on new builds',
        icon: BuildingOfficeIcon,
      },
      {
        type: 'Property Owners',
        description: 'Owners may purchase to protect their investment',
        icon: HomeModernIcon,
      },
      {
        type: 'Renovation Contractors',
        description: 'Essential for major renovations and additions',
        icon: BanknotesIcon,
      },
      {
        type: 'Developers',
        description: 'Multi-unit projects require master builder\'s risk policies',
        icon: CloudArrowUpIcon,
      },
      {
        type: 'Specialty Contractors',
        description: 'May need coverage when working as prime contractor',
        icon: ShieldExclamationIcon,
      },
      {
        type: 'Lenders',
        description: 'Construction loans typically require builder\'s risk',
        icon: FireIcon,
      },
    ],
  };

  const benefits = {
    title: 'Advantages of Our Builder\'s Risk Policies',
    items: [
      {
        benefit: 'Flexible Coverage Terms',
        description: 'Policies from 3 months to 2 years with extension options',
      },
      {
        benefit: 'Competitive Deductibles',
        description: 'Options from $1,000 to $25,000 based on project size',
      },
      {
        benefit: 'Additional Coverages',
        description: 'Soft costs, loss of rents, and ordinance/law available',
      },
      {
        benefit: 'Permission to Occupy',
        description: 'Coverage continues during punch list and move-in',
      },
      {
        benefit: 'Blanket Coverage Available',
        description: 'Cover multiple projects under one policy',
      },
      {
        benefit: 'Fast Policy Issuance',
        description: 'Same-day coverage for qualified projects',
      },
    ],
  };

  const costFactors = {
    title: 'Builder\'s Risk Premium Factors',
    factors: [
      'Total completed value of project',
      'Type of construction (frame, masonry, fire-resistive)',
      'Project duration',
      'Location and local crime rates',
      'Project type (new vs renovation)',
      'Protective safeguards (fencing, security)',
      'Deductible selected',
      'Optional coverages added',
    ],
  };

  const claims = {
    title: 'Common Builder\'s Risk Claims',
    examples: [
      {
        scenario: 'Copper Theft at Job Site',
        coverage: 'Theft coverage paid for replacement materials',
        outcome: '$35,000 claim paid quickly',
      },
      {
        scenario: 'Wind Damage During Framing',
        coverage: 'Storm damage to structure and materials covered',
        outcome: '$75,000 restoration completed',
      },
      {
        scenario: 'Fire from Welding Operations',
        coverage: 'Fire damage to building and cleanup costs',
        outcome: '$250,000 claim handled',
      },
    ],
  };

  const faqs = [
    {
      question: 'When should builder\'s risk coverage start?',
      answer: 'Coverage should begin when materials are delivered to the job site or when construction begins, whichever comes first. Starting coverage late leaves gaps that could be costly. We can backdate coverage if work recently started.',
    },
    {
      question: 'Does builder\'s risk cover my tools and equipment?',
      answer: 'Standard builder\'s risk covers materials that become part of the structure. Contractors\' tools and equipment typically need separate inland marine coverage. We can bundle both coverages for complete job site protection.',
    },
    {
      question: 'What happens when construction is complete?',
      answer: 'Builder\'s risk coverage typically ends when the project is complete, occupied, or put to its intended use. You\'ll need to transition to a permanent property policy. We handle this transition seamlessly to avoid coverage gaps.',
    },
    {
      question: 'Can I add soft costs coverage?',
      answer: 'Yes, soft costs coverage pays for additional expenses like loan interest, real estate taxes, and professional fees if the project is delayed by a covered loss. This is especially important for larger projects with construction financing.',
    },
    {
      question: 'Who should be named on the policy?',
      answer: 'The policy should name all parties with an insurable interest: owner, general contractor, and lender. Additional insureds can include major subcontractors. Proper policy structure prevents disputes after a loss.',
    },
  ];

  const relatedServices = [
    {
      name: 'General Liability',
      description: 'Third-party injury and damage coverage',
      href: '/business/construction/general-liability',
    },
    {
      name: 'Installation Floater',
      description: 'Materials coverage before installation',
      href: '/business/construction/tools-equipment',
    },
    {
      name: 'Commercial Property',
      description: 'Permanent coverage after construction',
      href: '/business/property',
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