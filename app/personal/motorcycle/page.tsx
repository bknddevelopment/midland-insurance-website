'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function MotorcycleInsurancePage() {
  const coverageItems = [
    {
      title: 'Liability Coverage',
      description: 'Protection for bodily injury and property damage you cause to others while riding'
    },
    {
      title: 'Collision Coverage',
      description: 'Pays for damage to your motorcycle from collisions with vehicles or objects'
    },
    {
      title: 'Comprehensive Coverage',
      description: 'Protection against theft, vandalism, weather damage, and other non-collision losses'
    },
    {
      title: 'Uninsured Motorist',
      description: 'Coverage if you\'re hit by a driver with no insurance or insufficient coverage'
    },
    {
      title: 'Medical Payments',
      description: 'Coverage for medical expenses for you and your passenger regardless of fault'
    },
    {
      title: 'Custom Parts & Equipment',
      description: 'Additional coverage for aftermarket parts, accessories, and custom modifications'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Specialized Coverage',
      description: 'Policies designed specifically for motorcycles, from sport bikes to cruisers to touring bikes.'
    },
    {
      icon: UserGroupIcon,
      title: 'Rider-Friendly Service',
      description: 'Our agents understand riders and can help with coverage for rallies, track days, and group rides.'
    },
    {
      icon: ChartBarIcon,
      title: 'Year-Round Savings',
      description: 'Seasonal riding options and lay-up periods to reduce premiums during winter months.'
    }
  ];

  const faqItems = [
    {
      question: 'Is motorcycle insurance required in New Jersey?',
      answer: 'Yes, New Jersey requires all motorcycles to have liability insurance with minimum limits of $15,000 per person, $30,000 per accident for bodily injury, and $5,000 for property damage. We recommend higher limits for better protection.'
    },
    {
      question: 'How can I lower my motorcycle insurance premium?',
      answer: 'Take a motorcycle safety course, maintain a clean driving record, choose higher deductibles, bundle with other policies, and ask about seasonal coverage if you don\'t ride year-round. Anti-theft devices can also reduce premiums.'
    },
    {
      question: 'Does motorcycle insurance cover passengers?',
      answer: 'Yes, liability and medical payments coverage typically extend to passengers. However, ensure your policy limits are adequate to cover potential injuries to both you and your passenger.'
    },
    {
      question: 'What about coverage for motorcycle gear?',
      answer: 'Standard policies provide limited coverage for riding gear. We can add additional coverage for helmets, leathers, and other expensive riding equipment to ensure full protection.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Motorcycle Insurance in New Jersey"
      heroSubtitle="Ride with Confidence"
      heroDescription="Comprehensive motorcycle insurance coverage for New Jersey riders. Whether you ride a sport bike, cruiser, or touring motorcycle, we'll protect your passion with the right coverage."
      
      overviewBadge="Rider Protection"
      overviewTitle="Coverage That Keeps Pace with Your Ride"
      overviewContent="The freedom of the open road comes with unique risks that require specialized insurance protection. New Jersey's diverse terrain – from mountain roads to shore highways – presents various challenges for riders. Our motorcycle insurance policies are designed to protect you, your bike, and your passenger no matter where the road takes you.\n\nWe understand that your motorcycle is more than just transportation – it's your passion, your escape, and often a significant investment. That's why we offer flexible coverage options tailored to your specific riding style, whether you're a weekend warrior, daily commuter, or long-distance tourer."
      
      coverageTitle="Complete Motorcycle Protection"
      coverageDescription="Coverage options designed specifically for motorcycle enthusiasts"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Motorcycle Insurance"
      benefitsDescription="Experience the advantages of working with riders who understand riders"
      benefits={benefits}
      
      ctaTitle="Get Protected Before You Ride"
      ctaDescription="Get a free motorcycle insurance quote and hit the road with confidence."
      ctaPrimaryButton={{
        text: 'Get Your Motorcycle Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Motorcycle Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Additional Coverage Options Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Additional Coverage for Serious Riders
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Enhance your protection with these optional coverages
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <TruckIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Roadside Assistance
                  </h3>
                  <p className="text-gray-600">
                    24/7 towing, battery jumps, flat tire assistance, and emergency fuel delivery designed for motorcycles.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <WrenchScrewdriverIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Total Loss Replacement
                  </h3>
                  <p className="text-gray-600">
                    Get a brand new bike if yours is totaled within the first few years of ownership.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <SparklesIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Trip Interruption
                  </h3>
                  <p className="text-gray-600">
                    Coverage for lodging and transportation if your bike breaks down far from home.
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