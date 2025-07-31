'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TruckIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  StarIcon,
  UserGroupIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const coverageTypes = [
  {
    title: 'Liability Coverage',
    description: 'Protects you if you cause injury or property damage to others',
    details: ['Bodily Injury Liability', 'Property Damage Liability', 'Legal Defense Costs'],
    required: true
  },
  {
    title: 'Collision Coverage',
    description: 'Covers damage to your vehicle in an accident',
    details: ['Collision with Another Vehicle', 'Single Vehicle Accidents', 'Deductible Options'],
    required: false
  },
  {
    title: 'Comprehensive Coverage',
    description: 'Protects against theft, vandalism, and weather damage',
    details: ['Theft Protection', 'Vandalism', 'Weather Damage', 'Animal Collisions'],
    required: false
  },
  {
    title: 'Uninsured/Underinsured Motorist',
    description: 'Covers you if hit by an uninsured or underinsured driver',
    details: ['Uninsured Motorist Coverage', 'Underinsured Motorist Coverage', 'Hit and Run Protection'],
    required: false
  },
  {
    title: 'Personal Injury Protection (PIP)',
    description: 'Covers medical expenses and lost wages regardless of fault',
    details: ['Medical Expenses', 'Lost Wages', 'Essential Services', 'Rehabilitation'],
    required: true
  },
  {
    title: 'Medical Payments',
    description: 'Covers medical expenses for you and your passengers',
    details: ['Immediate Medical Costs', 'Passenger Coverage', 'No Fault Required'],
    required: false
  }
];

const discounts = [
  {
    icon: UserGroupIcon,
    title: 'Multi-Policy Discount',
    description: 'Bundle your auto with home insurance for significant savings'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Safe Driver Discount',
    description: 'Rewards for maintaining a clean driving record'
  },
  {
    icon: StarIcon,
    title: 'Good Student Discount',
    description: 'Discounts for students maintaining good grades'
  },
  {
    icon: TruckIcon,
    title: 'Multi-Vehicle Discount',
    description: 'Save when you insure multiple vehicles on the same policy'
  },
  {
    icon: DocumentTextIcon,
    title: 'Defensive Driving Course',
    description: 'Complete an approved course for additional savings'
  },
  {
    icon: CheckCircleIcon,
    title: 'Safety Features Discount',
    description: 'Anti-theft devices and safety features can reduce premiums'
  }
];

const factors = [
  {
    title: 'Driving Record',
    description: 'Your history of accidents, violations, and claims significantly impacts rates'
  },
  {
    title: 'Vehicle Type',
    description: 'Make, model, year, and safety features of your vehicle affect premiums'
  },
  {
    title: 'Coverage Limits',
    description: 'Higher coverage limits and lower deductibles increase premiums'
  },
  {
    title: 'Location',
    description: 'Where you live and park your vehicle influences insurance costs'
  },
  {
    title: 'Age & Experience',
    description: 'Age and years of driving experience are key rating factors'
  },
  {
    title: 'Annual Mileage',
    description: 'How much you drive annually affects your risk profile'
  }
];

const faqItems = [
  {
    question: 'What auto insurance is required in New Jersey?',
    answer: 'New Jersey requires minimum liability coverage of $15,000 per person and $30,000 per accident for bodily injury, plus $5,000 for property damage. Personal Injury Protection (PIP) is also required unless you opt out in writing.'
  },
  {
    question: 'How can I lower my auto insurance premiums?',
    answer: 'You can lower premiums by maintaining a clean driving record, bundling policies, choosing higher deductibles, taking defensive driving courses, and asking about available discounts.'
  },
  {
    question: 'What should I do after an auto accident?',
    answer: 'First, ensure everyone is safe and call 911 if needed. Exchange information with other drivers, document the scene, and contact your insurance company immediately to report the claim.'
  },
  {
    question: 'Do I need collision and comprehensive coverage?',
    answer: 'While not required by law, collision and comprehensive coverage are typically required by lenders if you have a car loan or lease. Even for owned vehicles, these coverages provide valuable protection.'
  }
];

export default function AutoInsurance() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Auto Insurance in New Jersey"
        subtitle="Comprehensive Coverage for Every Driver"
        description="Get the auto insurance protection you need with competitive rates and exceptional service. We help New Jersey drivers find the right coverage for their lifestyle and budget."
        primaryButton={{
          text: 'Get Auto Quote',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Call Agent',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/20250721_1442_Insurance Consultation Scene_simple_compose_01k0q4n4jces6spa4s75f9j1se.png"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Coverage Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Coverage Options</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Auto Insurance Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your auto insurance options is the first step to finding the right coverage. We explain each type and help you choose what's best for your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => (
              <motion.div
                key={coverage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative ${coverage.required ? 'ring-2 ring-primary-500' : ''}`}
              >
                {coverage.required && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Required
                  </div>
                )}
                <TruckIcon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {coverage.description}
                </p>
                <ul className="space-y-2">
                  {coverage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Your Auto Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider type="white-to-dark" />

      {/* 5. Dark Section - Discounts */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Save Money</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Auto Insurance Discounts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you find all available discounts to reduce your auto insurance premiums while maintaining excellent coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discounts.map((discount, index) => (
              <motion.div
                key={discount.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg text-center"
              >
                <discount.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {discount.title}
                </h3>
                <p className="text-gray-300">
                  {discount.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dark Section - Rating Factors */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Understanding Rates</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              What Affects Your Auto Insurance Rates?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding these factors helps you make informed decisions about your coverage and potentially lower your premiums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factors.map((factor, index) => (
              <motion.div
                key={factor.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-300">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dark Section - Contact CTA */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Save on Auto Insurance?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a personalized auto insurance quote and discover how much you can save with our competitive rates and discounts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="tel:(201) 812-2184"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call (201) 812-2184
            </Link>
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Auto Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Divider */}
      <Divider type="dark-to-white" />

      {/* 9. FAQ Section (Always Last White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Auto Insurance Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              Have More Questions?
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 