'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  HomeIcon,
  ExclamationTriangleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function FloodInsurancePage() {
  const coverageItems = [
    {
      title: 'Building Coverage',
      description: 'Protection for your home\'s structure, foundation, electrical systems, plumbing, and HVAC'
    },
    {
      title: 'Contents Coverage',
      description: 'Coverage for personal belongings, furniture, electronics, and clothing damaged by flood'
    },
    {
      title: 'Basement Coverage',
      description: 'Limited coverage for basements including utilities, equipment, and specific improvements'
    },
    {
      title: 'Debris Removal',
      description: 'Coverage for the cost of removing flood-related debris from your property'
    },
    {
      title: 'Loss Avoidance',
      description: 'Reimbursement for sandbags, pumps, and other flood prevention measures'
    },
    {
      title: 'Increased Cost of Compliance',
      description: 'Additional coverage to meet updated building codes when rebuilding after a flood'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'NFIP & Private Options',
      description: 'Access to both National Flood Insurance Program and private flood insurance for better coverage and pricing.'
    },
    {
      icon: UserGroupIcon,
      title: 'Flood Zone Expertise',
      description: 'We understand New Jersey flood zones and can help you get the right coverage for your risk level.'
    },
    {
      icon: ChartBarIcon,
      title: 'Competitive Pricing',
      description: 'Compare NFIP rates with private flood insurance options that may offer broader coverage at lower costs.'
    }
  ];

  const faqItems = [
    {
      question: 'Do I need flood insurance if I\'m not in a flood zone?',
      answer: 'Yes! Over 20% of flood claims come from properties outside high-risk flood zones. Standard homeowners insurance doesn\'t cover flood damage, and floods can happen anywhere due to heavy rain, snow melt, or storm surge.'
    },
    {
      question: 'Is there a waiting period for flood insurance?',
      answer: 'Yes, there\'s typically a 30-day waiting period before flood insurance takes effect. Don\'t wait until a storm is approaching - it will be too late to get coverage. Some exceptions apply for new home purchases.'
    },
    {
      question: 'What\'s the difference between NFIP and private flood insurance?',
      answer: 'NFIP (National Flood Insurance Program) is government-backed with standardized coverage and limits. Private flood insurance often offers higher limits, additional coverages, and may be less expensive, especially for lower-risk properties.'
    },
    {
      question: 'What doesn\'t flood insurance cover?',
      answer: 'Flood insurance typically doesn\'t cover temporary living expenses, currency, precious metals, outdoor property like decks and pools, cars (covered by auto insurance), and mold damage that could have been prevented.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Flood Insurance in New Jersey"
      heroSubtitle="Don't Let Flooding Wash Away Your Investment"
      heroDescription="Comprehensive flood insurance protection for New Jersey homeowners. With our coastal location and severe weather patterns, flood coverage is essential protection you can't afford to skip."
      
      overviewBadge="Flood Protection"
      overviewTitle="Essential Coverage for New Jersey Properties"
      overviewContent="Living in New Jersey means dealing with hurricanes, nor'easters, heavy rains, and storm surge risks. Whether you're near the Jersey Shore, along a river, or inland, flood damage can devastate your home and finances. Standard homeowners insurance excludes flood damage, leaving you vulnerable without proper coverage.\n\nWe offer both NFIP (National Flood Insurance Program) policies and private flood insurance options. Private flood insurance often provides higher coverage limits, lower deductibles, and additional benefits not available through NFIP. Let us help you compare options and find the best flood protection for your property."
      
      coverageTitle="What Flood Insurance Covers"
      coverageDescription="Protect your home and belongings from devastating flood damage"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Flood Insurance"
      benefitsDescription="Expert guidance through flood insurance complexities"
      benefits={benefits}
      
      ctaTitle="Protect Your Home from Flood Damage"
      ctaDescription="Get a flood insurance quote today - don't wait until it's too late."
      ctaPrimaryButton={{
        text: 'Get Your Flood Insurance Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Flood Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* New Jersey Flood Risks Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  New Jersey Flood Risks
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Understanding your flood risk is the first step to proper protection
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ExclamationTriangleIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Coastal Flooding
                  </h3>
                  <p className="text-gray-600">
                    Storm surge from hurricanes and nor\'easters threatens Jersey Shore communities.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <HomeIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    River Flooding
                  </h3>
                  <p className="text-gray-600">
                    Properties near the Passaic, Raritan, and Delaware rivers face seasonal flood risks.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ClockIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Flash Flooding
                  </h3>
                  <p className="text-gray-600">
                    Heavy rains can overwhelm storm drains causing flooding anywhere, even inland areas.
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