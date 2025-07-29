'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  HomeModernIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

export default function CondoInsurancePage() {
  const coverageItems = [
    {
      title: 'Personal Property Protection',
      description: 'Coverage for your belongings including furniture, electronics, clothing, and valuables'
    },
    {
      title: 'Interior Structure Coverage',
      description: 'Protection for improvements, alterations, and fixtures within your unit'
    },
    {
      title: 'Personal Liability',
      description: 'Coverage if someone is injured in your condo or you damage someone else\'s property'
    },
    {
      title: 'Loss Assessment Coverage',
      description: 'Protection against special assessments from your condo association for covered losses'
    },
    {
      title: 'Additional Living Expenses',
      description: 'Coverage for temporary housing and living costs if your condo becomes uninhabitable'
    },
    {
      title: 'Guest Medical Protection',
      description: 'Medical payments for guests injured in your unit, regardless of fault'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Tailored Coverage',
      description: 'Policies designed specifically for condo owners, filling gaps left by your association\'s master policy.'
    },
    {
      icon: UserGroupIcon,
      title: 'HOA Expertise',
      description: 'We understand condo associations and can help coordinate coverage with your HOA\'s master policy.'
    },
    {
      icon: ChartBarIcon,
      title: 'Affordable Protection',
      description: 'Condo insurance is typically less expensive than homeowners insurance with comparable protection.'
    }
  ];

  const faqItems = [
    {
      question: 'What\'s the difference between condo insurance and homeowners insurance?',
      answer: 'Condo insurance (HO-6) covers your personal property and the interior of your unit, while your condo association\'s master policy covers the building structure and common areas. Homeowners insurance covers both the structure and contents.'
    },
    {
      question: 'What does the condo association\'s master policy cover?',
      answer: 'The master policy typically covers the building structure, common areas, and shared amenities. Coverage can be "bare walls" (structure only) or "all-in" (including fixtures). Review your association documents to understand what you need to insure.'
    },
    {
      question: 'Do I need loss assessment coverage?',
      answer: 'Yes, loss assessment coverage is highly recommended. If your condo association\'s master policy has a large deductible or doesn\'t fully cover a loss, you could be assessed thousands of dollars as your share.'
    },
    {
      question: 'How much condo insurance do I need?',
      answer: 'You\'ll need enough coverage for your personal property, any improvements you\'ve made, liability protection (typically $300,000+), and loss assessment coverage ($25,000-$50,000 is common).'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Condo Insurance in New Jersey"
      heroSubtitle="Smart Protection for Condo Owners"
      heroDescription="Comprehensive condo insurance that protects your unit, belongings, and financial security. Fill the gaps in your association's coverage with a policy designed for condo living."
      
      overviewBadge="Condo Coverage"
      overviewTitle="Protection Designed for Condo Living"
      overviewContent="Living in a condo offers convenience and community, but it also comes with unique insurance needs. While your condo association's master policy covers the building and common areas, it doesn't protect your personal property or cover you for liability within your unit.\n\nOur condo insurance policies are specifically designed to complement your association's coverage, protecting everything that's your responsibility. From your personal belongings to improvements you've made to your unit, we ensure you're fully protected without paying for duplicate coverage."
      
      coverageTitle="Complete Condo Protection"
      coverageDescription="Our HO-6 condo policies provide comprehensive coverage for your unit and belongings"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Condo Insurance"
      benefitsDescription="Experience the advantages of working with condo insurance specialists"
      benefits={benefits}
      
      ctaTitle="Protect Your Condo Today"
      ctaDescription="Get a free condo insurance quote and discover how affordable comprehensive coverage can be."
      ctaPrimaryButton={{
        text: 'Get Your Condo Insurance Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Condo Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Understanding Your Coverage Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Understanding Your Coverage Needs
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Know what's covered by your association and what you need to protect
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <BuildingOfficeIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Master Policy Coverage
                  </h3>
                  <p className="text-gray-600">
                    Your HOA's policy covers the building exterior, roof, common areas, and shared amenities.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <HomeModernIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your Responsibility
                  </h3>
                  <p className="text-gray-600">
                    You need coverage for your unit's interior, personal property, and liability within your space.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <BanknotesIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Special Assessments
                  </h3>
                  <p className="text-gray-600">
                    Loss assessment coverage protects you from unexpected HOA assessments after major claims.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}