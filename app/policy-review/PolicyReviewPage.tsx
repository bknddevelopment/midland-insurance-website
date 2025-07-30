'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function PolicyReviewPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Policy Review', url: '/policy-review' },
  ];

  const reviewBenefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Coverage Gap Analysis',
      description: 'Identify areas where you may be underinsured or paying for unnecessary coverage.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Cost Optimization',
      description: 'Find opportunities to reduce premiums without sacrificing essential protection.'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'Risk Assessment',
      description: 'Ensure your coverage aligns with your current risk profile and business operations.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Policy Comparison',
      description: 'Compare your current coverage against industry standards and competitor offerings.'
    }
  ];

  const reviewProcess = [
    {
      step: '1',
      title: 'Schedule Review',
      description: 'Contact us to schedule your complimentary policy review session.'
    },
    {
      step: '2',
      title: 'Gather Documents',
      description: 'We\'ll review your current policies, claims history, and business operations.'
    },
    {
      step: '3',
      title: 'Comprehensive Analysis',
      description: 'Our experts analyze your coverage, identify gaps, and find savings opportunities.'
    },
    {
      step: '4',
      title: 'Receive Recommendations',
      description: 'Get a detailed report with actionable recommendations to improve your coverage.'
    }
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Free Policy Review"
          subtitle="Ensure You Have the Right Coverage"
          description="Get a complimentary insurance policy review from our experts. We\'ll analyze your current coverage and identify opportunities to save money while improving protection."
          primaryButton={{
            text: 'Schedule Review',
            href: 'tel:2018122184',
          }}
          secondaryButton={{
            text: 'Learn More',
            href: '#benefits',
          }}
          backgroundImage="/photos/policy-review-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">Benefits</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Get a Policy Review?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insurance needs change over time. Regular policy reviews ensure you\'re properly protected and not overpaying.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reviewBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Process Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">How It Works</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Review Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reviewProcess.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-slate-800 rounded-lg p-6">
                    <div className="text-4xl font-bold text-primary-400 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                  {index < reviewProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRightIcon className="h-8 w-8 text-primary-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* What We Review Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="badge-light inline-block mb-4">Comprehensive Analysis</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What We Review
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Personal Insurance
                </h3>
                <ul className="space-y-4">
                  {[
                    'Homeowners/Renters coverage limits',
                    'Auto insurance deductibles and liability',
                    'Umbrella policy adequacy',
                    'Life insurance needs analysis',
                    'Valuable items coverage',
                    'Flood and earthquake protection'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Business Insurance
                </h3>
                <ul className="space-y-4">
                  {[
                    'General liability limits and exclusions',
                    'Property coverage and business interruption',
                    'Workers compensation classifications',
                    'Commercial auto fleet coverage',
                    'Professional liability/E&O adequacy',
                    'Cyber liability and data breach coverage'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <div className="flex">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    When Should You Get a Policy Review?
                  </h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Before your policy renewal</li>
                    <li>• After major life or business changes</li>
                    <li>• When you haven\'t reviewed coverage in over a year</li>
                    <li>• If you\'ve had claims or losses</li>
                    <li>• When market conditions change significantly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Your Free Policy Review?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don\'t wait until it\'s too late. Get peace of mind knowing you have the right coverage at the right price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2018122184"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call (201) 812-2184
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                Schedule Online
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}