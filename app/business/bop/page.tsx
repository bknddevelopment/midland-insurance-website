'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  FireIcon,
  BoltIcon,
  CloudIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const bopCoverages = [
  {
    icon: BuildingOfficeIcon,
    title: 'Property Coverage',
    description: 'Protects your business building, equipment, inventory, and contents',
    details: ['Building Structure', 'Business Equipment', 'Inventory & Stock', 'Furniture & Fixtures'],
    coverage: 'Section I'
  },
  {
    icon: ShieldCheckIcon,
    title: 'General Liability',
    description: 'Coverage for third-party claims against your business',
    details: ['Bodily Injury', 'Property Damage', 'Personal & Advertising Injury', 'Legal Defense'],
    coverage: 'Section II'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Business Interruption',
    description: 'Covers lost income when your business cannot operate due to covered damage',
    details: ['Lost Revenue', 'Continuing Expenses', 'Extra Expenses', 'Extended Period'],
    coverage: 'Section I'
  },
  {
    icon: DocumentTextIcon,
    title: 'Crime Coverage',
    description: 'Protection against employee theft and other business crimes',
    details: ['Employee Theft', 'Forgery or Alteration', 'Computer Fraud', 'Money & Securities'],
    coverage: 'Optional'
  },
  {
    icon: BoltIcon,
    title: 'Equipment Breakdown',
    description: 'Covers costs when business equipment breaks down',
    details: ['Boiler & Machinery', 'Computer Equipment', 'Production Equipment', 'HVAC Systems'],
    coverage: 'Optional'
  },
  {
    icon: UserGroupIcon,
    title: 'Employment Practices',
    description: 'Protection against employment-related lawsuits',
    details: ['Wrongful Termination', 'Discrimination Claims', 'Harassment Claims', 'Legal Defense'],
    coverage: 'Optional'
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
    description: 'Wind damage and hail damage to your property'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Theft & Vandalism',
    description: 'Protection against theft and malicious damage'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Water Damage',
    description: 'Sudden water damage from plumbing or sprinkler systems'
  },
  {
    icon: BoltIcon,
    title: 'Explosion',
    description: 'Damage from explosions and steam boiler accidents'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Vehicle Impact',
    description: 'Damage from vehicles or aircraft hitting your building'
  }
];

const businessTypes = [
  {
    name: 'Retail Stores',
    description: 'Shops, boutiques, and customer-facing retail businesses'
  },
  {
    name: 'Restaurants & Food Service',
    description: 'Restaurants, cafes, catering, and food service businesses'
  },
  {
    name: 'Professional Offices',
    description: 'Law firms, accounting practices, consulting offices'
  },
  {
    name: 'Service Businesses',
    description: 'Hair salons, dry cleaners, repair shops, and service providers'
  },
  {
    name: 'Small Manufacturing',
    description: 'Light manufacturing and assembly operations'
  },
  {
    name: 'Contractors',
    description: 'Small contractors with permanent business locations'
  },
  {
    name: 'Wholesale Operations',
    description: 'Wholesale distributors and warehouse operations'
  },
  {
    name: 'Apartment Buildings',
    description: 'Small apartment buildings and rental properties'
  }
];

const benefits = [
  {
    title: 'Cost-Effective Package',
    description: 'BOP combines multiple coverages in one policy, typically costing less than purchasing separately.'
  },
  {
    title: 'Simplified Management',
    description: 'One policy, one renewal date, one agent - easier to manage than multiple separate policies.'
  },
  {
    title: 'Broad Coverage',
    description: 'Comprehensive protection for most common business risks in a single package.'
  },
  {
    title: 'Customizable Options',
    description: 'Add optional coverages like cyber liability, employment practices, or equipment breakdown.'
  }
];

const faqItems = [
  {
    question: 'What businesses qualify for a Business Owners Policy?',
    answer: 'BOP is designed for small to medium-sized businesses with relatively low risk profiles. This includes retail stores, restaurants, offices, service businesses, and small manufacturers. Businesses with high liability risks may need separate coverage.'
  },
  {
    question: 'How much does a Business Owners Policy cost?',
    answer: 'BOP costs vary based on your business type, location, building value, inventory, and coverage limits. Most small businesses can expect to pay between $500-$3,000 annually, but we provide customized quotes based on your specific needs.'
  },
  {
    question: 'What\'s the difference between BOP and separate business insurance policies?',
    answer: 'BOP combines property and liability coverage in one package at a lower cost than buying separately. It\'s designed for businesses with standard risks. Larger or higher-risk businesses may need separate commercial policies for more coverage options.'
  },
  {
    question: 'Can I add additional coverage to my BOP policy?',
    answer: 'Yes! BOPs are highly customizable. You can add cyber liability, employment practices liability, equipment breakdown, crime coverage, and other endorsements based on your business needs.'
  }
];

export default function BOPInsurance() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* 1. Hero Section (Always Dark) */}
      <Hero
        title="Business Owners Policy (BOP)"
        subtitle="Complete Business Protection in One Package"
        description="Get comprehensive business insurance coverage with our Business Owners Policy. Combining property and liability protection for small to medium businesses at an affordable price."
        primaryButton={{
          text: 'Get BOP Quote',
          href: EXTERNAL_URLS.QUOTE_FORM
        }}
        secondaryButton={{
          text: 'Call Agent',
          href: 'tel:(201) 812-2184'
        }}
        backgroundImage="/photos/team/team_photo_employees.webp"
      />

      {/* 2. Divider */}
      <Divider type="dark-to-white" />

      {/* 3. First White Section - BOP Coverage Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Coverage Components</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Business Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Business Owners Policy combines essential business coverages into one comprehensive package, providing property protection, liability coverage, and business interruption insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bopCoverages.map((coverage, index) => (
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
              Get Your BOP Quote
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
              What Your BOP Policy Covers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Business Owners Policies protect against many common perils that could damage your business property or cause liability claims.
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

      {/* 6. Dark Section - Business Types */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Eligible Businesses</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Is Your Business Right for BOP?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Business Owners Policies are designed for small to medium-sized businesses with standard risk profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((business, index) => (
              <motion.div
                key={business.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{business.name}</h3>
                <p className="text-gray-300 text-sm">{business.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dark Section - Why Choose BOP */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">BOP Benefits</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose a Business Owners Policy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              BOPs offer small businesses the convenience and cost savings of bundled coverage with comprehensive protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <CheckCircleIcon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Dark Section - Contact CTA */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a customized Business Owners Policy quote tailored to your business needs and industry requirements.
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
              Get BOP Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Divider */}
      <Divider type="dark-to-white" />

      {/* 10. FAQ Section (Always Last White Section) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">FAQ</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Business Owners Policy Questions
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