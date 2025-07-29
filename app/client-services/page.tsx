'use client';

import React from 'react';
import HubPageTemplate from '@/components/templates/HubPageTemplate';
import { 
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  ArrowPathIcon,
  QuestionMarkCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: DocumentTextIcon,
    title: 'File a Claim',
    description: 'Report a claim online or get assistance from our claims team available 24/7.',
    href: '/claims',
    featured: true
  },
  {
    icon: ClipboardDocumentListIcon,
    title: 'Policy Review',
    description: 'Schedule a comprehensive review of your coverage to ensure you\'re properly protected.',
    href: '/policy-review',
    featured: false
  },
  {
    icon: CreditCardIcon,
    title: 'Insurance ID Cards',
    description: 'Access, download, or request physical copies of your insurance ID cards.',
    href: '/id-cards',
    featured: false
  },
  {
    icon: ArrowPathIcon,
    title: 'Update Policy Info',
    description: 'Make changes to your policy including vehicles, drivers, addresses, and coverage.',
    href: '/update-policy',
    featured: false
  },
  {
    icon: CreditCardIcon,
    title: 'Billing Questions',
    description: 'Manage payments, review billing history, and get answers to payment questions.',
    href: '/billing',
    featured: false
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'Coverage Questions',
    description: 'Get answers about your coverage, deductibles, limits, and policy details.',
    href: '/coverage-questions',
    featured: false
  }
];

const faqs = [
  {
    question: 'How do I file a claim?',
    answer: 'You can file a claim 24/7 by calling our claims hotline, using our online portal, or contacting your agent directly. We\'ll guide you through the process and help you get back to normal as quickly as possible.'
  },
  {
    question: 'How can I make a payment?',
    answer: 'We offer multiple payment options including online payments, automatic bank drafts, credit/debit cards, and traditional mail. You can also pay in person at our office or set up a payment plan.'
  },
  {
    question: 'When should I review my coverage?',
    answer: 'We recommend reviewing your coverage annually and whenever you have major life changes like moving, getting married, having children, or making significant purchases. Regular reviews ensure you\'re not overpaying or underinsured.'
  },
  {
    question: 'How do I get my insurance ID cards?',
    answer: 'You can access digital ID cards through our online portal or mobile app instantly. Physical cards are mailed when policies are issued or renewed. Contact us if you need replacement cards sent immediately.'
  }
];

export default function ClientServicesPage() {
  return (
    <HubPageTemplate
      heroTitle="Client Services"
      heroSubtitle="We're Here to Help"
      heroDescription="Access all your insurance service needs in one place. From filing claims to updating policies, we make managing your insurance simple and convenient."
      
      sectionTitle="How Can We Help You Today?"
      sectionBadge="Quick Access"
      sectionDescription="Quick access to our most requested services"
      services={services}
      
      additionalSections={
        <>
          {/* Contact Support Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="text-center">
                  <PhoneIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Need Immediate Assistance?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our experienced service team is ready to help with any questions or concerns.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">General Support</h3>
                      <p className="text-2xl font-bold text-primary-600 mb-1">(201) 812-2184</p>
                      <p className="text-gray-600">Mon-Fri 8:30am-5:00pm</p>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">24/7 Claims</h3>
                      <p className="text-2xl font-bold text-primary-600 mb-1">1-800-CLAIMS</p>
                      <p className="text-gray-600">Always Available</p>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                      <p className="text-lg text-primary-600 mb-1">service@midlandins.com</p>
                      <p className="text-gray-600">Response within 24hrs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}