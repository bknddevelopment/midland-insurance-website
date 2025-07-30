'use client';

import React from 'react';
import ConstructionServiceTemplate from '@/components/templates/ConstructionServiceTemplate';
import {
  DocumentTextIcon,
  ShieldCheckIcon,
  BuildingLibraryIcon,
  ClipboardDocumentCheckIcon,
  BanknotesIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export default function BondsPage() {
  const service = {
    name: 'Contractor Bonds',
    slug: 'bonds',
    description: 'Complete bonding solutions for New Jersey contractors. License bonds, performance bonds, payment bonds, and more. Fast approval and competitive rates.',
    shortDescription: 'Surety bonds required for contractor licenses, permits, and construction contracts throughout Bergen County and New Jersey.',
  };

  const overview = {
    title: 'Your Construction Bonding Partner',
    content: 'Surety bonds are three-party agreements that guarantee contractors will fulfill their obligations. Whether you need a license bond for your NJ contractor registration, a performance bond for a public project, or a permit bond for local work, we provide fast, affordable bonding solutions through multiple surety companies.',
    highlights: [
      'Same-day bond issuance available',
      'Competitive rates from A-rated sureties',
      'All NJ contractor bond types',
      'Bonding lines up to $5 million',
      'Personal service from bond specialists',
    ],
  };

  const coverage = {
    title: 'Types of Contractor Bonds We Provide',
    items: [
      {
        name: 'License Bonds',
        description: 'Required for NJ Home Improvement Contractor registration',
        included: true,
      },
      {
        name: 'Performance Bonds',
        description: 'Guarantees project completion per contract terms',
        included: true,
      },
      {
        name: 'Payment Bonds',
        description: 'Ensures subcontractors and suppliers get paid',
        included: true,
      },
      {
        name: 'Bid Bonds',
        description: 'Required when bidding on public projects',
        included: true,
      },
      {
        name: 'Maintenance Bonds',
        description: 'Guarantees work quality for specified period',
        included: true,
      },
      {
        name: 'Permit Bonds',
        description: 'Required by municipalities for certain work',
        included: true,
      },
      {
        name: 'Supply Bonds',
        description: 'Guarantees material delivery',
        included: true,
      },
      {
        name: 'Subdivision Bonds',
        description: 'Required for development projects',
        included: true,
      },
    ],
  };

  const whoNeeds = {
    title: 'When Contractors Need Bonds',
    subtitle: 'Common bonding requirements in New Jersey',
    items: [
      {
        type: 'Home Improvement Contractors',
        description: '$5,000 bond required for NJ HIC registration',
        icon: DocumentTextIcon,
      },
      {
        type: 'Public Works Projects',
        description: 'Federal Miller Act and NJ Little Miller Act requirements',
        icon: BuildingLibraryIcon,
      },
      {
        type: 'Municipal Permits',
        description: 'Local bonds for sidewalks, driveways, utilities',
        icon: ClipboardDocumentCheckIcon,
      },
      {
        type: 'General Contractors',
        description: 'Performance bonds for large private projects',
        icon: ShieldCheckIcon,
      },
      {
        type: 'Subcontractors',
        description: 'May need bonds when working for bonded GCs',
        icon: BanknotesIcon,
      },
      {
        type: 'Developers',
        description: 'Subdivision and site improvement bonds',
        icon: ScaleIcon,
      },
    ],
  };

  const benefits = {
    title: 'Why Choose Us for Contractor Bonds',
    items: [
      {
        benefit: 'Fast Approval',
        description: 'Most bonds issued same day with proper documentation',
      },
      {
        benefit: 'Multiple Markets',
        description: 'Access to 10+ surety companies ensures best rates',
      },
      {
        benefit: 'Expert Guidance',
        description: 'We help navigate complex bonding requirements',
      },
      {
        benefit: 'Bonding Lines',
        description: 'Establish credit for ongoing bonding needs',
      },
      {
        benefit: 'Claims Support',
        description: 'Assistance if bond claims arise',
      },
      {
        benefit: 'Financial Review',
        description: 'Help improve your bonding capacity',
      },
    ],
  };

  const costFactors = {
    title: 'Bond Premium Factors',
    factors: [
      'Bond type and amount',
      'Personal credit score',
      'Business financial strength',
      'Industry experience',
      'Past bond claims',
      'Project size and duration',
      'Working capital',
      'Bank line of credit',
    ],
  };

  const claims = {
    title: 'How Bonds Protect Project Owners',
    examples: [
      {
        scenario: 'Contractor Abandons Project',
        coverage: 'Performance bond pays to complete work',
        outcome: 'Project finished by replacement contractor',
      },
      {
        scenario: 'Unpaid Subcontractor Files Lien',
        coverage: 'Payment bond satisfies the claim',
        outcome: 'Property owner protected from liens',
      },
      {
        scenario: 'Defective Work After Completion',
        coverage: 'Maintenance bond covers repairs',
        outcome: 'Corrections made at no cost to owner',
      },
    ],
  };

  const faqs = [
    {
      question: 'How much do contractor bonds cost?',
      answer: 'Bond premiums typically range from 1-3% of the bond amount for standard risks. A $50,000 performance bond might cost $500-$1,500 annually. Rates depend on credit score, financial strength, and bond type. Some license bonds have flat fees.',
    },
    {
      question: 'What\'s the difference between bonds and insurance?',
      answer: 'Insurance protects you from covered losses. Bonds protect your customers, guaranteeing you\'ll fulfill obligations. If a bond claim is paid, you must reimburse the surety company. Bonds are required by law or contract, while insurance protects your assets.',
    },
    {
      question: 'Can I get bonded with bad credit?',
      answer: 'Yes, we have surety programs for contractors with credit challenges. While rates may be higher, most contractors can get bonded. We\'ll work to find the best available terms and help you improve your bonding capacity over time.',
    },
    {
      question: 'How fast can I get a bond?',
      answer: 'Simple license bonds can be issued within hours. Performance bonds for larger projects may take 1-3 days for underwriting. Rush service is available. Having financial statements and project details ready speeds approval.',
    },
    {
      question: 'Do I need a bond for private projects?',
      answer: 'While bonds are required for public works, many private project owners also require bonds, especially for projects over $100,000. Having bonding capacity makes you more competitive and shows financial stability to potential clients.',
    },
  ];

  const relatedServices = [
    {
      name: 'General Liability',
      description: 'Required alongside most bonds',
      href: '/business/construction/general-liability',
    },
    {
      name: 'Professional Liability',
      description: 'For design-build contractors',
      href: '/business/construction/professional-liability',
    },
    {
      name: 'Business Auto',
      description: 'Vehicle coverage for bonded work',
      href: '/business/construction/commercial-auto',
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