'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ChartBarIcon,
  UserGroupIcon,
  HomeIcon,
  TruckIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

const featuredTips = [
  {
    title: 'The Essential Role of Independent Insurance Agents',
    description: 'Discover why independent agents provide better coverage options and pricing than captive agents.',
    icon: UserGroupIcon,
    href: '/blog/independent-insurance-agents-guide',
    category: 'Agent Selection',
    readTime: '8 min'
  },
  {
    title: 'Navigating Insurance Rate Increases',
    description: 'Learn why rates are rising and 10 strategies to minimize the impact on your budget.',
    icon: ChartBarIcon,
    href: '/blog/insurance-rate-increases-guide',
    category: 'Cost Management',
    readTime: '10 min'
  },
  {
    title: 'Why Coverage Matters More Than Price',
    description: 'The hidden dangers of choosing insurance based on price alone and how to evaluate properly.',
    icon: ShieldCheckIcon,
    href: '/blog/coverage-over-price-guide',
    category: 'Coverage Tips',
    readTime: '9 min'
  }
];

const tipCategories = [
  {
    name: 'Home Insurance Tips',
    icon: HomeIcon,
    tips: [
      {
        title: 'Annual Home Insurance Review Checklist',
        description: 'What to check every year to ensure adequate coverage',
        href: '/blog/home-insurance-review-checklist'
      },
      {
        title: 'Understanding Replacement Cost vs. Actual Cash Value',
        description: 'Why this choice can make or break your claim',
        href: '/blog/replacement-cost-vs-actual-cash-value'
      },
      {
        title: 'Home Improvements That Lower Insurance Costs',
        description: 'Upgrades that reduce premiums and improve protection',
        href: '/blog/home-improvements-insurance-savings'
      }
    ]
  },
  {
    name: 'Auto Insurance Tips',
    icon: TruckIcon,
    tips: [
      {
        title: 'Beyond State Minimums: Right Auto Coverage Limits',
        description: 'How much liability coverage you really need',
        href: '/blog/auto-insurance-coverage-limits'
      },
      {
        title: 'Teen Driver Insurance: Cost-Saving Strategies',
        description: 'How to add young drivers without breaking the bank',
        href: '/blog/teen-driver-insurance-tips'
      },
      {
        title: 'Understanding Uninsured Motorist Coverage',
        description: 'Why this coverage is more important than ever',
        href: '/blog/uninsured-motorist-coverage-guide'
      }
    ]
  },
  {
    name: 'Business Insurance Tips',
    icon: BuildingOfficeIcon,
    tips: [
      {
        title: 'Small Business Insurance Essentials',
        description: 'Coverage every business owner needs from day one',
        href: '/blog/small-business-insurance-essentials'
      },
      {
        title: 'Cyber Liability: The Coverage You Can\'t Ignore',
        description: 'Protecting your business from digital threats',
        href: '/blog/cyber-liability-insurance-guide'
      },
      {
        title: 'Workers Comp Cost Reduction Strategies',
        description: 'Legal ways to lower your workers compensation premiums',
        href: '/blog/workers-comp-cost-reduction'
      }
    ]
  },
  {
    name: 'General Insurance Tips',
    icon: LightBulbIcon,
    tips: [
      {
        title: 'Insurance Terms Everyone Should Know',
        description: 'Decode insurance jargon and understand your policies',
        href: '/blog/insurance-terms-glossary'
      },
      {
        title: 'How to Document Property for Insurance',
        description: 'Proper documentation speeds claims and ensures payment',
        href: '/blog/property-documentation-guide'
      },
      {
        title: 'When to File a Claim vs. Pay Out of Pocket',
        description: 'Making smart decisions about insurance claims',
        href: '/blog/when-to-file-insurance-claim'
      }
    ]
  }
];

