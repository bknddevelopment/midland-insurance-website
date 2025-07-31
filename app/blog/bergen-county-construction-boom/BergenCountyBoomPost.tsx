'use client';

import React from 'react';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import {
  BuildingOfficeIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  HomeModernIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function BergenCountyBoomPost() {
  const content = (
    <>
      <p className="lead text-xl text-gray-700 mb-8">
        Bergen County is experiencing unprecedented construction growth in 2024. From <Link href="/locations/fort-lee" className="text-primary-600">Fort Lee's</Link> luxury high-rises to <Link href="/locations/hackensack" className="text-primary-600">Hackensack's</Link> medical expansions, major projects are reshaping our region and creating significant opportunities for local contractors.
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        The Numbers Behind the Boom
      </h2>

      <div className="bg-primary-50 rounded-lg p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <CurrencyDollarIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900">$3.2B</p>
            <p className="text-gray-700">Total Construction Value</p>
          </div>
          <div>
            <BuildingOfficeIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900">47</p>
            <p className="text-gray-700">Major Projects Active</p>
          </div>
          <div>
            <ChartBarIcon className="h-12 w-12 text-primary-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900">22%</p>
            <p className="text-gray-700">Year-over-Year Growth</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Major Projects Transforming Bergen County
      </h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Fort Lee: The High-Rise Capital
      </h3>

      <p>
        <Link href="/locations/fort-lee" className="text-primary-600">Fort Lee</Link> continues its transformation with multiple luxury residential towers:
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-gray-900 mb-3">
          <HomeModernIcon className="h-6 w-6 text-primary-600 inline mr-2" />
          Active Fort Lee Projects
        </h4>
        <ul className="space-y-3">
          <li className="border-l-4 border-primary-600 pl-4">
            <strong>Modern Fort Lee:</strong> 47-story luxury tower, $300M investment
            <br />
            <span className="text-sm text-gray-600">Insurance Requirements: $10M GL, $5M umbrella</span>
          </li>
          <li className="border-l-4 border-primary-600 pl-4">
            <strong>Hudson Lights Phase III:</strong> Twin towers, 800 units total
            <br />
            <span className="text-sm text-gray-600">Insurance Requirements: Wrap-up policy, $25M aggregate</span>
          </li>
          <li className="border-l-4 border-primary-600 pl-4">
            <strong>The Pinnacle:</strong> Mixed-use development with retail
            <br />
            <span className="text-sm text-gray-600">Insurance Requirements: Professional liability for design-build</span>
          </li>
        </ul>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Hackensack: Medical and Downtown Expansion
      </h3>

      <p>
        <Link href="/locations/hackensack" className="text-primary-600">Hackensack</Link> is seeing major investment in healthcare and urban renewal:
      </p>

      <ul className="list-disc ml-8 space-y-2 mb-8">
        <li><strong>Hackensack Meridian Health:</strong> $715M campus modernization</li>
        <li><strong>Downtown Rehabilitation Zone:</strong> Multiple mixed-use projects</li>
        <li><strong>Main Street Corridor:</strong> 500+ residential units in development</li>
        <li><strong>Transit Village:</strong> TOD near NJ Transit station</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Paramus: Retail Evolution
      </h3>

      <p>
        <Link href="/locations/paramus" className="text-primary-600">Paramus</Link> is reimagining retail with major renovations:
      </p>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <ul className="space-y-3">
          <li className="flex items-start">
            <MapPinIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Garden State Plaza:</strong> $150M renovation and expansion
              <br />
              <span className="text-sm text-gray-600">Focus: Experiential retail and dining</span>
            </div>
          </li>
          <li className="flex items-start">
            <MapPinIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Paramus Park:</strong> Redevelopment into mixed-use
              <br />
              <span className="text-sm text-gray-600">Adding residential and office components</span>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Opportunities for Local Contractors
      </h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        High-Demand Trades
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Immediate Needs</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• <Link href="/trades/electricians" className="text-primary-600">Electricians</Link> for high-rise work</li>
            <li>• <Link href="/trades/plumbers" className="text-primary-600">Plumbers</Link> for luxury units</li>
            <li>• <Link href="/trades/hvac-contractors" className="text-primary-600">HVAC contractors</Link> for smart buildings</li>
            <li>• <Link href="/trades/drywall-contractors" className="text-primary-600">Drywall contractors</Link> for interiors</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Growing Demand</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• Fire protection specialists</li>
            <li>• Smart home installers</li>
            <li>• Green building experts</li>
            <li>• Facade specialists</li>
          </ul>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Insurance Requirements for Major Projects
      </h3>

      <p>
        These large-scale projects come with significant insurance requirements:
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Project Type</th>
              <th className="text-left py-2">Typical GL Requirement</th>
              <th className="text-left py-2">Additional Coverage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">High-Rise Residential</td>
              <td className="py-2">$5M-$10M</td>
              <td className="py-2">Umbrella, Wrap-up</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Medical Facilities</td>
              <td className="py-2">$2M-$5M</td>
              <td className="py-2">Professional Liability</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Retail Renovation</td>
              <td className="py-2">$1M-$2M</td>
              <td className="py-2">Business Interruption</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Infrastructure</td>
              <td className="py-2">$5M+</td>
              <td className="py-2">Performance Bonds</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Challenges and Solutions
      </h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Labor Shortage
      </h3>

      <p>
        With so many concurrent projects, skilled labor is at a premium:
      </p>

      <ul className="list-disc ml-8 space-y-2 mb-8">
        <li>Wages increasing 15-20% year-over-year</li>
        <li>Subcontractors booking months in advance</li>
        <li>Need for comprehensive <Link href="/business/construction/workers-comp" className="text-primary-600">workers' compensation</Link></li>
        <li>Importance of retaining skilled workers</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Material Costs and Availability
      </h3>

      <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
        <h4 className="font-semibold text-gray-900 mb-2">Supply Chain Alert</h4>
        <p className="text-gray-700">
          Material costs remain volatile. Contractors need <Link href="/business/construction/builders-risk" className="text-primary-600">builder's risk coverage</Link> that accounts for price escalation and delay coverage for material shortages.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        Looking Ahead: 2024-2025 Pipeline
      </h2>

      <p>
        The construction boom shows no signs of slowing:
      </p>

      <div className="bg-primary-50 rounded-lg p-8 my-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Major Projects</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <TruckIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Route 17 Corridor Development:</strong> Multiple mixed-use projects
              <br />
              <span className="text-sm text-gray-600">Est. value: $500M+ across multiple sites</span>
            </div>
          </li>
          <li className="flex items-start">
            <TruckIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Meadowlands Redevelopment:</strong> Former industrial to mixed-use
              <br />
              <span className="text-sm text-gray-600">Est. value: $1.2B over 10 years</span>
            </div>
          </li>
          <li className="flex items-start">
            <TruckIcon className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Transit-Oriented Development:</strong> Near NJ Transit stations
              <br />
              <span className="text-sm text-gray-600">Multiple sites planned across county</span>
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
        How to Capitalize on the Boom
      </h2>

      <ol className="list-decimal ml-8 space-y-3 mb-8">
        <li>
          <strong>Upgrade Your Insurance:</strong> Major projects require higher limits and specialized coverage
        </li>
        <li>
          <strong>Get Prequalified:</strong> Have financials and insurance ready for RFPs
        </li>
        <li>
          <strong>Build Relationships:</strong> Network with GCs working on these projects
        </li>
        <li>
          <strong>Invest in Safety:</strong> Large projects demand excellent safety records
        </li>
        <li>
          <strong>Scale Smartly:</strong> Don't overextend; ensure proper coverage for growth
        </li>
      </ol>

      <div className="bg-gray-100 rounded-lg p-8 text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready for Bergen County's Construction Boom?
        </h3>
        <p className="text-gray-700 mb-6">
          Ensure your insurance coverage matches the opportunities. We specialize in coverage for contractors working on major Bergen County projects.
        </p>
        <Link
          href={EXTERNAL_URLS.QUOTE_FORM}
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
        >
          Get Project-Ready Coverage
        </Link>
      </div>
    </>
  );

  const relatedPosts = [
    {
      title: 'Fort Lee High-Rise Insurance Requirements',
      excerpt: 'Understanding insurance for high-rise construction projects.',
      href: '/blog/fort-lee-high-rise-insurance',
    },
    {
      title: 'General Contractor Insurance Guide',
      excerpt: 'Complete guide for GCs managing large projects.',
      href: '/blog/general-contractor-insurance-guide',
    },
    {
      title: 'Spring Construction Preparation',
      excerpt: 'Get ready for the busy construction season.',
      href: '/blog/spring-construction-insurance-prep',
    },
  ];

  return (
    <BlogPostTemplate
      title="Bergen County Construction Boom: Major Projects Reshaping Our Region"
      date="March 5, 2024"
      readTime="6 min read"
      category="Local Projects"
      excerpt="From Fort Lee high-rises to Hackensack medical expansions, explore the major construction projects transforming Bergen County in 2024."
      content={content}
      relatedPosts={relatedPosts}
    />
  );
}