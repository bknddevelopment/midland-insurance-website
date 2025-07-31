'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
  ChartBarIcon,
  HomeIcon,
  TruckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function CoverageOverPriceGuide() {
  const content = (
    <>
      <p className="lead text-xl text-gray-700 mb-8">
        In the quest to save money on insurance premiums, many people make a critical mistake: choosing policies 
        based solely on price. While everyone wants affordable coverage, prioritizing cost over protection can 
        lead to devastating financial consequences when you need your insurance most. This guide reveals why 
        proper coverage should always be your primary consideration.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
        <p className="font-semibold text-gray-900 mb-2">
          <ExclamationTriangleIcon className="h-6 w-6 inline mr-2 text-red-600" />
          The Hidden Cost of Cheap Insurance:
        </p>
        <p className="text-gray-700">
          A family saved $400/year by choosing minimum coverage. A kitchen fire caused $180,000 in damage. 
          Their policy limit: $100,000. They paid $80,000 out of pocket – 200 years worth of "savings."
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        The True Cost of Inadequate Coverage
      </h2>

      <p className="mb-6">
        When disaster strikes, the difference between adequate and inadequate coverage isn't measured in 
        premium dollars – it's measured in financial survival. Here are real scenarios where choosing 
        cheaper coverage led to financial catastrophe:
      </p>

      <div className="space-y-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start">
            <HomeIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Homeowners Insurance Disaster</h3>
              <p className="text-gray-700 mb-3">
                <strong>The Savings:</strong> $300/year by choosing actual cash value over replacement cost
              </p>
              <p className="text-gray-700 mb-3">
                <strong>The Loss:</strong> House destroyed by fire. Replacement cost: $400,000
              </p>
              <p className="text-gray-700">
                <strong>The Reality:</strong> Insurance paid $250,000 (depreciated value). Family needed 
                $150,000 loan to rebuild their home.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start">
            <TruckIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto Insurance Nightmare</h3>
              <p className="text-gray-700 mb-3">
                <strong>The Savings:</strong> $500/year with state minimum liability limits
              </p>
              <p className="text-gray-700 mb-3">
                <strong>The Accident:</strong> At-fault in multi-car accident. Total damages: $750,000
              </p>
              <p className="text-gray-700">
                <strong>The Reality:</strong> Policy covered $50,000. Personal assets seized, wages 
                garnished for 10 years to pay judgment.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start">
            <UserGroupIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Insurance Catastrophe</h3>
              <p className="text-gray-700 mb-3">
                <strong>The Savings:</strong> $2,000/year with basic general liability only
              </p>
              <p className="text-gray-700 mb-3">
                <strong>The Claim:</strong> Customer data breach affected 5,000 clients
              </p>
              <p className="text-gray-700">
                <strong>The Reality:</strong> No cyber coverage. Business paid $500,000 in notifications, 
                credit monitoring, and lawsuits. Company declared bankruptcy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Common Coverage Gaps That Cost Millions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Homeowners Insurance Gaps</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">Underinsured dwelling coverage</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">No flood or earthquake coverage</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">Inadequate personal property limits</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">Missing additional living expenses</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Auto Insurance Gaps</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">State minimum liability limits</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">No uninsured motorist coverage</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">Skipping comprehensive/collision</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">No rental car reimbursement</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Business Insurance Gaps</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">No professional liability</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">Missing cyber liability</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">Inadequate business interruption</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">No employment practices liability</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Personal Liability Gaps</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">No umbrella policy</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">Low liability limits</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">Missing worldwide coverage</span>
            </li>
            <li className="flex items-start">
              <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="ml-2 text-gray-700">No defense cost coverage</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        The Smart Way to Evaluate Insurance Value
      </h2>

      <p className="mb-6">
        True insurance value isn't about finding the cheapest premium – it's about getting the right protection 
        at a fair price. Here's how to properly evaluate insurance options:
      </p>

      <div className="space-y-6 mb-12">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Start with Coverage, Not Price</h3>
            <p className="text-gray-700">Determine what coverage you need first. Only then should you consider cost. Never reduce essential coverage just to save money.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Understand Your Real Risks</h3>
            <p className="text-gray-700">Work with an agent to identify your actual exposure. Most people underestimate their liability risks by 300-500%.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Calculate Total Financial Impact</h3>
            <p className="text-gray-700">Consider deductibles, coverage limits, and exclusions. A policy with a $100 lower premium but $5,000 higher deductible isn't really cheaper.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Factor in Carrier Strength</h3>
            <p className="text-gray-700">A cheap policy from a weak insurer is worthless. Check AM Best ratings and claims payment history.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Consider Claims Service</h3>
            <p className="text-gray-700">The cheapest policy means nothing if claims are denied or delayed. Research carrier reputation and claims satisfaction.</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Coverage vs. Price: Making the Right Choice
      </h2>

      <div className="overflow-x-auto mb-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Insurance Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Minimum Coverage (Risky)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Recommended Coverage
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Why It Matters
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Auto Liability
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                State minimums ($25K-50K)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $250K/$500K minimum
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Average injury claim exceeds $100K
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Homeowners Dwelling
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Actual cash value
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Replacement cost + 20%
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Building costs rise faster than inflation
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Business Liability
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $1M occurrence
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $2M+ with umbrella
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Average lawsuit exceeds $1M
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Umbrella Policy
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                None
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $1-5M based on assets
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Protects life savings for $150-300/year
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        How to Get Better Coverage Without Breaking the Bank
      </h2>

      <div className="bg-primary-50 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Strategies for Affordable Protection:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
              Bundle Policies
            </h4>
            <p className="text-gray-700">Save 15-25% while simplifying coverage management</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
              Increase Deductibles Wisely
            </h4>
            <p className="text-gray-700">Higher deductibles you can afford reduce premiums significantly</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
              Work with Independent Agents
            </h4>
            <p className="text-gray-700">Access to multiple carriers ensures competitive pricing</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
              Maintain Good Credit
            </h4>
            <p className="text-gray-700">Better credit scores can reduce premiums by 20-50%</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
              Review Coverage Annually
            </h4>
            <p className="text-gray-700">Ensure you're not over or under-insured as needs change</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600 inline mr-2" />
              Take All Discounts
            </h4>
            <p className="text-gray-700">Many available discounts go unclaimed</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        The Bottom Line: Protection First, Price Second
      </h2>

      <p className="mb-6">
        Insurance is not a commodity where the cheapest option wins. It's a critical financial tool that 
        protects everything you've worked for. When evaluating insurance:
      </p>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <ul className="space-y-4">
          <li className="flex items-start">
            <ScaleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3 text-gray-700">
              <strong>Think Long-Term:</strong> Saving $500/year means nothing if you face a $100,000 uncovered loss
            </span>
          </li>
          <li className="flex items-start">
            <ShieldCheckIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3 text-gray-700">
              <strong>Buy Peace of Mind:</strong> Proper coverage lets you sleep at night knowing you're protected
            </span>
          </li>
          <li className="flex items-start">
            <ChartBarIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3 text-gray-700">
              <strong>Consider Total Value:</strong> Factor in coverage, service, claims handling, and financial strength
            </span>
          </li>
          <li className="flex items-start">
            <LightBulbIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3 text-gray-700">
              <strong>Get Expert Advice:</strong> Work with professionals who prioritize your protection over their commission
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Coverage That Actually Protects You</h3>
        <p className="text-gray-700 mb-6">
          Don't gamble with inadequate coverage. Let our experienced team analyze your risks and design 
          a protection plan that provides real security at a fair price. We'll show you how to get 
          comprehensive coverage without overpaying.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={EXTERNAL_URLS.QUOTE_FORM}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
          >
            Get Proper Coverage Quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Schedule Coverage Review
          </Link>
        </div>
      </div>
    </>
  );

  const relatedPosts = [
    {
      title: 'The Essential Role of Independent Insurance Agents',
      excerpt: 'Why independent agents help you find better coverage at fair prices.',
      href: '/blog/independent-insurance-agents-guide'
    },
    {
      title: 'Navigating Insurance Rate Increases',
      excerpt: 'How to manage rising costs without sacrificing protection.',
      href: '/blog/insurance-rate-increases-guide'
    },
    {
      title: '10 Insurance Mistakes That Could Bankrupt You',
      excerpt: 'Common coverage gaps that lead to financial disaster.',
      href: '/blog/insurance-mistakes-to-avoid'
    }
  ];

  return (
    <BlogPostTemplate
      title="Prioritizing Coverage Over Price: Why Cheap Insurance Can Cost You Everything"
      date="January 31, 2025"
      readTime="9 min read"
      category="Insurance Tips"
      excerpt="Learn why choosing insurance based on price alone is a dangerous mistake. Discover how to get proper coverage that actually protects you without overpaying."
      content={content}
      relatedPosts={relatedPosts}
    />
  );
}