'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BuildingOfficeIcon,
  HomeIcon,
  CogIcon,
  MapIcon,
  HomeModernIcon,
  SunIcon,
  CubeIcon,
  FireIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface ConstructionType {
  name: string;
  slug: string;
  description: string;
  icon: React.ComponentType<any>;
  coverage: string[];
}

export default function ConstructionTypesIndex() {
  const constructionTypes: ConstructionType[] = [
    {
      name: 'Commercial Construction',
      slug: 'commercial-construction',
      description: 'Office buildings, retail centers, and mixed-use developments',
      icon: BuildingOfficeIcon,
      coverage: ['Builders Risk', 'High-Limit GL', 'Professional Liability'],
    },
    {
      name: 'Residential Construction',
      slug: 'residential-construction',
      description: 'Custom homes, multi-family units, and residential developments',
      icon: HomeIcon,
      coverage: ['Course of Construction', 'Warranty Coverage', 'Completed Ops'],
    },
    {
      name: 'Industrial Construction',
      slug: 'industrial-construction',
      description: 'Manufacturing facilities, warehouses, and distribution centers',
      icon: CogIcon,
      coverage: ['Environmental Liability', 'Equipment Breakdown', 'Riggers Liability'],
    },
    {
      name: 'Infrastructure Projects',
      slug: 'infrastructure-projects',
      description: 'Roads, bridges, utilities, and public works projects',
      icon: MapIcon,
      coverage: ['Performance Bonds', 'Railroad Protective', 'OCIP/CCIP'],
    },
    {
      name: 'Renovation & Remodeling',
      slug: 'renovation-remodeling',
      description: 'Kitchen, bath, and whole-house renovation projects',
      icon: HomeModernIcon,
      coverage: ['Existing Structure', 'Mold Coverage', 'Installation Floater'],
    },
    {
      name: 'Green Building',
      slug: 'green-building',
      description: 'LEED certified and sustainable construction projects',
      icon: SunIcon,
      coverage: ['Green Upgrades', 'Solar Installation', 'LEED Certification'],
    },
    {
      name: 'Specialty Construction',
      slug: 'specialty-construction',
      description: 'Medical facilities, laboratories, and technical buildings',
      icon: CubeIcon,
      coverage: ['Clean Room Coverage', 'Technology E&O', 'High-Value Materials'],
    },
    {
      name: 'Emergency Restoration',
      slug: 'emergency-restoration',
      description: 'Fire, water, and storm damage restoration services',
      icon: FireIcon,
      coverage: ['Pollution Liability', 'Bailee\'s Coverage', '24/7 Response'],
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Construction Types Insurance"
          subtitle="Specialized Coverage for Every Project"
          description="From commercial developments to emergency restoration, we provide tailored insurance solutions for all construction types in Bergen County."
          primaryButton={{
            text: 'Get Free Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage="/photos/construction-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Construction Types Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Specialized Coverage</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Insurance for Every Construction Type
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each construction type has unique risks and requirements. Our specialized programs 
                provide the exact coverage you need for your specific projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {constructionTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/services/construction-types/${type.slug}`}>
                      <div className="card h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                        <Icon className="h-12 w-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {type.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="space-y-1 mb-4">
                          {type.coverage.map((item) => (
                            <div key={item} className="text-sm text-gray-500">
                              • {item}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                          Learn More
                          <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Why Choose Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Why Choose Midland</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Construction Insurance Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-slate-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-400">30+</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Years Experience</h3>
                <p className="text-gray-300">
                  Decades of construction insurance expertise in Bergen County
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-slate-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-400">500+</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Contractors Insured</h3>
                <p className="text-gray-300">
                  Protecting construction businesses throughout New Jersey
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-slate-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-400">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Claims Support</h3>
                <p className="text-gray-300">
                  Round-the-clock assistance when you need it most
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Protect Your Construction Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a customized insurance quote for your specific construction type. 
              Fast, free, and no obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                Get Your Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:2018122184"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors btn-transition"
              >
                Call (201) 812-2184
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}