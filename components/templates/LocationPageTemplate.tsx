'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HomeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  UsersIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

interface NearbyArea {
  name: string;
  distance?: string;
  href?: string;
}

interface LocationPageTemplateProps {
  location: {
    name: string;
    slug: string;
    county?: string;
    state: string;
    description: string;
    heroImage?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
    serviceRadius?: number;
  };
  stats?: {
    population?: string;
    contractors?: string;
    projects?: string;
    growth?: string;
  };
  projects?: Array<{
    name: string;
    type: string;
    description: string;
  }>;
  services: Array<{
    name: string;
    description: string;
    href: string;
    icon?: React.ComponentType<any>;
  }>;
  nearbyAreas?: string[] | NearbyArea[];
  localInfo?: {
    permitOffice?: {
      name: string;
      address: string;
      phone: string;
      website?: string;
    };
    majorEmployers?: string[];
    constructionHighlights?: string[];
  };
}

export default function LocationPageTemplate({
  location,
  stats,
  projects,
  services,
  nearbyAreas,
  localInfo,
}: LocationPageTemplateProps) {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: location.name, url: `/locations/${location.slug}` },
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <LocalBusinessSchema
        locationName={location.name}
        locationSlug={location.slug}
        geo={location.coordinates}
        serviceRadius={location.serviceRadius}
        description={location.description}
      />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title={`Construction Insurance in ${location.name}, ${location.state}`}
          subtitle="Local Coverage for Local Contractors"
          description={location.description}
          primaryButton={{
            text: 'Get Free Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage={location.heroImage || '/photos/location-hero.jpg'}
        />

        <Divider type="dark-to-white" />

        {/* Local Stats Section */}
        {stats && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="badge-light inline-block mb-4">Local Market</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {location.name} Construction Market
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {stats.population && (
                  <div className="text-center">
                    <UsersIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stats.population}</p>
                    <p className="text-gray-600">Population</p>
                  </div>
                )}
                {stats.contractors && (
                  <div className="text-center">
                    <TruckIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stats.contractors}</p>
                    <p className="text-gray-600">Active Contractors</p>
                  </div>
                )}
                {stats.projects && (
                  <div className="text-center">
                    <BuildingOfficeIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stats.projects}</p>
                    <p className="text-gray-600">Current Projects</p>
                  </div>
                )}
                {stats.growth && (
                  <div className="text-center">
                    <CheckCircleIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stats.growth}</p>
                    <p className="text-gray-600">Annual Growth</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Major Projects Section */}
        {projects && projects.length > 0 && (
          <>
            <Divider type="white-to-dark" />
            <section className="py-20 bg-slate-900 circle-pattern">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Active Development</div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Major Construction Projects in {location.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-slate-800 p-6 rounded-lg"
                    >
                      <BuildingOfficeIcon className="h-10 w-10 text-primary-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                      <p className="text-primary-400 text-sm mb-3">{project.type}</p>
                      <p className="text-gray-300">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <Divider type={projects ? "dark-to-white" : "white-to-dark"} />

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Our Services</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Construction Insurance Services in {location.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage options for contractors and construction businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon || ShieldCheckIcon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card text-center"
                  >
                    <Icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Learn More
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Local Information Section */}
        {localInfo && (
          <>
            <Divider type="white-to-dark" />
            <section className="py-20 bg-slate-900 circle-pattern">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Local Resources</div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {location.name} Contractor Resources
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {localInfo.permitOffice && (
                    <div className="bg-slate-800 p-6 rounded-lg">
                      <MapPinIcon className="h-10 w-10 text-primary-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Building Department
                      </h3>
                      <p className="text-white font-medium">{localInfo.permitOffice.name}</p>
                      <p className="text-gray-300">{localInfo.permitOffice.address}</p>
                      <p className="text-gray-300 mb-4">{localInfo.permitOffice.phone}</p>
                      {localInfo.permitOffice.website && (
                        <a
                          href={localInfo.permitOffice.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-400 hover:text-primary-300"
                        >
                          Visit Website →
                        </a>
                      )}
                    </div>
                  )}

                  {localInfo.majorEmployers && localInfo.majorEmployers.length > 0 && (
                    <div className="bg-slate-800 p-6 rounded-lg">
                      <BuildingOfficeIcon className="h-10 w-10 text-primary-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Major Employers
                      </h3>
                      <ul className="space-y-2">
                        {localInfo.majorEmployers.map((employer, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                            {employer}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {localInfo.constructionHighlights && localInfo.constructionHighlights.length > 0 && (
                  <div className="mt-8 bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Construction Market Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {localInfo.constructionHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {/* Service Areas Section */}
        {nearbyAreas && nearbyAreas.length > 0 && (
          <>
            <Divider type={localInfo ? "dark-to-white" : "white-to-dark"} />
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Service Areas</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Also Serving Nearby Areas
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {nearbyAreas.map((area, index) => {
                    const areaName = typeof area === 'string' ? area : area.name;
                    const areaHref = typeof area === 'string' 
                      ? `/locations/${area.toLowerCase().replace(/\s+/g, '-')}`
                      : area.href || `/locations/${area.name.toLowerCase().replace(/\s+/g, '-')}`;
                    const areaDistance = typeof area === 'object' ? area.distance : undefined;
                    
                    return (
                      <Link
                        key={index}
                        href={areaHref}
                        className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <MapPinIcon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                        <p className="text-gray-700 font-medium">{areaName}</p>
                        {areaDistance && (
                          <p className="text-sm text-gray-500 mt-1">{areaDistance}</p>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        <Divider type={nearbyAreas ? "white-to-dark" : localInfo ? "dark-to-white" : "white-to-dark"} />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Protect Your {location.name} Construction Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quote in minutes. Local agents, competitive rates, comprehensive coverage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={EXTERNAL_URLS.QUOTE_FORM}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
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

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start">
                <ClockIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Quick Response</p>
                  <p className="text-gray-300 text-sm">Get quotes in minutes, not days</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Local Expertise</p>
                  <p className="text-gray-300 text-sm">Serving {location.name} since 1990</p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheckIcon className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Trusted Coverage</p>
                  <p className="text-gray-300 text-sm">20+ top-rated insurance carriers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}