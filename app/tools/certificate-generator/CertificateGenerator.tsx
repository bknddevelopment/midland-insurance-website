'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  DocumentTextIcon,
  LockClosedIcon,
  CheckCircleIcon,
  UserIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function CertificateGenerator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clientCode, setClientCode] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Tools', url: '/resources' },
    { name: 'Certificate Generator', url: '/tools/certificate-generator' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate against a backend
    if (clientCode.length > 0) {
      setIsAuthenticated(true);
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <Navbar />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resources" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
            
            <div className="flex items-center mb-6">
              <DocumentTextIcon className="h-12 w-12 text-primary-400 mr-4" />
              <div>
                <h1 className="text-4xl font-bold">Certificate Generator</h1>
                <p className="text-xl text-gray-300 mt-2">Create professional certificates of insurance instantly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!isAuthenticated ? (
            // Login Form
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <LockClosedIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Members Only Access</h2>
                  <p className="text-gray-600">
                    This tool is exclusively available to Midland Associates clients.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client Access Code
                    </label>
                    <div className="relative">
                      <KeyIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="password"
                        value={clientCode}
                        onChange={(e) => setClientCode(e.target.value)}
                        placeholder="Enter your access code"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Contact your agent if you don't have an access code
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Access Certificate Generator
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <button
                    onClick={() => setShowDemo(true)}
                    className="w-full text-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View Demo →
                  </button>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Benefits for Our Clients:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Generate certificates 24/7 without calling the office</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Professional ACORD format accepted everywhere</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Auto-populated with your policy information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Email directly to certificate holders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Track and manage all issued certificates</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ) : (
            // Certificate Generator Interface (Placeholder)
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Generate Certificate of Insurance</h2>
              <p className="text-gray-600 mb-8">
                Welcome back! Your policy information has been pre-loaded. Simply enter the certificate holder details below.
              </p>

              {/* This would be a full form in production */}
              <div className="bg-gray-50 rounded-lg p-12 text-center">
                <DocumentTextIcon className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Certificate generator interface would appear here for authenticated clients.
                </p>
              </div>
            </motion.div>
          )}

          {/* Demo Modal */}
          {showDemo && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Certificate Generator Demo</h3>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">How It Works:</h4>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
                        <span>Log in with your unique client access code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
                        <span>Your policy information loads automatically</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
                        <span>Enter certificate holder name and address</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
                        <span>Add any special requirements or additional insureds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm mr-3">5</span>
                        <span>Generate and download or email the certificate</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-primary-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Become a Client to Access This Tool</h4>
                    <p className="text-gray-700 mb-4">
                      Join hundreds of Bergen County contractors who save time with our online tools.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <PhoneIcon className="h-5 w-5 text-primary-600 mr-2" />
                        <span className="text-gray-700">Call: (201) 812-2184</span>
                      </div>
                      <div className="flex items-center">
                        <EnvelopeIcon className="h-5 w-5 text-primary-600 mr-2" />
                        <span className="text-gray-700">Email: info@midlandassociates.com</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowDemo(false)}
                    className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Close Demo
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          {/* CTA Section */}
          {!isAuthenticated && (
            <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
              <BuildingOfficeIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Not a Client Yet?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Get access to this tool and many other benefits when you become a Midland Associates client. 
                We make managing your construction insurance simple and efficient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href="tel:2018122184"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  (201) 812-2184
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}