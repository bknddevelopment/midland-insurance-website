'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  ClockIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const essentialCoverages = [
  {
    icon: ShieldCheckIcon,
    title: 'General Liability',
    description: 'Core protection for bodily injury, property damage, and completed operations',
    details: ['$1-2 million per occurrence', 'Products & completed operations', 'Personal & advertising injury', 'Medical payments'],
    required: true
  },
  {
    icon: UserGroupIcon,
    title: 'Workers\' Compensation',
    description: 'Required coverage for employee injuries and illnesses on the job',
    details: ['Medical expenses', 'Lost wages', 'Rehabilitation costs', 'Death benefits'],
    required: true
  },
  {
    icon: TruckIcon,
    title: 'Commercial Auto',
    description: 'Coverage for vehicles used in your contracting business',
    details: ['Owned vehicles', 'Hired & non-owned auto', 'Equipment transport', 'Employee drivers'],
    required: false
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Tools & Equipment',
    description: 'Protection for valuable tools and machinery',
    details: ['Theft coverage', 'Damage protection', 'Replacement cost', 'Rented equipment'],
    required: false
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Builder\'s Risk',
    description: 'Coverage for projects under construction',
    details: ['Materials & supplies', 'Work in progress', 'Soft costs', 'Natural disasters'],
    required: false
  },
  {
    icon: ScaleIcon,
    title: 'Contractor Bonds',
    description: 'Required bonds for licensing and projects',
    details: ['License bonds', 'Bid bonds', 'Performance bonds', 'Payment bonds'],
    required: false
  }
];

const contractorTypes = [
  {
    title: 'General Contractors',
    risks: ['Multiple subcontractors', 'Large project exposure', 'Contract liability'],
    avgPremium: '$15,000-40,000/year',
    icon: BuildingOfficeIcon
  },
  {
    title: 'Specialty Trades',
    risks: ['Trade-specific hazards', 'Equipment damage', 'Installation errors'],
    avgPremium: '$3,000-15,000/year',
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Subcontractors',
    risks: ['Vicarious liability', 'Contract requirements', 'Work defects'],
    avgPremium: '$2,500-10,000/year',
    icon: UserGroupIcon
  },
  {
    title: 'Remodeling Contractors',
    risks: ['Existing property damage', 'Occupied premises', 'Customer property'],
    avgPremium: '$5,000-20,000/year',
    icon: ShieldCheckIcon
  }
];

const whySpecializedCoverage = [
  {
    icon: DocumentTextIcon,
    title: 'Contract Requirements',
    description: 'Meet specific insurance requirements in construction contracts and bids'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'High-Risk Industry',
    description: 'Construction has 3x more claims than most industries'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Asset Protection',
    description: 'Protect your business assets from costly lawsuits and claims'
  },
  {
    icon: ClockIcon,
    title: 'Project Delays',
    description: 'Coverage for delays and additional expenses due to covered losses'
  }
];

const commonClaims = [
  {
    type: 'Bodily Injury',
    example: 'A visitor trips over equipment at a job site, resulting in $250,000 in medical bills and lost wages.',
    coverage: 'General Liability'
  },
  {
    type: 'Property Damage',
    example: 'Faulty electrical work causes a fire, damaging the client\'s $500,000 home.',
    coverage: 'General Liability'
  },
  {
    type: 'Tool Theft',
    example: '$30,000 worth of tools stolen from a work van overnight.',
    coverage: 'Tools & Equipment'
  },
  {
    type: 'Employee Injury',
    example: 'Worker falls from scaffolding, requiring surgery and 6 months of recovery.',
    coverage: 'Workers\' Compensation'
  }
];

