'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  FireIcon,
  HomeModernIcon,
  PaintBrushIcon,
  TruckIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  GlobeAmericasIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';

const trades = [
  {
    name: 'General Contractors',
    slug: 'general-contractors',
    description: 'Complete coverage for general contracting operations including project management and subcontractor risks.',
    icon: BuildingOfficeIcon,
    image: '/photos/construction-site.jpg',
    highlights: ['Project liability', 'Subcontractor coverage', 'Builders risk'],
  },
  {
    name: 'Electrical Contractors',
    slug: 'electrical-contractors',
    description: 'Specialized protection for electrical work including fire and shock liability coverage.',
    icon: BoltIcon,
    image: '/photos/electricians-hero.jpg',
    highlights: ['Electrical fire coverage', 'Professional liability', 'Tools protection'],
  },
  {
    name: 'Plumbing Contractors',
    slug: 'plumbing-contractors',
    description: 'Comprehensive coverage for plumbers including water damage and pipe burst protection.',
    icon: WrenchScrewdriverIcon,
    image: '/photos/construction-tools.jpg',
    highlights: ['Water damage liability', 'Equipment coverage', 'Service line protection'],
  },
  {
    name: 'HVAC Contractors',
    slug: 'hvac-contractors',
    description: 'Insurance for heating and cooling contractors covering installation and service risks.',
    icon: FireIcon,
    image: '/photos/hvac-work.jpg',
    highlights: ['Refrigerant liability', 'Carbon monoxide coverage', 'System failure protection'],
  },
  {
    name: 'Roofing Contractors',
    slug: 'roofing-contractors',
    description: 'Height-specific coverage for roofing professionals including weather damage protection.',
    icon: HomeModernIcon,
    image: '/photos/new-roof.jpg',
    highlights: ['Fall protection', 'Weather damage', 'Warranty coverage'],
  },
  {
    name: 'Concrete Contractors',
    slug: 'concrete-contractors',
    description: 'Heavy equipment and structural coverage for concrete and foundation specialists.',
    icon: CubeIcon,
    image: '/photos/concrete-foundation.jpg',
    highlights: ['Foundation liability', 'Equipment breakdown', 'Structural defects'],
  },
  {
    name: 'Painting Contractors',
    slug: 'painting-contractors',
    description: 'Coverage for painters including overspray protection and surface preparation risks.',
    icon: PaintBrushIcon,
    image: '/photos/residential-painting.jpg',
    highlights: ['Overspray coverage', 'Lead paint liability', 'Surface damage'],
  },
  {
    name: 'Flooring Contractors',
    slug: 'flooring-contractors',
    description: 'Protection for flooring installers covering material defects and installation errors.',
    icon: HomeModernIcon,
    image: '/photos/flooring-installation.jpg',
    highlights: ['Installation errors', 'Material defects', 'Subfloor damage'],
  },
  {
    name: 'Landscaping Contractors',
    slug: 'landscaping-contractors',
    description: 'Green industry coverage including pesticide application and tree work liability.',
    icon: GlobeAmericasIcon,
    image: '/photos/landscaping-project.jpg',
    highlights: ['Pesticide liability', 'Tree damage', 'Irrigation issues'],
  },
  {
    name: 'Excavation Contractors',
    slug: 'excavation-contractors',
    description: 'Underground work coverage including utility damage and earth movement risks.',
    icon: TruckIcon,
    image: '/photos/construction-excavation.jpg',
    highlights: ['Utility damage', 'Earth movement', 'Heavy equipment'],
  },
];

export default function TradeSpecificOverview() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trade-Specific Insurance Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Tailored coverage for every construction trade in Bergen County
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Your Quote
              </Link>
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Insurance Designed for Your Trade
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Every construction trade faces unique risks and challenges. That's why we offer 
              specialized insurance programs designed specifically for your industry. With deep 
              knowledge of Bergen County's construction market and regulations, we provide 
              coverage that truly protects your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ScaleIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                <p className="text-gray-600">
                  Specialized knowledge of each trade's unique risks and requirements
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <BuildingOfficeIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Experience</h3>
                <p className="text-gray-600">
                  40+ years serving Bergen County contractors and builders
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <TruckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Complete Coverage</h3>
                <p className="text-gray-600">
                  From tools to liability, we cover every aspect of your business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Select Your Trade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trades.map((trade) => {
              const Icon = trade.icon;
              return (
                <Link
                  key={trade.slug}
                  href={`/services/trade-specific/${trade.slug}`}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={trade.image}
                      alt={trade.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {trade.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {trade.description}
                    </p>
                    <ul className="space-y-1">
                      {trade.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-500 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Trade-Specific */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Trade-Specific Insurance Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Accurate Risk Assessment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mr-3">1</span>
                  <div>
                    <h4 className="font-semibold mb-1">Precise Premium Calculation</h4>
                    <p className="text-gray-600">Pay only for the risks specific to your trade, not generic contractor rates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mr-3">2</span>
                  <div>
                    <h4 className="font-semibold mb-1">Tailored Coverage Limits</h4>
                    <p className="text-gray-600">Get the right amount of coverage based on typical claim sizes in your industry</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mr-3">3</span>
                  <div>
                    <h4 className="font-semibold mb-1">Industry-Specific Endorsements</h4>
                    <p className="text-gray-600">Add coverage for unique risks that general policies might exclude</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Common Benefits Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lower premiums through accurate classification
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Coverage for trade-specific tools and equipment
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Protection for unique liability exposures
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Compliance with industry regulations
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Expert claims handling by trade specialists
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Insurance That Understands Your Trade
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don't settle for generic contractor insurance. Get coverage designed specifically 
            for your trade with rates that reflect your actual risks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get a Custom Quote
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}