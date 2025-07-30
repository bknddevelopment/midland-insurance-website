'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSchema from '@/components/seo/FAQSchema';

interface BusinessPageTemplateProps {
  pageData: {
    title: string;
    description: string;
    heroImage?: string;
  };
  coverageDetails: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: React.ComponentType<any>;
    }>;
  };
  benefits: Array<{
    title: string;
    description: string;
  }>;
  industries?: Array<{
    name: string;
    risk: string;
    icon: React.ComponentType<any>;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  stats?: Array<{
    label: string;
    value: string;
    description: string;
  }>;
  processSteps?: Array<{
    title: string;
    description: string;
  }>;
  relatedServices?: Array<{
    title: string;
    description: string;
    href: string;
  }>;
  cta?: {
    title: string;
    subtitle: string;
    primaryButton?: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
  };
}

export default function BusinessPageTemplate({
  pageData,
  coverageDetails,
  benefits,
  industries,
  faqs,
  stats,
  processSteps,
  relatedServices,
  cta = {
    title: 'Ready to Get Started?',
    subtitle: 'Get a free quote and protect your business today',
    primaryButton: { text: 'Get Quote Now', href: '/quote' },
    secondaryButton: { text: 'Call (201) 812-2184', href: 'tel:2018122184' },
  },
}: BusinessPageTemplateProps) {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Business Insurance', url: '/business' },
    { name: pageData.title, url: '#' },
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName={pageData.title}
        serviceType="Business Insurance"
        description={pageData.description}
        areaServed={['Bergen County', 'New Jersey']}
      />
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title={pageData.title}
          subtitle="Comprehensive Business Protection"
          description={pageData.description}
          primaryButton={{
            text: 'Get Free Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage={pageData.heroImage || '/photos/business-insurance-hero.jpg'}
        />

        <Divider type="dark-to-white" />

        {/* Coverage Details Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Details</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{coverageDetails.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{coverageDetails.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coverageDetails.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card text-center"
                  >
                    <Icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        {benefits && benefits.length > 0 && (
          <>
            <Divider type="white-to-dark" />
            <section className="py-20 bg-slate-900 circle-pattern">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Benefits</div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Coverage</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-slate-800 p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Industries Section */}
        {industries && industries.length > 0 && (
          <>
            <Divider type={benefits ? "dark-to-white" : "white-to-dark"} />
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Industries We Serve</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Coverage by Industry</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="card flex items-center"
                      >
                        <Icon className="h-10 w-10 text-primary-600 mr-4 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                          <p className="text-sm text-gray-600">Risk Level: {industry.risk}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <>
            <Divider type="white-to-primary" />
            <section className="py-16 bg-primary-600">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-4xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-primary-100 mt-1">{stat.label}</div>
                      <div className="text-xs text-primary-200 mt-1">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <Divider type="primary-to-white" />
          </>
        )}

        {/* Process Steps */}
        {processSteps && processSteps.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="badge-light inline-block mb-4">Our Process</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Getting Started is Easy</h2>
              </div>

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs && faqs.length > 0 && (
          <>
            <Divider type="white-to-gray" />
            <section className="py-20 bg-gray-50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">FAQ</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions</h2>
                </div>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-md p-6"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Related Services */}
        {relatedServices && relatedServices.length > 0 && (
          <>
            <Divider type={faqs ? "gray-to-white" : "white-to-gray"} />
            <section className="py-20 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Related Coverage</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Your Protection</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="card hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <span className="text-primary-600 font-medium flex items-center">
                        Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">{cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {cta.primaryButton && (
                <Link
                  href={cta.primaryButton.href}
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
                >
                  {cta.primaryButton.text}
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              )}
              {cta.secondaryButton && (
                <Link
                  href={cta.secondaryButton.href}
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors btn-transition"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  {cta.secondaryButton.text}
                </Link>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}