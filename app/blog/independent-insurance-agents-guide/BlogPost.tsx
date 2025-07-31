'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  BuildingOfficeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  HandRaisedIcon,
  ScaleIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function IndependentInsuranceAgentsGuide() {
  const content = (
    <>
      <p className="lead text-xl text-gray-700 mb-8">
        In today's complex insurance marketplace, choosing between an independent insurance agent and a captive agent 
        can significantly impact your coverage options, pricing, and overall experience. This comprehensive guide 
        explores why independent agents have become the preferred choice for savvy insurance buyers.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        What is an Independent Insurance Agent?
      </h2>

      <p className="mb-6">
        An independent insurance agent is a licensed professional who represents multiple insurance companies rather 
        than being tied to a single carrier. Unlike captive agents who can only sell products from one company 
        (like State Farm or Allstate agents), independent agents have the freedom to shop among dozens of insurers 
        to find the best coverage and rates for their clients.
      </p>

      <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8">
        <p className="font-semibold text-gray-900 mb-2">Key Distinction:</p>
        <p className="text-gray-700">
          Independent agents work FOR you, not for an insurance company. Their loyalty is to their clients, 
          not to meeting sales quotas for a particular insurer.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        The Top Benefits of Working with Independent Agents
      </h2>

      <div className="space-y-8 mb-12">
        <div className="flex items-start">
          <ChartBarIcon className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Access to Multiple Carriers</h3>
            <p className="text-gray-700">
              The average independent agent represents 8-12 insurance companies. This means they can compare 
              coverage and pricing across multiple carriers instantly, ensuring you get the best combination 
              of protection and value. At Midland Associates, we work with over 20 top-rated carriers.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <CurrencyDollarIcon className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Better Pricing Through Competition</h3>
            <p className="text-gray-700">
              When insurance companies compete for your business, you win. Independent agents create a 
              competitive marketplace where insurers must offer their best rates to earn your business. 
              Studies show that customers save an average of 17% when switching from captive to independent agents.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <ShieldCheckIcon className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Unbiased Advice and Recommendations</h3>
            <p className="text-gray-700">
              Independent agents aren't pressured to sell specific products or meet company quotas. They can 
              provide honest, objective advice about which coverages you actually need and which carriers 
              offer the best value for your specific situation.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <UserGroupIcon className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Personal Advocate During Claims</h3>
            <p className="text-gray-700">
              When you have a claim, your independent agent works as your advocate with the insurance company. 
              They know the claims process inside and out and will fight to ensure you receive fair treatment 
              and full compensation. You're not just another policy number.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <HandRaisedIcon className="h-8 w-8 text-primary-600 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5. One-Stop Shopping Convenience</h3>
            <p className="text-gray-700">
              Need auto, home, business, and life insurance? An independent agent can handle all your insurance 
              needs in one place. You'll have one trusted advisor for all your coverage, making management and 
              claims much simpler.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Independent vs. Captive Agents: A Direct Comparison
      </h2>

      <div className="overflow-x-auto mb-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Independent Agent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Captive Agent
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Number of Carriers
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
                Multiple (8-20+)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 inline mr-2" />
                One
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Price Comparison
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
                Can compare rates
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 inline mr-2" />
                Single rate only
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Coverage Options
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
                Wide variety
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 inline mr-2" />
                Limited options
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Claims Advocacy
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
                Works for you
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 inline mr-2" />
                Works for company
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Policy Flexibility
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
                Can switch carriers
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600 inline mr-2" />
                Must change agents
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        How Independent Agents Save You Money
      </h2>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-World Savings Examples:</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CurrencyDollarIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="font-semibold text-gray-900">Auto Insurance: Average savings of $487/year</p>
              <p className="text-gray-600">By comparing 10 carriers for a family with two cars and two drivers</p>
            </div>
          </li>
          <li className="flex items-start">
            <CurrencyDollarIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="font-semibold text-gray-900">Homeowners Insurance: Average savings of $324/year</p>
              <p className="text-gray-600">Through better coverage mapping and multi-policy discounts</p>
            </div>
          </li>
          <li className="flex items-start">
            <CurrencyDollarIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="font-semibold text-gray-900">Business Insurance: Average savings of $2,100/year</p>
              <p className="text-gray-600">By packaging coverages and finding industry-specific carriers</p>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        When You Need an Independent Agent Most
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-primary-50 rounded-lg p-6">
          <BuildingOfficeIcon className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Complex Insurance Needs</h3>
          <p className="text-gray-700">Business owners, contractors, and those with multiple properties benefit most from an agent who can coordinate coverage across different carriers.</p>
        </div>
        <div className="bg-primary-50 rounded-lg p-6">
          <ExclamationTriangleIcon className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">High-Risk Situations</h3>
          <p className="text-gray-700">If you've had claims, violations, or other issues, independent agents can find carriers that specialize in higher-risk clients.</p>
        </div>
        <div className="bg-primary-50 rounded-lg p-6">
          <ScaleIcon className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Claims History</h3>
          <p className="text-gray-700">When you've had claims with your current carrier, an independent agent can help you find a new company without starting from scratch.</p>
        </div>
        <div className="bg-primary-50 rounded-lg p-6">
          <LightBulbIcon className="h-8 w-8 text-primary-600 mb-3" />
          <h3 className="font-semibold text-gray-900 mb-2">Unique Coverage Needs</h3>
          <p className="text-gray-700">Classic cars, high-value homes, specific business risks - independent agents know which carriers specialize in unique situations.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Questions to Ask Your Independent Agent
      </h2>

      <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
        <p className="mb-6">When meeting with an independent agent, ask these key questions:</p>
        <ol className="space-y-3">
          <li className="flex items-start">
            <span className="font-bold text-primary-600 mr-3">1.</span>
            <span>How many insurance carriers do you represent?</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-primary-600 mr-3">2.</span>
            <span>Which carriers do you recommend most for my situation and why?</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-primary-600 mr-3">3.</span>
            <span>How do you handle claims advocacy?</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-primary-600 mr-3">4.</span>
            <span>Can you provide references from similar clients?</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-primary-600 mr-3">5.</span>
            <span>How often do you review and re-shop policies?</span>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-primary-600 mr-3">6.</span>
            <span>What additional services do you provide beyond selling policies?</span>
          </li>
        </ol>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        The Midland Associates Difference
      </h2>

      <p className="mb-6">
        As Bergen County's leading independent insurance agency since 1990, Midland Associates exemplifies 
        the benefits of working with an independent agent. Here's what sets us apart:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="flex items-start">
          <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <p className="font-semibold text-gray-900">20+ Insurance Carriers</p>
            <p className="text-gray-600">More options mean better coverage and pricing</p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <p className="font-semibold text-gray-900">Local Expertise</p>
            <p className="text-gray-600">We understand New Jersey's unique insurance requirements</p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <p className="font-semibold text-gray-900">Claims Advocacy</p>
            <p className="text-gray-600">98% claims satisfaction rate</p>
          </div>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <p className="font-semibold text-gray-900">Annual Reviews</p>
            <p className="text-gray-600">We proactively review your coverage every year</p>
          </div>
        </div>
      </div>

      <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Independent Advantage?</h3>
        <p className="text-gray-700 mb-6">
          Join thousands of satisfied clients who've discovered the benefits of working with an independent 
          insurance agent. Let us show you how much you could save while getting better coverage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={EXTERNAL_URLS.QUOTE_FORM}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
          >
            Get Your Free Quote
          </Link>
          <Link
            href="/about/independent"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </>
  );

  const relatedPosts = [
    {
      title: 'How to Navigate Insurance Rate Increases',
      excerpt: 'Understanding why rates increase and strategies to minimize the impact.',
      href: '/blog/insurance-rate-increases-guide'
    },
    {
      title: 'Why Coverage Matters More Than Price',
      excerpt: 'The hidden costs of choosing insurance based on price alone.',
      href: '/blog/coverage-over-price-guide'
    },
    {
      title: '5 Questions to Ask Your Insurance Agent',
      excerpt: 'Essential questions that could save you thousands on insurance.',
      href: '/blog/questions-for-insurance-agent'
    }
  ];

  return (
    <BlogPostTemplate
      title="The Essential Role of Independent Insurance Agents"
      date="January 31, 2025"
      readTime="8 min read"
      category="Insurance Tips"
      excerpt="Discover why independent insurance agents provide better coverage options, pricing, and service compared to captive agents. Learn how to choose the right agent for your needs."
      content={content}
      relatedPosts={relatedPosts}
    />
  );
}