const quickTips = [
  {
    icon: CheckCircleIcon,
    tip: 'Review your insurance policies annually to ensure coverage keeps pace with your life changes'
  },
  {
    icon: CurrencyDollarIcon,
    tip: 'Bundle multiple policies with one carrier to save 15-25% on premiums'
  },
  {
    icon: DocumentTextIcon,
    tip: 'Keep digital copies of all insurance documents in a secure cloud storage'
  },
  {
    icon: ExclamationTriangleIcon,
    tip: 'Never let coverage lapse - even one day without insurance can cost you'
  }
];

export default function InsuranceTipsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Insurance Tips & Resources"
        subtitle="Expert Guidance for Smart Coverage Decisions"
        description="Free insurance tips, guides, and resources to help you protect what matters most. Learn from Bergen County's trusted insurance experts."
        primaryButton={{
          text: 'Get Personalized Advice',
          href: EXTERNAL_URLS.QUOTE_FORM
        }}
        secondaryButton={{
          text: 'Browse All Tips',
          href: '#categories'
        }}
        backgroundImage="/photos/tips-hero.jpg"
      />

      <Divider type="dark-to-white" />

      {/* Featured Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Featured Guides</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Most Popular Insurance Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with these comprehensive guides covering the most important insurance topics for consumers and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href={tip.href} className="block p-8">
                  <div className="flex items-center justify-between mb-4">
                    <tip.icon className="h-12 w-12 text-primary-600" />
                    <span className="text-sm text-gray-500">{tip.readTime} read</span>
                  </div>
                  <div className="badge-light inline-block mb-3">{tip.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tip.description}
                  </p>
                  <span className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                    Read Guide
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="white-to-gray" />

      {/* Quick Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Insurance Tips
            </h2>
            <p className="text-lg text-gray-600">
              Essential advice you can implement today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center"
              >
                <tip.icon className="h-10 w-10 text-primary-600 mx-auto mb-4" />
                <p className="text-gray-700">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="gray-to-white" />

      {/* Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Browse by Topic</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Insurance Tips by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find specific tips and guides organized by insurance type. Click any topic to learn more.
            </p>
          </div>

          <div className="space-y-12">
            {tipCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="h-10 w-10 text-primary-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.tips.map((tip, tipIndex) => (
                    <Link
                      key={tipIndex}
                      href={tip.href}
                      className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow group"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {tip.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {tip.description}
                      </p>
                      <span className="inline-flex items-center text-primary-600 text-sm mt-3">
                        Read More
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="white-to-gray" />

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-light inline-block mb-4">Free Resources</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Insurance Tools & Calculators
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our free tools to make informed insurance decisions. From coverage calculators to 
                claim checklists, we provide resources that simplify insurance planning.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/tools/premium-calculator"
                  className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <CalculatorIcon className="h-8 w-8 text-primary-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                      Premium Calculator
                    </h3>
                    <p className="text-sm text-gray-600">Estimate your insurance costs</p>
                  </div>
                </Link>
                
                <Link
                  href="/tools/coverage-checklist"
                  className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <DocumentTextIcon className="h-8 w-8 text-primary-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                      Coverage Checklist
                    </h3>
                    <p className="text-sm text-gray-600">Ensure you have proper protection</p>
                  </div>
                </Link>
                
                <Link
                  href="/resources/construction-insurance-guide"
                  className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <BookOpenIcon className="h-8 w-8 text-primary-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                      Construction Insurance Guide
                    </h3>
                    <p className="text-sm text-gray-600">Complete guide for contractors</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Personalized Tips</h3>
              <p className="text-gray-700 mb-6">
                Every insurance situation is unique. Our experienced agents can provide personalized 
                tips and recommendations based on your specific needs and circumstances.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Free coverage review and gap analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customized cost-saving strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Risk management recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Claims preparation guidance</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Schedule Free Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Divider type="gray-to-dark" />

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed with Insurance Tips
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get monthly insurance tips, industry updates, and money-saving strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={EXTERNAL_URLS.QUOTE_FORM}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
            >
              Get Insurance Tips
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}