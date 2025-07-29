'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  ExclamationCircleIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function CyberLiabilityInsurancePage() {
  const coverageItems = [
    {
      title: 'Data Breach Response',
      description: 'Coverage for notification costs, credit monitoring, and PR expenses after a breach'
    },
    {
      title: 'Cyber Extortion',
      description: 'Protection against ransomware attacks and extortion demands'
    },
    {
      title: 'Business Interruption',
      description: 'Lost income coverage when cyber attacks disrupt your operations'
    },
    {
      title: 'Data Recovery',
      description: 'Costs to restore or recreate data and software damaged by cyber attacks'
    },
    {
      title: 'Third-Party Liability',
      description: 'Defense and damages when clients sue over compromised data'
    },
    {
      title: 'Regulatory Fines',
      description: 'Coverage for penalties and fines from privacy law violations'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Comprehensive Protection',
      description: 'Coverage for first-party losses and third-party liabilities from cyber incidents.'
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Response Team',
      description: 'Access to IT forensics, legal counsel, and PR specialists when breaches occur.'
    },
    {
      icon: ChartBarIcon,
      title: 'Risk Management Tools',
      description: 'Prevention resources and employee training to reduce cyber vulnerabilities.'
    }
  ];

  const faqItems = [
    {
      question: 'Does my business really need cyber insurance?',
      answer: 'If you store customer data, accept payments, or rely on computer systems, you need cyber insurance. 60% of small businesses fail within 6 months of a cyber attack. Every business is a target, regardless of size.'
    },
    {
      question: 'What\'s not covered by general liability insurance?',
      answer: 'General liability excludes most cyber risks including data breaches, cyber extortion, and digital business interruption. You need dedicated cyber coverage for these modern threats.'
    },
    {
      question: 'What types of cyber attacks are covered?',
      answer: 'Coverage includes ransomware, data breaches, hacking, malware, phishing attacks, employee errors, lost devices, and system failures. Policies cover both malicious attacks and accidental data exposure.'
    },
    {
      question: 'How much cyber insurance do I need?',
      answer: 'Coverage needs depend on the amount of sensitive data you handle, your industry regulations, and your technology dependence. Most small businesses need at least $1 million in coverage.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Cyber Liability Insurance in New Jersey"
      heroSubtitle="Protection in the Digital Age"
      heroDescription="Comprehensive cyber liability insurance for New Jersey businesses. Protect against data breaches, ransomware, and cyber attacks with coverage designed for today's digital risks."
      
      overviewBadge="Cyber Security"
      overviewTitle="Essential Coverage for Digital Threats"
      overviewContent="Cyber attacks are one of the fastest-growing threats to businesses today. From ransomware that locks your systems to data breaches that expose customer information, the risks are real and expensive. The average data breach costs small businesses over $200,000 – enough to put many companies out of business.\n\nCyber liability insurance provides crucial protection that general business policies don't cover. Beyond financial protection, you get access to expert response teams who help minimize damage and get you back in business quickly. Don't wait until after an attack to discover you're not covered."
      
      coverageTitle="Complete Cyber Protection"
      coverageDescription="Coverage for the full spectrum of cyber risks"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Choose Our Cyber Coverage"
      benefitsDescription="More than insurance – a complete cyber risk solution"
      benefits={benefits}
      
      ctaTitle="Protect Your Digital Assets"
      ctaDescription="Get a cyber liability quote and secure your business against digital threats."
      ctaPrimaryButton={{
        text: 'Get Your Cyber Insurance Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Cyber Insurance FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Common Cyber Threats Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Cyber Threats We Protect Against
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Common attacks that threaten businesses every day
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <LockClosedIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ransomware
                  </h3>
                  <p className="text-gray-600">
                    Malicious software that encrypts your files and demands payment for the decryption key.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ExclamationCircleIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Data Breaches
                  </h3>
                  <p className="text-gray-600">
                    Unauthorized access to customer data, employee records, or proprietary information.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ComputerDesktopIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Business Email Compromise
                  </h3>
                  <p className="text-gray-600">
                    Sophisticated scams that trick employees into transferring funds or sensitive data.
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