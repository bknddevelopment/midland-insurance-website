'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function BoatInsurancePage() {
  const coverageItems = [
    {
      title: 'Hull Coverage',
      description: 'Protects your boat from physical damage including collisions, weather, and vandalism'
    },
    {
      title: 'Liability Protection',
      description: 'Covers bodily injury and property damage you cause to others while boating'
    },
    {
      title: 'Medical Payments',
      description: 'Covers medical expenses for you and your passengers regardless of fault'
    },
    {
      title: 'Uninsured Boater',
      description: 'Protection if you\'re hit by a boater with no insurance or insufficient coverage'
    },
    {
      title: 'Personal Property',
      description: 'Coverage for fishing equipment, water sports gear, and other personal items on board'
    },
    {
      title: 'Emergency Services',
      description: 'Towing, fuel delivery, and on-water assistance when you need it most'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Protection',
      description: 'From small fishing boats to luxury yachts, we have coverage options for all watercraft types and sizes.'
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Marine Knowledge',
      description: 'Our agents understand boating and can help you get the right coverage for your specific needs.'
    },
    {
      icon: ChartBarIcon,
      title: 'Competitive Rates',
      description: 'We shop multiple carriers to find you the best coverage at the most competitive prices.'
    }
  ];

  const faqItems = [
    {
      question: 'Do I need boat insurance in New Jersey?',
      answer: 'While New Jersey doesn\'t require boat insurance by law, many marinas require it for docking. Additionally, if you have a boat loan, your lender will require coverage. Even without these requirements, boat insurance protects your investment and provides liability coverage.'
    },
    {
      question: 'What types of boats can you insure?',
      answer: 'We insure all types of watercraft including powerboats, sailboats, fishing boats, pontoon boats, personal watercraft (jet skis), and yachts. Coverage is available for boats of all sizes and values.'
    },
    {
      question: 'Does boat insurance cover me year-round?',
      answer: 'Yes, most policies provide year-round coverage. Some insurers offer lay-up periods during winter months when your boat is in storage, which can reduce your premium while maintaining comprehensive coverage.'
    },
    {
      question: 'What\'s the difference between actual cash value and agreed value?',
      answer: 'Actual cash value pays the depreciated value of your boat at the time of loss. Agreed value coverage pays a predetermined amount you and the insurer agree upon when you buy the policy, providing better protection for your investment.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Boat Insurance in New Jersey"
      heroSubtitle="Protect Your Investment on the Water"
      heroDescription="Comprehensive boat insurance coverage for all types of watercraft. From fishing boats to luxury yachts, we\'ll keep you protected on New Jersey\'s waters."
      
      overviewBadge="Marine Coverage"
      overviewTitle="Navigate with Confidence"
      overviewContent="Whether you\'re cruising the Jersey Shore, fishing in Barnegat Bay, or sailing on the Hudson River, proper boat insurance is essential. Our comprehensive marine insurance policies protect your watercraft, your passengers, and your liability exposure.\n\nWe understand that your boat is more than just a vehicle – it\'s your escape, your passion, and often a significant investment. That\'s why we offer flexible coverage options tailored to your specific boating lifestyle and budget."
      
      coverageTitle="What\'s Covered"
      coverageDescription="Our boat insurance policies offer comprehensive protection for your watercraft and marine activities"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Boat Insurance"
      benefitsDescription="Experience the advantages of working with marine insurance experts"
      benefits={benefits}
      
      ctaTitle="Ready to Protect Your Boat?"
      ctaDescription="Get a free boat insurance quote and discover how affordable comprehensive coverage can be."
      ctaPrimaryButton={{
        text: 'Get Your Boat Insurance Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Boat Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Additional Coverage Options */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Additional Coverage Options
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Customize your policy with these optional coverages
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <WrenchScrewdriverIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mechanical Breakdown
                  </h3>
                  <p className="text-gray-600">
                    Coverage for engine and mechanical failures not covered by standard policies.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <SparklesIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Total Loss Replacement
                  </h3>
                  <p className="text-gray-600">
                    Get a brand new boat if yours is totaled within the first few model years.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <MapPinIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Navigation Extension
                  </h3>
                  <p className="text-gray-600">
                    Extend your coverage area for trips to the Bahamas or other destinations.
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