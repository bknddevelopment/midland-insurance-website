'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import { 
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  PrinterIcon
} from '@heroicons/react/24/outline';

export default function IDCardsPage() {
  return (
    <InfoPageTemplate
      heroTitle="Insurance ID Cards"
      heroSubtitle="Access Your Proof of Insurance Anytime"
      heroDescription="Get instant access to your insurance ID cards. Download digital copies, request physical cards, or access them on your mobile device."
      heroPrimaryButton={{
        text: 'Access Your ID Cards',
        href: '/contact'
      }}
      heroSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      contentSections={[
        {
          title: 'Multiple Ways to Access Your ID Cards',
          content: `We make it easy to access your insurance ID cards whenever and however you need them. Whether you prefer digital or physical cards, we've got you covered.

**Digital ID Cards**
Access your ID cards instantly through our online portal or mobile app. Digital cards are legally accepted in New Jersey and most other states. You can save them to your phone, print them at home, or email them when needed.

**Physical ID Cards**
Traditional plastic ID cards are automatically mailed when your policy is issued or renewed. Lost your cards? We'll send replacements immediately at no charge.

**Mobile Access**
Download our mobile app to keep your ID cards handy at all times. Perfect for those unexpected moments when you need proof of insurance.`
        },
        {
          title: 'When You Need Your ID Cards',
          content: `Your insurance ID cards serve as proof of coverage in various situations:

• **Vehicle Registration** - Required when registering or renewing your vehicle
• **Traffic Stops** - Must be presented if requested by law enforcement
• **Accident Scenes** - Exchange information with other parties involved
• **Service Appointments** - Some repair shops require proof of insurance
• **Rental Cars** - May be needed when renting vehicles
• **DMV Transactions** - Various motor vehicle department services
• **Employer Requirements** - Some employers verify auto insurance
• **Loan Applications** - Lenders may request proof of coverage`
        },
        {
          title: 'What\'s on Your ID Card',
          content: `Your insurance ID card contains important information about your coverage:

• Policy number for quick reference
• Vehicle information (year, make, model, VIN)
• Coverage effective dates
• Insurance company contact information
• Claims reporting phone numbers
• Your name and address
• Coverage types and limits (on some cards)

Always verify your ID card information is correct. Contact us immediately if you notice any errors.`
        }
      ]}
      
      ctaTitle="Need Your ID Cards?"
      ctaDescription="Access your digital ID cards online or request physical cards to be mailed."
      ctaButton={{
        text: 'Get Your ID Cards',
        href: '/contact'
      }}
      
      additionalSections={
        <>
          {/* Access Methods Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How to Get Your ID Cards
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <ComputerDesktopIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Online Portal</h3>
                  <p className="text-gray-600">Log in to view, download, or print your ID cards instantly</p>
                </div>
                
                <div className="text-center">
                  <DevicePhoneMobileIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App</h3>
                  <p className="text-gray-600">Keep digital ID cards on your phone for easy access</p>
                </div>
                
                <div className="text-center">
                  <CreditCardIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mail Delivery</h3>
                  <p className="text-gray-600">Physical cards mailed at policy start and renewal</p>
                </div>
                
                <div className="text-center">
                  <PrinterIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Print at Home</h3>
                  <p className="text-gray-600">Download PDF versions to print temporary cards</p>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}