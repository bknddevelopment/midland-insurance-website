'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  CreditCardIcon, 
  LockClosedIcon, 
  CheckCircleIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function MakePaymentPage() {
  return (
    <>
      <Navbar />
      <Hero
        title="Make a Payment"
        subtitle="Secure Online Payment Portal"
        description="Pay your insurance premium quickly and securely through our trusted payment partner, Simply Easier Payments."
        primaryButton={{
          text: "Access Payment Portal",
          href: "https://simply-easier-payments.com/midland-associates"
        }}
        secondaryButton={{
          text: "Payment Help",
          href: "/contact"
        }}
        backgroundImage="/photos/gallery/Gemini_Generated_Image_mo5u5ymo5u5ymo5u.jpg"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Security Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
            <div className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Secure Payment Processing</h3>
                <p className="text-green-700">
                  Your payment information is processed securely through Simply Easier Payments, 
                  our trusted payment partner. All transactions are encrypted and PCI compliant.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Make Your Payment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to make your insurance premium payment through Simply Easier Payments.
            </p>
          </div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Click Payment Portal</h3>
              <p className="text-gray-600">
                Click the button below to access the Simply Easier Payments secure portal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enter Policy Info</h3>
              <p className="text-gray-600">
                Have your policy number and payment amount ready. You'll need these to process your payment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Payment</h3>
              <p className="text-gray-600">
                Choose your payment method and complete the secure transaction. You'll receive a confirmation.
              </p>
            </div>
          </div>

          {/* Payment Portal Button */}
          <div className="text-center mb-12">
            <Link
              href="https://simply-easier-payments.com/midland-associates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors btn-transition text-lg"
            >
              <CreditCardIcon className="h-6 w-6 mr-3" />
              Access Simply Easier Payments Portal
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              You will be redirected to our secure payment partner's website
            </p>
          </div>

          {/* Payment Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <InformationCircleIcon className="h-6 w-6 text-primary-600 mr-2" />
                What You'll Need
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Your policy number</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Payment amount (found on your bill)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Credit card, debit card, or bank account info</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Email address for receipt</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <LockClosedIcon className="h-6 w-6 text-primary-600 mr-2" />
                Payment Methods Accepted
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Visa, Mastercard, Discover, American Express</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>ACH bank transfer (checking/savings)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>One-time or recurring payments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>No convenience fees for e-check payments</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Payment Assistance?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our billing team is here to help with any questions about your payment or policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="tel:(201) 812-2184" 
                className="inline-flex items-center justify-center text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                (201) 812-2184
              </Link>
              <Link 
                href="mailto:billing@midlandinsurance.biz" 
                className="inline-flex items-center justify-center text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                <EnvelopeIcon className="h-6 w-6 mr-2" />
                billing@midlandinsurance.biz
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Office Hours: Monday - Friday, 9:00 AM - 5:00 PM EST
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}