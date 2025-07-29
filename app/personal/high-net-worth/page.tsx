'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  GlobeAmericasIcon,
  KeyIcon
} from '@heroicons/react/24/outline';

export default function HighNetWorthInsurancePage() {
  const coverageItems = [
    {
      title: 'High-Value Home Coverage',
      description: 'Guaranteed replacement cost coverage for luxury homes with no cap on rebuilding costs'
    },
    {
      title: 'Valuable Items Protection',
      description: 'Blanket coverage for jewelry, art, wine collections, and other high-value possessions'
    },
    {
      title: 'Excess Liability Coverage',
      description: 'Personal umbrella policies with limits of $5 million, $10 million, or more'
    },
    {
      title: 'Worldwide Property Coverage',
      description: 'Protection for multiple homes, vacation properties, and belongings anywhere in the world'
    },
    {
      title: 'Identity Fraud Protection',
      description: 'Comprehensive coverage for identity theft with dedicated restoration specialists'
    },
    {
      title: 'Risk Management Services',
      description: 'Access to security consultants, appraisers, and loss prevention specialists'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Protection',
      description: 'Coverage designed for complex assets and sophisticated lifestyles with higher limits and broader protection.'
    },
    {
      icon: UserGroupIcon,
      title: 'Concierge-Level Service',
      description: 'Dedicated account teams who understand high net worth needs and provide personalized service.'
    },
    {
      icon: ChartBarIcon,
      title: 'Risk Management Expertise',
      description: 'Proactive risk assessment and mitigation strategies to protect your assets and lifestyle.'
    }
  ];

  const faqItems = [
    {
      question: 'What qualifies as high net worth insurance?',
      answer: 'High net worth insurance is designed for individuals with homes valued over $1 million, significant assets, valuable collections, or complex insurance needs. These policies offer higher limits, broader coverage, and specialized services.'
    },
    {
      question: 'How is high net worth insurance different from standard coverage?',
      answer: 'High net worth policies offer guaranteed replacement cost on homes, higher limits on valuables, worldwide coverage, concierge claim service, and access to risk management specialists. Coverage is more comprehensive with fewer restrictions.'
    },
    {
      question: 'Do I need an umbrella policy?',
      answer: 'Yes, high net worth individuals face greater liability exposure. An umbrella policy provides additional liability coverage above your home and auto policies, typically starting at $1 million and going up to $100 million or more.'
    },
    {
      question: 'What additional services are included?',
      answer: 'Many high net worth insurers offer complimentary services like home security assessments, art appraisals, background checks for domestic staff, cyber security consulting, and wildfire defense services.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="High Net Worth Insurance in New Jersey"
      heroSubtitle="Exceptional Coverage for Exceptional Lifestyles"
      heroDescription="Sophisticated insurance solutions for high net worth individuals and families. Protect your assets, lifestyle, and legacy with coverage as unique as your needs."
      
      overviewBadge="Premium Protection"
      overviewTitle="Insurance That Matches Your Success"
      overviewContent="Your success has afforded you a lifestyle that requires more than standard insurance coverage. High net worth insurance is designed for individuals and families with significant assets, multiple properties, valuable collections, and unique risks.\n\nWe specialize in creating comprehensive insurance programs that protect not just your physical assets, but your financial security and personal lifestyle. Our access to premier insurance carriers means you'll receive broader coverage, higher limits, and exceptional service that matches the level of success you've achieved."
      
      coverageTitle="Comprehensive Wealth Protection"
      coverageDescription="Specialized coverage options designed for successful individuals and families"
      coverageItems={coverageItems}
      
      benefitsTitle="The High Net Worth Advantage"
      benefitsDescription="Experience insurance service that matches your expectations"
      benefits={benefits}
      
      ctaTitle="Elevate Your Insurance Protection"
      ctaDescription="Schedule a confidential consultation to discuss your high net worth insurance needs."
      ctaPrimaryButton={{
        text: 'Schedule a Consultation',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="High Net Worth Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Specialized Coverage Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Specialized Coverage Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Tailored protection for your unique assets and exposures
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <SparklesIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Collections & Valuables
                  </h3>
                  <p className="text-gray-600">
                    Fine art, jewelry, wine cellars, rare books, and memorabilia with agreed value coverage.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <GlobeAmericasIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    International Coverage
                  </h3>
                  <p className="text-gray-600">
                    Properties abroad, international travel, foreign liability, and kidnap & ransom protection.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <KeyIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Lifestyle Protection
                  </h3>
                  <p className="text-gray-600">
                    Yachts, aircraft, exotic cars, equestrian activities, and domestic staff coverage.
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