'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HomeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  FireIcon,
  BoltIcon,
  CloudIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const coverageTypes = [
  {
    icon: HomeIcon,
    title: 'Dwelling Coverage',
    description: 'Protects the structure of your home and attached structures',
    details: ['Main Structure', 'Attached Garage', 'Built-in Appliances', 'Fixtures'],
    coverage: 'Coverage A'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Other Structures',
    description: 'Coverage for detached structures on your property',
    details: ['Detached Garage', 'Shed', 'Fence', 'Gazebo'],
    coverage: 'Coverage B'
  },
  {
    icon: HomeIcon,
    title: 'Personal Property',
    description: 'Protection for your belongings inside and outside your home',
    details: ['Furniture', 'Clothing', 'Electronics', 'Jewelry (limited)'],
    coverage: 'Coverage C'
  },
  {
    icon: UserGroupIcon,
    title: 'Liability Protection',
    description: 'Protects you from lawsuits and claims by others',
    details: ['Bodily Injury', 'Property Damage', 'Legal Defense', 'Medical Payments'],
    coverage: 'Coverage E & F'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Additional Living Expenses',
    description: 'Covers extra costs if you must live elsewhere during repairs',
    details: ['Hotel Costs', 'Restaurant Meals', 'Temporary Housing', 'Storage'],
    coverage: 'Coverage D'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Medical Payments',
    description: 'Covers medical expenses for injuries that occur on your property',
    details: ['Guest Injuries', 'No Fault Required', 'Immediate Coverage', 'Quick Settlement'],
    coverage: 'Coverage F'
  }
];

const protectedPerils = [
  {
    icon: FireIcon,
    title: 'Fire & Lightning',
    description: 'Damage from fire, lightning strikes, and smoke'
  },
  {
    icon: CloudIcon,
    title: 'Windstorm & Hail',
    description: 'Wind damage and hail damage to your home'
  },
  {
    icon: BoltIcon,
    title: 'Electrical Damage',
    description: 'Damage from electrical surges and power issues'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Theft & Vandalism',
    description: 'Protection against theft and malicious damage'
  },
  {
    icon: HomeIcon,
    title: 'Water Damage',
    description: 'Sudden water damage from plumbing or appliances'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Falling Objects',
    description: 'Damage from objects falling on your home'
  }
];

const discounts = [
  {
    title: 'Multi-Policy Discount',
    description: 'Bundle home and auto insurance for significant savings',
    savings: 'Up to 25%'
  },
  {
    title: 'Security System',
    description: 'Monitored security systems reduce your risk and rates',
    savings: 'Up to 20%'
  },
  {
    title: 'Fire Safety',
    description: 'Smoke detectors and fire extinguishers provide discounts',
    savings: 'Up to 10%'
  },
  {
    title: 'New Home',
    description: 'Newer homes often qualify for lower rates',
    savings: 'Up to 15%'
  },
  {
    title: 'Claims-Free',
    description: 'No claims history demonstrates lower risk',
    savings: 'Up to 12%'
  },
  {
    title: 'Loyalty Discount',
    description: 'Long-term customers earn additional savings',
    savings: 'Up to 8%'
  }
];

const faqItems = [
  {
    question: 'How much homeowners insurance do I need?',
    answer: 'Your dwelling coverage should be sufficient to rebuild your home at current construction costs. Personal property coverage is typically 50-70% of dwelling coverage. We help you determine the right amounts based on your specific situation.'
  },
  {
    question: 'What\'s not covered by standard homeowners insurance?',
    answer: 'Standard policies typically exclude floods, earthquakes, maintenance issues, and certain high-value items. We can help you understand exclusions and recommend additional coverage where needed.'
  },
  {
    question: 'How can I lower my homeowners insurance premiums?',
    answer: 'You can reduce premiums by increasing deductibles, bundling policies, installing safety features, maintaining good credit, and shopping for competitive rates. We help you find all available discounts.'
  },
  {
    question: 'What should I do if I need to file a claim?',
    answer: 'Contact us immediately after a loss. Document the damage with photos, make temporary repairs to prevent further damage, and keep receipts. We\'ll guide you through the entire claims process.'
  }
];

export default function HomeownersInsurance() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Homeowners Insurance in New Jersey"
        subtitle="Protect Your Most Valuable Investment"
        description="Comprehensive homeowners insurance coverage for New Jersey residents. Protect your home, belongings, and family with competitive rates and exceptional claim service."
        primaryButton={{
          text: 'Get Home Quote',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'Call Agent',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/gallery/Gemini_Generated_Image_mo5u5ymo5u5ymo5u.jpg"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - Coverage Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Coverage Components</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Homeowners Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Homeowners insurance provides comprehensive protection for your home and belongings. Understanding each coverage component helps you make informed decisions about your protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => (
              <motion.div
                key={coverage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <coverage.icon className="h-12 w-12 text-primary-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {coverage.title}
                    </h3>
                    <div className="text-sm text-primary-600 font-medium">
                      {coverage.coverage}
                    </div>
                  </div>
                </div>
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
              Get Your Home Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Divider */}
      <Divider type="white-to-dark" />

      {/* 5. Dark Section - Protected Perils */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Coverage Protection</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              What Your Home Insurance Covers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Standard homeowners insurance protects against many common perils that could damage your home or belongings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protectedPerils.map((peril, index) => (
              <motion.div
                key={peril.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg text-center"
              >
                <peril.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {peril.title}
                </h3>
                <p className="text-gray-300">
                  {peril.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dark Section - Discounts */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Save Money</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Homeowners Insurance Discounts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take advantage of these discounts to reduce your homeowners insurance premiums while maintaining excellent coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discounts.map((discount, index) => (
              <motion.div
                key={discount.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {discount.title}
                  </h3>
                  <span className="text-primary-400 font-bold text-sm bg-primary-900 px-2 py-1 rounded">
                    {discount.savings}
                  </span>
                </div>
                <p className="text-gray-300">
                  {discount.description}
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
            Ready to Protect Your Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a personalized homeowners insurance quote and discover comprehensive protection for your most valuable investment.
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
              Get Home Quote
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
              Homeowners Insurance Questions
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