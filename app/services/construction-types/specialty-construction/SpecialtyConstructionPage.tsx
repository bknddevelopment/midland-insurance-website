'use client';

import React from 'react';
import TradePageTemplate from '@/components/templates/TradePageTemplate';
import {
  CubeIcon,
  ShieldCheckIcon,
  BeakerIcon,
  WrenchScrewdriverIcon,
  RadioIcon,
  ExclamationTriangleIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

export default function SpecialtyConstructionPage() {
  const trade = {
    name: 'Specialty Construction',
    slug: 'specialty-construction',
    description: 'Tailored insurance for specialty construction projects in Bergen County. Medical facilities, laboratories, data centers, and other specialized buildings require unique expertise and coverage.',
    heroImage: '/photos/specialty-construction-hero.jpg',
  };

  const requirements = [
    'Specialized trade liability coverage',
    'Professional liability for technical work',
    'High-value equipment and materials coverage',
    'Stringent quality control documentation',
    'Technology errors and omissions',
    'Clean room and controlled environment coverage',
  ];

  const commonRisks = [
    {
      risk: 'Technical Specification Failures',
      description: 'Not meeting precise technical requirements',
    },
    {
      risk: 'Contamination Issues',
      description: 'Clean room or sterile environment breaches',
    },
    {
      risk: 'System Integration Problems',
      description: 'Complex systems not working together properly',
    },
    {
      risk: 'Specialized Material Damage',
      description: 'Damage to expensive, custom materials',
    },
    {
      risk: 'Regulatory Compliance',
      description: 'Healthcare, lab, or data center regulations',
    },
    {
      risk: 'Technology Failures',
      description: 'Smart building or automation system errors',
    },
  ];

  const coverageOptions = [
    {
      name: 'Specialty Trade Liability',
      description: 'Coverage for unique construction risks',
      icon: CubeIcon,
      href: '/business/construction/specialty-liability',
    },
    {
      name: 'Professional Liability',
      description: 'Technical design and specification errors',
      icon: AcademicCapIcon,
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Installation Floater',
      description: 'High-value materials and equipment',
      icon: RadioIcon,
      href: '/business/construction/installation-floater',
    },
    {
      name: 'Technology E&O',
      description: 'Smart systems and automation coverage',
      icon: BuildingOffice2Icon,
      href: '/business/technology-eo',
    },
    {
      name: 'Pollution Liability',
      description: 'Clean room and environmental protection',
      icon: BeakerIcon,
      href: '/business/environmental-liability',
    },
    {
      name: 'Equipment Breakdown',
      description: 'Specialized system failure coverage',
      icon: WrenchScrewdriverIcon,
      href: '/business/construction/equipment-breakdown',
    },
  ];

  const industryStats = {
    averagePremium: '$12,000-$40,000',
    typicalLimits: '$2M/$4M GL + Prof',
    percentWithClaims: '16%',
    averageClaimSize: '$95,000',
  };

  const faqs = [
    {
      question: 'What makes specialty construction insurance different?',
      answer: 'Specialty construction involves unique risks like precise technical specifications, regulatory compliance, high-value materials, and system integration challenges. Insurance must cover professional liability, technology errors, and often pollution or contamination risks not found in standard construction.',
    },
    {
      question: 'Do I need professional liability for specialty construction?',
      answer: 'Yes, most specialty construction involves design elements, technical specifications, or performance standards that require professional liability coverage. This is especially important for medical facilities, laboratories, data centers, and other technical environments.',
    },
    {
      question: 'How does coverage work for clean room construction?',
      answer: 'Clean room construction requires pollution liability for contamination, professional liability for design specifications, and often performance bonds for air quality standards. We offer specialized packages that combine these coverages for pharmaceutical and technology clean rooms.',
    },
    {
      question: 'What about smart building and automation systems?',
      answer: 'Smart building systems require technology errors and omissions coverage, cyber liability for connected systems, and professional liability for system design. As buildings become more automated, these coverages are increasingly important for specialty contractors.',
    },
  ];

  const localProjects = [
    'Valley Hospital Surgical Suite Expansion',
    'Hackensack Meridian Research Laboratory',
    'Bergen County Data Center Facility',
    'Pharmaceutical Clean Room - Teterboro',
    'Medical Imaging Center - Paramus',
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