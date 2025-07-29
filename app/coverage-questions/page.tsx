'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import { 
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const commonTopics = [
  {
    icon: ShieldCheckIcon,
    title: 'Coverage Limits',
    description: 'Understanding your policy limits and whether you have enough protection'
  },
  {
    icon: DocumentTextIcon,
    title: 'Deductibles',
    description: 'How deductibles work and choosing the right amount for your situation'
  },
  {
    icon: ExclamationCircleIcon,
    title: 'Exclusions',
    description: 'What\'s not covered by your policy and how to fill coverage gaps'
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'Claims Process',
    description: 'How coverage applies when you file a claim and what to expect'
  }
];

export default function CoverageQuestionsPage() {
  return (
    <InfoPageTemplate
      heroTitle="Coverage Questions"
      heroSubtitle="Understanding Your Insurance Protection"
      heroDescription="Get clear answers about your insurance coverage. We'll help you understand your policies, coverage limits, deductibles, and ensure you have the protection you need."
      heroPrimaryButton={{
        text: 'Ask a Question',
        href: '/contact'
      }}
      heroSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      contentSections={[
        {
          title: 'Common Coverage Questions',
          content: `**What exactly does my policy cover?**
Your policy covers specific perils and situations outlined in your policy documents. Generally, insurance covers sudden and accidental losses, but the specifics vary by policy type. We can review your coverage line by line to ensure you understand your protection.

**How do I know if I have enough coverage?**
Coverage needs depend on your assets, liabilities, and risk tolerance. For property, you need enough to rebuild. For liability, consider your net worth and future earnings. We recommend regular reviews to ensure adequate protection.

**What's the difference between actual cash value and replacement cost?**
Actual cash value pays the depreciated value of damaged items. Replacement cost pays to replace items with new ones of similar quality. Replacement cost provides better protection but costs slightly more.

**Are there gaps in my coverage?**
Common gaps include flood damage, earthquakes, home-based businesses, valuable jewelry, and umbrella liability. We can identify potential gaps and recommend solutions.

**How do deductibles affect my coverage?**
Deductibles are what you pay out-of-pocket before insurance kicks in. Higher deductibles mean lower premiums but more cost when filing claims. Choose deductibles you can comfortably afford.`
        },
        {
          title: 'Understanding Policy Language',
          content: `Insurance policies contain specific terms that affect your coverage:

**Perils**
The specific risks covered by your policy, such as fire, theft, or wind damage.

**Exclusions**
Specific situations or damages not covered by your policy. Always review these carefully.

**Endorsements**
Additional coverages added to your base policy to customize protection for your needs.

**Liability Limits**
Maximum amount the insurance company will pay for claims you're legally responsible for.

**Coverage Territory**
Geographic area where your coverage applies. Some policies limit coverage outside your home state or country.

**Conditions**
Your responsibilities as a policyholder, such as paying premiums and reporting claims promptly.`
        },
        {
          title: 'Getting Your Questions Answered',
          content: `We're committed to helping you understand your coverage completely:

**Review Your Policy Documents**
Your policy and declarations page contain detailed coverage information. Keep these documents handy and review them annually.

**Contact Your Agent**
Your agent is your best resource for coverage questions. They can explain complex policy language in plain terms and provide examples.

**Annual Coverage Reviews**
Schedule annual reviews to discuss your coverage, ask questions, and make necessary updates.

**Claims Examples**
Understanding how coverage applies in real situations helps clarify protection. Ask for examples relevant to your concerns.

**Written Explanations**
For complex questions, request written explanations you can review and reference later.`
        }
      ]}
      
      ctaTitle="Have Coverage Questions?"
      ctaDescription="Don't guess about your coverage. Contact us for clear, detailed answers about your insurance protection."
      ctaButton={{
        text: 'Get Answers',
        href: '/contact'
      }}
      
      additionalSections={
        <>
          {/* Common Topics Grid */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Popular Coverage Topics
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {commonTopics.map((topic, index) => (
                  <div key={index} className="text-center">
                    <topic.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-600">{topic.description}</p>
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