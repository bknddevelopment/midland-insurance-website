'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  HomeIcon,
  TruckIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const constructionTypes = [
  {
    icon: BuildingOfficeIcon,
    title: 'Commercial Construction',
    description: 'Comprehensive coverage for office buildings, retail spaces, and commercial developments.',
    features: ['General Liability', 'Builders Risk', 'Equipment Coverage', 'Professional Liability'],
    href: '/services/construction-types/commercial-construction',
    projectExamples: ['Office Buildings', 'Shopping Centers', 'Hotels', 'Restaurants']
  },
  {
    icon: HomeIcon,
    title: 'Residential Construction',
    description: 'Specialized insurance for home builders, custom homes, and residential developments.',
    features: ['New Home Construction', 'Renovation Coverage', 'Warranty Protection', 'Subcontractor Coverage'],
    href: '/services/construction-types/residential-construction',
    projectExamples: ['Single Family Homes', 'Townhouses', 'Apartments', 'Custom Homes']
  },
  {
    icon: TruckIcon,
    title: 'Industrial Construction',
    description: 'Protection for factories, warehouses, and heavy industrial projects.',
    features: ['Heavy Equipment Insurance', 'Environmental Liability', 'Project Delays', 'Installation Floaters'],
    href: '/services/construction-types/industrial-construction',
    projectExamples: ['Manufacturing Plants', 'Warehouses', 'Power Plants', 'Refineries']
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Infrastructure Projects',
    description: 'Coverage for public works, roads, bridges, and utility construction.',
    features: ['Public Liability', 'Contract Bonds', 'Political Risk', 'Equipment Breakdown'],
    href: '/services/construction-types/infrastructure-projects',
    projectExamples: ['Roads & Highways', 'Bridges', 'Water Treatment', 'Public Transit']
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Renovation & Remodeling',
    description: 'Insurance solutions for renovation contractors and remodeling specialists.',
    features: ['Existing Structure Coverage', 'Occupied Property Liability', 'Material Damage', 'Work Warranties'],
    href: '/services/construction-types/renovation-remodeling',
    projectExamples: ['Kitchen Remodels', 'Bathroom Updates', 'Additions', 'Historic Renovations']
  },
  {
    icon: ShieldCheckIcon,
    title: 'Green Building',
    description: 'Specialized coverage for sustainable and LEED-certified construction projects.',
    features: ['Green Materials Coverage', 'Certification Delays', 'Energy Performance', 'Sustainable Equipment'],
    href: '/services/construction-types/green-building',
    projectExamples: ['LEED Buildings', 'Solar Installations', 'Energy-Efficient Homes', 'Sustainable Developments']
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Specialty Construction',
    description: 'Unique coverage for specialized construction projects and niche markets.',
    features: ['Custom Liability', 'Specialized Equipment', 'Unique Risks', 'Project-Specific Coverage'],
    href: '/services/construction-types/specialty-construction',
    projectExamples: ['Data Centers', 'Medical Facilities', 'Clean Rooms', 'Laboratories']
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Emergency Restoration',
    description: 'Rapid response insurance for disaster recovery and emergency repairs.',
    features: ['24/7 Coverage', 'Expedited Claims', 'Emergency Response', 'Temporary Repairs'],
    href: '/services/construction-types/emergency-restoration',
    projectExamples: ['Fire Damage', 'Water Damage', 'Storm Repairs', 'Emergency Stabilization']
  }
];

const insuranceFeatures = [
  {
    title: 'Comprehensive Coverage',
    description: 'From ground breaking to project completion, we cover every phase of construction.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Local Expertise',
    description: 'Deep understanding of Bergen County building codes and regulations.',
    icon: DocumentTextIcon
  },
  {
    title: 'Fast Claims Processing',
    description: 'Quick response times to keep your projects on schedule.',
    icon: CheckCircleIcon
  },
  {
    title: 'Competitive Rates',
    description: 'Access to multiple carriers ensures the best coverage at the best price.',
    icon: TruckIcon
  }
];

export default function ConstructionTypesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Construction Insurance by Project Type"
        subtitle="Specialized Coverage for Every Build"
        description="From residential homes to commercial complexes, we provide tailored insurance solutions for every type of construction project in Bergen County and beyond."
        primaryButton={{
          text: 'Get Free Quote',
          href: '/quote/construction'
        }}
        secondaryButton={{
          text: 'Call (201) 812-2184',
          href: 'tel:2018122184'
        }}
        backgroundImage="/images/consultation-background.jpg"
      />

      <Divider type="dark-to-white" />

      {/* Construction Types Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Project Types</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Insurance Solutions for Every Construction Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're building homes, offices, or infrastructure, we have the specialized coverage to protect your project from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow"
              >
                <type.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Common Projects:</p>
                  <ul className="space-y-1">
                    {type.projectExamples.slice(0, 3).map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-3 w-3 text-green-500 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={type.href}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Why Choose Us</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Bergen County's Construction Insurance Experts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With decades of experience insuring construction projects across New Jersey, we understand the unique challenges and requirements of each project type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider type="dark-to-white" />

      {/* Coverage Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-light inline-block mb-4">Coverage Details</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Protection for Every Project Phase
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Construction</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Bid & Performance Bonds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Professional Liability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Equipment Coverage</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During Construction</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Builders Risk Insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">General Liability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Workers Compensation</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Post-Construction</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Completed Operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Warranty Coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Maintenance Bonds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Divider type="white-to-dark" />

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 circle-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Protect Your Next Construction Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a customized insurance quote for your specific project type. Our experts are ready to help you find the perfect coverage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/quote/construction"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
            >
              Get Free Quote
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="tel:2018122184"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call (201) 812-2184
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}