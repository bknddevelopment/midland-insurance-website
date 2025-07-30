'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowTrendingUpIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  trade: string;
  location: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  coverageTypes: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
}

export default function CaseStudiesPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 'gc-risk-reduction',
      title: 'Reducing Risk & Premiums for Large GC',
      client: 'Regional General Contractor',
      trade: 'General Contractor',
      location: 'Hackensack, NJ',
      challenge: 'A $50M revenue general contractor faced 40% premium increases due to three workers comp claims. Their experience mod had risen to 1.35, making them uncompetitive on bids requiring insurance documentation.',
      solution: 'We implemented a comprehensive safety program, negotiated with carriers using detailed loss analysis, and restructured their coverage across multiple carriers. We also established a formal return-to-work program and quarterly safety training.',
      results: [
        { label: 'Premium Reduction', value: '32%', highlight: true },
        { label: 'Mod Rate Improvement', value: '1.35 to 0.98' },
        { label: 'Annual Savings', value: '$67,000' },
        { label: 'Claims Reduction', value: '75% over 2 years' }
      ],
      coverageTypes: ['Workers Compensation', 'General Liability', 'Umbrella Policy'],
      testimonial: {
        quote: 'Midland Associates didn\'t just find us cheaper insurance - they transformed our entire approach to risk management. The savings let us bid more competitively and win larger projects.',
        author: 'James Mitchell',
        role: 'CEO'
      },
      tags: ['Cost Reduction', 'Safety Program', 'Workers Comp']
    },
    {
      id: 'electrical-startup',
      title: 'New Electrical Contractor Startup Success',
      client: 'Lightning Electric LLC',
      trade: 'Electrical Contractor',
      location: 'Fort Lee, NJ',
      challenge: 'A newly licensed electrical contractor couldn\'t get affordable coverage due to lack of business history. Multiple carriers declined or quoted prohibitive rates, threatening their ability to bid on projects.',
      solution: 'We leveraged the owner\'s 15-year employment history and certifications to secure coverage with a carrier specializing in new ventures. We structured a growing coverage program that expanded limits as revenue increased.',
      results: [
        { label: 'Carriers Quoting', value: 'From 0 to 5' },
        { label: 'First Year Premium', value: '$8,500', highlight: true },
        { label: 'Coverage Limits', value: '$2M/$4M GL' },
        { label: 'Business Growth', value: '300% Year 1' }
      ],
      coverageTypes: ['General Liability', 'Tools & Equipment', 'Commercial Auto'],
      testimonial: {
        quote: 'Without Midland Associates, I couldn\'t have started my business. They found coverage when everyone else said no, and helped me grow from a one-man operation to 8 employees.',
        author: 'Michael Torres',
        role: 'Owner'
      },
      tags: ['Startup', 'New Business', 'Growth']
    },
    {
      id: 'roofing-claim-advocacy',
      title: 'Fighting Denied Roofing Claim',
      client: 'Summit Roofing Systems',
      trade: 'Roofing Contractor',
      location: 'Ridgewood, NJ',
      challenge: 'A roofing contractor faced a $150,000 denied claim for wind damage to a completed commercial roof. The carrier claimed improper installation, threatening the contractor\'s reputation and finances.',
      solution: 'We brought in an independent adjuster, compiled weather data, installation photos, and manufacturer specifications. After three appeals and negotiations with carrier executives, we proved the damage was from an uncovered wind event, not workmanship.',
      results: [
        { label: 'Claim Recovery', value: '$142,500', highlight: true },
        { label: 'Time to Resolution', value: '4 months' },
        { label: 'Legal Fees Saved', value: '$25,000+' },
        { label: 'Coverage Retained', value: 'No cancellation' }
      ],
      coverageTypes: ['General Liability', 'Completed Operations'],
      testimonial: {
        quote: 'Midland Associates saved our business. They fought harder for us than we could have fought for ourselves, and their expertise made the difference between bankruptcy and success.',
        author: 'Patricia Walsh',
        role: 'President'
      },
      tags: ['Claims Advocacy', 'Completed Ops', 'Claim Recovery']
    },
    {
      id: 'hvac-multi-state',
      title: 'Multi-State HVAC Coverage Solution',
      client: 'Tri-State Mechanical',
      trade: 'HVAC Contractor',
      location: 'Teaneck, NJ',
      challenge: 'An HVAC contractor expanding into NY and PA struggled with different state requirements, multiple policies, and compliance issues. They were overpaying for redundant coverage and missing required endorsements.',
      solution: 'We consolidated their coverage under a single master policy with state-specific endorsements, ensuring compliance across all jurisdictions. We also negotiated multi-state discounts and streamlined their certificate management.',
      results: [
        { label: 'Policies Reduced', value: 'From 7 to 1' },
        { label: 'Annual Savings', value: '$31,000', highlight: true },
        { label: 'Compliance Issues', value: '100% Resolved' },
        { label: 'Admin Time Saved', value: '15 hrs/month' }
      ],
      coverageTypes: ['General Liability', 'Workers Comp', 'Commercial Auto', 'Tools'],
      tags: ['Multi-State', 'Consolidation', 'Compliance']
    },
    {
      id: 'excavation-equipment',
      title: 'Protecting High-Value Excavation Equipment',
      client: 'Bergen Excavation Co.',
      trade: 'Excavation Contractor',
      location: 'Mahwah, NJ',
      challenge: 'An excavation company with $2M in equipment faced coverage gaps and high deductibles. A recent $200,000 equipment theft claim was partially denied due to policy limitations they didn\'t know existed.',
      solution: 'We restructured their equipment coverage with agreed value policies, reduced deductibles, and added coverage for rented equipment. We also implemented GPS tracking discounts and job site security protocols.',
      results: [
        { label: 'Equipment Coverage', value: '$2.2M Full Value', highlight: true },
        { label: 'Deductible Reduction', value: '$10,000 to $2,500' },
        { label: 'Premium Increase', value: 'Only 8%' },
        { label: 'Theft Prevention', value: 'GPS tracking installed' }
      ],
      coverageTypes: ['Inland Marine', 'Equipment Floater', 'General Liability'],
      testimonial: {
        quote: 'After our theft claim nightmare, Midland Associates made sure we\'ll never be underinsured again. The GPS tracking discount almost paid for the better coverage.',
        author: 'Robert Chen',
        role: 'Operations Manager'
      },
      tags: ['Equipment Coverage', 'Theft Protection', 'Gap Analysis']
    },
    {
      id: 'concrete-bonding',
      title: 'Securing Bonds for Growing Concrete Contractor',
      client: 'Precision Concrete LLC',
      trade: 'Concrete Contractor',
      location: 'Paramus, NJ',
      challenge: 'A concrete contractor couldn\'t get bonding for a $3M municipal project due to limited financial history and previous bonding capacity of only $500K. This was preventing them from growing into larger projects.',
      solution: 'We worked with SBA-backed surety programs, prepared detailed financial presentations, and leveraged their strong project completion history. We also arranged a gradual bonding increase program tied to successful completions.',
      results: [
        { label: 'Bonding Capacity', value: '$500K to $3M', highlight: true },
        { label: 'Project Won', value: '$2.8M Municipal' },
        { label: 'Revenue Growth', value: '250% in 18 months' },
        { label: 'Bond Rate', value: '1.5% (competitive)' }
      ],
      coverageTypes: ['Performance Bonds', 'Payment Bonds', 'General Liability'],
      tags: ['Bonding', 'Municipal Work', 'Business Growth']
    }
  ];

  const getIconForTag = (tag: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'Cost Reduction': CurrencyDollarIcon,
      'Claims Advocacy': ShieldCheckIcon,
      'Business Growth': ArrowTrendingUpIcon,
      'Compliance': DocumentCheckIcon,
      'Multi-State': BuildingOfficeIcon,
      'Equipment Coverage': ChartBarIcon
    };
    return iconMap[tag] || ChartBarIcon;
  };

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Case Studies"
          subtitle="Real Solutions for Real Contractors"
          description="See how we\'ve helped Bergen County construction companies overcome insurance challenges and achieve their business goals."
          primaryButton={{
            text: 'Get Your Solution',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Read Testimonials',
            href: '/testimonials',
          }}
          backgroundImage="/photos/case-studies-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Impact Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Our Track Record</h2>
              <p className="text-lg text-gray-600 mt-2">Measurable results for Bergen County contractors</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-600">$2.3M</p>
                <p className="text-gray-600 mt-1">Claims Recovered</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-600">$850K</p>
                <p className="text-gray-600 mt-1">Annual Savings</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-600">45%</p>
                <p className="text-gray-600 mt-1">Avg Premium Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-600">100%</p>
                <p className="text-gray-600 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider removed - gray background provides visual separation */}

        {/* Case Studies Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>{study.client}</span>
                        <span>•</span>
                        <span>{study.trade}</span>
                        <span>•</span>
                        <span>{study.location}</span>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">!</span>
                          The Challenge
                        </h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-sm">✓</span>
                          Our Solution
                        </h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">The Results</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {study.results.map((result) => (
                          <div key={result.label} className={`text-center ${result.highlight ? 'scale-110' : ''}`}>
                            <p className={`text-2xl font-bold ${result.highlight ? 'text-primary-600' : 'text-gray-900'}`}>
                              {result.value}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    {study.testimonial && (
                      <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-6">
                        <blockquote className="text-gray-700 italic mb-2">
                          "{study.testimonial.quote}"
                        </blockquote>
                        <p className="text-sm text-gray-600">
                          — {study.testimonial.author}, {study.testimonial.role}
                        </p>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {study.coverageTypes.map((coverage) => (
                          <span key={coverage} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {coverage}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => {
                          const Icon = getIconForTag(tag);
                          return (
                            <span key={tag} className="flex items-center gap-1 text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                              <Icon className="h-3 w-3" />
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us analyze your current coverage and show you how we can improve your protection while reducing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Get Your Free Analysis
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-colors"
              >
                Discuss Your Challenges
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}