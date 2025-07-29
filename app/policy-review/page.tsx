'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import { 
  ClipboardDocumentListIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const reviewSteps = [
  {
    title: '1. Schedule Your Review',
    description: 'Contact us to schedule a convenient time for your policy review. We can meet in person, over the phone, or via video call.'
  },
  {
    title: '2. Gather Your Information',
    description: 'We\'ll review your current policies, recent life changes, and any new assets or risks that need coverage.'
  },
  {
    title: '3. Coverage Analysis',
    description: 'Our agents analyze your coverage to identify gaps, overlaps, or opportunities for better protection and savings.'
  },
  {
    title: '4. Personalized Recommendations',
    description: 'We\'ll present recommendations to optimize your coverage and potentially reduce your premiums.'
  }
];

const reviewChecklist = [
  'Current coverage limits and deductibles',
  'Recent life changes (marriage, children, moves)',
  'New purchases (homes, cars, valuables)',
  'Changes in business operations',
  'Available discounts you may be missing',
  'Coverage gaps that could leave you exposed',
  'Opportunities to bundle policies',
  'Updates to ensure proper protection'
];

export default function PolicyReviewPage() {
  return (
    <InfoPageTemplate
      heroTitle="Policy Review Services"
      heroSubtitle="Ensure You Have the Right Coverage"
      heroDescription="Regular policy reviews help ensure you're properly protected without overpaying. Our comprehensive reviews identify coverage gaps and savings opportunities."
      heroPrimaryButton={{
        text: 'Schedule Your Review',
        href: '/contact'
      }}
      heroSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      contentSections={[
        {
          title: 'Why Regular Reviews Matter',
          content: `Life changes quickly, and your insurance needs to keep pace. What protected you perfectly last year might leave gaps today. Regular policy reviews ensure your coverage evolves with your life, protecting new assets, accounting for lifestyle changes, and taking advantage of new discounts.

Many clients discover they're overpaying for coverage they don't need while being underinsured in critical areas. A professional review helps optimize your protection and often results in better coverage at lower costs.

Our experienced agents take a holistic approach, reviewing all your policies together to ensure comprehensive protection without costly overlaps.`
        },
        {
          title: 'Our Review Process',
          content: reviewSteps.map(step => (
            `**${step.title}**\n${step.description}`
          )).join('\n\n')
        },
        {
          title: 'What We Review',
          content: `During your policy review, we examine every aspect of your coverage:\n\n${reviewChecklist.map(item => `• ${item}`).join('\n')}`
        }
      ]}
      
      ctaTitle="Ready for Your Policy Review?"
      ctaDescription="Schedule your free, no-obligation policy review today and ensure you have the right coverage at the right price."
      ctaButton={{
        text: 'Schedule Your Review',
        href: '/contact'
      }}
      
      additionalSections={
        <>
          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Benefits of Regular Policy Reviews
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  'Identify coverage gaps before claims arise',
                  'Discover new discounts and savings',
                  'Ensure proper coverage for new assets',
                  'Eliminate duplicate or unnecessary coverage',
                  'Update beneficiaries and contact info',
                  'Adjust coverage for life changes',
                  'Optimize deductibles for savings',
                  'Bundle policies for better rates'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}