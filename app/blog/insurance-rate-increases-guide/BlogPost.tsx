'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  CalculatorIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function InsuranceRateIncreasesGuide() {
  const content = (
    <>
      <p className="lead text-xl text-gray-700 mb-8">
        Insurance rate increases have become a common concern for consumers and businesses alike. With premiums 
        rising across auto, home, and commercial lines, understanding why rates increase and how to manage these 
        costs has never been more important. This comprehensive guide will help you navigate rate increases 
        strategically.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
        <p className="font-semibold text-gray-900 mb-2">
          <ExclamationTriangleIcon className="h-6 w-6 inline mr-2 text-amber-600" />
          2024-2025 Rate Trends:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• Auto insurance: Average increase of 12-15% nationally</li>
          <li>• Homeowners insurance: Up 10-20% in many markets</li>
          <li>• Commercial property: Increases of 15-25% common</li>
          <li>• Umbrella policies: Rising 10-15% annually</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Why Are Insurance Rates Increasing?
      </h2>

      <p className="mb-6">
        Insurance rate increases aren't arbitrary. They're driven by real economic factors and industry trends 
        that affect insurers' ability to pay claims and remain solvent. Understanding these factors helps you 
        make informed decisions about your coverage.
      </p>

      <div className="space-y-8 mb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start">
            <ArrowTrendingUpIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Inflation and Rising Costs</h3>
              <p className="text-gray-700 mb-3">
                General inflation affects every aspect of insurance claims:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Construction materials up 20-30% since 2020</li>
                <li>• Auto parts and labor costs increased 15-25%</li>
                <li>• Medical costs rising 5-7% annually</li>
                <li>• Legal settlements growing larger each year</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Increased Natural Disasters</h3>
              <p className="text-gray-700 mb-3">
                Climate-related events are driving massive losses:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 2023: $92 billion in insured natural disaster losses</li>
                <li>• More frequent severe storms and flooding</li>
                <li>• Wildfire risks spreading to new areas</li>
                <li>• Hurricane intensity increasing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start">
            <ChartBarIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Social Inflation</h3>
              <p className="text-gray-700 mb-3">
                Legal system trends affecting claim costs:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Larger jury awards and settlements</li>
                <li>• Increased litigation frequency</li>
                <li>• Third-party litigation funding growth</li>
                <li>• Rising attorney involvement in claims</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start">
            <CurrencyDollarIcon className="h-8 w-8 text-red-600 flex-shrink-0" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Reinsurance Cost Increases</h3>
              <p className="text-gray-700 mb-3">
                Behind-the-scenes factors affecting your rates:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Reinsurance rates up 30-50% in some markets</li>
                <li>• Global catastrophe losses affecting all insurers</li>
                <li>• Investment returns declining</li>
                <li>• Capital requirements increasing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        How Rate Increases Affect Different Insurance Types
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-primary-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Auto Insurance</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Average increase: 12-15% in 2024</li>
            <li>• Key drivers: Parts costs, medical expenses</li>
            <li>• Most affected: Urban areas, young drivers</li>
            <li>• Mitigation: Usage-based programs, higher deductibles</li>
          </ul>
        </div>
        <div className="bg-primary-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Homeowners Insurance</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Average increase: 10-20% in 2024</li>
            <li>• Key drivers: Natural disasters, rebuilding costs</li>
            <li>• Most affected: Coastal and wildfire areas</li>
            <li>• Mitigation: Home improvements, bundling</li>
          </ul>
        </div>
        <div className="bg-primary-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Commercial Property</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Average increase: 15-25% in 2024</li>
            <li>• Key drivers: Replacement costs, cyber risks</li>
            <li>• Most affected: Older buildings, high-risk industries</li>
            <li>• Mitigation: Risk management, higher deductibles</li>
          </ul>
        </div>
        <div className="bg-primary-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Workers' Compensation</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Average increase: 5-10% in 2024</li>
            <li>• Key drivers: Medical costs, wage inflation</li>
            <li>• Most affected: High-risk trades</li>
            <li>• Mitigation: Safety programs, return-to-work</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        10 Strategies to Combat Rate Increases
      </h2>

      <div className="space-y-6 mb-12">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Shop Around Annually</h3>
            <p className="text-gray-700">Don\'t accept renewal increases without comparing. Independent agents can check multiple carriers to find better rates.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Increase Deductibles Strategically</h3>
            <p className="text-gray-700">Moving from a $500 to $1,000 deductible can save 10-25% on premiums. Keep the difference in savings.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Bundle Policies</h3>
            <p className="text-gray-700">Multi-policy discounts can save 15-25%. Combine auto, home, and umbrella with one carrier.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Improve Your Risk Profile</h3>
            <p className="text-gray-700">Install security systems, update roofs, maintain good credit, and complete defensive driving courses.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Review Coverage Limits</h3>
            <p className="text-gray-700">Ensure you\'re not over-insured. Adjust coverage for depreciation and actual replacement costs.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">6</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Ask About All Available Discounts</h3>
            <p className="text-gray-700">Many discounts go unclaimed: professional associations, alumni groups, safety features, loyalty programs.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">7</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Consider Usage-Based Programs</h3>
            <p className="text-gray-700">Telematics for auto insurance can save 10-30% for safe drivers. Pay-per-mile options for low-mileage drivers.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">8</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Maintain Continuous Coverage</h3>
            <p className="text-gray-700">Gaps in coverage lead to higher rates. Keep policies active even during financial hardship.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">9</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Work with an Independent Agent</h3>
            <p className="text-gray-700">They can access multiple markets and find creative solutions captive agents can\'t offer.</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">10</div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900 mb-1">Time Your Shopping Strategically</h3>
            <p className="text-gray-700">Start shopping 30-45 days before renewal. This gives time to compare and make changes.</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Red Flags: When NOT to Accept a Rate Increase
      </h2>

      <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
        <p className="font-semibold text-gray-900 mb-4">Consider switching carriers if:</p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3">Your rate increase exceeds 25% with no claims or changes</span>
          </li>
          <li className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3">You\'ve had multiple increases over 10% in consecutive years</span>
          </li>
          <li className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3">Your carrier reduces coverage while increasing rates</span>
          </li>
          <li className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3">Customer service has deteriorated significantly</span>
          </li>
          <li className="flex items-start">
            <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <span className="ml-3">Your agent can\'t explain the increase clearly</span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Creating Your Rate Increase Action Plan
      </h2>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">When You Receive a Renewal Notice:</h3>
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
            <div className="ml-3">
              <p className="font-semibold text-gray-900">Calculate the Percentage Increase</p>
              <p className="text-gray-600">Compare to last year\'s premium, not just the dollar amount</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            <div className="ml-3">
              <p className="font-semibold text-gray-900">Review Your Coverage Details</p>
              <p className="text-gray-600">Ensure coverage hasn\'t been reduced and limits are still appropriate</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
            <div className="ml-3">
              <p className="font-semibold text-gray-900">Contact Your Agent</p>
              <p className="text-gray-600">Ask for explanation and any available discounts or adjustments</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
            <div className="ml-3">
              <p className="font-semibold text-gray-900">Get Comparison Quotes</p>
              <p className="text-gray-600">Have an independent agent shop multiple carriers</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
            <div className="ml-3">
              <p className="font-semibold text-gray-900">Make an Informed Decision</p>
              <p className="text-gray-600">Consider coverage, service, and price – not just the premium</p>
            </div>
          </li>
        </ol>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        The Long-Term Outlook
      </h2>

      <p className="mb-6">
        While rate increases are challenging, understanding the factors behind them and taking proactive steps 
        can help you maintain affordable coverage. The insurance market is cyclical, and periods of increases 
        are often followed by stabilization.
      </p>

      <div className="bg-primary-50 border border-primary-200 rounded-lg p-8 mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Take Control of Your Insurance Costs</h3>
        <p className="text-gray-700 mb-6">
          Don\'t let rate increases catch you off guard. Work with an independent agent who can help you 
          navigate the changing insurance landscape and find the best coverage at competitive rates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={EXTERNAL_URLS.QUOTE_FORM}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
          >
            Get Competitive Quotes
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Schedule Rate Review
          </Link>
        </div>
      </div>
    </>
  );

  const relatedPosts = [
    {
      title: 'The Essential Role of Independent Insurance Agents',
      excerpt: 'How independent agents help you navigate rate increases better.',
      href: '/blog/independent-insurance-agents-guide'
    },
    {
      title: 'Why Coverage Matters More Than Price',
      excerpt: 'Don\'t sacrifice protection to save on premiums.',
      href: '/blog/coverage-over-price-guide'
    },
    {
      title: 'Understanding Your Insurance Policy',
      excerpt: 'Key terms and coverage details every policyholder should know.',
      href: '/blog/understanding-insurance-policies'
    }
  ];

  return (
    <BlogPostTemplate
      title="Navigating Insurance Rate Increases: A Comprehensive Guide"
      date="January 31, 2025"
      readTime="10 min read"
      category="Insurance Tips"
      excerpt="Understanding why insurance rates are rising and proven strategies to minimize the impact on your budget. Learn how to combat increases while maintaining proper coverage."
      content={content}
      relatedPosts={relatedPosts}
    />
  );
}