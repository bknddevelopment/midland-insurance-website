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
  TruckIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

interface FAQ {
  question: string;
  answer: string;
}

interface TradePageTemplateProps {
  trade: {
    name: string;
    slug: string;
    heroImage?: string;
    description: string;
  };
  requirements?: {
    title: string;
    items: string[];
  } | string[];
  risks?: {
    title: string;
    items: Array<{
      risk: string;
      description: string;
    }>;
  };
  coverage?: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      icon?: React.ComponentType<any>;
    }>;
  };
  commonRisks?: Array<{
    risk: string;
    description: string;
  }>;
  coverageOptions?: Array<{
    name: string;
    description: string;
    icon?: React.ComponentType<any>;
  }>;
  industryStats?: any;
  faqs: FAQ[];
  localInfo?: {
    associations?: string[];
    projects?: string[];
    regulations?: string[];
  };
  localProjects?: string[];
  cta?: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export default function TradePageTemplate(props: TradePageTemplateProps) {
  // Handle both old and new prop formats for backward compatibility
  const {
    trade,
    faqs,
    localInfo,
    cta = {
      title: 'Get Your Free Quote',
      subtitle: 'Protect your business with comprehensive insurance coverage',
      buttonText: 'Get Quote Now',
      buttonLink: '/quote',
    },
  } = props;

  // Transform props to expected format
  const requirements = (props.requirements && typeof props.requirements === 'object' && 'title' in props.requirements) 
    ? props.requirements 
    : {
        title: 'New Jersey Insurance Requirements',
        items: Array.isArray(props.requirements) ? props.requirements : []
      };

  const risks = props.risks?.title ? props.risks : {
    title: 'Common Risks We Cover',
    items: props.commonRisks || []
  };

  const coverage = props.coverage?.title ? props.coverage : {
    title: 'Comprehensive Coverage Options',
    items: props.coverageOptions || []
  };

  // Handle localProjects if passed
  const enhancedLocalInfo: typeof localInfo = localInfo || (props.localProjects ? {
    projects: props.localProjects,
    associations: undefined,
    regulations: undefined
  } : undefined);
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Trades', url: '/trades' },
    { name: `${trade.name} Insurance`, url: `/trades/${trade.slug}` },
  ];

  return (
    <>
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName={`${trade.name} Insurance`}
        serviceType="Construction Insurance"
        description={trade.description}
        areaServed={['Bergen County', 'New Jersey']}
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title={`${trade.name} Insurance in Bergen County, NJ`}
          subtitle="Comprehensive Coverage for Your Trade"
          description={trade.description}
          primaryButton={{
            text: 'Get Free Quote',
            href: '/quote',
          }}
          secondaryButton={{
            text: 'Call (201) 812-2184',
            href: 'tel:2018122184',
          }}
          backgroundImage={trade.heroImage || '/photos/construction-hero.jpg'}
        />

        <Divider type="dark-to-white" />

        {/* Requirements Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">State Requirements</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {requirements.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {requirements.items.map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="white-to-dark" />

        {/* Common Risks Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Risk Management</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {risks.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {risks.items.map((risk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-lg"
                >
                  <ExclamationTriangleIcon className="h-10 w-10 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {risk.risk}
                  </h3>
                  <p className="text-gray-300">{risk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider type="dark-to-white" />

        {/* Coverage Options Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">Coverage Options</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {coverage.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coverage.items.map((item, index) => {
                const Icon = item.icon || ShieldCheckIcon;
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
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Local Information Section */}
        {enhancedLocalInfo && (
          <>
            <Divider type="white-to-dark" />
            <section className="py-20 bg-slate-900 circle-pattern">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="badge-light inline-block mb-4">Local Expertise</div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Serving Bergen County {trade.name}s
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {enhancedLocalInfo.associations && enhancedLocalInfo.associations.length > 0 && (
                    <div className="bg-slate-800 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Local Associations
                      </h3>
                      <ul className="space-y-2">
                        {enhancedLocalInfo.associations.map((assoc, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                            {assoc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {enhancedLocalInfo.projects && enhancedLocalInfo.projects.length > 0 && (
                    <div className="bg-slate-800 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Notable Projects
                      </h3>
                      <ul className="space-y-2">
                        {enhancedLocalInfo.projects.map((project, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <BuildingOfficeIcon className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {enhancedLocalInfo.regulations && enhancedLocalInfo.regulations.length > 0 && (
                    <div className="bg-slate-800 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Local Requirements
                      </h3>
                      <ul className="space-y-2">
                        {enhancedLocalInfo.regulations.map((reg, index) => (
                          <li key={index} className="text-gray-300 flex items-start">
                            <DocumentTextIcon className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                            {reg}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        )}

        {/* FAQ Section */}
        <Divider type={enhancedLocalInfo ? "dark-to-white" : "white-to-dark"} />
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="badge-light inline-block mb-4">FAQ</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Common Questions About {trade.name} Insurance
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

        <Divider type="white-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 circle-pattern">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">{cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href={cta.buttonLink}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition"
              >
                {cta.buttonText}
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
    </>
  );
}