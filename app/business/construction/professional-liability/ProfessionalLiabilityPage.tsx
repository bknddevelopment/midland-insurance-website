'use client';

import React from 'react';
import ConstructionServiceTemplate from '@/components/templates/ConstructionServiceTemplate';
import {
  AcademicCapIcon,
  DocumentMagnifyingGlassIcon,
  ExclamationTriangleIcon,
  PencilSquareIcon,
  ScaleIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

export default function ProfessionalLiabilityPage() {
  const service = {
    name: 'Professional Liability Insurance',
    slug: 'professional-liability',
    description: 'Errors & Omissions (E&O) coverage for construction professionals providing design, consulting, or professional services. Essential protection for design-build contractors.',
    shortDescription: 'Protect your business from claims alleging errors, omissions, or negligence in your professional services, design work, or expert advice.',
  };

  const overview = {
    title: 'Coverage for Your Professional Services',
    content: 'Professional liability insurance (also called E&O) protects contractors who provide design services, project management, or professional advice. Unlike general liability which covers physical damage, professional liability covers financial losses from errors in your professional work. With the growth of design-build delivery in Bergen County, this coverage is increasingly important.',
    highlights: [
      'Coverage for design errors and omissions',
      'Protection for professional advice',
      'Defense costs included',
      'Prior acts coverage available',
      'Project-specific policies available',
    ],
  };

  const coverage = {
    title: 'What Professional Liability Covers',
    items: [
      {
        name: 'Design Errors',
        description: 'Mistakes in plans, specifications, or drawings',
        included: true,
      },
      {
        name: 'Professional Negligence',
        description: 'Failure to meet professional standards',
        included: true,
      },
      {
        name: 'Misrepresentation',
        description: 'Incorrect professional advice or information',
        included: true,
      },
      {
        name: 'Copyright Infringement',
        description: 'Unintentional use of protected designs',
        included: true,
      },
      {
        name: 'Breach of Contract',
        description: 'Failure to deliver promised professional services',
        included: true,
      },
      {
        name: 'Defense Costs',
        description: 'Legal fees even if claims are groundless',
        included: true,
      },
      {
        name: 'Construction Defects',
        description: 'Physical damage from poor workmanship (needs GL)',
        included: false,
      },
      {
        name: 'Bodily Injury',
        description: 'Physical injuries (covered by GL)',
        included: false,
      },
    ],
  };

  const whoNeeds = {
    title: 'Construction Professionals Who Need E&O',
    subtitle: 'Any contractor providing professional services needs coverage',
    items: [
      {
        type: 'Design-Build Contractors',
        description: 'Combining design and construction services',
        icon: PencilSquareIcon,
      },
      {
        type: 'Construction Managers',
        description: 'Providing professional management services',
        icon: AcademicCapIcon,
      },
      {
        type: 'Engineering Contractors',
        description: 'Contractors with in-house engineering',
        icon: DocumentMagnifyingGlassIcon,
      },
      {
        type: 'Specialty Design Trades',
        description: 'HVAC, electrical, or structural design work',
        icon: BuildingOffice2Icon,
      },
      {
        type: 'BIM/CAD Services',
        description: 'Contractors providing modeling or drafting',
        icon: ExclamationTriangleIcon,
      },
      {
        type: 'Consultants',
        description: 'Construction consulting and expert services',
        icon: ScaleIcon,
      },
    ],
  };

  const benefits = {
    title: 'Benefits of Our Professional Liability Coverage',
    items: [
      {
        benefit: 'Claims-Made Coverage',
        description: 'Covers claims made during policy period for past work',
      },
      {
        benefit: 'Defense Coverage',
        description: 'Legal defense costs outside policy limits',
      },
      {
        benefit: 'Contractual Liability',
        description: 'Coverage for liability assumed in contracts',
      },
      {
        benefit: 'Worldwide Coverage',
        description: 'Protection for projects anywhere in the world',
      },
      {
        benefit: 'Innocent Party Protection',
        description: 'Coverage despite partner\'s errors',
      },
      {
        benefit: 'Tail Coverage Options',
        description: 'Extended reporting periods available',
      },
    ],
  };

  const costFactors = {
    title: 'E&O Insurance Premium Factors',
    factors: [
      'Type of professional services',
      'Annual revenue from design work',
      'Years of experience',
      'Claims history',
      'Project types and size',
      'Policy limits and deductible',
      'Territory of operations',
      'Risk management practices',
    ],
  };

  const claims = {
    title: 'Real Professional Liability Claims',
    examples: [
      {
        scenario: 'HVAC Design Inadequate',
        coverage: 'E&O covered redesign and retrofit costs',
        outcome: '$150,000 claim resolved',
      },
      {
        scenario: 'Structural Calculations Error',
        coverage: 'Professional liability paid for corrections',
        outcome: '$275,000 in additional work covered',
      },
      {
        scenario: 'Code Compliance Oversight',
        coverage: 'E&O covered permit delays and redesign',
        outcome: '$85,000 in costs covered',
      },
    ],
  };

  const faqs = [
    {
      question: 'Do I need E&O if I have general liability?',
      answer: 'Yes, general liability excludes professional services. If you provide any design work, specifications, shop drawings, or professional advice, you need E&O coverage. Many design-build contracts specifically require professional liability insurance.',
    },
    {
      question: 'What\'s the difference between occurrence and claims-made?',
      answer: 'Professional liability is typically claims-made, covering claims filed during the policy period regardless of when the error occurred (with retroactive date). General liability is occurrence-based, covering incidents during the policy period regardless of when claimed.',
    },
    {
      question: 'Can I get project-specific professional liability?',
      answer: 'Yes, for larger design-build projects, we can arrange project-specific professional liability. This is often required by contracts and can be more cost-effective than annual policies for contractors who rarely do design work.',
    },
    {
      question: 'What about subconsultant work?',
      answer: 'If you hire design professionals, ensure they carry their own E&O. Your policy may provide some coverage for their work, but it\'s best to require certificates and additional insured status. We can help structure proper risk transfer.',
    },
    {
      question: 'How much E&O coverage do I need?',
      answer: 'Coverage needs depend on project size and contract requirements. Typical limits range from $1 million to $5 million. Design-build projects often require limits matching the project value. We\'ll analyze your contracts to recommend appropriate coverage.',
    },
  ];

  const relatedServices = [
    {
      name: 'General Liability',
      description: 'Essential companion to E&O coverage',
      href: '/business/construction/general-liability',
    },
    {
      name: 'Contractor Bonds',
      description: 'Performance bonds for design-build',
      href: '/business/construction/bonds',
    },
    {
      name: 'Cyber Liability',
      description: 'Protection for digital design files',
      href: '/business/cyber-liability',
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