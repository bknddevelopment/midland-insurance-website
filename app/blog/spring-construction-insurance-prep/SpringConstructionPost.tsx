'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

export default function SpringConstructionPost() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Spring Construction Insurance Prep', url: '/blog/spring-construction-insurance-prep' },
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <article className="min-h-screen">
        <Navbar />

        {/* Article Header */}
        <header className="bg-slate-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 text-gray-400 mb-6">
                <span className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  March 15, 2024
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  5 min read
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <TagIcon className="h-5 w-5 mr-2" />
                  Seasonal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Spring Construction Season: Insurance Preparation Checklist
              </h1>
              <p className="text-xl text-gray-300">
                Get your Bergen County construction business ready for the busy spring season with our comprehensive insurance checklist.
              </p>
            </div>
          </div>
        </header>

        <Divider type="dark-to-white" />

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-700 mb-8">
                As winter thaws and Bergen County construction projects ramp up, it's crucial to ensure your insurance coverage is ready for the busy season ahead. From April through October, construction activity peaks, bringing both opportunities and increased risks. This comprehensive checklist will help you prepare your insurance program for a successful and protected spring season.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Spring Insurance Reviews Matter
              </h2>

              <p>
                Spring brings unique challenges to Bergen County construction sites:
              </p>

              <ul className="list-disc ml-8 space-y-2 mb-8">
                <li><strong>Increased Activity:</strong> More projects mean more exposure to claims</li>
                <li><strong>New Equipment:</strong> Spring purchases need proper coverage</li>
                <li><strong>Seasonal Workers:</strong> Temporary staff affects workers' comp</li>
                <li><strong>Weather Transitions:</strong> Rain and storms create new hazards</li>
                <li><strong>Contract Requirements:</strong> New projects may have different insurance needs</li>
              </ul>

              <div className="bg-primary-50 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <ExclamationTriangleIcon className="h-8 w-8 text-primary-600 mr-3" />
                  Critical Spring Risks
                </h3>
                <p className="text-gray-700 mb-4">
                  According to our claims data, 40% of annual construction claims occur between April and June, with water damage and new employee injuries leading the statistics.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                The Complete Spring Insurance Checklist
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Policy Review and Updates
              </h3>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Verify Coverage Dates:</strong> Ensure all policies are current with no gaps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Update Revenue Projections:</strong> Spring work may exceed estimates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Review Coverage Limits:</strong> Ensure limits match current project sizes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Check Additional Insureds:</strong> Add new GCs or property owners as needed</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Equipment and Tools Coverage
              </h3>

              <p>
                Spring often means new equipment purchases. Ensure your <Link href="/business/construction/tools-equipment" className="text-primary-600">tools and equipment coverage</Link> includes:
              </p>

              <ul className="list-disc ml-8 space-y-2 mb-8">
                <li>Newly purchased or leased equipment</li>
                <li>Seasonal equipment brought out of storage</li>
                <li>Increased values for existing equipment</li>
                <li>Rental equipment coverage for busy periods</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Workers' Compensation Preparation
              </h3>

              <p>
                With hiring ramping up, your <Link href="/business/construction/workers-comp" className="text-primary-600">workers' compensation</Link> needs attention:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <div className="flex">
                  <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Seasonal Hiring Alert</h4>
                    <ul className="list-disc ml-5 space-y-1 text-gray-700">
                      <li>Update payroll estimates for seasonal workers</li>
                      <li>Verify all new hires are properly classified</li>
                      <li>Implement safety orientation for new employees</li>
                      <li>Document all safety training completion</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Vehicle and Fleet Updates
              </h3>

              <p>
                Spring construction means more vehicles on the road. Review your <Link href="/business/construction/commercial-auto" className="text-primary-600">commercial auto coverage</Link>:
              </p>

              <ul className="list-disc ml-8 space-y-2 mb-8">
                <li>Add new vehicles purchased over winter</li>
                <li>Update driver lists with new employees</li>
                <li>Verify hired and non-owned auto coverage</li>
                <li>Check that all drivers have valid licenses</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Contract Insurance Requirements
              </h3>

              <p>
                Spring brings new contracts with varying insurance requirements:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Contract Review Checklist:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <DocumentCheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Required liability limits (often $2M+ in Bergen County)</span>
                  </li>
                  <li className="flex items-center">
                    <DocumentCheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Additional insured requirements and wording</span>
                  </li>
                  <li className="flex items-center">
                    <DocumentCheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Waiver of subrogation needs</span>
                  </li>
                  <li className="flex items-center">
                    <DocumentCheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                    <span>Primary and non-contributory language</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Spring Safety Initiatives That Reduce Premiums
              </h2>

              <p>
                Implementing these safety measures can reduce both claims and premiums:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Toolbox Talks Schedule</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Week 1: Ladder safety refresher</li>
                    <li>• Week 2: Spring weather hazards</li>
                    <li>• Week 3: New equipment training</li>
                    <li>• Week 4: Heat illness prevention</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Documentation Requirements</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Safety meeting attendance</li>
                    <li>• Equipment inspection logs</li>
                    <li>• Incident reports (even near-misses)</li>
                    <li>• Training certifications</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Bergen County Specific Considerations
              </h2>

              <p>
                Our region has unique spring challenges:
              </p>

              <ul className="list-disc ml-8 space-y-2 mb-8">
                <li><strong>April Showers:</strong> Increased water damage risk requires proper tarping and drainage</li>
                <li><strong>Municipal Permits:</strong> Many towns update requirements in spring</li>
                <li><strong>Traffic Patterns:</strong> School zones become active again, affecting <Link href="/locations/paramus" className="text-primary-600">Paramus</Link> and <Link href="/locations/ridgewood" className="text-primary-600">Ridgewood</Link> projects</li>
                <li><strong>Environmental Concerns:</strong> Nesting season restrictions in some areas</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Action Items for Different Trades
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link href="/trades/roofers" className="text-primary-600">Roofers</Link>
                  </h4>
                  <p className="text-gray-700">Update fall protection protocols, verify torch-down coverage, prepare for storm season</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link href="/trades/landscapers" className="text-primary-600">Landscapers</Link>
                  </h4>
                  <p className="text-gray-700">Add pesticide coverage, update equipment lists, prepare for peak season staffing</p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link href="/trades/general-contractors" className="text-primary-600">General Contractors</Link>
                  </h4>
                  <p className="text-gray-700">Review subcontractor requirements, update project schedules, verify wrap-up needs</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Your Spring Insurance Action Plan
              </h2>

              <div className="bg-primary-50 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">30-Day Implementation Timeline</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Week 1: Assessment</h4>
                      <p className="text-gray-700">Review all current policies, identify gaps, list new equipment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Week 2: Updates</h4>
                      <p className="text-gray-700">Submit changes to insurance agent, add vehicles/equipment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Week 3: Safety Implementation</h4>
                      <p className="text-gray-700">Launch spring safety program, train new employees</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Week 4: Documentation</h4>
                      <p className="text-gray-700">Ensure all certificates are updated, contracts reviewed</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Free Spring Insurance Review
              </h2>

              <p className="mb-8">
                Don't let inadequate insurance coverage slow down your spring season. Midland Associates offers complimentary spring insurance reviews for Bergen County contractors. We'll:
              </p>

              <ul className="list-disc ml-8 space-y-2 mb-8">
                <li>Analyze your current coverage for spring risks</li>
                <li>Identify potential gaps or savings opportunities</li>
                <li>Ensure compliance with new contract requirements</li>
                <li>Provide competitive quotes if changes are needed</li>
              </ul>

              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <ShieldCheckIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Schedule Your Spring Insurance Review
                </h3>
                <p className="text-gray-700 mb-6">
                  Get ahead of the busy season with a comprehensive insurance checkup
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href={EXTERNAL_URLS.QUOTE_FORM}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                    {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
                  >
                    Get Free Review
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="tel:2018122184"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <PhoneIcon className="mr-2 h-5 w-5" />
                    (201) 812-2184
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Related Articles */}
        <section className="py-16 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Summer Safety: Protecting Workers in Bergen County Heat
                </h3>
                <p className="text-gray-300 mb-4">
                  Prepare for summer's unique challenges with heat illness prevention strategies.
                </p>
                <Link
                  href="/blog/summer-safety-construction-sites"
                  className="text-primary-400 hover:text-primary-300 font-medium"
                >
                  Read More →
                </Link>
              </article>
              
              <article className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Understanding NJ Construction Insurance Requirements
                </h3>
                <p className="text-gray-300 mb-4">
                  Navigate New Jersey's complex insurance requirements with confidence.
                </p>
                <Link
                  href="/blog/nj-construction-insurance-requirements"
                  className="text-primary-400 hover:text-primary-300 font-medium"
                >
                  Read More →
                </Link>
              </article>
              
              <article className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Bergen County Construction Boom: Major Projects
                </h3>
                <p className="text-gray-300 mb-4">
                  Explore the major construction projects reshaping our region.
                </p>
                <Link
                  href="/blog/bergen-county-construction-boom"
                  className="text-primary-400 hover:text-primary-300 font-medium"
                >
                  Read More →
                </Link>
              </article>
            </div>
          </div>
        </section>

        <Footer />
      </article>
    </>
  );
}