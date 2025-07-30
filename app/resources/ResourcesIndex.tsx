'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  DocumentTextIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  ArrowDownTrayIcon,
  PlayCircleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LightBulbIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const resources = {
  guides: [
    {
      title: 'Complete Construction Insurance Guide',
      description: 'Everything Bergen County contractors need to know about construction insurance in 2024.',
      icon: BookOpenIcon,
      href: '/resources/construction-insurance-guide',
      type: 'Comprehensive Guide',
      readTime: '25 min',
      featured: true,
    },
    {
      title: 'Trade-Specific Coverage Guide',
      description: 'Detailed insurance requirements for electricians, plumbers, roofers, and more.',
      icon: ClipboardDocumentListIcon,
      href: '/resources/trade-coverage-guide',
      type: 'Reference Guide',
      readTime: '15 min',
    },
    {
      title: 'Claims Process Handbook',
      description: 'Step-by-step guide to filing and managing construction insurance claims.',
      icon: DocumentTextIcon,
      href: '/resources/claims-handbook',
      type: 'Process Guide',
      readTime: '10 min',
    },
    {
      title: 'Safety Program Templates',
      description: 'Ready-to-use safety programs to reduce injuries and lower premiums.',
      icon: ShieldCheckIcon,
      href: '/resources/safety-templates',
      type: 'Templates',
      downloadable: true,
    },
  ],
  tools: [
    {
      title: 'Premium Calculator',
      description: 'Estimate your construction insurance costs based on trade and revenue.',
      icon: CalculatorIcon,
      href: '/tools/premium-calculator',
      type: 'Interactive Tool',
      badge: 'Popular',
    },
    {
      title: 'Coverage Checklist',
      description: 'Ensure you have all necessary coverages for Bergen County projects.',
      icon: ClipboardDocumentListIcon,
      href: '/tools/coverage-checklist',
      type: 'Checklist',
      downloadable: true,
    },
    {
      title: 'Certificate Generator',
      description: 'Create professional certificates of insurance for your clients.',
      icon: DocumentTextIcon,
      href: '/tools/certificate-generator',
      type: 'Tool',
      badge: 'Members Only',
    },
    {
      title: 'Risk Assessment Tool',
      description: 'Identify and evaluate risks specific to your construction projects.',
      icon: ChartBarIcon,
      href: '/tools/risk-assessment',
      type: 'Assessment',
    },
  ],
  education: [
    {
      title: 'Insurance Basics for New Contractors',
      description: 'Essential insurance knowledge for contractors starting their business.',
      icon: AcademicCapIcon,
      href: '/education/insurance-basics',
      type: 'Course',
      duration: '2 hours',
    },
    {
      title: 'Understanding Workers\' Comp',
      description: 'Deep dive into workers\' compensation for construction businesses.',
      icon: PlayCircleIcon,
      href: '/education/workers-comp-course',
      type: 'Video Series',
      duration: '1.5 hours',
    },
    {
      title: 'Contract Insurance Requirements',
      description: 'How to read and meet insurance requirements in construction contracts.',
      icon: DocumentTextIcon,
      href: '/education/contract-requirements',
      type: 'Workshop',
      duration: '45 min',
    },
    {
      title: 'Claims Prevention Strategies',
      description: 'Proactive measures to avoid common construction claims.',
      icon: ShieldCheckIcon,
      href: '/education/claims-prevention',
      type: 'Webinar',
      duration: '1 hour',
    },
  ],
};

export default function ResourcesIndex() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Construction Insurance Resources"
          subtitle="Free Tools & Guides for Bergen County Contractors"
          description="Access expert guides, calculators, and educational resources to help you understand and manage your construction insurance needs."
          primaryButton={{
            text: 'Browse All Resources',
            href: '#guides',
          }}
          secondaryButton={{
            text: 'Get Expert Help',
            href: '/contact',
          }}
          backgroundImage="/photos/resources-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Featured Resource */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="badge-light inline-block mb-4">Featured Resource</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Complete Construction Insurance Guide 2024
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our comprehensive guide covers everything Bergen County contractors need to know about construction insurance, from basic coverage to advanced strategies.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">10 chapters covering all insurance types</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Bergen County specific requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cost-saving strategies and tips</span>
                    </li>
                  </ul>
                  <Link
                    href="/resources/construction-insurance-guide"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Read the Guide
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-xl p-8">
                    <BookOpenIcon className="h-16 w-16 text-primary-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">What\'s Inside:</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• General Liability Explained</li>
                      <li>• Workers\' Comp Essentials</li>
                      <li>• Builder\'s Risk Coverage</li>
                      <li>• Commercial Auto Options</li>
                      <li>• Bonds & Surety</li>
                      <li>• Claims Management</li>
                      <li>• Safety Programs</li>
                      <li>• Cost Reduction Tips</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section id="guides" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Guides & Templates</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Guides for Every Situation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From comprehensive guides to ready-to-use templates, find the resources you need to manage your construction insurance effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.guides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <motion.div
                    key={guide.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${
                      guide.featured ? 'ring-2 ring-primary-500' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="h-12 w-12 text-primary-600" />
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{guide.type}</span>
                        {guide.downloadable && (
                          <ArrowDownTrayIcon className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <Link
                        href={guide.href}
                        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                      >
                        {guide.downloadable ? 'Download' : 'Read More'}
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                      {guide.readTime && (
                        <span className="text-sm text-gray-500">{guide.readTime}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Tools Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Interactive Tools</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful Tools for Contractors
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Save time and make informed decisions with our suite of construction insurance tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="h-10 w-10 text-primary-400" />
                      {tool.badge && (
                        <span className="text-xs px-2 py-1 bg-primary-600 text-white rounded-full">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                    <Link
                      href={tool.href}
                      className="text-primary-400 hover:text-primary-300 font-medium text-sm inline-flex items-center"
                    >
                      {tool.downloadable ? 'Download' : 'Use Tool'}
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 bg-slate-800 rounded-lg p-6 text-center">
              <LightBulbIcon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-300 mb-4">
                Need a custom tool or calculator for your specific needs?
              </p>
              <Link
                href="/contact"
                className="text-primary-400 hover:text-primary-300 font-medium"
              >
                Let us know →
              </Link>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Education Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Education Center</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Learn from the Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expand your knowledge with our educational content designed specifically for Bergen County construction professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start">
                      <Icon className="h-12 w-12 text-primary-600 mr-4 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <span className="text-sm text-gray-500 ml-2">{item.type}</span>
                        </div>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                          >
                            Start Learning
                            <ArrowRightIcon className="ml-1 h-4 w-4" />
                          </Link>
                          <span className="text-sm text-gray-500">{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Newsletter CTA */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="badge-light inline-block mb-4">Stay Updated</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Get New Resources Delivered Monthly
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 2,500+ Bergen County contractors who receive our monthly newsletter with new guides, tools, and industry updates.
            </p>
            
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe anytime. View our <Link href="/privacy" className="text-primary-400 hover:text-primary-300">privacy policy</Link>.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}