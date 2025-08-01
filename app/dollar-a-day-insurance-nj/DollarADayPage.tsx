'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  CurrencyDollarIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  PhoneIcon,
  CalculatorIcon,
  UserGroupIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function DollarADayPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Dollar a Day Insurance NJ', url: '/dollar-a-day-insurance-nj' },
  ];

  const minimumCoverage = [
    { type: 'Bodily Injury (per person)', amount: '$15,000' },
    { type: 'Bodily Injury (per accident)', amount: '$30,000' },
    { type: 'Property Damage', amount: '$5,000' },
    { type: 'PIP (Personal Injury Protection)', amount: '$15,000' },
    { type: 'Uninsured Motorist', amount: '$15,000/$30,000' },
  ];

  const eligibilityFactors = [
    {
      title: 'Clean Driving Record',
      description: 'No accidents or major violations in 3-5 years',
      icon: ShieldCheckIcon,
      impact: 'Save 20-40%'
    },
    {
      title: 'Low Annual Mileage',
      description: 'Driving under 7,500 miles per year',
      icon: MapPinIcon,
      impact: 'Save 10-25%'
    },
    {
      title: 'Older Vehicle',
      description: '10+ year old car with low value',
      icon: ClockIcon,
      impact: 'Save 15-30%'
    },
    {
      title: 'Good Credit Score',
      description: 'Credit score above 650',
      icon: DocumentTextIcon,
      impact: 'Save 15-25%'
    }
  ];

  const whoQualifies = [
    'Safe drivers with clean records',
    'Low-mileage commuters or retirees',
    'Owners of older, paid-off vehicles',
    'Those needing basic legal compliance',
    'Budget-conscious consumers',
    'First-time insurance buyers'
  ];

  const prosAndCons = {
    pros: [
      'Meets NJ legal requirements',
      'Extremely affordable monthly payment',
      'Quick approval process',
      'Instant proof of insurance',
      'No long-term contracts',
      'Basic protection included'
    ],
    cons: [
      'Minimal coverage limits',
      'No comprehensive or collision',
      'Limited protection for your assets',
      'May not cover all accident costs',
      'Not suitable for financed vehicles',
      'Higher out-of-pocket risk'
    ]
  };

  const savingsTips = [
    {
      tip: 'Pay in Full',
      description: 'Save 5-10% by paying 6 months upfront',
      icon: CurrencyDollarIcon
    },
    {
      tip: 'Defensive Driving Course',
      description: 'Complete course for 10% discount',
      icon: ShieldCheckIcon
    },
    {
      tip: 'Bundle Policies',
      description: 'Add renters or life insurance',
      icon: UserGroupIcon
    },
    {
      tip: 'Paperless Billing',
      description: 'Save $5/month with e-documents',
      icon: DocumentTextIcon
    }
  ];

  const faqs = [
    {
      question: 'Is "dollar a day" insurance really $30/month in NJ?',
      answer: 'Yes, it\'s possible to get basic liability insurance for around $30-40/month in NJ if you qualify. This typically requires a clean driving record, older vehicle, and accepting state minimum coverage limits. Your actual rate depends on your specific circumstances.'
    },
    {
      question: 'What does dollar a day insurance cover in New Jersey?',
      answer: 'Dollar a day insurance typically includes NJ state minimums: $15,000/$30,000 bodily injury liability, $5,000 property damage liability, and $15,000 PIP (Personal Injury Protection). It does NOT include comprehensive, collision, or higher liability limits.'
    },
    {
      question: 'Who qualifies for dollar a day car insurance?',
      answer: 'The best candidates are drivers with clean records (no accidents/violations in 3-5 years), low annual mileage, older vehicles (10+ years), good credit scores, and those who own their vehicle outright without a loan.'
    },
    {
      question: 'Is minimum coverage enough for NJ drivers?',
      answer: 'While it meets legal requirements, minimum coverage may not fully protect you financially. NJ\'s $5,000 property damage limit is very low - many accidents exceed this amount. Consider your assets and risk tolerance when choosing coverage.'
    },
    {
      question: 'Can I get dollar a day insurance with bad credit?',
      answer: 'It\'s more challenging but possible. Poor credit typically increases rates by 50-100%. You might pay $45-60/month instead of $30. Focus on insurers that don\'t heavily weight credit scores or offer payment plans.'
    },
    {
      question: 'How can I get the absolute cheapest car insurance in NJ?',
      answer: 'Maintain a clean driving record, choose minimum coverage, drive an older car, keep mileage low, improve your credit score, take a defensive driving course, and compare quotes from multiple insurers. Consider usage-based programs if you drive rarely.'
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
          title="Dollar a Day Insurance NJ"
          subtitle="Affordable Auto Coverage Starting at $30/Month"
          description="Get legal car insurance in New Jersey for as low as a dollar a day. We help budget-conscious drivers find the most affordable coverage that meets state requirements."
          primaryButton={{
            text: 'Get $30/Month Quote',
            href: EXTERNAL_URLS.QUOTE_FORM,
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/affordable-insurance-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* What is Dollar a Day Insurance */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Budget Insurance</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Dollar a Day Insurance?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                "Dollar a day" insurance refers to ultra-affordable auto coverage costing around 
                $30-40 per month. It provides New Jersey's minimum required coverage to keep you 
                legal on the road without breaking your budget.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  NJ Minimum Coverage Included
                </h3>
                <div className="space-y-4">
                  {minimumCoverage.map((coverage, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">{coverage.type}</span>
                      <span className="text-primary-600 font-bold">{coverage.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <ExclamationTriangleIcon className="h-5 w-5 inline mr-2" />
                    This coverage meets NJ legal requirements but may not fully protect your assets in a serious accident.
                  </p>
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Monthly Cost Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base Premium</span>
                    <span className="font-semibold">$25-35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>State Fees</span>
                    <span className="font-semibold">$3-5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee</span>
                    <span className="font-semibold">$2-3</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Monthly</span>
                    <span className="text-primary-600">$30-43</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Actual rates vary based on your driving record, location, and vehicle
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Who Qualifies Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Eligibility</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                How to Qualify for Dollar a Day Insurance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Several factors determine if you can get insurance for around $30/month in New Jersey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {eligibilityFactors.map((factor, index) => (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg text-center"
                >
                  <factor.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{factor.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{factor.description}</p>
                  <span className="text-green-400 font-semibold">{factor.impact}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Ideal Candidates for Dollar a Day Insurance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whoQualifies.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Pros and Cons */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Compare</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Dollar a Day Insurance: Pros and Cons
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-green-900 mb-6">
                  ✓ Advantages
                </h3>
                <ul className="space-y-3">
                  {prosAndCons.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-green-800">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-900 mb-6">
                  ✗ Limitations
                </h3>
                <ul className="space-y-3">
                  {prosAndCons.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-red-800">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Is Dollar a Day Insurance Right for You?
              </h3>
              <p className="text-blue-800 mb-6">
                It's perfect if you need basic legal coverage on a tight budget. However, if you have 
                assets to protect or drive a newer car, consider higher coverage limits.
              </p>
              <Link
                href="/nj-auto-insurance/requirements"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn about NJ coverage requirements
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Additional Savings Tips */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Save More</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                How to Get Even Cheaper Insurance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {savingsTips.map((tip, index) => (
                <motion.div
                  key={tip.tip}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg text-center"
                >
                  <tip.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tip.tip}</h3>
                  <p className="text-gray-300 text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/affordable-auto-insurance-nj"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                Explore All Money-Saving Options
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">FAQs</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Dollar a Day Insurance Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Your Dollar a Day Insurance Quote Now
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See if you qualify for New Jersey's most affordable auto insurance. 
              Get covered for as low as $30/month with instant proof of insurance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
              >
                Get $30/Month Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:2018122184"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Call (201) 812-2184
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start">
                <CalculatorIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Instant Quotes</p>
                  <p className="text-gray-300 text-sm">See your rate in minutes</p>
                </div>
              </div>
              <div className="flex items-start">
                <DocumentTextIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Proof of Insurance</p>
                  <p className="text-gray-300 text-sm">Get covered immediately</p>
                </div>
              </div>
              <div className="flex items-start">
                <CurrencyDollarIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Low Monthly Payments</p>
                  <p className="text-gray-300 text-sm">Starting at just $30/month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}