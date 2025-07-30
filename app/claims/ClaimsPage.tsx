'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  PhoneIcon, 
  DocumentTextIcon, 
  ClockIcon, 
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CameraIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline';
import InsuranceAgencySchema from '@/components/seo/InsuranceAgencySchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface ClaimStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  urgent?: boolean;
}

interface CarrierContact {
  name: string;
  claimsPhone: string;
  claimsHours: string;
  website?: string;
  emergencyPhone?: string;
}

export default function ClaimsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Claims Center', url: '/claims' },
  ];

  const claimSteps: ClaimStep[] = [
    {
      number: '1',
      title: 'Ensure Safety First',
      description: 'Make sure everyone is safe. Call 911 for medical emergencies. Secure the area to prevent further damage or injury.',
      icon: ExclamationTriangleIcon,
      urgent: true
    },
    {
      number: '2',
      title: 'Document Everything',
      description: 'Take photos and videos of damage, injuries, and the accident scene. Get witness names and contact information.',
      icon: CameraIcon
    },
    {
      number: '3',
      title: 'Report Immediately',
      description: 'Call us at (201) 812-2184 to report the claim. We\'ll guide you through the process and notify your carrier.',
      icon: PhoneIcon,
      urgent: true
    },
    {
      number: '4',
      title: 'Provide Information',
      description: 'Be ready with policy number, date/time of incident, description of what happened, and any police report numbers.',
      icon: ClipboardDocumentCheckIcon
    },
    {
      number: '5',
      title: 'Cooperate with Investigation',
      description: 'Work with the claims adjuster, provide requested documentation, and keep records of all communications.',
      icon: UserGroupIcon
    },
    {
      number: '6',
      title: 'Follow Up Regularly',
      description: 'Stay in touch with your claims adjuster. We\'ll advocate for you throughout the process to ensure fair treatment.',
      icon: ClockIcon
    }
  ];

  const claimTypes = [
    {
      type: 'General Liability',
      examples: ['Client property damage', 'Bodily injury at job site', 'Completed operations claims'],
      icon: ShieldCheckIcon
    },
    {
      type: 'Workers Compensation',
      examples: ['Employee injuries', 'Occupational illnesses', 'Lost time accidents'],
      icon: UserGroupIcon
    },
    {
      type: 'Commercial Auto',
      examples: ['Vehicle accidents', 'Cargo damage', 'Third-party injuries'],
      icon: DocumentTextIcon
    },
    {
      type: 'Property/Equipment',
      examples: ['Tool theft', 'Equipment damage', 'Job site vandalism'],
      icon: ClockIcon
    }
  ];

  const carrierContacts: CarrierContact[] = [
    {
      name: 'The Hartford',
      claimsPhone: '1-800-327-3636',
      claimsHours: '24/7',
      website: 'thehartford.com/claims',
      emergencyPhone: '1-800-327-3636'
    },
    {
      name: 'Liberty Mutual',
      claimsPhone: '1-844-325-2467',
      claimsHours: '24/7',
      website: 'libertymutual.com/claims'
    },
    {
      name: 'Travelers',
      claimsPhone: '1-800-238-6225',
      claimsHours: '24/7',
      website: 'travelers.com/claims'
    },
    {
      name: 'CNA',
      claimsPhone: '1-877-262-2727',
      claimsHours: 'Mon-Fri 8am-6pm ET',
      website: 'cna.com/claims'
    },
    {
      name: 'Zurich',
      claimsPhone: '1-800-987-3373',
      claimsHours: '24/7',
      website: 'zurichna.com/claims'
    }
  ];

  return (
    <>
      <InsuranceAgencySchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <Hero
          title="Claims Center"
          subtitle="We're Here When You Need Us Most"
          description="24/7 claims support for construction contractors. We'll guide you through every step and advocate for your best interests."
          primaryButton={{
            text: 'Report a Claim',
            href: 'tel:2018122184',
          }}
          secondaryButton={{
            text: 'Claims Checklist',
            href: '#steps',
          }}
          backgroundImage="/photos/claims-hero.jpg"
        />

        <Divider type="dark-to-white" />

        {/* Emergency Contact Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 text-center">
              <ExclamationTriangleIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Emergency Claims Hotline</h2>
              <p className="text-lg text-gray-700 mb-4">For immediate assistance with new claims:</p>
              <a 
                href="tel:2018122184" 
                className="inline-flex items-center gap-2 text-3xl font-bold text-red-600 hover:text-red-700"
              >
                <PhoneIcon className="h-8 w-8" />
                (201) 812-2184
              </a>
              <p className="text-gray-600 mt-4">Available 24/7 for emergency claims support</p>
            </div>
          </div>
        </section>

        {/* Claims Process Steps */}
        <section id="steps" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Claims Process: Step by Step</h2>
              <p className="text-xl text-gray-600">Follow these steps to ensure your claim is handled properly</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {claimSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-lg p-6 shadow-lg ${step.urgent ? 'border-2 border-red-500' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        step.urgent ? 'bg-red-100 text-red-600' : 'bg-primary-100 text-primary-600'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-3xl font-bold ${
                            step.urgent ? 'text-red-600' : 'text-primary-600'
                          }`}>
                            {step.number}
                          </span>
                          {step.urgent && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-semibold">
                              URGENT
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="gray-to-white" />

        {/* Claim Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Claims We Handle</h2>
              <p className="text-xl text-gray-600">Expert support for all construction-related claims</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {claimTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.type}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="h-8 w-8 text-primary-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.type}</h3>
                        <ul className="space-y-2">
                          {type.examples.map((example) => (
                            <li key={example} className="flex items-center gap-2 text-gray-600">
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Divider type="white-to-gray" />

        {/* Carrier Contacts */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Carrier Claims Contacts</h2>
              <p className="text-xl text-gray-600">
                While we recommend calling us first, here are direct carrier contacts for after-hours emergencies
              </p>
            </motion.div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Carrier
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Claims Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hours
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Website
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {carrierContacts.map((carrier) => (
                      <tr key={carrier.name} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{carrier.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a 
                            href={`tel:${carrier.claimsPhone.replace(/-/g, '')}`}
                            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                          >
                            {carrier.claimsPhone}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {carrier.claimsHours}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {carrier.website && (
                            <a 
                              href={`https://${carrier.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700"
                            >
                              {carrier.website}
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Important Note</h3>
                  <p className="text-gray-700">
                    Always notify Midland Associates when filing a claim. We\'ll advocate for you, ensure proper coverage application, 
                    and help navigate the claims process. Our expertise can make a significant difference in your claim outcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider type="gray-to-dark" />

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need to File a Claim?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don\'t navigate the claims process alone. Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2018122184"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call Now: (201) 812-2184
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-lg font-medium rounded-md text-white hover:bg-gray-800 transition-colors"
              >
                Email Claim Details
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}