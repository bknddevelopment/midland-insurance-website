'use client';

import React from 'react';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  AcademicCapIcon,
  ScaleIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

export default function ProfessionalLiabilityInsurancePage() {
  const coverageItems = [
    {
      title: 'Professional Negligence',
      description: 'Coverage for errors, omissions, or failure to perform professional services'
    },
    {
      title: 'Legal Defense Costs',
      description: 'Attorney fees and court costs for defending against malpractice claims'
    },
    {
      title: 'Breach of Contract',
      description: 'Protection when accused of failing to deliver promised professional services'
    },
    {
      title: 'Misrepresentation',
      description: 'Coverage for unintentional misstatements or misleading professional advice'
    },
    {
      title: 'Loss of Client Documents',
      description: 'Protection if you lose or damage important client documents or data'
    },
    {
      title: 'Copyright Infringement',
      description: 'Defense against claims of intellectual property violations in your work'
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Profession-Specific Coverage',
      description: 'Tailored policies for different professions with appropriate coverage and limits.'
    },
    {
      icon: UserGroupIcon,
      title: 'Claims Expertise',
      description: 'Experienced claims handlers who understand professional liability disputes.'
    },
    {
      icon: ChartBarIcon,
      title: 'Prior Acts Coverage',
      description: 'Protection for work performed before the policy starts (retroactive coverage).'
    }
  ];

  const faqItems = [
    {
      question: 'Who needs professional liability insurance?',
      answer: 'Any business providing professional services or advice needs this coverage. This includes consultants, IT professionals, architects, engineers, accountants, real estate agents, and many others. If clients rely on your expertise, you need protection.'
    },
    {
      question: 'How is it different from general liability?',
      answer: 'General liability covers bodily injury and property damage. Professional liability (E&O) covers financial losses from your professional mistakes, bad advice, or failure to deliver services. You typically need both types of coverage.'
    },
    {
      question: 'What triggers a professional liability claim?',
      answer: 'Common triggers include missed deadlines, budget overruns, flawed advice, software bugs, design defects, disclosure failures, and contract disputes. Even unfounded claims require expensive legal defense.'
    },
    {
      question: 'Are legal fees covered even if I win?',
      answer: 'Yes, professional liability insurance covers defense costs even for groundless claims. Legal fees can easily exceed $100,000, so this coverage is crucial even when you\'ve done nothing wrong.'
    }
  ];

  return (
    <ServicePageTemplate
      heroTitle="Professional Liability Insurance in New Jersey"
      heroSubtitle="Protect Your Professional Reputation"
      heroDescription="Errors & Omissions (E&O) insurance for New Jersey professionals. Safeguard your business against claims of professional negligence, errors, or failure to deliver services."
      
      overviewBadge="E&O Coverage"
      overviewTitle="Essential Protection for Professional Services"
      overviewContent="In today's litigious environment, even the most careful professionals face lawsuit risks. A simple oversight, miscommunication, or dissatisfied client can lead to devastating claims alleging professional negligence. Professional liability insurance, also known as Errors & Omissions (E&O) insurance, protects your business when your professional services don't meet client expectations.\n\nUnlike general liability insurance, professional liability specifically covers the financial losses clients claim to suffer from your professional mistakes or oversights. This specialized coverage is essential for anyone whose clients rely on their knowledge, skills, or judgment."
      
      coverageTitle="Comprehensive E&O Protection"
      coverageDescription="Coverage for the unique risks professionals face"
      coverageItems={coverageItems}
      
      benefitsTitle="Why Professional Liability Matters"
      benefitsDescription="Protect your business and professional reputation"
      benefits={benefits}
      
      ctaTitle="Safeguard Your Professional Practice"
      ctaDescription="Get an E&O insurance quote tailored to your profession and risk profile."
      ctaPrimaryButton={{
        text: 'Get Your E&O Quote',
        href: '/quote'
      }}
      ctaSecondaryButton={{
        text: 'Call (201) 812-2184',
        href: 'tel:2018122184'
      }}
      
      faqTitle="Professional Liability FAQs"
      faqItems={faqItems}
      
      additionalSections={
        <>
          {/* Professions We Cover Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Professions We Protect
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Specialized E&O coverage for various professional services
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <BriefcaseIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Consultants & IT
                  </h3>
                  <p className="text-gray-600">
                    Management consultants, IT professionals, software developers, and technology services.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ScaleIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Legal & Financial
                  </h3>
                  <p className="text-gray-600">
                    Accountants, financial advisors, insurance agents, and real estate professionals.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <AcademicCapIcon className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Design & Engineering
                  </h3>
                  <p className="text-gray-600">
                    Architects, engineers, designers, and other creative professionals.
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