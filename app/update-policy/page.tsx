'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import { 
  ArrowPathIcon,
  HomeIcon,
  TruckIcon,
  UserGroupIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const commonUpdates = [
  {
    icon: TruckIcon,
    title: 'Vehicle Changes',
    items: [
      'Add or remove vehicles',
      'Update vehicle usage',
      'Change primary driver',
      'Update annual mileage'
    ]
  },
  {
    icon: HomeIcon,
    title: 'Property Updates',
    items: [
      'Home improvements',
      'Security upgrades',
      'Change in occupancy',
      'Home-based business'
    ]
  },
  {
    icon: UserGroupIcon,
    title: 'Personal Changes',
    items: [
      'Marriage or divorce',
      'Add or remove drivers',
      'Teen getting license',
      'Change beneficiaries'
    ]
  },
  {
    icon: MapPinIcon,
    title: 'Contact Info',
    items: [
      'New address',
      'Phone numbers',
      'Email updates',
      'Billing address'
    ]
  }
];

export default function UpdatePolicyPage() {
  return (
    <InfoPageTemplate
      heroTitle="Update Your Policy"
      heroSubtitle="Keep Your Coverage Current"
      heroDescription="Life changes and so should your insurance. Update your policy information to ensure continuous, appropriate coverage that reflects your current situation."
      heroPrimaryButton={{
        text: 'Update Your Policy',
        href: '/contact'
      }}
      heroSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      contentSections={[
        {
          title: 'When to Update Your Policy',
          content: `Keeping your policy information current is crucial for maintaining proper coverage and accurate pricing. Even small changes can impact your protection and premiums.

**Major Life Events**
Marriage, divorce, new babies, or children leaving home all affect your insurance needs. Update your policies to reflect new family members, changed names, or different coverage requirements.

**Property Changes**
Home renovations, new purchases, or installing security systems can affect your coverage needs and may qualify you for discounts. Business property changes or equipment purchases also need to be reported.

**Vehicle Updates**
Adding or removing vehicles, changing how you use them, or teen drivers getting licenses all require policy updates. Even changes in daily commute distance can affect your rates.

**Why Timely Updates Matter**
Failing to update your policy can result in claim denials, coverage gaps, or paying for coverage you don't need. Keep us informed to ensure you're always properly protected.`
        },
        {
          title: 'How to Update Your Policy',
          content: `We make policy updates quick and easy with multiple convenient options:

**1. Call Your Agent**
The fastest way to make updates is calling your dedicated agent. They can make changes immediately and answer any questions about how updates affect your coverage or premium.

**2. Online Portal**
For simple updates like contact information, you can make changes through our secure online portal 24/7. More complex changes may require agent assistance.

**3. Visit Our Office**
Stop by our Upper Saddle River office for in-person assistance with policy updates. We can review all your changes and ensure everything is properly documented.

**4. Email Updates**
Send update requests to your agent via email. Include all relevant information and documentation. We'll confirm changes within one business day.`
        },
        {
          title: 'Information You\'ll Need',
          content: `Having the right information ready makes updates faster:

• Policy number(s) for affected coverage
• Effective date for the change
• Details about what's changing
• Supporting documentation (if applicable)
• Driver's license info for new drivers
• VIN for new vehicles
• Purchase receipts for valuable items
• Marriage/divorce certificates
• New mortgage information
• Business license updates`
        }
      ]}
      
      ctaTitle="Ready to Update Your Policy?"
      ctaDescription="Don't wait to update important policy information. Contact us today to ensure your coverage stays current."
      ctaButton={{
        text: 'Update Your Policy',
        href: '/contact'
      }}
      
      additionalSections={
        <>
          {/* Common Updates Grid */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Common Policy Updates
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {commonUpdates.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                    <category.icon className="h-10 w-10 text-primary-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 text-sm">• {item}</li>
                      ))}
                    </ul>
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