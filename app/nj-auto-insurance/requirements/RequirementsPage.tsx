'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  HeartIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function RequirementsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'NJ Auto Insurance', url: '/nj-auto-insurance' },
    { name: 'Requirements', url: '/nj-auto-insurance/requirements' },
  ];

  const minimumRequirements = [
    {
      coverage: 'Bodily Injury Liability',
      perPerson: '$15,000',
      perAccident: '$30,000',
      description: 'Covers injuries to others in accidents you cause'
    },
    {
      coverage: 'Property Damage Liability',
      perPerson: '$5,000',
      perAccident: '$5,000',
      description: 'Covers damage to other vehicles or property'
    },
    {
      coverage: 'Personal Injury Protection (PIP)',
      perPerson: '$15,000',
      perAccident: '$15,000',
      description: 'Covers your medical expenses regardless of fault'
    },
    {
      coverage: 'Uninsured Motorist',
      perPerson: '$15,000',
      perAccident: '$30,000',
      description: 'Protects you from uninsured drivers'
    }
  ];

  const pipOptions = [
    {
      option: 'Medical Expense Limit',
      choices: ['$15,000', '$50,000', '$75,000', '$150,000', '$250,000'],
      note: 'Higher limits provide better protection'
    },
    {
      option: 'Deductible',
      choices: ['$0', '$250', '$500', '$1,000', '$2,500'],
      note: 'Higher deductibles lower your premium'
    },
    {
      option: 'Health Insurance Primary',
      choices: ['Yes', 'No'],
      note: 'Using health insurance first can reduce costs'
    },
    {
      option: 'Income Continuation',
      choices: ['None', '70% up to $100/week', 'Essential Services'],
      note: 'Covers lost wages or household help'
    }
  ];

  const penalties = [
    {
      violation: 'First Offense - No Insurance',
      penalty: 'License suspension, $300-$1,000 fine, community service',
      icon: ExclamationTriangleIcon
    },
    {
      violation: 'Second Offense',
      penalty: '2-year license suspension, $500-$5,000 fine, 30 days jail',
      icon: ExclamationTriangleIcon
    },
    {
      violation: 'False Insurance Card',
      penalty: 'Up to $1,000 fine, possible jail time',
      icon: ScaleIcon
    },
    {
      violation: 'Lapse in Coverage',
      penalty: '$250 restoration fee, possible suspension',
      icon: ClockIcon
    }
  ];

  const recommendedCoverage = [
    {
      level: 'Basic Protection',
      limits: '50/100/50',
      monthlyRange: '$125-175',
      goodFor: 'Budget-conscious drivers with minimal assets'
    },
    {
      level: 'Standard Protection',
      limits: '100/300/100',
      monthlyRange: '$175-250',
      goodFor: 'Homeowners and families with moderate assets'
    },
    {
      level: 'Premium Protection',
      limits: '250/500/250',
      monthlyRange: '$250-350',
      goodFor: 'High-income earners and significant assets'
    }
  ];

  const additionalCoverages = [
    {
      coverage: 'Collision',
      description: 'Covers damage to your car in an accident',
      icon: TruckIcon,
      required: 'Required for financed/leased vehicles'
    },
    {
      coverage: 'Comprehensive',
      description: 'Covers theft, vandalism, weather damage',
      icon: ShieldCheckIcon,
      required: 'Required for financed/leased vehicles'
    },
    {
      coverage: 'Underinsured Motorist',
      description: 'Extra protection when at-fault driver lacks coverage',
      icon: UserGroupIcon,
      required: 'Highly recommended but not required'
    },
    {
      coverage: 'Medical Payments',
      description: 'Additional medical coverage beyond PIP',
      icon: HeartIcon,
      required: 'Optional but valuable'
    }
  ];

  const specialSituations = [
    {
      situation: 'New Residents',
      requirement: 'Must get NJ insurance within 60 days of moving',
      tip: 'Register your vehicle first, then get insurance'
    },
    {
      situation: 'Teen Drivers',
      requirement: 'Must be added to parent\'s policy or get own coverage',
      tip: 'Good student discounts can save 15-25%'
    },
    {
      situation: 'SR-22 Required',
      requirement: 'Must maintain for 3 years after serious violations',
      tip: 'We specialize in SR-22 filings'
    },
    {
      situation: 'Classic/Antique Cars',
      requirement: 'May qualify for special limited-use policies',
      tip: 'Much cheaper if driven under 2,500 miles/year'
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum car insurance required in NJ?',
      answer: 'New Jersey requires: $15,000/$30,000 bodily injury liability, $5,000 property damage liability, $15,000 PIP (Personal Injury Protection), and $15,000/$30,000 uninsured motorist coverage. This is often written as 15/30/5.'
    },
    {
      question: 'What is PIP coverage and why is it required in NJ?',
      answer: 'Personal Injury Protection (PIP) is no-fault coverage that pays for your medical expenses, lost wages, and essential services regardless of who caused the accident. NJ requires it because it ensures immediate medical care without waiting for fault determination.'
    },
    {
      question: 'Can I drive in NJ without insurance?',
      answer: 'No. Driving without insurance in NJ is illegal and results in severe penalties including license suspension, fines up to $5,000, community service, and possible jail time. The state uses an electronic verification system to catch uninsured drivers.'
    },
    {
      question: 'Is NJ minimum coverage enough?',
      answer: 'While it meets legal requirements, minimum coverage often isn\'t enough. The $5,000 property damage limit is very low - most accidents exceed this. We recommend at least 50/100/50 coverage to better protect your assets.'
    },
    {
      question: 'What happens if my insurance lapses in NJ?',
      answer: 'Insurance lapses are reported electronically to the state. You\'ll face a $250 restoration fee and possible license suspension. Your insurance rates will also increase. Always maintain continuous coverage or surrender your plates if not driving.'
    },
    {
      question: 'Do I need uninsured motorist coverage if I have PIP?',
      answer: 'Yes. PIP only covers medical expenses, while uninsured motorist coverage protects you for pain and suffering, lost wages beyond PIP limits, and property damage caused by uninsured drivers. It\'s required and important protection.'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="NJ Auto Insurance Requirements"
          subtitle="2024 State Minimums & Coverage Laws"
          description="Complete guide to New Jersey's auto insurance requirements. Understand state minimums, PIP coverage, penalties, and how to ensure you're properly covered."
          primaryButton={{
            text: 'Check Your Coverage',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
        />

        <Divider type="dark-to-white" />

        {/* Minimum Requirements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">State Minimums</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                New Jersey Minimum Auto Insurance Requirements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every driver in New Jersey must carry these minimum coverage amounts to legally drive
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary-600">
                        <th className="px-6 py-4 text-left text-white font-semibold">Coverage Type</th>
                        <th className="px-6 py-4 text-center text-white font-semibold">Per Person</th>
                        <th className="px-6 py-4 text-center text-white font-semibold">Per Accident</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {minimumRequirements.map((req, index) => (
                        <tr key={index} className="hover:bg-gray-100 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-semibold text-gray-900">{req.coverage}</p>
                              <p className="text-sm text-gray-600">{req.description}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-primary-600">
                            {req.perPerson}
                          </td>
                          <td className="px-6 py-4 text-center font-semibold text-primary-600">
                            {req.perAccident}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <ExclamationTriangleIcon className="h-5 w-5 inline mr-2" />
                  <strong>Important:</strong> These minimums are often insufficient to cover serious accidents. 
                  Consider higher limits to protect your assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* PIP Coverage Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">PIP Coverage</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Understanding NJ Personal Injury Protection (PIP)
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                PIP is mandatory in New Jersey and covers medical expenses for you and your passengers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">What PIP Covers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    Medical expenses up to your chosen limit
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    Lost wages (up to 70% with income continuation)
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    Essential services (childcare, household help)
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    Death benefits ($5,000)
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    Coverage regardless of fault
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">PIP Options & Choices</h3>
                {pipOptions.map((option, index) => (
                  <div key={index} className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">{option.option}</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {option.choices.map((choice, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-700 text-primary-400 rounded text-sm">
                          {choice}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">{option.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Penalties Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Penalties</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Penalties for Driving Without Insurance in NJ
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                New Jersey has strict penalties for uninsured driving - don't risk it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {penalties.map((penalty, index) => (
                <motion.div
                  key={penalty.violation}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-red-50 border border-red-200 p-6 rounded-lg"
                >
                  <div className="flex items-start">
                    <penalty.icon className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 mb-2">
                        {penalty.violation}
                      </h3>
                      <p className="text-red-800">
                        {penalty.penalty}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 font-semibold">
                Don't risk these penalties. Get insured today and stay protected.
              </p>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Recommended Coverage Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Smart Coverage</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Recommended Coverage Levels Beyond Minimums
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Most experts recommend coverage well above state minimums for proper protection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedCoverage.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{level.level}</h3>
                  <p className="text-3xl font-bold text-primary-400 mb-2">{level.limits}</p>
                  <p className="text-gray-300 mb-3">{level.monthlyRange}</p>
                  <p className="text-sm text-gray-400">{level.goodFor}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/nj-auto-insurance/quotes"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                Compare Coverage Options
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Additional Coverages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Optional Coverage</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Additional Coverage Options to Consider
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalCoverages.map((coverage, index) => (
                <motion.div
                  key={coverage.coverage}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-start">
                    <coverage.icon className="h-8 w-8 text-primary-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {coverage.coverage}
                      </h3>
                      <p className="text-gray-600 mb-2">{coverage.description}</p>
                      <p className="text-sm font-medium text-primary-600">{coverage.required}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Situations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Special Cases</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Special Insurance Situations in NJ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {specialSituations.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.situation}
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Requirement:</strong> {item.requirement}
                  </p>
                  <p className="text-primary-600 text-sm">
                    <strong>Tip:</strong> {item.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* FAQ Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">FAQs</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                NJ Auto Insurance Requirements FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Make Sure You Meet NJ Requirements
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get properly covered with the right insurance for your needs. 
              Our experts help you understand requirements and find the best coverage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Check Coverage Options
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:2018122184"
                className="inline-flex items-center px-8 py-4 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors btn-transition"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call (201) 812-2184
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <DocumentTextIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Legal Compliance</p>
                <p className="text-gray-600 text-sm">Meet all NJ requirements</p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheckIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Proper Protection</p>
                <p className="text-gray-600 text-sm">Coverage that fits your needs</p>
              </div>
              <div className="flex flex-col items-center">
                <CurrencyDollarIcon className="h-8 w-8 text-primary-600 mb-3" />
                <p className="text-gray-900 font-semibold">Best Value</p>
                <p className="text-gray-600 text-sm">Competitive rates guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}