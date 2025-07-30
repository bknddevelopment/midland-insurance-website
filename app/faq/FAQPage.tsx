'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQCategory {
  name: string;
  icon: string;
  description: string;
  faqs: FAQItem[];
}

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ];

  const faqCategories: FAQCategory[] = [
    {
      name: 'General Liability',
      icon: '🏗️',
      description: 'Common questions about general liability coverage',
      faqs: [
        {
          question: 'What does general liability insurance cover for contractors?',
          answer: 'General liability insurance covers third-party bodily injury, property damage, and personal/advertising injury claims. This includes accidents at job sites, damage to client property, and completed operations claims. It typically covers legal defense costs, medical expenses, and settlements or judgments.',
          category: 'General Liability'
        },
        {
          question: 'How much general liability coverage do I need?',
          answer: 'Most contractors need at least $1 million per occurrence and $2 million aggregate coverage. However, many contracts require $2 million per occurrence. Large commercial projects may require $5 million or more. We help determine the right amount based on your contracts and risk exposure.',
          category: 'General Liability'
        },
        {
          question: 'Does general liability cover faulty workmanship?',
          answer: 'General liability typically excludes damage to your own work (faulty workmanship). However, it does cover resulting damage to other property. For example, if faulty plumbing causes water damage to walls, the plumbing repair isn\'t covered, but the wall damage is.',
          category: 'General Liability'
        },
        {
          question: 'Are subcontractors covered under my general liability policy?',
          answer: 'Subcontractors are typically not automatically covered. You may need to add them as additional insureds or require them to carry their own insurance. Uninsured subcontractor claims can impact your policy, so we recommend requiring certificates of insurance from all subs.',
          category: 'General Liability'
        }
      ]
    },
    {
      name: 'Workers Compensation',
      icon: '👷',
      description: 'Understanding workers comp requirements and coverage',
      faqs: [
        {
          question: 'Is workers compensation required in New Jersey?',
          answer: 'Yes, workers compensation is required in New Jersey if you have any employees, even just one. This includes part-time and seasonal workers. Sole proprietors and partners can elect to be covered but aren\'t required. Penalties for non-compliance can be severe.',
          category: 'Workers Compensation'
        },
        {
          question: 'What does workers compensation insurance cover?',
          answer: 'Workers comp covers medical expenses, lost wages (typically 70% of average weekly wage), rehabilitation costs, and death benefits for work-related injuries or illnesses. It also provides employer liability coverage protecting you from employee lawsuits related to workplace injuries.',
          category: 'Workers Compensation'
        },
        {
          question: 'How are workers comp premiums calculated?',
          answer: 'Premiums are based on payroll, job classifications (class codes), and your experience modification factor (mod rate). Construction trades have different rates based on risk level. Your mod rate reflects your claims history compared to similar businesses - good safety records lower your premiums.',
          category: 'Workers Compensation'
        },
        {
          question: 'Can I exclude myself from workers compensation as an owner?',
          answer: 'Yes, sole proprietors, partners, and LLC members can exclude themselves in New Jersey. Corporate officers can also elect exclusion. However, many general contractors require all individuals on site to be covered, so exclusion might limit your work opportunities.',
          category: 'Workers Compensation'
        }
      ]
    },
    {
      name: 'Commercial Auto',
      icon: '🚚',
      description: 'Vehicle coverage for your construction business',
      faqs: [
        {
          question: 'What\'s the difference between personal and commercial auto insurance?',
          answer: 'Commercial auto insurance covers vehicles used for business purposes, including driving to job sites, hauling materials, and transporting workers. Personal auto policies typically exclude business use. Commercial policies offer higher liability limits and cover business-specific risks.',
          category: 'Commercial Auto'
        },
        {
          question: 'Do I need commercial auto for my pickup truck?',
          answer: 'If you use your pickup truck for any business purposes - including driving to job sites, carrying tools, or displaying business signage - you need commercial auto insurance. Personal auto policies may deny claims for accidents during business use.',
          category: 'Commercial Auto'
        },
        {
          question: 'What does hired and non-owned auto coverage protect?',
          answer: 'Hired auto covers vehicles you rent or lease for business. Non-owned auto covers employee vehicles used for your business. This is important if employees run errands or drive to job sites in their personal vehicles. It protects your business from liability.',
          category: 'Commercial Auto'
        },
        {
          question: 'Are tools and equipment covered in my commercial vehicle?',
          answer: 'Standard commercial auto policies have limited coverage for tools and equipment (usually $500-$2,500). For adequate protection, you need an inland marine policy or equipment floater. We can add this coverage to protect your valuable tools and equipment.',
          category: 'Commercial Auto'
        }
      ]
    },
    {
      name: 'Tools & Equipment',
      icon: '🔧',
      description: 'Protecting your valuable tools and equipment',
      faqs: [
        {
          question: 'How can I insure my construction tools and equipment?',
          answer: 'Tools and equipment are covered through an inland marine policy or contractors equipment floater. This covers owned, rented, and leased equipment against theft, damage, and mysterious disappearance. Coverage applies at job sites, in transit, and in storage.',
          category: 'Tools & Equipment'
        },
        {
          question: 'Is there a deductible for tools and equipment claims?',
          answer: 'Yes, typical deductibles range from $250 to $2,500 depending on your policy and preferences. Higher deductibles lower premiums. Some policies have separate deductibles for different types of losses (theft vs. damage). We help you choose the right balance.',
          category: 'Tools & Equipment'
        },
        {
          question: 'Are rented tools and equipment covered?',
          answer: 'Rented equipment can be covered under your contractors equipment policy. You\'re typically responsible for damage to rented equipment unless you purchase the rental company\'s damage waiver. We recommend including rented equipment coverage to avoid unexpected costs.',
          category: 'Tools & Equipment'
        },
        {
          question: 'What about employee-owned tools?',
          answer: 'Employee tools aren\'t automatically covered under your policy. Employees should have their own coverage. However, you can add coverage for employee tools used in your business. This can be a valuable employee benefit and protect you from liability.',
          category: 'Tools & Equipment'
        }
      ]
    },
    {
      name: 'Bonds',
      icon: '📋',
      description: 'Understanding surety bonds for contractors',
      faqs: [
        {
          question: 'What\'s the difference between insurance and bonds?',
          answer: 'Insurance protects you from losses, while bonds guarantee you\'ll fulfill obligations. If a bond claim is paid, you must reimburse the surety company. Bonds are three-party agreements between you (principal), the project owner (obligee), and the surety company.',
          category: 'Bonds'
        },
        {
          question: 'What types of bonds do contractors need?',
          answer: 'Common bonds include: License bonds (required for contractor licensing), Bid bonds (guarantee you\'ll enter contract if selected), Performance bonds (guarantee project completion), Payment bonds (guarantee payment to subs/suppliers), and Maintenance bonds (guarantee work quality).',
          category: 'Bonds'
        },
        {
          question: 'How do I qualify for surety bonds?',
          answer: 'Surety companies evaluate your financial strength, experience, and credit history. Key factors include: business financial statements, personal credit score, cash flow, work in progress, and completed projects. We work with sureties that understand construction businesses.',
          category: 'Bonds'
        },
        {
          question: 'How much do surety bonds cost?',
          answer: 'Bond premiums typically range from 0.5% to 3% of the bond amount, depending on bond type, your credit, and financial strength. License bonds are usually flat fees ($100-$500). Performance bonds for strong contractors might be 1% of contract value.',
          category: 'Bonds'
        }
      ]
    },
    {
      name: 'Claims & Certificates',
      icon: '📄',
      description: 'Managing claims and insurance certificates',
      faqs: [
        {
          question: 'How do I get a certificate of insurance (COI)?',
          answer: 'Contact us with the certificate holder\'s name and address, any special requirements (additional insured, waiver of subrogation), and the project details. We typically provide certificates same day. For rush requests, we can often provide them within an hour.',
          category: 'Claims & Certificates'
        },
        {
          question: 'What should I do if an accident happens on my job site?',
          answer: 'First, ensure everyone\'s safety and call 911 if needed. Document everything with photos and witness statements. Report the incident to us immediately - delays can complicate claims. Don\'t admit fault or discuss coverage limits. We\'ll guide you through the process.',
          category: 'Claims & Certificates'
        },
        {
          question: 'How do insurance claims affect my premiums?',
          answer: 'Claims history impacts premiums, but the effect varies by claim type and severity. Frequency matters more than severity - multiple small claims hurt more than one large claim. We help implement safety programs and proper claims management to minimize premium impact.',
          category: 'Claims & Certificates'
        },
        {
          question: 'What is additional insured status?',
          answer: 'Additional insured status extends your liability coverage to another party (usually the property owner or general contractor) for claims arising from your work. It\'s commonly required in construction contracts. The coverage is typically limited to claims caused by your negligence.',
          category: 'Claims & Certificates'
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap(category => category.faqs);
  const filteredFAQs = selectedCategory === 'all' 
    ? allFAQs 
    : faqCategories.find(cat => cat.name === selectedCategory)?.faqs || [];

  const toggleItem = (question: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(question)) {
        newSet.delete(question);
      } else {
        newSet.add(question);
      }
      return newSet;
    });
  };

  const schemaFAQs = allFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={schemaFAQs} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Frequently Asked Questions"
          subtitle="Get Answers to Your Insurance Questions"
          description="Find answers to common questions about construction insurance, coverage options, and requirements."
          primaryButton={{
            text: 'Get Expert Help',
            href: '/contact',
          }}
          secondaryButton={{
            text: 'Get a Quote',
            href: '/quote',
          }}
          backgroundImage="/photos/faq-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Category Filter */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
              <p className="text-lg text-gray-600">Select a category to filter questions or view all FAQs</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Questions ({allFAQs.length})
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    selectedCategory === category.name
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  {category.name} ({category.faqs.length})
                </button>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-gray" />

        {/* FAQ Items */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.question)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      {expandedItems.has(faq.question) && (
                        <span className="text-sm text-primary-600 mt-1">{faq.category}</span>
                      )}
                    </div>
                    {expandedItems.has(faq.question) ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {expandedItems.has(faq.question) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Divider type="gray-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our construction insurance experts are here to help. Get personalized answers and advice for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Contact an Expert
              </Link>
              <Link
                href="tel:2018122184"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors"
              >
                Call (201) 812-2184
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}