'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function ClassicAutoInsurancePage() {
  const coverageItems = [
    {
      title: 'Agreed Value Coverage',
      description: 'Your classic car is insured for a guaranteed amount we agree upon, protecting your investment'
    },
    {
      title: 'Comprehensive & Collision',
      description: 'Protection against damage from accidents, weather, vandalism, and other covered perils'
    },
    {
      title: 'Spare Parts Coverage',
      description: 'Coverage for spare parts and automotive tools specific to your classic vehicle'
    },
    {
      title: 'Towing & Labor',
      description: 'Roadside assistance and towing specifically designed for classic and antique vehicles'
    },
    {
      title: 'Auto Show Medical',
      description: 'Medical reimbursement for injuries that occur at car shows and exhibitions'
    },
    {
      title: 'Trip Interruption',
      description: 'Reimbursement for lodging and transportation if your classic car breaks down far from home'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Specialized Coverage',
      description: 'Policies designed specifically for classic, antique, and collector vehicles with unique needs and values.'
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Knowledge',
      description: 'Our agents understand classic cars and can help you get the right coverage for your prized possession.'
    },
    {
      icon: ChartBarIcon,
      title: 'Competitive Rates',
      description: 'Lower premiums than standard auto insurance because classic cars are driven less and maintained better.'
    }
  ];

  const faqItems = [
    {
      question: 'What qualifies as a classic or antique car?',
      answer: 'Generally, vehicles 25 years or older, or limited production vehicles that are collectible. Some insurers also cover modified vehicles, exotics, and modern classics. Each carrier has specific guidelines.'
    },
    {
      question: 'How is classic car insurance different from regular auto insurance?',
      answer: 'Classic car insurance offers agreed value coverage instead of actual cash value, has lower premiums due to limited use, and includes specialized coverage for car shows, spare parts, and restoration.'
    },
    {
      question: 'Are there mileage restrictions?',
      answer: 'Most classic car policies have annual mileage limits, typically between 2,500 to 7,500 miles per year. However, we can find policies with higher limits or unlimited pleasure use depending on your needs.'
    },
    {
      question: 'Can I drive my classic car to work?',
      answer: 'Most policies restrict commuting to work, but allow pleasure driving, car shows, club events, and exhibitions. Some carriers offer occasional work commute options.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Classic Auto Insurance in New Jersey"
      heroSubtitle="Protect Your Automotive Investment"
      heroDescription="Specialized insurance coverage for classic cars, antique vehicles, and collector automobiles. Preserve your passion with protection designed for automotive enthusiasts."
      
      overviewBadge="Collector Coverage"
      overviewTitle="Insurance as Unique as Your Classic Car"
      overviewContent="Your classic car isn't just transportation – it's a piece of history, a work of art, and often a significant investment. Standard auto insurance doesn't understand the true value of your vehicle or the care you put into maintaining it.\n\nOur classic car insurance policies are designed specifically for collectors and enthusiasts. We offer agreed value coverage that guarantees you'll receive the full insured amount in case of a total loss, without depreciation. Plus, with lower premiums than standard auto insurance, you can protect your investment without breaking the bank."
      
      coverageTitle="Comprehensive Classic Car Protection"
      coverageDescription="Our classic auto policies include specialized coverage options you won't find with standard insurance"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Classic Auto Insurance"
      benefitsDescription="Experience the advantages of working with classic car insurance specialists"
      benefits={benefits}
      
      ctaTitle="Ready to Protect Your Classic?"
      ctaDescription="Get a free classic auto insurance quote and discover how affordable specialized coverage can be."
      ctaPrimaryButton={{
        text: 'Get Your Classic Car Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Classic Auto Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Qualifying Vehicles Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Vehicles We Insure
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From American muscle to European classics, we cover them all
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <TrophyIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Classic Cars
                  </h3>
                  <p className="text-gray-600">
                    Vehicles 20-40 years old including muscle cars, vintage sports cars, and collectible sedans.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <SparklesIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Antique Vehicles
                  </h3>
                  <p className="text-gray-600">
                    Cars over 40 years old, vintage motorcycles, and historic commercial vehicles.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <WrenchScrewdriverIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Modified & Exotic
                  </h3>
                  <p className="text-gray-600">
                    Street rods, custom builds, exotic sports cars, and limited production vehicles.
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