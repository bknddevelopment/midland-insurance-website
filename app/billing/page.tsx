'use client';

import React from 'react';
import InfoPageTemplate from '@/components/templates/InfoPageTemplate';
import { 
  CreditCardIcon,
  BanknotesIcon,
  CalendarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const paymentOptions = [
  {
    icon: CreditCardIcon,
    title: 'Credit/Debit Card',
    description: 'Pay online or over the phone with Visa, Mastercard, American Express, or Discover'
  },
  {
    icon: BanknotesIcon,
    title: 'Bank Draft',
    description: 'Automatic monthly withdrawals from your checking or savings account'
  },
  {
    icon: DocumentTextIcon,
    title: 'Check or Money Order',
    description: 'Mail payments to our office or drop off in person'
  },
  {
    icon: CalendarIcon,
    title: 'Payment Plans',
    description: 'Flexible payment options including monthly, quarterly, or semi-annual plans'
  }
];

export default function BillingPage() {
  return (
    <InfoPageTemplate
      heroTitle="Billing & Payment Questions"
      heroSubtitle="Managing Your Insurance Payments"
      heroDescription="Get answers to billing questions, make payments, and manage your payment preferences. We offer flexible payment options to fit your budget."
      heroPrimaryButton={{
        text: 'Make a Payment',
        href: '/make-payment'
      }}
      heroSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      contentSections={[
        {
          title: 'Payment Options',
          content: `We understand that everyone has different payment preferences. That's why we offer multiple convenient payment methods to fit your needs:

**Online Payments**
Pay anytime through our secure online portal using credit/debit cards or electronic check. Set up automatic payments to never miss a due date.

**Automatic Bank Draft**
Worry-free automatic withdrawals from your checking or savings account. Choose your payment date and we'll handle the rest.

**Phone Payments**
Call our office during business hours to make payments over the phone with a credit or debit card.

**Mail or In-Person**
Send checks or money orders by mail, or visit our office to pay in person. Include your policy number with all payments.`
        },
        {
          title: 'Understanding Your Bill',
          content: `Your insurance bill contains important information about your coverage and payment:

**Policy Information**
• Policy number and coverage period
• Types of coverage included
• Premium breakdown by coverage
• Any applicable discounts

**Payment Details**
• Total amount due
• Payment due date
• Minimum payment required
• Past due amounts (if any)

**Payment History**
• Recent payments received
• Current account balance
• Next scheduled payment

If you have questions about any charges on your bill, contact us for a detailed explanation.`
        },
        {
          title: 'Common Billing Questions',
          content: `**Why did my premium change?**
Premiums can change due to claims, tickets, coverage updates, or rate adjustments. We'll always notify you of changes and explain the reasons.

**Can I change my payment due date?**
Yes, we can adjust your payment schedule to align with your pay periods or preferred dates.

**What happens if I miss a payment?**
Contact us immediately if you can't make a payment. We can often work out arrangements to keep your coverage active.

**Do you offer discounts for paying in full?**
Yes, many policies offer paid-in-full discounts. Ask your agent about available savings.

**Can I get paperless billing?**
Yes, sign up for electronic statements to receive bills via email and help the environment.`
        }
      ]}
      
      ctaTitle="Need Billing Assistance?"
      ctaDescription="Our billing team is ready to help with payment questions, arrange payment plans, or update your payment preferences."
      ctaButton={{
        text: 'Contact Billing',
        href: '/contact'
      }}
      
      additionalSections={
        <>
          {/* Payment Methods Grid */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ways to Pay
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {paymentOptions.map((option, index) => (
                  <div key={index} className="text-center">
                    <option.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
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