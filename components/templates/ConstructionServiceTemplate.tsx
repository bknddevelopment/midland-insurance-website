'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  ClockIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { EXTERNAL_URLS } from '@/lib/constants/urls';
import { getLinkProps } from '@/lib/utils/links';

interface FAQ {
  question: string;
  answer: string;
}

interface ConstructionServiceTemplateProps {
  service: {
    name: string;
    slug: string;
    heroImage?: string;
    description: string;
    shortDescription: string;
  };
  overview: {
    title: string;
    content: string;
    highlights: string[];
  };
  coverage: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      included: boolean;
    }>;
  };
  whoNeeds: {
    title: string;
    subtitle?: string;
    items: Array<{
      type: string;
      description: string;
      icon?: React.ComponentType<any>;
    }>;
  };
  benefits: {
    title: string;
    items: Array<{
      benefit: string;
      description: string;
    }>;
  };
  costFactors?: {
    title: string;
    factors: string[];
  };
  claims?: {
    title: string;
    examples: Array<{
      scenario: string;
      coverage: string;
      outcome: string;
    }>;
  };
  faqs: FAQ[];
  relatedServices?: Array<{
    name: string;
    description: string;
    href: string;
  }>;
}

export default function ConstructionServiceTemplate({
  service,
  overview,
  coverage,
  whoNeeds,
  benefits,
  costFactors,
  claims,
  faqs,
  relatedServices,
}: ConstructionServiceTemplateProps) {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Business', url: '/business' },
    { name: 'Construction Insurance', url: '/business/construction' },
    { name: service.name, url: `/business/construction/${service.slug}` },
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName={service.name}
        serviceType="Construction Insurance"
        description={service.description}
        areaServed={['Bergen County', 'New Jersey']}
        hasOfferCatalog={coverage.items.map(item => ({
          name: item.name,
          description: item.description,
        }))}
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title={`${service.name} in New Jersey`}
          subtitle="Comprehensive Coverage for Construction Professionals"
          description={service.shortDescription}
          primaryButton={{
            text: 'Get Free Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage={service.heroImage || '/photos/construction-service-hero.jpg'}
        />

        <Divider type="dark-to-white" />

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge-light inline-block mb-4">Overview</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {overview.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">{overview.content}</p>
                <ul className="space-y-3">
                  {overview.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-gray-700">Quote in 15 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-gray-700">A+ rated carriers</span>
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-gray-700">Local agents available</span>
                  </div>
                  <div className="flex items-center">
                    <ScaleIcon className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-gray-700">NJ licensed & regulated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Who Needs Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Needs</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {whoNeeds.title}
              </h2>
              {whoNeeds.subtitle && (
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {whoNeeds.subtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whoNeeds.items.map((item, index) => {
                const Icon = item.icon || BuildingOfficeIcon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800 p-6 rounded-lg text-center"
                  >
                    <Icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.type}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Coverage Details Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Details</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {coverage.title}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="space-y-4">
                  {coverage.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start p-4 rounded-lg ${
                        item.included ? 'bg-green-50' : 'bg-red-50'
                      }`}
                    >
                      {item.included ? (
                        <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      ) : (
                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <Divider type="white-to-dark" />
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Benefits</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {benefits.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircleIcon className="h-8 w-8 text-primary-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.benefit}
                    </h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Factors Section */}
        {costFactors && (
          <>
            <Divider type="dark-to-white" />
            <section className="py-20 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Pricing</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {costFactors.title}
                  </h2>
                </div>

                <div className="bg-primary-50 rounded-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {costFactors.factors.map((factor, index) => (
                      <div key={index} className="flex items-center">
                        <CurrencyDollarIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{factor}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">
                      Get an accurate quote based on your specific needs
                    </p>
                    <Link
                      href={EXTERNAL_URLS.QUOTE_FORM}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                      {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
                    >
                      Get Custom Quote
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Claims Examples Section */}
        {claims && (
          <>
            <Divider type={costFactors ? "white-to-dark" : "dark-to-white"} />
            <section className="py-20 bg-slate-900 circle-pattern">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Real Examples</div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {claims.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {claims.examples.map((example, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-slate-800 p-6 rounded-lg"
                    >
                      <ExclamationTriangleIcon className="h-10 w-10 text-yellow-400 mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {example.scenario}
                      </h3>
                      <p className="text-gray-300 mb-3">{example.coverage}</p>
                      <p className="text-primary-400 font-medium">
                        Outcome: {example.outcome}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* FAQ Section */}
        <Divider type={claims || !costFactors ? "dark-to-white" : "white-to-dark"} />
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">FAQ</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Common Questions About {service.name}
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        {relatedServices && relatedServices.length > 0 && (
          <>
            <Divider type="white-to-dark" />
            <section className="py-20 bg-slate-900 circle-pattern">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Related Coverage</div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Complete Your Protection
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Consider these additional coverages for comprehensive protection
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedServices.map((relatedService, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-slate-800 p-6 rounded-lg text-center"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {relatedService.name}
                      </h3>
                      <p className="text-gray-300 mb-4">{relatedService.description}</p>
                      <Link
                        href={relatedService.href}
                        className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
                      >
                        Learn More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <Divider type={relatedServices ? "dark-to-white" : "white-to-dark"} />

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Get your {service.name} quote in minutes. Our experts are standing by to help you find the right coverage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href={EXTERNAL_URLS.QUOTE_FORM}
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}
                >
                  Get Free Quote
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="tel:2018122184"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Call (201) 812-2184
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}