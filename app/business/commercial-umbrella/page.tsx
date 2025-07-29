'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

export default function CommercialUmbrellaInsurancePage() {
  const coverageItems = [
    {
      title: 'Excess Liability Coverage',
      description: 'Additional protection above your general liability, auto, and employers liability limits'
    },
    {
      title: 'Legal Defense Costs',
      description: 'Coverage for attorney fees and legal expenses that can quickly exhaust primary limits'
    },
    {
      title: 'Worldwide Coverage',
      description: 'Protection for claims arising from international business operations and travel'
    },
    {
      title: 'Broad Form Coverage',
      description: 'May provide coverage for some claims not covered by underlying policies'
    },
    {
      title: 'Reputation Protection',
      description: 'Defense against claims of libel, slander, and other personal injury allegations'
    },
    {
      title: 'Additional Insureds',
      description: 'Extends excess coverage to additional parties as required by contracts'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Catastrophic Protection',
      description: 'High limits from $1 million to $100 million protect against devastating lawsuits.'
    },
    {
      icon: UserGroupIcon,
      title: 'Comprehensive Coverage',
      description: 'One policy provides excess protection over multiple underlying policies.'
    },
    {
      icon: ChartBarIcon,
      title: 'Affordable Security',
      description: 'Substantial additional protection for a relatively small premium investment.'
    }
  ];

  const faqItems = [
    {
      question: 'Why does my business need umbrella insurance?',
      answer: 'In today\'s litigious environment, lawsuits can exceed standard policy limits. A serious auto accident, customer injury, or employment claim could result in millions in damages. Umbrella insurance protects your business assets and future earnings.'
    },
    {
      question: 'What does commercial umbrella insurance cover?',
      answer: 'It provides excess coverage over general liability, auto liability, and employers liability. Some policies also cover additional exposures like libel, slander, and false arrest. Coverage kicks in when underlying limits are exhausted.'
    },
    {
      question: 'How much umbrella coverage do I need?',
      answer: 'Consider your business assets, annual revenue, industry risks, and contractual requirements. Many businesses start with $1-5 million but may need more based on their exposure. We\'ll help assess your specific needs.'
    },
    {
      question: 'What are the requirements for umbrella coverage?',
      answer: 'You\'ll need adequate underlying insurance (usually $1 million per occurrence). Insurers may require specific minimum limits on general liability, auto, and other policies. We\'ll ensure your coverage structure qualifies.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Commercial Umbrella Insurance in New Jersey"
      heroSubtitle="Extra Protection When You Need It Most"
      heroDescription="Commercial umbrella insurance provides critical excess liability coverage for your business. Protect your assets from catastrophic claims that exceed standard policy limits."
      
      overviewBadge="Excess Liability"
      overviewTitle="Protection Beyond the Basics"
      overviewContent="Standard business insurance policies have limits that can be quickly exhausted by today's high-dollar lawsuits. A single catastrophic event – a serious auto accident, a customer injury, or a product liability claim – could threaten everything you've built.\n\nCommercial umbrella insurance provides an extra layer of liability protection that kicks in when your primary policies reach their limits. This affordable coverage can mean the difference between a manageable claim and financial devastation. Don't let a lawsuit destroy your business – get the excess protection you need."
      
      coverageTitle="What Umbrella Insurance Covers"
      coverageDescription="Broad excess protection for your business"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Umbrella Coverage"
      benefitsDescription="Smart protection for successful businesses"
      benefits={benefits}
      
      ctaTitle="Secure Your Business Future"
      ctaDescription="Get a commercial umbrella quote and protect your business from catastrophic losses."
      ctaPrimaryButton={{
        text: 'Get Your Umbrella Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Commercial Umbrella FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Examples of Covered Claims Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  When Umbrella Coverage Matters
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Real scenarios where umbrella insurance protects your business
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ExclamationTriangleIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Severe Auto Accidents
                  </h3>
                  <p className="text-gray-600">
                    Multi-vehicle accidents with serious injuries can result in claims exceeding $1 million in damages.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ScaleIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Product Liability
                  </h3>
                  <p className="text-gray-600">
                    Defective products causing injury or damage can lead to class action suits with massive settlements.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <BanknotesIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Employment Claims
                  </h3>
                  <p className="text-gray-600">
                    Discrimination, harassment, or wrongful termination suits often exceed primary policy limits.
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