export default function ContractorsInsurancePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Contractors Insurance"
        subtitle="Comprehensive Coverage for Construction Professionals"
        description="Protect your contracting business with specialized insurance designed for the construction industry. From general liability to equipment coverage, we have you covered."
        primaryButton={{
          text: 'Get Contractors Quote',
          href: EXTERNAL_URLS.QUOTE_FORM
        }}
        secondaryButton={{
          text: 'Call (201) 812-2184',
          href: 'tel:2018122184'
        }}
        backgroundImage="/photos/contractors-hero.jpg"
      />

      <Divider type="dark-to-white" />

      {/* Essential Coverages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Complete Protection</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Essential Contractors Insurance Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your policy with the right combination of coverages to protect your contracting business from common risks and contractual requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentialCoverages.map((coverage, index) => (
              <motion.div
                key={coverage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg p-8 ${coverage.required ? 'ring-2 ring-primary-600' : ''}`}
              >
                {coverage.required && (
                  <div className="badge-primary mb-4">Required Coverage</div>
                )}
                <coverage.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {coverage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {coverage.description}
                </p>
                <ul className="space-y-2">
                  {coverage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/business/construction"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
            >
              Explore All Construction Insurance Options
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Divider type="white-to-gray" />

      {/* Contractor Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Specialized Coverage</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Insurance by Contractor Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different contractors face different risks. We customize coverage based on your specific trade and project types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contractorTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-start">
                  <type.icon className="h-12 w-12 text-primary-600 flex-shrink-0" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <div className="bg-primary-50 rounded-lg p-3 mb-4">
                      <p className="text-sm font-semibold text-primary-900">
                        Average Premium: {type.avgPremium}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold mb-2">Common Risks:</p>
                    <ul className="space-y-1">
                      {type.risks.map((risk, idx) => (
                        <li key={idx} className="flex items-start">
                          <ExclamationTriangleIcon className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/trades"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              Find Your Trade-Specific Coverage
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Divider type="gray-to-white" />

      {/* Why Specialized Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-light inline-block mb-4">Industry Expertise</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Contractors Need Specialized Insurance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Standard business insurance doesn't cover the unique risks contractors face daily. 
                From job site injuries to faulty workmanship claims, construction businesses need 
                comprehensive protection designed for their industry.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whySpecializedCoverage.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <item.icon className="h-8 w-8 text-primary-600 flex-shrink-0" />
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Contractor Claims</h3>
              <div className="space-y-6">
                {commonClaims.map((claim, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-semibold text-gray-900">{claim.type}</h4>
                    <p className="text-sm text-gray-600 mt-1">{claim.example}</p>
                    <p className="text-sm text-primary-600 mt-2">
                      <ShieldCheckIcon className="h-4 w-4 inline mr-1" />
                      Covered by: {claim.coverage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider type="white-to-gray" />

      {/* Package Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Save Money</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contractors Package Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bundle your coverages for better protection and significant savings. Our contractors packages are tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Package</h3>
              <p className="text-3xl font-bold text-primary-600 mb-4">$2,500+</p>
              <p className="text-gray-600 mb-6">Per Year</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">General Liability ($1M)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tools Coverage ($10K)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic Bonds</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Best for: New contractors, handymen</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary-50 rounded-lg shadow-lg p-8 text-center ring-2 ring-primary-600"
            >
              <div className="badge-primary mb-4">Most Popular</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Package</h3>
              <p className="text-3xl font-bold text-primary-600 mb-4">$5,000+</p>
              <p className="text-gray-600 mb-6">Per Year</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">General Liability ($2M)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Workers\' Comp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Tools Coverage ($25K)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Commercial Auto</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Established contractors</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Package</h3>
              <p className="text-3xl font-bold text-primary-600 mb-4">$10,000+</p>
              <p className="text-gray-600 mb-6">Per Year</p>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">General Liability ($5M)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Umbrella Policy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Builder\'s Risk</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Professional Liability</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Best for: Large contractors, GCs</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Your Custom Package Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Divider type="gray-to-dark" />

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Contracting Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get comprehensive contractors insurance from Bergen County's construction insurance specialists. 
            Quick quotes, competitive rates, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:2018122184"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors btn-transition"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call (201) 812-2184
            </a>
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Online Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <p className="text-gray-400 mt-6">
            Quotes in 15 minutes • 20+ carriers • Local experts since 1990
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}