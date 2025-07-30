'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  WrenchIcon,
  HomeModernIcon,
  Cog6ToothIcon,
  CubeIcon,
  PaintBrushIcon,
  CircleStackIcon,
  SparklesIcon,
  ViewColumnsIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const trades = [
  {
    name: 'General Contractors',
    slug: 'general-contractors',
    description: 'Comprehensive coverage for GCs managing entire projects',
    icon: BuildingOfficeIcon,
    avgPremium: '$5,000-$25,000',
    keyRisks: ['Subcontractor liability', 'Project delays', 'Design errors'],
  },
  {
    name: 'Electricians',
    slug: 'electricians',
    description: 'Specialized protection for electrical contractors',
    icon: BoltIcon,
    avgPremium: '$3,500-$8,000',
    keyRisks: ['Electrical fires', 'Shock injuries', 'Code violations'],
  },
  {
    name: 'Plumbers',
    slug: 'plumbers',
    description: 'Water damage and liability coverage for plumbing pros',
    icon: WrenchIcon,
    avgPremium: '$3,000-$7,500',
    keyRisks: ['Water damage', 'Pipe bursts', 'Mold liability'],
  },
  {
    name: 'Roofers',
    slug: 'roofers',
    description: 'High-risk coverage for roofing contractors',
    icon: HomeModernIcon,
    avgPremium: '$8,000-$20,000',
    keyRisks: ['Falls from height', 'Weather damage', 'Fire from torches'],
  },
  {
    name: 'HVAC Contractors',
    slug: 'hvac-contractors',
    description: 'Coverage for heating, cooling, and ventilation experts',
    icon: Cog6ToothIcon,
    avgPremium: '$4,000-$10,000',
    keyRisks: ['Carbon monoxide', 'Refrigerant leaks', 'System failures'],
  },
  {
    name: 'Masons',
    slug: 'masons',
    description: 'Protection for masonry and concrete contractors',
    icon: CubeIcon,
    avgPremium: '$5,000-$12,000',
    keyRisks: ['Structural failures', 'Falling objects', 'Material defects'],
  },
  {
    name: 'Painters',
    slug: 'painters',
    description: 'Coverage for painting and coating contractors',
    icon: PaintBrushIcon,
    avgPremium: '$2,500-$6,000',
    keyRisks: ['Overspray damage', 'Lead paint', 'Falls from ladders'],
  },
  {
    name: 'Carpenters',
    slug: 'carpenters',
    description: 'Insurance for framing and finish carpentry',
    icon: CircleStackIcon,
    avgPremium: '$3,000-$7,500',
    keyRisks: ['Tool injuries', 'Structural issues', 'Fire hazards'],
  },
  {
    name: 'Landscapers',
    slug: 'landscapers',
    description: 'Green industry coverage including pesticide liability',
    icon: SparklesIcon,
    avgPremium: '$2,500-$8,000',
    keyRisks: ['Property damage', 'Chemical liability', 'Tree work'],
  },
  {
    name: 'Drywall Contractors',
    slug: 'drywall-contractors',
    description: 'Coverage for drywall and acoustical contractors',
    icon: ViewColumnsIcon,
    avgPremium: '$3,500-$8,500',
    keyRisks: ['Dust damage', 'Falls from stilts', 'Fire resistance'],
  },
];

export default function TradesIndex() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Trades', url: '/trades' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Insurance for Every Construction Trade"
          subtitle="Specialized Coverage for Bergen County Contractors"
          description="From electricians to roofers, we provide tailored insurance solutions that understand the unique risks of your trade."
          primaryButton={{
            text: 'Get Trade Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/trades-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Why Trade-Specific Coverage Matters */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Specialized Protection</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Trade-Specific Insurance Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Generic contractor insurance misses critical exposures. Each trade faces unique risks that require specialized coverage and underwriting expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <ShieldCheckIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proper Classification
                </h3>
                <p className="text-gray-600">
                  Accurate trade classification ensures fair pricing and proper coverage for your specific operations.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <WrenchScrewdriverIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Risk-Based Coverage
                </h3>
                <p className="text-gray-600">
                  Coverage tailored to your trade's most common claims, from water damage to fall protection.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <CheckCircleIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600">
                  Specialized underwriting means better rates for well-managed trade contractors.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* All Trades Grid */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">All Trades</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Select Your Trade for Specialized Coverage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trades.map((trade, index) => {
                const Icon = trade.icon;
                return (
                  <motion.div
                    key={trade.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all"
                  >
                    <Icon className="h-12 w-12 text-primary-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {trade.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{trade.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="text-sm">
                        <span className="text-gray-400">Avg. Annual Premium:</span>
                        <span className="text-primary-400 font-semibold ml-2">{trade.avgPremium}</span>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Common Risks:</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {trade.keyRisks.map((risk, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary-400 mr-2">•</span>
                              {risk}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link
                      href={`/trades/${trade.slug}`}
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
                    >
                      Learn More
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Common Coverage Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Types</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Essential Coverage for All Trades
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  General Liability
                </h3>
                <p className="text-gray-600 mb-4">
                  Foundation coverage protecting against third-party injuries and property damage claims.
                </p>
                <Link
                  href="/business/construction/general-liability"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn About GL →
                </Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Workers' Compensation
                </h3>
                <p className="text-gray-600 mb-4">
                  Required coverage for employee injuries, with rates varying significantly by trade.
                </p>
                <Link
                  href="/business/construction/workers-comp"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn About WC →
                </Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Commercial Auto
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential for work vehicles, tools transport, and employee drivers.
                </p>
                <Link
                  href="/business/construction/commercial-auto"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn About Auto →
                </Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Tools & Equipment
                </h3>
                <p className="text-gray-600 mb-4">
                  Protect valuable tools and machinery wherever your work takes you.
                </p>
                <Link
                  href="/business/construction/tools-equipment"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn About Tools →
                </Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Professional Liability
                </h3>
                <p className="text-gray-600 mb-4">
                  Coverage for design errors and professional advice, increasingly important.
                </p>
                <Link
                  href="/business/construction/professional-liability"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn About E&O →
                </Link>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Contractor Bonds
                </h3>
                <p className="text-gray-600 mb-4">
                  License bonds, performance bonds, and payment bonds for various requirements.
                </p>
                <Link
                  href="/business/construction/bonds"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn About Bonds →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Why Choose Midland */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Why Midland</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Bergen County's Trade Insurance Experts
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  30+ Years Insuring Local Trades
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Specialized programs for each trade's unique risks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Access to 20+ carriers for competitive pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Local knowledge of Bergen County requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Claims advocacy when you need it most</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Safety programs to reduce premiums</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get Your Trade-Specific Quote
                </h3>
                <p className="text-gray-300 mb-6">
                  Tell us about your trade and get customized coverage options with competitive pricing from multiple carriers.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                  <select className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option>Select Your Trade</option>
                    {trades.map(trade => (
                      <option key={trade.slug} value={trade.slug}>{trade.name}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Get Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}