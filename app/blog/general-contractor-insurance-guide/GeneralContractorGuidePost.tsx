'use client';

import React from 'react';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function GeneralContractorGuidePost() {
  const content = (
    <>
      <p className="lead text-xl text-gray-700 mb-8">
        As a <Link href="/trades/general-contractors" className="text-primary-600">general contractor</Link> in Bergen County, you face unique insurance challenges. From managing subcontractors to meeting municipal requirements, this comprehensive guide covers everything you need to protect your business and win more contracts.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Why General Contractors Need Specialized Insurance
      </h2>

      <p>
        General contractors coordinate entire projects, making them liable for:
      </p>

      <ul className="list-disc ml-8 space-y-2 mb-8">
        <li>Subcontractor mistakes and accidents</li>
        <li>Project delays and defects</li>
        <li>Worksite injuries to any worker</li>
        <li>Property damage during construction</li>
        <li>Design errors (if providing design-build services)</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
        <div className="flex">
          <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Bergen County Reality Check</h4>
            <p className="text-gray-700">
              In Bergen County's high-value market, a single claim can exceed $1 million. Standard insurance minimums won't protect you from catastrophic losses.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Essential Coverage Types for GCs
      </h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        1. General Liability Insurance
      </h3>

      <p>
        <Link href="/business/construction/general-liability" className="text-primary-600">General liability</Link> is your first line of defense:
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-gray-900 mb-3">Recommended Limits:</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
            <span><strong>Small Projects:</strong> $1M/$2M minimum</span>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
            <span><strong>Commercial Work:</strong> $2M/$4M standard</span>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
            <span><strong>Public Projects:</strong> $5M+ often required</span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        2. Subcontractor Management
      </h3>

      <p>
        Your biggest risk often comes from subcontractors:
      </p>

      <div className="bg-primary-50 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-gray-900 mb-3">
          <ShieldCheckIcon className="h-6 w-6 text-primary-600 inline mr-2" />
          Subcontractor Insurance Requirements
        </h4>
        <ul className="list-disc ml-8 space-y-2 text-gray-700">
          <li>Require certificates before work starts</li>
          <li>Verify additional insured status</li>
          <li>Confirm coverage matches their work scope</li>
          <li>Get waiver of subrogation</li>
          <li>Consider subcontractor default insurance for large projects</li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        3. Builder's Risk Coverage
      </h3>

      <p>
        <Link href="/business/construction/builders-risk" className="text-primary-600">Builder's risk</Link> protects projects under construction. As a GC, you typically need to secure this coverage.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Cost Factors for GC Insurance
      </h2>

      <div className="bg-white border rounded-lg p-6 mb-8">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Factor</th>
              <th className="text-left py-2">Impact on Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Annual Revenue</td>
              <td className="py-2">1-3% typical for GL</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Project Types</td>
              <td className="py-2">Residential lower than commercial</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Subcontractor Usage</td>
              <td className="py-2">More subs = higher premium</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Claims History</td>
              <td className="py-2">Can increase 25-50%</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Safety Programs</td>
              <td className="py-2">Can reduce 5-15%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Bergen County Specific Considerations
      </h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Municipal Requirements
      </h3>

      <ul className="list-disc ml-8 space-y-2 mb-8">
        <li><strong><Link href="/locations/hackensack" className="text-primary-600">Hackensack</Link>:</strong> $2M GL minimum for commercial permits</li>
        <li><strong><Link href="/locations/fort-lee" className="text-primary-600">Fort Lee</Link>:</strong> High-rise work requires $5M+ and umbrella</li>
        <li><strong><Link href="/locations/paramus" className="text-primary-600">Paramus</Link>:</strong> Mall work needs specific additional insureds</li>
        <li><strong><Link href="/locations/ridgewood" className="text-primary-600">Ridgewood</Link>:</strong> Historic work may need specialty coverage</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Common Contract Requirements
      </h3>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-4">
          Bergen County contracts typically require:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <DocumentTextIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Additional insured endorsements (CG 20 10 and CG 20 37)</span>
          </li>
          <li className="flex items-start">
            <DocumentTextIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Waiver of subrogation on all policies</span>
          </li>
          <li className="flex items-start">
            <DocumentTextIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Primary and non-contributory language</span>
          </li>
          <li className="flex items-start">
            <DocumentTextIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>30-day notice of cancellation</span>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Money-Saving Strategies for GCs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">
            <CurrencyDollarIcon className="h-6 w-6 text-green-600 inline mr-2" />
            Premium Reducers
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Implement written safety programs</li>
            <li>• Require subs to name you as AI</li>
            <li>• Higher deductibles ($2,500+)</li>
            <li>• Annual policy reviews</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">
            <ScaleIcon className="h-6 w-6 text-blue-600 inline mr-2" />
            Risk Management
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Pre-qualify all subcontractors</li>
            <li>• Use written contracts always</li>
            <li>• Document everything with photos</li>
            <li>• Regular jobsite inspections</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Action Steps for GCs
      </h2>

      <div className="bg-primary-50 rounded-lg p-8 my-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Insurance Checklist</h3>
        
        <ol className="space-y-4">
          <li className="flex items-start">
            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
            <div>
              <h4 className="font-semibold text-gray-900">Review Current Coverage</h4>
              <p className="text-gray-700">Ensure limits meet your largest contract requirements</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
            <div>
              <h4 className="font-semibold text-gray-900">Audit Subcontractors</h4>
              <p className="text-gray-700">Verify all subs have proper insurance</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
            <div>
              <h4 className="font-semibold text-gray-900">Implement Safety Programs</h4>
              <p className="text-gray-700">Document toolbox talks and training</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
            <div>
              <h4 className="font-semibold text-gray-900">Get Competitive Quotes</h4>
              <p className="text-gray-700">Shop coverage annually for best rates</p>
            </div>
          </li>
        </ol>
      </div>

      <p className="text-lg text-gray-700 mt-8">
        For more detailed information on construction insurance, check out our comprehensive <Link href="/resources/construction-insurance-guide" className="text-primary-600">Construction Insurance Guide</Link>.
      </p>
    </>
  );

  const relatedPosts = [
    {
      title: 'Spring Construction Season: Insurance Preparation',
      excerpt: 'Get your construction business ready for the busy spring season.',
      href: '/blog/spring-construction-insurance-prep',
    },
    {
      title: 'Understanding NJ Construction Insurance Requirements',
      excerpt: 'Navigate New Jersey\'s complex insurance requirements.',
      href: '/blog/nj-construction-insurance-requirements',
    },
    {
      title: 'Bergen County Construction Boom',
      excerpt: 'Major projects creating opportunities for contractors.',
      href: '/blog/bergen-county-construction-boom',
    },
  ];

  return (
    <BlogPostTemplate
      title="The Complete Guide to General Contractor Insurance in NJ"
      date="March 10, 2024"
      readTime="8 min read"
      category="Trade Spotlight"
      excerpt="Everything general contractors need to know about insurance requirements, coverage options, and cost-saving strategies specific to New Jersey."
      content={content}
      relatedPosts={relatedPosts}
    />
  );
}