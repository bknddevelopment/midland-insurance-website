'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  HeartIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function TravelInsurancePage() {
  const coverageItems = [
    {
      title: 'Trip Cancellation & Interruption',
      description: 'Reimbursement for prepaid, non-refundable trip costs if you need to cancel or cut short your trip'
    },
    {
      title: 'Emergency Medical Coverage',
      description: 'Medical expenses for illness or injury while traveling, including hospital stays and doctor visits'
    },
    {
      title: 'Emergency Medical Evacuation',
      description: 'Coverage for emergency transportation to the nearest adequate medical facility or home'
    },
    {
      title: 'Baggage & Personal Effects',
      description: 'Protection for lost, stolen, or damaged luggage and personal belongings during your trip'
    },
    {
      title: 'Travel Delay Coverage',
      description: 'Reimbursement for meals and accommodations during covered travel delays'
    },
    {
      title: '24/7 Travel Assistance',
      description: 'Round-the-clock help with medical referrals, emergency cash transfers, and travel arrangements'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Protection',
      description: 'Coverage for everything from minor inconveniences to major emergencies during your travels.'
    },
    {
      icon: UserGroupIcon,
      title: 'Global Support Network',
      description: 'Access to worldwide assistance services and medical providers when you need help abroad.'
    },
    {
      icon: ChartBarIcon,
      title: 'Flexible Options',
      description: 'Single trip, multi-trip annual plans, and specialized coverage for adventure activities.'
    }
  ];

  const faqItems = [
    {
      question: 'Do I really need travel insurance?',
      answer: 'Yes, especially for international travel or expensive trips. Your health insurance may not cover you abroad, and trip cancellations can cost thousands. Travel insurance provides financial protection and peace of mind.'
    },
    {
      question: 'What\'s covered under trip cancellation?',
      answer: 'Covered reasons typically include illness, injury, death of traveler or family member, natural disasters, terrorism, job loss, and other unforeseen events. "Cancel for any reason" coverage is available for maximum flexibility.'
    },
    {
      question: 'When should I buy travel insurance?',
      answer: 'Purchase as soon as you book your trip to ensure coverage for pre-existing conditions and unforeseen events. Some benefits, like "cancel for any reason," require purchase within 14-21 days of initial trip deposit.'
    },
    {
      question: 'Does travel insurance cover COVID-19?',
      answer: 'Many policies now cover COVID-19 related cancellations, medical expenses, and quarantine costs. Coverage varies by carrier, so we\'ll help you find policies with comprehensive pandemic protection.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Travel Insurance in New Jersey"
      heroSubtitle="Adventure with Confidence"
      heroDescription="Comprehensive travel insurance coverage for your journeys near and far. Protect your investment and travel with peace of mind knowing you're covered for the unexpected."
      
      overviewBadge="Travel Protection"
      overviewTitle="Don't Let the Unexpected Ruin Your Trip"
      overviewContent="Whether you're planning a weekend getaway, a family vacation, or the trip of a lifetime, travel insurance protects your investment and provides crucial support when things don't go as planned. From medical emergencies abroad to cancelled flights and lost luggage, we've got you covered.\n\nMany travelers don't realize that their health insurance may provide limited or no coverage outside the United States. Travel insurance fills these gaps and provides additional protection for your trip investment, ensuring that unexpected events don't turn into financial disasters."
      
      coverageTitle="Comprehensive Travel Protection"
      coverageDescription="Coverage for every aspect of your journey"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Us for Travel Insurance"
      benefitsDescription="Expert guidance for worry-free travel"
      benefits={benefits}
      
      ctaTitle="Protect Your Next Adventure"
      ctaDescription="Get a travel insurance quote and explore the world with confidence."
      ctaPrimaryButton={{
        text: 'Get Your Travel Insurance Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Travel Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Types of Travel Coverage Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Travel Insurance Options
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Choose the right coverage for your travel style
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <GlobeAltIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Single Trip Coverage
                  </h3>
                  <p className="text-gray-600">
                    Perfect for vacations, honeymoons, or one-time trips. Coverage from departure to return.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ClockIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Annual Multi-Trip
                  </h3>
                  <p className="text-gray-600">
                    Ideal for frequent travelers. Covers unlimited trips throughout the year up to specified duration.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <HeartIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Medical Only Plans
                  </h3>
                  <p className="text-gray-600">
                    Budget-friendly option focusing on medical emergencies and evacuation coverage.
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